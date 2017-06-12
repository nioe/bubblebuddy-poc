package ch.exq.bubblebuddy.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.geo.Distance;

import java.time.Duration;
import java.time.LocalDateTime;

public class LogBookEntry {

    @Id
    private String id;

    private LocalDateTime diveDate;
    private Duration bottomTime;
    private String diveSite;
    private Float depth;
    private Float visibility;

    public LogBookEntry() {
    }

    public LogBookEntry(LocalDateTime diveDate, Duration bottomTime, String diveSite, Float depth, Float visibility) {
        this.diveDate = diveDate;
        this.bottomTime = bottomTime;
        this.diveSite = diveSite;
        this.depth = depth;
        this.visibility = visibility;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDateTime getDiveDate() {
        return diveDate;
    }

    public void setDiveDate(LocalDateTime diveDate) {
        this.diveDate = diveDate;
    }

    public Duration getBottomTime() {
        return bottomTime;
    }

    public void setBottomTime(Duration bottomTime) {
        this.bottomTime = bottomTime;
    }

    public String getDiveSite() {
        return diveSite;
    }

    public void setDiveSite(String diveSite) {
        this.diveSite = diveSite;
    }

    public Float getDepth() {
        return depth;
    }

    public void setDepth(Float depth) {
        this.depth = depth;
    }

    public Float getVisibility() {
        return visibility;
    }

    public void setVisibility(Float visibility) {
        this.visibility = visibility;
    }

    @Override
    public String toString() {
        return "LogBookEntry{" +
                "id='" + id + '\'' +
                ", diveDate=" + diveDate +
                ", bottomTime=" + bottomTime +
                ", diveSite='" + diveSite + '\'' +
                ", depth=" + depth +
                ", visibility=" + visibility +
                '}';
    }
}
