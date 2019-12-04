package com.bandtec.jobbers.service;

import com.bandtec.jobbers.model.Agendamento;
import com.bandtec.jobbers.model.Avaliacao;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class AvaliacaoService {

    private RestTemplate restTemplate;
    String url;

    public AvaliacaoService(){
        this.restTemplate = new RestTemplate();
        this.url = "http://localhost:8082/avaliacao/";
    }

    public boolean fazerAvaliacao(Avaliacao avaliacao, String login){
        String urlAvaliacao = url + "avaliar";
        ResponseEntity<String> result = restTemplate.postForEntity(urlAvaliacao, avaliacao, String.class);
        if (result.getBody().equals("Avaliação feita com sucesso")){
            return true;
        } else {
            return false;
        }
    }

    public List<Avaliacao> retornaAvaliacoesPrestador(String idPrestador){
        String urlAvaliacao = "http://localhost:8082/avaliacoes/prestador/" + idPrestador;
        ResponseEntity<Avaliacao[]> avaliacaos = restTemplate.getForEntity(urlAvaliacao, Avaliacao[].class);
        return Arrays.asList(avaliacaos.getBody());
    }


}
