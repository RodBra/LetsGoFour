package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioContratante;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContratanteRepository extends MongoRepository<UsuarioContratante, String> {

    @Query("{ 'credenciais' : ?0 }")
    UsuarioContratante findByCredenciais(Credenciais credenciais);

    @Query("{ 'credenciais' : {'login' : ?0 }}")
    UsuarioContratante findByLogin(String login);
    
    @Query("{ 'id' : ?0 }")
    Optional<UsuarioContratante> findById(String id);
}
