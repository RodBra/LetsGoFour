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

		if(contratanteRepository.findByCredenciais(usuarioContratante.getCredenciais()) == null) {
			contratanteRepository.save(usuarioContratante);

			return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}

	}

	@PostMapping("/cadastrar/prestador")
	public ResponseEntity<String> cadastrarPrestador(@RequestBody UsuarioPrestador usuarioPrestador) {

		if(prestadorRepository.findByCredenciais(usuarioPrestador.getCredenciais()) == null) {
			prestadorRepository.save(usuarioPrestador);

			return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}
	}

	@GetMapping("/valida/{tipo}")
	public ResponseEntity<String>validarUsuario(@RequestBody Credenciais credenciais, @PathVariable String tipo){
		if (tipo.equals("prestador")) {
 				if(prestadorRepository.findByCredenciais(credenciais) != null){
				return ResponseEntity.status(HttpStatus.OK).body("Login feito com sucesso");
			}
			else {
					return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		} else if (tipo.equals(("contratante"))){
			if(contratanteRepository.findByCredenciais(credenciais) != null){
				return ResponseEntity.status(HttpStatus.OK).body(("login feito com sucesso"));
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(("Usuário não cadastrado"));
	}
	

	@GetMapping("buscar/servico/{servico}")
	public ResponseEntity<List<UsuarioPrestador>> buscaPrestador(@PathVariable("servico") String servico){

		List<UsuarioPrestador> prestadores = prestadorRepository.findByTipo_servico(servico);

		if (!prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.FOUND).body(prestadores);
		} else if (prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
}
