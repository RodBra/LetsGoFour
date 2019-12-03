package com.bandtec.LetsGoFourService;

import com.bandtec.LetsGoFourService.model.Avaliacao;
import com.bandtec.LetsGoFourService.service.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvaliacaoController {

    private AvaliacaoService service;

    @Autowired
    public AvaliacaoController(AvaliacaoService service ) {
        this.service = service;

    }

    @PostMapping("/avaliacao/avaliar")
    public ResponseEntity<String> avaliar (@RequestBody Avaliacao avaliacao) {
            if (!avaliacao.equals(null)) {
                service.fazerComentario(avaliacao);
                return ResponseEntity.ok("Avaliação feita com sucesso");
            } else {
                return ResponseEntity.ok("Falha ao enviar avaliação");
            }
        }


    @GetMapping("/avaliacoes/prestador/{idPrestador}")
    public List<Avaliacao> retornaTodosComentarios(@PathVariable("idPrestador") String idPrestador){
        List<Avaliacao> avaliacaos = service.retornaComentariosPrestador(idPrestador);
        if (!avaliacaos.isEmpty()){
            return avaliacaos;
        } else {
            System.out.println("Nenhuma Avaliacao encontrado");
            return null;
        }
    }

}
