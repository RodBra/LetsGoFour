package com.bandtec.jobbers.model;

public class Credenciais {

	private String login;
	private String senha;

	public Credenciais(String login, String senha) {
		
		this.login = login;
		this.senha = senha;
	}

	public String getLogin() {
		return login;
	}

	public String getSenha() {
		return senha;
	}
}
