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


	public UsuarioPrestador(String nome, String sobrenome, String email, String dataNascimento,
							String cidade, String estado, String rua, int numero, String complemento, double valor, String tipo_servico,
							String descricao, Credenciais credenciais) {
		super(nome, sobrenome, email, dataNascimento, cidade, estado, rua, numero, complemento);
		this.valor = valor;
		this.tipo_servico = tipo_servico;
		this.descricao = descricao;
		this.credenciais = credenciais;

	}


}
