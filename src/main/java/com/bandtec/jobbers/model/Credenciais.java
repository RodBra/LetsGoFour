package com.bandtec.jobbers.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

public class Credenciais {

	@Id
	private String id;
	private String user_id;
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

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
}
