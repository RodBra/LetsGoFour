
	package com.bandtec.jobbers.controller;

	import static org.junit.Assert.assertEquals;

	import org.junit.Before;
	import org.junit.Test;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;


	public class LoginControllerTest {

		private LoginController controller;

		@Before
		public void setUp() {
			controller = new LoginController();
		}

		@Test
		public void LoginComSucesso() {

			ResponseEntity<String> response = controller.validarLogin(new Credencias("login", "senha"));

			assertEquals(HttpStatus.OK, response.getStatusCode());
			assertEquals("Login efetuado com sucesso", response.getBody());
		}

		@Test
		public void LoginSemSucesso() {

			ResponseEntity<String> response = controller.validarLogin(new Credencias("login", "senha"));

			assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
			assertEquals("Erro", response.getBody());

		}

	}


