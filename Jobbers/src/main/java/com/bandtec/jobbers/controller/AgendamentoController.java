package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.model.Agendamento;
import com.bandtec.jobbers.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
}
