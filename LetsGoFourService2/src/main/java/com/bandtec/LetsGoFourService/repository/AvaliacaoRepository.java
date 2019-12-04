package com.bandtec.LetsGoFourService.repository;

import com.bandtec.LetsGoFourService.model.Avaliacao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AvaliacaoRepository extends MongoRepository<Avaliacao, String> {

    @Query("{'idPrestador' : ?0 }")
    List<Avaliacao> findByIdPrestador(String idPrestador);

}
