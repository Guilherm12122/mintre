package com.mintre.web_mintre.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@Entity
@Table(name = "membro")
public class Membro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "url_foto")
    private String url_foto;

    @Column(name = "cargo")
    private String cargo;

    @OneToMany(mappedBy = "membro", cascade = CascadeType.ALL)
    private Set<MembroDepartamento> membroDepartamentos;
}
