package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class Usuario {

	@JsonProperty
	private String nome;
	@JsonProperty
	private String sobrenome;
	@JsonProperty
	private String email;
	@JsonProperty
	private String dataNascimento;
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

	public Usuario(String nome, String sobrenome, String email, String dataNascimento, String cidade, String estado, String rua, int numero, String complemento) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.dataNascimento = dataNascimento;
		this.cidade = cidade;
		this.estado = estado;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
	}

	public Usuario() {
	}
}
