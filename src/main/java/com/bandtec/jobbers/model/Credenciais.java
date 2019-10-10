package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Credenciais {

	@JsonProperty
	private String login;
	@JsonProperty
	private String senha;

	public Credenciais(){
	}

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
