package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.CredenciaisRepository;
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
	private CredenciaisRepository credenciaisRepository;

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
		contratanteRepository.save(usuarioContratante);

		return ResponseEntity.status(HttpStatus.OK).body(" Usuario contratante Cadastrado com sucesso");
	}

	@PostMapping("/cadastrar/prestador")
	public ResponseEntity<String> cadastrarPrestador(@RequestBody UsuarioPrestador usuarioPrestador) {
//		UsuarioPrestador up = new UsuarioPrestador("Carlos", "Pedro", "email2@exemplo2.com",
//				"13/11/2000", "São Paulo", "SP", "Rua 2", 230, "Apartamento",
//				100, "faxineiro", "faxina",
//				new Credenciais("Pedro", "1234"));
		prestadorRepository.save(usuarioPrestador);

		return ResponseEntity.status(HttpStatus.OK).body("Usuario prestador Cadastrado com sucesso");
	}

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
