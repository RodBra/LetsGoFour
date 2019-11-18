package com.bandtec.jobbers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Document(collection = "usuarios_prestadores")
public class UsuarioPrestador extends Usuario {

	@Id
	@JsonProperty
	private String id;
	@JsonProperty
	private Credenciais credenciais;
	@JsonProperty
	private double valor;
	@JsonProperty
	private String tipo_servico;
	@JsonProperty
	private String descricao;
	@JsonProperty
	private String celular;

	public UsuarioPrestador(){
	}

	public UsuarioPrestador(String nome, String telefone, String email,
							String cidade, String estado, String rua, int numero, double valor, String tipo_servico,
							String descricao, String celular, Credenciais credenciais) {
		super(nome, email, cidade, estado, rua, numero, telefone, true);
		this.valor = valor;
		this.tipo_servico = tipo_servico;
		this.descricao = descricao;
		this.credenciais = credenciais;
		this.celular = celular;
	}

	public String getLogin(){
		return credenciais.getLogin();
	}
}
