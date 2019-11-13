package com.bandtec.LetsGoFourService.service;

import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgendamentosService {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    private Agendamento agendamento;

    public boolean agendarData(Agendamento agendamento){
        agendamentoRepository.save(agendamento);
        return true;
    }

    public Agendamento vefiricaAgendamento(Agendamento agendamento){
        agendamento = agendamentoRepository.findByData(agendamento.getIdPrestador(), agendamento.getData());

        return agendamento;
    }
}
