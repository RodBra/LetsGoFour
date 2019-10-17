package com.bandtec.jobbers.repository;

import com.bandtec.jobbers.model.Credenciais;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CredenciaisRepository extends MongoRepository<Credenciais, String> {

    //TODO ESTA QUERY
    @Query()
    Credenciais findByLoginEqualsAndSenhaEquals(String login, String senha);

}

