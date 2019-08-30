package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.controller.Credencias;

public class loginDao {

    public boolean autenticaUsuario(Credencias credencias){

        String nome = credencias.getLogin();
        String senha = credencias.getSenha();

        if (nome.equals("wender") && senha.equals("1234")) {
            return true;
        }
        return false;
    }

}
