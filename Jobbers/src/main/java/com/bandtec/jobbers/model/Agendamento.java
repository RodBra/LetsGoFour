package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Agendamento {

	@JsonProperty
    private String idPrestador;
    @JsonProperty
    private Date data;
    @JsonProperty
    private String idContratante;

}
