package com.mintre.web_mintre.service;

import com.mintre.web_mintre.entities.membro.MembroDto;
import com.mintre.web_mintre.repository.MembroRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Service
public class MembroService {

    @Autowired
    private MembroRepository membroRepository;

    public List<MembroDto> obterMembroPorDepartamento(
            String departamento
    ){
        List<Object[]> objects = membroRepository.getByDep(departamento);

        return objects.stream()
                .map(obj -> new MembroDto(
                        (Long) obj[0], (String) obj[1],
                        (String) obj[2], (String) obj[3],
                        (String) obj[4]))
                .collect(Collectors.toList());
    }
}
