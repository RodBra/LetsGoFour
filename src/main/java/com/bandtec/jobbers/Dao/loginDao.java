package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.controller.Credencias;

public class loginDao {

    public boolean autenticaUsuario(Credencias credencias){

        String login = credencias.getLogin();
        String senha = credencias.getSenha();

        if (login.equals("wender") && senha.equals("1234")) {
            return true;
        }
        return false;
    }

}
