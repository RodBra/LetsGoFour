package com.bandtec.jobbers.config;

import com.mongodb.WriteConcern;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.WriteConcernResolver;

@Configuration
public class MongoConfig {

    @Bean
    public WriteConcernResolver writeConcernResolver(){
        return action -> {
            System.out.println("Usando Write Concern de Majority");
            return WriteConcern.MAJORITY;
        };
    }

}
