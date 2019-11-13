package com.bandtec.jobbers;

import static org.junit.Assert.assertEquals;

import javax.servlet.http.HttpSession;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.controller.LoginController;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;

public class LoginControllerTest{

	private LoginController controller;

	private ContratanteRepository contratanteRepository;

	private PrestadorRepository prestadorRepository;
	
	private HttpSession session;

	@Before
	public void setUP() {
//		contratanteRepository = Mockito.mock(ContratanteRepository.class);
//		prestadorRepository = Mockito.mock(PrestadorRepository.class);
//		controller = new LoginController(contratanteRepository,prestadorRepository);
//		session = Mockito.mock(HttpSession.class);
	}
	
	@Test
	public void loginComSucesso() {
//		Credenciais c = new Credenciais("igual", "igual");
//		Mockito.when(contratanteRepository.findByCredenciais(c)).thenReturn(new UsuarioContratante("angelo", "555555555", "angelo.teste@teste.com", "são paulo", "são paulo", "rua dos testes", 123, c));
//		Mockito.when(prestadorRepository.findByCredenciais(c)).thenReturn(new UsuarioPrestador("angelo", "123456789", "testes@teste.com", "São paulo", "São paulo", "rua dos testes", 123, 1800, "construtor", "construir", "123456789", c));
//		String resposta = controller.login(session, c);
//
//		assertEquals("dashboard", resposta);
	}

}
	


