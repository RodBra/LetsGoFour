package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.loginDao;
import com.bandtec.jobbers.model.Credencias;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class LoginController {

	@GetMapping("/login")
	public String login(){
		return "login";
	}

	@PostMapping("/valida")
	public ResponseEntity<String> validarLogin(
			@PathVariable String nome,
			@PathVariable String senha,
			@RequestBody Credencias credencias) {

		loginDao dao = new loginDao();

		//credencias.setLogin(nome);
		//credencias.setSenha(senha);

		boolean userValidate = dao.autenticaUsuario(credencias);

		if(userValidate){
			return ResponseEntity.ok("Sucesso");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro");
	}

}
