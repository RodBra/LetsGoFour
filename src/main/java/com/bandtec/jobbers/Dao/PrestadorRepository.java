package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestadorRepository extends MongoRepository<UsuarioPrestador, String> {

    @Query("{ 'credenciais' : { 'login' : ?0 }}")
    boolean findByLogin(String login);
}
