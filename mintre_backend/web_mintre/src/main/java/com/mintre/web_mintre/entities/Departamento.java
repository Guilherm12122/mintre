package com.mintre.web_mintre.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@Entity
@Table(name = "departamento")
public class Departamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_departamento")
    private String nome_departamento;

    @OneToMany(mappedBy = "departamento", cascade = CascadeType.ALL)
    private Set<MembroDepartamento> membroDepartamentos;
}
