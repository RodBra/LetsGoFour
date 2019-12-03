package com.bandtec.LetsGoFourService.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(value = "agendamentos")
public class Avaliacao {

    @Id
    private String id;
    @JsonProperty
    private String idPrestador;
    @JsonProperty
    private String idContratante;
    @JsonProperty
    private String comentario;

    public Avaliacao() {
    }

    public Avaliacao(String idPrestador, String comentario){
        this.idPrestador = idPrestador;
        this.comentario = comentario;
    }


    public String getIdPrestador() {
        return idPrestador;
    }

    public String getIdContratante() {
        return idContratante;
    }

    public void setIdContratante(String idContratante) {
        this.idContratante = idContratante;
    }
}
