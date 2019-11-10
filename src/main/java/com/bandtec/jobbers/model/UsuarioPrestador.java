package com.bandtec.jobbers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "usuarios_prestadores")
public class UsuarioPrestador extends Usuario {

	@Id
	private String id;
	private Credenciais credenciais;
	private double valor;
	private String tipo_servico;
	private String descricao;
	private String celular;

	public UsuarioPrestador(){
	}

	public UsuarioPrestador(String nome, String telefone, String email,
							String cidade, String estado, String rua, int numero, double valor, String tipo_servico,
							String descricao, String celular, Credenciais credenciais) {
		super(nome, email, cidade, estado, rua, numero, telefone);
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
