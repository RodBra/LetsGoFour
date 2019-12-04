package com.bandtec.LetsGoFourService;

import com.bandtec.LetsGoFourService.gerenciadorDeFilas.FilaDeAgendamentos;
import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.service.AgendamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AgendamentoController {

    private AgendamentosService service;

    private FilaDeAgendamentos fila;

    @Autowired
    public AgendamentoController(AgendamentosService service, FilaDeAgendamentos fila) {
        this.service = service;
        this.fila = fila;
    }

    @PostMapping("/agendamento/agendar")
    public ResponseEntity<String> agendar(@RequestBody Agendamento agendamento) {
        boolean status;

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

    @GetMapping("/agendamentos/prestador/{idPrestador}")
    public List<Agendamento> retornaTodosPrestador(@PathVariable("idPrestador") String idPrestador){
        List<Agendamento> agendamentos = service.retornaAgendamentosPrestador(idPrestador);
        if (!agendamentos.isEmpty()){
            return agendamentos;
        } else {
            System.out.println("Nenhum Agendamento encontrado");
            return null;
        }
    }

    @GetMapping("/agendamentos/contratante/{idContratante}")
    public List<Agendamento> retornaTodosContratante(@PathVariable("idContratante") String idContratante){
        List<Agendamento> agendamentos = service.retornaAgendamentosContratante(idContratante);
        if (!agendamentos.isEmpty()){
            return agendamentos;
        } else {
            System.out.println("Nenhum Agendamento encontrado");
            return null;
        }
    }
}
