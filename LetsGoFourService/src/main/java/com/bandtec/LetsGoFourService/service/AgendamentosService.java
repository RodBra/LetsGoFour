package com.bandtec.LetsGoFourService.service;

import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.repository.AgendamentoEmEsperaRepository;
import com.bandtec.LetsGoFourService.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentosService {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private AgendamentoEmEsperaRepository agendamentoEmEsperaRepository;

    private Agendamento agendamento;

    public AgendamentosService(AgendamentoRepository agendamentoRepository){
        this.agendamentoRepository = agendamentoRepository;
    }

    public boolean agendarData(Agendamento agendamento){
        agendamentoRepository.save(agendamento);
        return true;
    }

    public Agendamento vefiricaAgendamento(Agendamento agendamento){
        agendamento = agendamentoRepository.findByData(agendamento.getIdPrestador(), agendamento.getData());

        return agendamento;
    }

    public List<Agendamento> retornaAgendamentosPrestador(String idPrestador){
        List<Agendamento> agendamentos = agendamentoRepository.findByIdPrestador(idPrestador);
        return agendamentos;
    }

    public List<Agendamento> retornaAgendamentosContratante(String idContratante){
        List<Agendamento> agendamentos = agendamentoRepository.findByIdContratante(idContratante);
        return agendamentos;
    }
}
