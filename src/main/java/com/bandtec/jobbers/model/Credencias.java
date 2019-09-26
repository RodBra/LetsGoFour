package com.bandtec.jobbers.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

public class Credencias {

	@Id
	private String id;

	private String login;
	private String senha;

	public Credencias() {}

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

    @Override
	public String toString() {
		return "Credencias{" +
				"login='" + login + '\'' +
				", senha='" + senha + '\'' +
				'}';
	}
}
