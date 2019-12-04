package com.bandtec.LetsGoFourService.service;

import com.bandtec.LetsGoFourService.model.Avaliacao;
import com.bandtec.LetsGoFourService.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;


    private Avaliacao avaliacao;

    public AvaliacaoService(AvaliacaoRepository avaliacaoRepository){
        this.avaliacaoRepository = avaliacaoRepository;
    }

    public boolean fazerComentario(Avaliacao avaliacao){
        avaliacaoRepository.save(avaliacao);
        return true;
    }

    public List<Avaliacao> retornaComentariosPrestador(String idPrestador){
        List<Avaliacao> avaliacaos = avaliacaoRepository.findByIdPrestador(idPrestador);
        return avaliacaos;
    }

}
