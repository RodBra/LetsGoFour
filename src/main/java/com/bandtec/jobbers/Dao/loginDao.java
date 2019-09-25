package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.CredenciaisRepository;
import com.bandtec.jobbers.model.Credencias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class loginDao implements CommandLineRunner {

    @Autowired
    private CredenciaisRepository repository;

    @Override
    public boolean autenticaUsuario(Credencias credencias){

        String login = credencias.getLogin();
        String senha = credencias.getSenha();


        Credencias credencias1 = new Credencias("wender","1234");

        if (login.equals(credencias.getLogin()) && senha.equals(credencias.getSenha())) {
            return true;
        }
        return false;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
