package com.bandtec.LetsGoFourService;

import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.service.AgendamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgendamentoController {

    private AgendamentosService service;

    @Autowired
    public AgendamentoController(AgendamentosService service){
        this.service = service;
    }

    @PostMapping("/agendamento/agendar")
    public ResponseEntity<String> agendar(@RequestBody Agendamento agendamento){
        boolean status;

        if(service.vefiricaAgendamento(agendamento) == null) {
            status = service.agendarData(agendamento);

            if (status) {
                return ResponseEntity.ok("Agendado com sucesso");
            } else {
                return ResponseEntity.ok("Falha ao agendar");
            }
        } else {
            return ResponseEntity.ok("Data indisponivel");
        }
    }
}
