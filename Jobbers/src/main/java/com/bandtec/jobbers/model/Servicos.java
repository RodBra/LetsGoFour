package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "servico")
public class Servicos {

    @Id
    private String id;
    private String user_id;
    @JsonProperty
    private double valor;
    @JsonProperty
    private String tipoServico;
    @JsonProperty
    private String descricao;

    public Servicos(){

    }

    public Servicos(double valor, String tipoServico, String descricao) {
        this.valor = valor;
        this.tipoServico = tipoServico;
        this.descricao = descricao;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
