package com.mintre.web_mintre.entities.membro;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MembroDto {

    private Long id;
    private String nome;
    private String url_foto;
    private String telefone;
    private String cargo;
}
