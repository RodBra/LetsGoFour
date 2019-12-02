package com.bandtec.LetsGoFourService.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(value = "agendamentos")
public class Agendamento {

    @Id
    private String id;
    @JsonProperty
    private String idPrestador;
    @JsonProperty
    private Date data;

    private String idContratante;

    public Agendamento() {
    }

    public Agendamento(String idPrestador, Date data){
        this.idPrestador = idPrestador;
        this.data = data;
    }

    public Agendamento(String idPrestador,String idContratante, Date data){
        this.idPrestador = idPrestador;
        this.idContratante = idContratante;
        this.data = data;
    }

    public String getIdPrestador() {
        return idPrestador;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Date getData() {
        return data;
    }

    public String getIdContratante() {
        return idContratante;
    }

    public void setIdContratante(String idContratante) {
        this.idContratante = idContratante;
    }
}
