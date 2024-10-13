package com.mintre.web_mintre.controller;

import com.mintre.web_mintre.entities.membro.MembroDto;
import com.mintre.web_mintre.service.MembroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/membro")
public class MembroController {

    @Autowired
    private MembroService membroService;

    @GetMapping("/{departamento}")
    public ResponseEntity<List<MembroDto>> getMembros(
            @PathVariable String departamento
    ){
        List<MembroDto> membroDtos = membroService.obterMembroPorDepartamento(
          departamento
        );

        return ResponseEntity.ok(membroDtos);
    }
}
