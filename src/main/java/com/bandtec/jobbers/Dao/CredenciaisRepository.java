package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CredenciaisRepository extends MongoRepository<Credenciais, String> {

}
