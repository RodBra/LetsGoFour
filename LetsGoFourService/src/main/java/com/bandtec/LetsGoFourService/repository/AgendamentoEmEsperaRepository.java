package com.bandtec.LetsGoFourService.repository;

import com.bandtec.LetsGoFourService.model.Agendamento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgendamentoEmEsperaRepository extends MongoRepository<Agendamento, Object> {


}
