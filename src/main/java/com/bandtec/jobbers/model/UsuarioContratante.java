package com.bandtec.jobbers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "usuarios_contratantes")
public class UsuarioContratante extends Usuario {
	@Id
	private String id;
	private Credenciais credenciais;


	public UsuarioContratante(String nome, String sobrenome, String email, String dataNascimento,
			String cidade, String estado, String rua, int numero, String complemento, Credenciais credenciais) {
		super(nome, sobrenome, email, dataNascimento, cidade, estado, rua, numero, complemento);
		this.credenciais = credenciais;
	}
}
