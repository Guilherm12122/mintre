package com.mintre.web_mintre.entities.membro;

import com.mintre.web_mintre.entities.MembroDepartamento;
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

    @Column(name = "url_foto", length = 510)
    private String url_foto;

    @Column(name = "telefone")
    private String telefone;

    @OneToMany(mappedBy = "membro", cascade = CascadeType.ALL)
    private Set<MembroDepartamento> membroDepartamentos;
}
