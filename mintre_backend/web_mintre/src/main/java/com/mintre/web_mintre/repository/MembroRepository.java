package com.mintre.web_mintre.repository;

import com.mintre.web_mintre.entities.membro.Membro;
import com.mintre.web_mintre.entities.membro.MembroDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Objects;


public interface MembroRepository extends JpaRepository<Membro, Long> {

    @Query(value = "WITH tb_departamento AS (\n" +
            "\tSELECT id FROM departamento\n" +
            "\tWHERE nome_departamento = :departamento\n" +
            "),\n" +
            "\n" +
            "tb_membro_departamento AS (\n" +
            "\tSELECT membro_departamento.membro_id as id_p_d,\n" +
            "\tmembro_departamento.cargo as cargo\n" +
            "\tFROM membro_departamento \n" +
            "\tINNER JOIN tb_departamento ON \n" +
            "\tmembro_departamento.departamento_id = tb_departamento.id\n" +
            ")\n" +
            "\n" +
            "SELECT membro.id, membro.nome, membro.url_foto, membro.telefone, tb_membro_departamento.cargo  FROM membro INNER JOIN tb_membro_departamento\n" +
            "ON membro.id = tb_membro_departamento.id_p_d", nativeQuery = true)
    List<Object[]> getByDep(@Param("departamento") String departamento);
}
