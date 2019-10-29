package com.bandtec.jobbers.repository;

import com.bandtec.jobbers.model.Credenciais;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CredenciaisRepository extends MongoRepository<Credenciais, String> {

    @Query()
    Credenciais findByLogin(Credenciais credenciais);

    @Query("'login': ?0, senha: ?1")
    boolean findByLoginEqualsAndSenhaEquals(String login, String senha);
}

