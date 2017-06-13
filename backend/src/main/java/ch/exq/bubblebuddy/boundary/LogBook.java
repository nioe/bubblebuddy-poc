package ch.exq.bubblebuddy.boundary;

import ch.exq.bubblebuddy.control.exceptions.EntryNotFoundException;
import ch.exq.bubblebuddy.entity.LogBookEntry;
import ch.exq.bubblebuddy.entity.LogBookEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/logbook")
@CrossOrigin
@EnableAutoConfiguration
public class LogBook {

    @Autowired
    private LogBookEntryRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<LogBookEntry> getAllLogBookEntries() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public LogBookEntry getLogBookEntryWithId(@PathVariable String id) {
        LogBookEntry entry = repository.findOne(id);

        if (entry != null) {
            return entry;
        }

        throw new EntryNotFoundException("The Log Book entry with the id " + id + " could not be found.");
    }

    @RequestMapping(method = RequestMethod.PUT)
    public LogBookEntry updateLogBookEntryWithId(@RequestBody LogBookEntry logBookEntry) {
        return repository.save(logBookEntry);
    }

    @RequestMapping(method = RequestMethod.POST)
    public LogBookEntry createLogBookEntryWithId(@RequestBody LogBookEntry logBookEntry) {
        return repository.insert(logBookEntry);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteLogBookEntryWithId(@PathVariable String id) {
        repository.delete(id);
    }
}

