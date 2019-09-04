package com.bandtec.jobbers.model;

public abstract class Usuario {

	private String nome;
	private String sobrenome;
	private String email;
	private String senha;
	private String dataNascimento;
	private String cidade;
	private String Estado;
	private String rua;
	private int numero;
	private String complemento;

	public String getNome() {
		return nome;
	}

	public Usuario(String nome, String sobrenome, String email, String senha, String dataNascimento, String cidade,
			String estado, String rua, int numero, String complemento) {
		super();
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.senha = senha;
		this.dataNascimento = dataNascimento;
		this.cidade = cidade;
		Estado = estado;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
	}

	public void setNome(String nome) {
		this.nome = nome;

	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return Estado;
	}

	public void setEstado(String estado) {
		Estado = estado;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	@Override
	public String toString() {
		return "Usuario [nome=" + nome + ", sobrenome=" + sobrenome + ", email=" + email + ", senha=" + senha
				+ ", dataNascimento=" + dataNascimento + ", cidade=" + cidade + ", Estado=" + Estado + ", rua=" + rua
				+ ", numero=" + numero + ", complemento=" + complemento + "]";
	}
	
}
