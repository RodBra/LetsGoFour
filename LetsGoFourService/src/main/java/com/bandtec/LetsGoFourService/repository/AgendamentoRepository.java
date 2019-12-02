package com.bandtec.LetsGoFourService.repository;

import com.bandtec.LetsGoFourService.model.Agendamento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AgendamentoRepository extends MongoRepository<Agendamento, String> {

    @Query("{'idPrestador' : ?0, 'data' : ?1}")
    Agendamento findByData(String idPrestador, Date data);

    @Query("{'idPrestador' : ?0 }")
    List<Agendamento> findByIdPrestador(String idPrestador);

    @Query("{'idContratante' : ?0 }")
    List<Agendamento> findByIdContratante(String idContratante);

}
