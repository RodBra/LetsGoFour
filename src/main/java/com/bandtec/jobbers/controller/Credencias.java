package com.bandtec.jobbers.controller;

public class Credencias {
	
	private String login;
	private String senha;

	public Credencias(String login, String senha) {
		
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
