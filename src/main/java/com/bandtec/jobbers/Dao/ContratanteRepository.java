package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.UsuarioContratante;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContratanteRepository extends MongoRepository<UsuarioContratante, String> {

    @Query("{ 'credenciais' : { 'login' : ?0 }}")
    boolean findByLogin(String login);

}
