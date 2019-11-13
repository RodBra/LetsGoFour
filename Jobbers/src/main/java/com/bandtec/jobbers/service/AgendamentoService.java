package com.bandtec.jobbers.service;

import com.bandtec.jobbers.model.Agendamento;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AgendamentoService {

    private RestTemplate restTemplate;
    String url;

    public AgendamentoService(){
        this.restTemplate = new RestTemplate();
        this.url = "http://localhost:8081/agendamento/";
    }

    public boolean agendarHorario(Agendamento agendamento){
        String urlAgendamento = url + "agendar";
        ResponseEntity<String> result = restTemplate.postForEntity(urlAgendamento, agendamento, String.class);
        if (result.getBody().equals("Agendado com sucesso")){
            return true;
        } else {
            return false;
        }
    }
}
