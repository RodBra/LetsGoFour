package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Agendamento {

	@JsonProperty
    private String idPrestador;
    @JsonProperty
<<<<<<< HEAD
    private String data;
=======
    private Date data;
    @JsonProperty
    private String idContratante;
>>>>>>> 2b50fcb44151dff679ff69c6de83b13e33bceef1

}
