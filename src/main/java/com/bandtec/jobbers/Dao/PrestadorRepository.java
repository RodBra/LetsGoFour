package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PrestadorRepository extends MongoRepository<UsuarioPrestador, String> {
}
