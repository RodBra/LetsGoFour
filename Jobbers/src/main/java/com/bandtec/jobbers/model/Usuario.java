package com.bandtec.jobbers.model;

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

	public Usuario(String nome, String email, String cidade, String estado, String rua, int numero, String telefone) {
		this.nome = nome;
		this.email = email;
		this.cidade = cidade;
		this.estado = estado;
		this.rua = rua;
		this.numero = numero;
		this.telefone = telefone;
	}

	public Usuario() {
	}
}
