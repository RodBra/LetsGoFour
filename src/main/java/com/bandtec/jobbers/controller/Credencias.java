package com.bandtec.jobbers.controller;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Credencias {

	@JsonProperty
	private String login;

	@JsonProperty
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
