package com.bandtec.jobbers.repository;

import com.bandtec.jobbers.model.Logradouro;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogradouroRepository extends MongoRepository<Logradouro, String> {

}
