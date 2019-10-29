package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Role;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
public class LoginController {

	private static Logger logger = Logger.getLogger(LoginController.class);

	@Autowired
	private ContratanteRepository contratanteRepository;

	@Autowired
	private PrestadorRepository prestadorRepository;

	@GetMapping("/login/{role}")
	public ResponseEntity<String> login(HttpSession session, @RequestBody Credenciais credenciais, @PathVariable("role") Role role) {

		if (role.equals(Role.PRESTADOR)){
			if(prestadorRepository.findByCredenciais(credenciais)){
				session.setAttribute("Usuario", credenciais.getLogin());
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.status(HttpStatus.OK).body("Usuario logado");
			}
		} else if (role.equals(Role.CONTRATANTE)){
			if(contratanteRepository.findByCredenciais(credenciais)){
				session.setAttribute("Usuario", credenciais.getLogin());
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.status(HttpStatus.OK).body("Usuario logado");
			}
		}

		return ResponseEntity.ok("Usuario inexistente");
	}

	@PostMapping("/cadastrar/contratante")
	public ResponseEntity<String> cadastrarContratante(HttpSession session, @RequestBody UsuarioContratante usuarioContratante) {

		if(contratanteRepository.findByLogin(usuarioContratante.getLogin()) == null) {
			contratanteRepository.save(usuarioContratante);
			return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}

	}

	@PostMapping("/cadastrar/prestador")
	public ResponseEntity<String> cadastrarPrestador(HttpSession session, @RequestBody UsuarioPrestador usuarioPrestador) {

		if(prestadorRepository.findByLogin(usuarioPrestador.getLogin()) == null) {
			prestadorRepository.save(usuarioPrestador);
			return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}
	}

	@GetMapping("/logout")
	public ResponseEntity<String> logout(HttpSession session ) {
		session.invalidate();
		return ResponseEntity.status(HttpStatus.OK).body("Deslogado");
	}
}
