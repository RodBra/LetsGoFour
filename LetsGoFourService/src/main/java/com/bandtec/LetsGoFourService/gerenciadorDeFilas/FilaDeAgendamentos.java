package com.bandtec.LetsGoFourService.gerenciadorDeFilas;

import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.repository.AgendamentoEmEsperaRepository;

public class FilaDeAgendamentos {

    private int tamanho;
    private Object[] agendamentos;
    private AgendamentoEmEsperaRepository esperaRepository;

    public FilaDeAgendamentos(){
        tamanho = 0;
        agendamentos = new Object[5];
    }

    public boolean isFull(){
        return (tamanho == agendamentos.length);
    }

    public boolean insereAgendamento(Agendamento agendamento){
        if(isFull()){
            salvaLista();
            limpaFila();
            return true;
        }
        agendamentos[tamanho++] = agendamento;
        return false;
    }

    public void limpaFila(){
        agendamentos = new Object[5];
    }

    public void salvaLista(){
        //TODO Codigo para percorrer
        //esperaRepository.save();
    }
}
