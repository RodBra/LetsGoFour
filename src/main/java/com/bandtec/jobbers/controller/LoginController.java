package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.loginDao;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {
	
	@PostMapping("/login{nome}{senha}")
	public ResponseEntity<String> validarLogin(
			@PathVariable String nome,
			@PathVariable String senha,
			@RequestBody Credencias credencias) {

		loginDao dao = new loginDao();

		credencias.setLogin(nome);
		credencias.setSenha(senha);

		boolean userValidate = dao.autenticaUsuario(credencias);

		if(userValidate){
			return ResponseEntity.ok("Sucesso");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro");
	}

}
