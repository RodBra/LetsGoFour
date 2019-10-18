package com.bandtec.jobbers.config;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Logradouro;
import com.bandtec.jobbers.model.Servicos;
import com.bandtec.jobbers.model.Usuario;
import com.fasterxml.jackson.annotation.JsonProperty;

public class JsonBuilder {

    @JsonProperty
    private Usuario usuario;
    @JsonProperty
    private Credenciais credenciais;
    @JsonProperty
    private Logradouro logradouro;
    @JsonProperty
    private Servicos servicos;

    public JsonBuilder(){}

    public JsonBuilder(Usuario usuario, Credenciais credenciais, Logradouro logradouro, Servicos servicos) {
        this.usuario = usuario;
        this.credenciais = credenciais;
        this.logradouro = logradouro;
        this.servicos = servicos;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public Credenciais getCredenciais() {
        return credenciais;
    }

    public Logradouro getLogradouro() {
        return logradouro;
    }

    public Servicos getServicos() {
        return servicos;
    }
}
