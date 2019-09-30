package com.bandtec.jobbers.connector;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

public class Connector {

    public MongoDatabase conection() {

        MongoClientURI uri = new MongoClientURI(
                "mongodb+srv://Rodrigo:PepinoDenovo@jobberscluster-yqtzm.azure.mongodb.net/teste?retryWrites=true&w=majority");

        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase("teste");

        return database;
    }

}
