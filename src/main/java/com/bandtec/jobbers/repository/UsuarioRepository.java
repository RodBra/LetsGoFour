package com.bandtec.jobbers.repository;

import com.bandtec.jobbers.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, String> {

    //TODO ESTA QUERY
    @Query()
    Usuario findByEmail(String email);

//    @Query(value = "{'tipo_servico' : ?0}")
//    List<UsuarioPrestador> findByTipo_servico(String servico);
}
