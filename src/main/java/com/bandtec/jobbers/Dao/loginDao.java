package com.bandtec.jobbers.Dao;

import com.bandtec.jobbers.connector.Connector;
import com.mongodb.*;

public class loginDao {

//    @Autowired
//    private CredenciaisRepository repository;

    private Connector connector = new Connector();

    //TODO Validação de usuario
    public String autenticaUsuario(){

        DB database = (DB) connector.conection();
        
        DBCollection collection = database.getCollection("teste");

        DBObject query = new BasicDBObject("nome", "jão");
        DBCursor cursor = collection.find(query);

        System.out.println(cursor);

//        if (repository.validation(credencias.getLogin(), credencias.getSenha())) {
//            return true;
//        }
        return cursor.toString();
    }
}
