package com.bandtec.LetsGoFourService;

import com.bandtec.LetsGoFourService.gerenciadorDeFilas.FilaDeAgendamentos;
import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.service.AgendamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgendamentoController {

    private AgendamentosService service;

    private FilaDeAgendamentos fila;

    @Autowired
    public AgendamentoController(AgendamentosService service) {
        this.service = service;
    }

    @PostMapping("/agendamento/agendar/{idContratante}")
    public ResponseEntity<String> agendar(@RequestBody Agendamento agendamento, @PathVariable("idContratante") String idContratante) {
        boolean status;

        agendamento.setIdContratante(idContratante);

        if (service.vefiricaAgendamento(agendamento) != null) {
            fila.isFull();
            System.out.println("Inserido na fila de espera");
            fila.insereAgendamento(agendamento);

            return ResponseEntity.status(HttpStatus.CONFLICT).body("Data não disponível, em fila de espera");


        } else {
            status = service.agendarData(agendamento);

            if (status) {
                return ResponseEntity.ok("Agendado com sucesso");
            } else {
                return ResponseEntity.ok("Falha ao agendar");
            }
        }
    }
}
