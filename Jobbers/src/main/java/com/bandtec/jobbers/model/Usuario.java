package com.bandtec.jobbers.model;

import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class Usuario {

	@JsonProperty
	private String nome;
	@JsonProperty
	private String email;
	@JsonProperty
	private String telefone;
	@JsonProperty
	private String cidade;
	@JsonProperty
	private String estado;
	@JsonProperty
	private String rua;
	@JsonProperty
	private int numero;	
	@JsonProperty
	private Boolean prestador;

	public Usuario(String nome, String email, String cidade, String estado, String rua, int numero, String telefone, Boolean prestador) {
		this.nome = nome;
		this.email = email;
		this.cidade = cidade;
		this.estado = estado;
		this.rua = rua;
		this.numero = numero;
		this.telefone = telefone;
		this.prestador = prestador;
	}

	public Usuario() {
	}
}
