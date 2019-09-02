package com.bandtec.jobbers;


	
	import static org.junit.Assert.assertEquals;

	import org.junit.Before;
	import org.junit.Test;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;

import com.bandtec.jobbers.controller.Credencias;
import com.bandtec.jobbers.controller.LoginController;

	public class LoginControllerTest {

		private LoginController controller;

		@Before
		public void setUp() {
			controller = new LoginController();
		}

		@Test
		public void LoginComSucesso() {

			ResponseEntity<String> resposta = controller.validarLogin("nome","senha",new Credencias("nome", "senha"));

			assertEquals(HttpStatus.OK, resposta.getStatusCode());
			assertEquals("Sucesso", resposta.getBody());
		}

		@Test
		public void LoginComFalha() {

			ResponseEntity<String> resposta = controller.validarLogin("login","senha",new Credencias("login", "senha"));

			assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
			assertEquals("Erro", resposta.getBody());

		}

	}


