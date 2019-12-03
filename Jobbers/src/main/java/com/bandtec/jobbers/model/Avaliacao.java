package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Avaliacao {

    @JsonProperty
    private String comentario;
    @JsonProperty
    private String idPrestador;

}
