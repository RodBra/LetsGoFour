package com.bandtec.jobbers.model;

import org.springframework.data.annotation.Id;

public abstract class Usuario {

	private String nome;
	private String sobrenome;
	private String email;
	private String dataNascimento;
	private String cidade;
	private String estado;
	private String rua;
	private int numero;
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
}
