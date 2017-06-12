package ch.exq.bubblebuddy.entity;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LogBookEntryRepository extends MongoRepository<LogBookEntry, String> {


}
