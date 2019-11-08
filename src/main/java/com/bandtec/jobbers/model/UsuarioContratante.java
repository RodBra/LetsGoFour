package com.bandtec.jobbers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Document(collection = "usuarios_contratantes")
public class UsuarioContratante extends Usuario {

	@Id
	private String id;
	@JsonProperty
	private Credenciais credenciais;

	public UsuarioContratante(){
	}

	public UsuarioContratante(String nome, String sobrenome, String email, String dataNascimento,
			String cidade, String estado, String rua, int numero, String complemento, Credenciais credenciais) {
		super(nome, sobrenome, email, dataNascimento, cidade, estado, rua, numero, complemento);
		this.credenciais = credenciais;
	}

	public String getLogin(){
		return credenciais.getLogin();
	}
	
	public Credenciais getCredenciais() {
		return this.credenciais;
	}
}
