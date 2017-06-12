package ch.exq.bubblebuddy.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@Configuration
public class MongoConfig extends AbstractMongoConfiguration {

    private static final String DATABASE_NAME = "bubblebuddy";
    private static final int PORT = 27017;
    private static final String HOST = "127.0.0.1";

    @Override
    protected String getDatabaseName() {
        return DATABASE_NAME;
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(HOST, PORT);
    }
}
