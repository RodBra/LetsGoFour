package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioContratante;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContratanteRepository extends MongoRepository<UsuarioContratante, String> {

    @Query( "{'credenciais' : ?0 }")
    UsuarioContratante findByCredenciais(Credenciais credenciais);
}
