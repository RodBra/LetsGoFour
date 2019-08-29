package com.bandtec.jobbers.controller;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LogoutController {

		
	@SuppressWarnings("unchecked")
	@RequestMapping("/logout")
    public ResponseEntity<String> ValidadaLogout(@RequestBody HttpSession session) {
		session.invalidate();
		return (ResponseEntity<String>) ResponseEntity.status(HttpStatus.SEE_OTHER);
        	
    }

	}


