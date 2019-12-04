package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Avaliacao {

    @JsonProperty
    private String comentario;
    @JsonProperty
    private String idPrestador;
    @JsonProperty
    private String idContratante;
    @JsonProperty
    private String login;

}
