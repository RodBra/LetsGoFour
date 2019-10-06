package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.UsuarioContratante;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContratanteRepository extends MongoRepository<UsuarioContratante, String> {


}
