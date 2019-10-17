package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "servico")
public class Servicos {

    @Id
    private String id;
    private String user_id;
    @JsonProperty
    private double valor;
    @JsonProperty
    private String tipo_servico;
    @JsonProperty
    private String descricao;

    public Servicos(){

    }

    public Servicos(double valor, String tipo_servico, String descricao) {
        this.valor = valor;
        this.tipo_servico = tipo_servico;
        this.descricao = descricao;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
