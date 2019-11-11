package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrestadorRepository extends MongoRepository<UsuarioPrestador, String> {

    @Query("{ 'credenciais' : ?0 }")
    UsuarioPrestador findByCredenciais(Credenciais credenciais);

    @Query("{ 'credenciais' : {'login' : ?0 }}")
    UsuarioPrestador findByLogin(String login);

    @Query("{ 'tipo_servico' : ?0 }")
    List<UsuarioPrestador> findByServico(String servico);

    @Query("{ 'nome' : ?0 }")
    List<UsuarioPrestador> findByNome(String nome);
}
