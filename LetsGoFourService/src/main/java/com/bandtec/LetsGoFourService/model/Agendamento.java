package com.bandtec.LetsGoFourService.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "agendamentos")
public class Agendamento {

    @Id
    private String id;
    @JsonProperty
    private String idPrestador;
    @JsonProperty
    private String data;

    private String idContratante;

    public Agendamento() {
    }

    public Agendamento(String idPrestador, String data){
        this.idPrestador = idPrestador;
        this.data = data;
    }

    public Agendamento(String idPrestador,String idContratante, String data){
        this.idPrestador = idPrestador;
        this.idContratante = idContratante;
        this.data = data;
    }

    public String getIdPrestador() {
        return idPrestador;
    }

    public String getData() {
        return data;
    }

    public String getIdContratante() {
        return idContratante;
    }

    public void setIdContratante(String idContratante) {
        this.idContratante = idContratante;
    }
}
