package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Usuario;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CredenciaisRepository extends MongoRepository<UsuarioPrestador, String> {

    boolean findByCredenciais(Credenciais credenciais);

}
