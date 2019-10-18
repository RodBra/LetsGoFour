package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "usuario")
public class Usuario {

	@Id
	private String id;
	@JsonProperty
	private String nome;
	@JsonProperty
	private String sobrenome;
	@JsonProperty
	private String email;
	@JsonProperty
	private String dataNascimento;

	public Usuario() {
	}

	public Usuario(String nome, String sobrenome, String email, String dataNascimento/*, Role role*/) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.dataNascimento = dataNascimento;
		/*this.role = role;*/
	}

	public String getId() {
		return id;
	}
//
//	public void setRole(Role role) {
//		this.role = role;
//	}
}
