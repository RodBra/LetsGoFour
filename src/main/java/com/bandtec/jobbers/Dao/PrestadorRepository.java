package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrestadorRepository extends MongoRepository<UsuarioPrestador, String> {

    @Query( value = "{'credenciais' : ?0}")
    UsuarioPrestador findByCredenciais(Credenciais credenciais);

    @Query(value = "{'tipo_servico' : ?0}")
    List<UsuarioPrestador> findByTipo_servico(String servico);
}
