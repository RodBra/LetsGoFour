package com.bandtec.jobbers.model;

public class UsuarioContratante extends Usuario {

	public UsuarioContratante(String nome, String sobrenome, String email, String senha, String dataNascimento,
			String cidade, String estado, String rua, int numero, String complemento) {
		super(nome, sobrenome, email, senha, dataNascimento, cidade, estado, rua, numero, complemento);
	}

	@Override
	public String toString() {
		return "UsuarioContratante [getNome()=" + getNome() + ", getSobrenome()=" + getSobrenome() + ", getEmail()="
				+ getEmail() + ", getSenha()=" + getSenha() + ", getDataNascimento()=" + getDataNascimento()
				+ ", getCidade()=" + getCidade() + ", getEstado()=" + getEstado() + ", getRua()=" + getRua()
				+ ", getNumero()=" + getNumero() + ", getComplemento()=" + getComplemento() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	

}
