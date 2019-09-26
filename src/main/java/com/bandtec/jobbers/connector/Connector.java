package com.bandtec.jobbers.connector;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoClients;

public class Connector {

	public MongoClient mongoClient() {
		final String uri = "mongodb+srv://Rodrigo:batata12@jobberscluster-yqtzm.azure.mongodb.net/teste?retryWrites=true&w=majority";

		MongoClient mongoClient = (MongoClient) MongoClients.create(uri);

        return mongoClient;
	}
}
