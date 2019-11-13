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

	public UsuarioContratante(String nome, String telefone, String email,
			String cidade, String estado, String rua, int numero, Credenciais credenciais) {
		super(nome, email, cidade, estado, rua, numero, telefone);
		this.credenciais = credenciais;
	}

	public String getLogin(){
		return credenciais.getLogin();
	}
	
	public Credenciais getCredenciais() {
		return this.credenciais;
	}
}
