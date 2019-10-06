package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.CredenciaisRepository;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Usuario;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoginController {

	@Autowired
	private CredenciaisRepository credenciaisRepository;

	//apenas pra teste via POSTMAN
	@GetMapping("/login")
	public ResponseEntity<List<UsuarioPrestador>> findAll() {
		List<UsuarioPrestador> usuarios = credenciaisRepository.findAll();
		return ResponseEntity.ok(usuarios);
	}

	@PostMapping("/cadastrar/contratante")
	public ResponseEntity<String> cadastrarContratante(/*@RequestBody Usuario usuario*/) {
		//TODO Cadastro de Usuario

		UsuarioContratante uc = new UsuarioContratante("Pedro", "Carlos", "email@exemplo.com",
				"12/12/2012", "São Paulo", "SP", "Rua 1", 220, "Casa",
				new Credenciais("Pedro", "1234"));
		//credenciaisRepository.save(uc);

		return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
	}

	@PostMapping("/cadastrar/prestador")
	public ResponseEntity<String> cadastrarPrestador(/*@RequestBody Usuario usuario*/) {
		//TODO Cadastro de Usuario
		UsuarioPrestador up = new UsuarioPrestador("Carlos", "Pedro", "email2@exemplo2.com",
				"13/11/2000", "São Paulo", "SP", "Rua 2", 230, "Apartamento",
				100, "faxineiro", "faxina",
				new Credenciais("Pedro", "1234"));
		credenciaisRepository.save(up);

		return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
	}

	//não está fununciando este valida

	@PostMapping("/valida")
	public ResponseEntity<String> validarLogin(
			@RequestBody Credenciais credenciais) {

		boolean result = credenciaisRepository.findByCredenciais(credenciais);

		if(result){
			return ResponseEntity.status(HttpStatus.OK).body("Usuário exixte");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não existe");
	}

}
