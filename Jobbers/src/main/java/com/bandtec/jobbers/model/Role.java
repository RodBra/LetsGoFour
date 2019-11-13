package com.bandtec.jobbers.model;

import java.util.HashMap;
import java.util.Map;

public enum Role {

    CONTRATANTE("contratate"),
    PRESTADOR("prestador");

    private String valor;

    private static final Map<String, Role> funcaoPorValor = new HashMap<>();

    static {
        for(Role role : Role.values()){
            funcaoPorValor.put(role.getValor(), role);
        }
    }

    Role(String valor){
        this.valor = valor;
    }

    public String getValor(){
        return valor;
    }

    public static Role pegaFuncaoPorValor(String valor){
        return funcaoPorValor.get(valor);
    }
}
