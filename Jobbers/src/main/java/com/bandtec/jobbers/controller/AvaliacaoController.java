package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.model.Avaliacao;
import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.service.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvaliacaoController {

   private AvaliacaoService service;

    @Autowired
    public AvaliacaoController(AvaliacaoService service){
        this.service = service;
    }

    @PostMapping("avaliacao/avaliar")
    public String avaliar(@RequestBody Avaliacao avaliacao, String login){

        boolean result = service.fazerAvaliacao(avaliacao, login);
        if(result){
            return "Avaliação feita ";
        } else {
            return "Falha ao realizar avaliação";
        }

    }

    @GetMapping("/avaliacao/prestador/{idPrestador}")
    public ResponseEntity<List<Avaliacao>> retornaTodosComentarios(@PathVariable("idPrestador") String idPrestador){
        List<Avaliacao> avaliacoes = service.retornaAvaliacoesPrestador(idPrestador);
        if (!avaliacoes.isEmpty()){
            return ResponseEntity.ok(avaliacoes);
        } else {
            System.out.println("Nenhuma avaliação encontrada");
            return null;
        }
    }


}
