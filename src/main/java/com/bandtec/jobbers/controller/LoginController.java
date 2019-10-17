package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.model.*;
import com.bandtec.jobbers.repository.CredenciaisRepository;
import com.bandtec.jobbers.repository.LogradouroRepository;
import com.bandtec.jobbers.repository.ServicosRepository;
import com.bandtec.jobbers.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoginController {

	@Autowired
	private CredenciaisRepository credenciaisRepository;

	@Autowired
	private ServicosRepository servicosRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private LogradouroRepository logradouroRepository;

	@PostMapping("/cadastrar/contratante")
	public ResponseEntity<String> cadastrarContratante(@RequestBody Usuario usuario, @RequestBody Credenciais credenciais,
													   @RequestBody Logradouro logradouro, Role role) {

		if(usuarioRepository.findByEmail(usuario.getEmail()) == null) {
			//Salva Usuário
			usuario.setRole(role);
			usuarioRepository.save(usuario);

			//Adiciona o id do usuario aos documentos
			credenciais.setUser_id(usuario.getId());
			logradouro.setUser_id(usuario.getId());

			//Salva os objetos no banco
			credenciaisRepository.save(credenciais);
			logradouroRepository.save(logradouro);

			return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário ja existe");
		}

	}

	@GetMapping("/valida/{tipo}")
	public ResponseEntity<String>validarUsuario(@RequestBody Credenciais credenciais, @PathVariable String tipo){
		if (tipo.equals("prestador")) {
 				if(credenciaisRepository.findByLoginEqualsAndSenhaEquals(credenciais.getLogin(), credenciais.getSenha()) != null){
				return ResponseEntity.status(HttpStatus.OK).body("Login feito com sucesso");
			}
			else {
					return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		} else if (tipo.equals(("contratante"))){
			if(credenciaisRepository.findByLoginEqualsAndSenhaEquals(credenciais.getLogin(), credenciais.getSenha())  != null){
				return ResponseEntity.status(HttpStatus.OK).body(("login feito com sucesso"));
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(("Usuário não cadastrado"));
	}


	@GetMapping("buscar/servico/{servico}")
	public ResponseEntity<List<Servicos>> buscaPrestador(@PathVariable("servico") String servico){

		List<Servicos> prestadores = servicosRepository.findByTipo_servico(servico);

		if (!prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.FOUND).body(prestadores);
		} else if (prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
}
