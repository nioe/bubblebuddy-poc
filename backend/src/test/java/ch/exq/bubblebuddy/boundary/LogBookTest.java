package ch.exq.bubblebuddy.boundary;

import ch.exq.bubblebuddy.BubbleBuddyBackendApplication;
import ch.exq.bubblebuddy.entity.LogBookEntry;
import ch.exq.bubblebuddy.entity.LogBookEntryRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import java.time.Duration;
import java.time.LocalDateTime;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = BubbleBuddyBackendApplication.class)
@WebAppConfiguration
@TestPropertySource(locations="classpath:application-test.properties")
public class LogBookTest {

    private static final LocalDateTime DIVE_DATE = LocalDateTime.now();
    private static final Duration BOTTOM_TIME = Duration.ofMinutes(55);
    private static final String DIVE_SITE = "Beautiful Reef";
    private static final float DEPTH = 22.5f;
    private static final float VISIBILITY = 12f;

    @Autowired
    private LogBookEntryRepository repository;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();

        this.repository.deleteAll();

        this.repository.insert(new LogBookEntry(DIVE_DATE, BOTTOM_TIME, DIVE_SITE, DEPTH, VISIBILITY));
    }

    @Test
    public void allLogBookEntries() throws Exception {
        mockMvc.perform(get("/logbook")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].diveDate", is(DIVE_DATE.toString())));
    }
}