package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoginController {



	@Autowired
	private ContratanteRepository contratanteRepository;

	@Autowired
	private PrestadorRepository prestadorRepository;

	//TODO Metodo quebrado "Não mexer se não souber o que está fazendo"
	@GetMapping("/login")
	public ResponseEntity<List<UsuarioPrestador>> findAll() {
		//List<UsuarioPrestador> usuarios = credenciaisRepository.findAll();
		return ResponseEntity.ok(null/*usuarios*/);
	}

	@PostMapping("/cadastrar/contratante")
	public ResponseEntity<String> cadastrarContratante(@RequestBody UsuarioContratante usuarioContratante) {

		if(!contratanteRepository.findByLogin(usuarioContratante.getLogin())) {
			contratanteRepository.save(usuarioContratante);

			return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}

	}

	@PostMapping("/cadastrar/prestador")
	public ResponseEntity<String> cadastrarPrestador(@RequestBody UsuarioPrestador usuarioPrestador) {

		if(!prestadorRepository.findByLogin(usuarioPrestador.getLogin())) {
			prestadorRepository.save(usuarioPrestador);

			return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}


	}

	@PostMapping("/valida")
	public ResponseEntity<String>validarUsuario(@RequestBody Credenciais credenciais, String tipo ){
		if (tipo.equals("prestador")) {
			if(prestadorRepository.findByLoginAndSenha(credenciais)){
				return ResponseEntity.status(HttpStatus.OK).body("Login feito com sucesso");
			}
			else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		} else if (tipo.equals(("contratante"))){
			if(contratanteRepository.findByLoginAndSenha(credenciais)){
				return ResponseEntity.status(HttpStatus.OK).body(("login feito com sucesso"));
			}

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(("Usuário não cadastrado"));

	}
}
