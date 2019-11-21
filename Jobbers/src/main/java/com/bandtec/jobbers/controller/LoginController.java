package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Role;
import com.bandtec.jobbers.model.Usuario;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import javax.servlet.http.HttpSession;

@RestController
public class LoginController {

	private static Logger logger = Logger.getLogger(LoginController.class);

	@Autowired
	private ContratanteRepository contratanteRepository;

	@Autowired
	private PrestadorRepository prestadorRepository;

	private Credenciais credenciais;
	private Role role;
	private UsuarioContratante contrantante;
	private UsuarioPrestador prestador;

	public LoginController(){}

	public LoginController(Credenciais credenciais, UsuarioPrestador usuarioPrestador, UsuarioContratante usuarioContratante){
	    this.credenciais = credenciais;
	    this.contrantante = usuarioContratante;
	    this.prestador = usuarioPrestador;
    }

	@PostMapping("/login")
	public ResponseEntity<Usuario> login(HttpSession session, @RequestBody Credenciais credenciais) {

		if (prestadorRepository.findByCredenciais(credenciais) != null) {
			role = Role.PRESTADOR;
		} else if (contratanteRepository.findByCredenciais(credenciais) != null) {
			role = Role.CONTRATANTE;
		}

		if (role.equals(Role.PRESTADOR)){
			prestador = prestadorRepository.findByCredenciais(credenciais);
			if(prestador != null){
				// prestador = prestadorRepository.findByLogin(credenciais.getLogin());
				session.setAttribute("usuario", true);
				session.setAttribute("Usuario", credenciais.getLogin());
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.ok(prestador);
			}
		} else if (role.equals(Role.CONTRATANTE)){
			contrantante = contratanteRepository.findByCredenciais(credenciais); 
			if(contrantante != null){
//				contrantante = contratanteRepository.findByLogin(credenciais.getLogin());
				session.setAttribute("Usuario", credenciais.getLogin());
				session.setAttribute("usuario", false);
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.ok(contrantante);
			}
		}

		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
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
		UsuarioPrestador cdUsuarioPrestador = prestadorRepository.findByLogin(usuarioPrestador.getLogin());	
		if(cdUsuarioPrestador == null) {
			prestadorRepository.save(usuarioPrestador);
			return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> update(HttpSession session, @RequestBody UsuarioContratante uc) {
		contratanteRepository.save(uc);
		return ResponseEntity.ok("Usuario atualizado");
	}
	
	
	@GetMapping("/userPrestador/{id}")
	public ResponseEntity<UsuarioPrestador> searchByIdPrestador(@PathVariable("id") String id) {
		Optional<UsuarioPrestador> usuarioPrestador = prestadorRepository.findById(id);
		if(usuarioPrestador.get() == null) {
			return ResponseEntity.notFound().build();
		}
		UsuarioPrestador result = usuarioPrestador.get();
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<UsuarioContratante> searchByIdCotratante(@PathVariable("id") String id) {
		Optional<UsuarioContratante> usuarioContratante = contratanteRepository.findById(id);
		if(usuarioContratante.get() == null) {
			return ResponseEntity.notFound().build();
		}
		UsuarioContratante result = usuarioContratante.get();
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@GetMapping("/logout")
	public ResponseEntity<String> logout(HttpSession session ) {
		session.invalidate();
		return ResponseEntity.status(HttpStatus.OK).body("Deslogado");
	}
}
