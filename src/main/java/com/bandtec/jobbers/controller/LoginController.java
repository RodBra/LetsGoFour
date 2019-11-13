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

	private Role role;
	private UsuarioContratante contrantante;
	private UsuarioPrestador prestador;
<<<<<<< HEAD

	@PostMapping("/login")
	public ResponseEntity<String> login(HttpSession session, @RequestBody Credenciais credenciais) {
=======
	
	@Autowired
	public LoginController(ContratanteRepository contratanteRepository,PrestadorRepository prestadorRepository) {
		super();
		this.contratanteRepository = contratanteRepository;
		this.prestadorRepository = prestadorRepository;
	}

	
	@GetMapping("/login")
	public String login(HttpSession session, @RequestBody Credenciais credenciais) {
>>>>>>> 10ebb7a2eb69f291a92618e5ec7449c4f48b50b8

	if (prestadorRepository.findByCredenciais(credenciais) != null) {
			role = Role.PRESTADOR;
		} else if (contratanteRepository.findByCredenciais(credenciais) != null) {
			role = Role.CONTRATANTE;
		}

		if (role.equals(Role.PRESTADOR)){
			if(prestadorRepository.findByCredenciais(credenciais) != null){
				prestador = prestadorRepository.findByLogin(credenciais.getLogin());
				session.setAttribute("usuario", prestador);
				session.setAttribute("Usuario", credenciais.getLogin());
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.status(HttpStatus.OK).body("Logado prestador");
			}
		} else if (role.equals(Role.CONTRATANTE)){
			if(contratanteRepository.findByCredenciais(credenciais) != null){
				contrantante = contratanteRepository.findByLogin(credenciais.getLogin());
				session.setAttribute("Usuario", credenciais.getLogin());
				session.setAttribute("usuario", contrantante);
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.status(HttpStatus.OK).body("Logado contratante");
			}
		}

		return ResponseEntity.status(HttpStatus.OK).body("Logado");
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
