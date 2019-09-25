package com.bandtec.jobbers.model;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CredenciaisRepository extends MongoRepository<Credencias, String> {

    public Credencias validation(String login, String senha);

}
