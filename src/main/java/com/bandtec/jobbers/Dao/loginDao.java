package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.controller.Credencias;



public class loginDao {

    public boolean autenticaUsuario(Credencias credencias){

        String login = credencias.getLogin();
        String senha = credencias.getSenha();


        Credencias credencias1 = new Credencias("wender","1234");

        if (login.equals(credencias.getLogin()) && senha.equals(credencias.getSenha())) {
            return true;
        }
        return false;
    }

}
