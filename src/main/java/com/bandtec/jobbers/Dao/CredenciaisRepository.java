package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.model.Credenciais;
import com.bandtec.jobbers.model.Usuario;
import com.bandtec.jobbers.model.UsuarioPrestador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


//Acredito que tenha que criar uma interface pra cada tabela
//ou seja uma interface pra usuario prestador e outra para  usuario contratante
@Repository
public interface CredenciaisRepository extends MongoRepository<UsuarioPrestador, String> {


    boolean findByCredenciais(Credenciais credenciais);

}
