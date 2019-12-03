package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.model.Agendamento;
import com.bandtec.jobbers.service.AgendamentoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgendamentoController {

    private AgendamentoService service;

    @Autowired
    public  AgendamentoController(AgendamentoService service){
        this.service = service;
    }

    @PostMapping("/agendamento/agendar")
    public String agendar(@RequestBody Agendamento agendamento){
        boolean result = service.agendarHorario(agendamento);
        if(result){
            return "Agendado";
        } else {
            return "Falha no Agendamento";
        }
    }
    
    @GetMapping("/agendamentos/prestador/{idPrestador}")
    public ResponseEntity<List<Agendamento>> retornaTodosPrestadores(@PathVariable("idPrestador") String idPrestador) {
    	List<Agendamento> result = service.retornaTodosPrestadores(idPrestador);
    	return ResponseEntity.ok(result);
    }
    
    @GetMapping("/agendamentos/contratante/{idContratante}")
    public ResponseEntity<List<Agendamento>> retornaTodosContratante(@PathVariable("idContratante") String idContratante){
    	List<Agendamento> result = service.retornaTodosContratante(idContratante);
    	return ResponseEntity.ok(result);
    }
}
