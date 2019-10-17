package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "logradouro")
public class Logradouro {

    @Id
    private String id;
    private String user_id;
    @JsonProperty
    private String cidade;
    @JsonProperty
    private String estado;
    @JsonProperty
    private String rua;
    @JsonProperty
    private int numero;
    @JsonProperty
    private String complemento;

    public Logradouro(){

    }

    public Logradouro(String user_id, String cidade, String estado, String rua, int numero, String complemento) {
        this.user_id = user_id;
        this.cidade = cidade;
        this.estado = estado;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
