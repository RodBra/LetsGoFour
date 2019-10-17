package com.bandtec.jobbers.repository;

import com.bandtec.jobbers.model.Servicos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServicosRepository extends MongoRepository<Servicos, String> {

    //TODO ESTA QUERY
    @Query()
    List<Servicos> findByTipo_servico(String tipoServico);
}
