package com.mintre.web_mintre.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "membro_departamento")
public class MembroDepartamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "membro_id")
    private Membro membro;

    @ManyToOne
    @JoinColumn(name = "departamento_id")
    private Departamento departamento;
}
