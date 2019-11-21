package com.bandtec.jobbers.controller;

import com.bandtec.jobbers.Dao.ContratanteRepository;
import com.bandtec.jobbers.Dao.PrestadorRepository;
import com.bandtec.jobbers.model.Role;
import com.bandtec.jobbers.model.UsuarioContratante;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class ServicosController {

    private static Logger logger = Logger.getLogger(LoginController.class);

    @Autowired
    private ContratanteRepository contratanteRepository;

    @Autowired
    private PrestadorRepository prestadorRepository;

    private Role role;
    private UsuarioContratante contrantante;
    private UsuarioPrestador prestador;

    @GetMapping("/prestador/servico/{servico}")
    public List<UsuarioPrestador> retornaServicos(HttpSession session, @PathVariable("servico") String servico){
        List<UsuarioPrestador> prestadors = prestadorRepository.findByServico(servico.toUpperCase());
        session.setAttribute("servicos", prestadors);
        return prestadors;
    }

    @GetMapping("/prestador")
    public List<UsuarioPrestador> retornaTodos(){
        List<UsuarioPrestador> prestadors = prestadorRepository.findAll();
        return prestadors;
    }

    @GetMapping("/prestador/{nome}")
    public List<UsuarioPrestador> retornaPorNome(String nome){
        List<UsuarioPrestador> prestadors = prestadorRepository.findByNome(nome);
        return prestadors;
    }
}
