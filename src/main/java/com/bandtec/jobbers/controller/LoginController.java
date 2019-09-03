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
	
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(
			@PathVariable String login,
			@PathVariable String senha) {

//		loginDao dao = new loginDao();
//		
//		boolean userValidate = dao.autenticaUsuario(credencias);

		if(login.equals(senha)){
			return ResponseEntity.ok("Sucesso");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro");
	}

}
