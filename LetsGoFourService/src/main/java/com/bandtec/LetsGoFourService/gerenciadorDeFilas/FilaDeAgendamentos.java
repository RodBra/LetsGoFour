package com.bandtec.LetsGoFourService.gerenciadorDeFilas;

import com.bandtec.LetsGoFourService.model.Agendamento;
import com.bandtec.LetsGoFourService.repository.AgendamentoEmEsperaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class FilaDeAgendamentos {

    private int tamanho;
    private Object[] agendamentosNaFila;

    @Autowired
    private AgendamentoEmEsperaRepository esperaRepository;

    public FilaDeAgendamentos() {
        tamanho = 0;
        agendamentosNaFila = new Object[5];
    }

    public boolean isFull() {
        if(tamanho == agendamentosNaFila.length){
            limpaFila();
            return true;
        }
        return false;
    }

    public boolean insereAgendamento(Agendamento agendamento) {
        if (isFull()) {
            salvarFila(agendamento);
            return true;
        }
        agendamentosNaFila[tamanho++] = agendamento;
        return false;
    }

    public void limpaFila() {
        agendamentosNaFila = new Object[5];
    }

    public void salvarFila(Agendamento agendamento){
        esperaRepository.save(agendamento);
    }

    public void exibeFila(){
        for (int i =0; i > agendamentosNaFila.length; i++){
            System.out.println(agendamentosNaFila[i]);
        }
    }

}
