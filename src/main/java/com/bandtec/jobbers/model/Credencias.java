package com.bandtec.jobbers.model;

public class Credencias {

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
