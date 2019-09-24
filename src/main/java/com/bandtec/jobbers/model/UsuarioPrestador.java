package com.bandtec.jobbers.model;

public class UsuarioPrestador extends Usuario {

	private double valor;
	private String tipo_servico;
	private String descricao;



	public UsuarioPrestador(String nome, String sobrenome, String email, String senha, String dataNascimento,
			String cidade, String estado, String rua, int numero, String complemento, double valor, String tipo_servico,
			String descricao) {
		super(nome, sobrenome, email, senha, dataNascimento, cidade, estado, rua, numero, complemento);
		this.valor = valor;
		this.tipo_servico = tipo_servico;
		this.descricao = descricao;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public String getTipo_servico() {
		return tipo_servico;
	}

	public void setTipo_servico(String tipo_servico) {
		this.tipo_servico = tipo_servico;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Override
	public String toString() {
		return "UsuarioPrestador [valor=" + valor + ", tipo_servico=" + tipo_servico + ", descricao=" + descricao
				+ ", toString()=" + super.toString() + "]";
	}

	
	
}
