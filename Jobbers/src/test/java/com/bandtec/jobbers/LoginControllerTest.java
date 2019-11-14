package com.bandtec.jobbers;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.controller.LoginController;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.junit.Before;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpSession;

import javax.servlet.http.HttpSession;


public class LoginControllerTest{
//
//	private LoginController loginController;
//
//	private PrestadorRepository prestadorRepository;
//	private ContratanteRepository contratanteRepository;
//
//	private Credenciais credenciais;
//	private UsuarioContratante contratante;
//	private UsuarioPrestador prestador;
//
//	@Before
//	public void setUP() {
//		credenciais = Mockito.mock(Credenciais.class);
//		contratante = Mockito.mock(UsuarioContratante.class);
//		prestador = Mockito.mock(UsuarioPrestador.class);
//		prestadorRepository = Mockito.mock(PrestadorRepository.class);
//		loginController = new LoginController(credenciais, prestador, contratante);
//	}
//
//	public String loginComSucessoPrestador(String login, String senha){
//		Credenciais c = new Credenciais(login, senha);
//		HttpSession session = new MockHttpSession();
//		Mockito.when(prestadorRepository.findByCredenciais(c)).thenReturn( new UsuarioPrestador("angelo",
//				"123456789", "testes@teste.com","São paulo", "São paulo",
//				"rua dos testes", 123, 1800, "construtor", "construir",
//				"123456789", c));
//		ResponseEntity<String> resposta = loginController.login(session, c);
//
//		return resposta.getBody();
//	}
}
	


