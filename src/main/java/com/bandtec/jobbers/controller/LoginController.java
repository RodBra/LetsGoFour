 
package com.bandtec.jobbers.controller;

import java.util.List;

import com.bandtec.jobbers.config.JsonBuilder;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Logradouro;
import com.bandtec.jobbers.model.Role;
import com.bandtec.jobbers.model.Servicos;
import com.bandtec.jobbers.model.Usuario;
import com.bandtec.jobbers.repository.CredenciaisRepository;
import com.bandtec.jobbers.repository.LogradouroRepository;
import com.bandtec.jobbers.repository.ServicosRepository;
import com.bandtec.jobbers.repository.UsuarioRepository;
import com.mongodb.WriteConcern;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	private static Logger logger = Logger.getLogger(LoginController.class);
	
    WriteConcern writeConcern;

	@Autowired
	private CredenciaisRepository credenciaisRepository;

	@Autowired
	private ServicosRepository servicosRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private LogradouroRepository logradouroRepository;

	@PostMapping("/cadastrar/{role}")
	public ResponseEntity<String> cadastrarContratante(@RequestBody JsonBuilder jsonBuilder, @PathVariable("role") String role) {

        Usuario usuario = jsonBuilder.getUsuario();
		Credenciais credenciais = jsonBuilder.getCredenciais();
		Logradouro logradouro = jsonBuilder.getLogradouro();
		Servicos servicos = jsonBuilder.getServicos();

		if(usuarioRepository.findByEmail(credenciais.getLogin()) == null) {
			try {
                //Salva Usuário
                usuarioRepository.save(usuario);
            }catch (Exception e){
			    e.printStackTrace();
                System.out.println("Erro ao cadastrar usuário");
            }
        try{
            //Salva Credenciais
            credenciaisRepository.save(credenciais);
        } catch (Exception e){
            e.printStackTrace();
        }
        try {
            logradouroRepository.save(logradouro);
        }catch (Exception e){
            e.printStackTrace();
        }
        try {
            if (role.equals(Role.PRESTADOR)){
                servicosRepository.save(servicos);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
            //Adiciona o id do usuario aos documentos
//			credenciais.setUser_id(usuario.getId());
//			logradouro.setUser_id(usuario.getId());

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
				logger.info("usuario logado : " + credenciais.getLogin());
				return ResponseEntity.status(HttpStatus.OK).body(("login feito com sucesso"));
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falha nas credenciais");
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(("Usuário não cadastrado"));
	}


	@GetMapping("buscar/servico/{servico}")
	public ResponseEntity<List<Servicos>> buscaPrestador(@PathVariable("servico") String servico){

		List<Servicos> prestadores = servicosRepository.findByTipoServico(servico);

		if (!prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.FOUND).body(prestadores);
		} else if (prestadores.isEmpty()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
}