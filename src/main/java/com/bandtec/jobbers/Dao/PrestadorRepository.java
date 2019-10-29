package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestadorRepository extends MongoRepository<UsuarioPrestador, String> {

    @Query("{ 'credenciais' : ?0 }")
    boolean findByCredenciais(Credenciais credenciais);

    @Query("{ 'credenciais' : {'login' : ?0 }}")
    UsuarioPrestador findByLogin(String login);
}
