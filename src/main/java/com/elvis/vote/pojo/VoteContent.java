package com.elvis.vote.pojo;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class VoteContent {
    private int id;
    private int voter_id;
    private int vote_id;
    private int select_id;
    private int option_id;
    private Date vote_time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVoter_id() {
        return voter_id;
    }

    public void setVoter_id(int voter_id) {
        this.voter_id = voter_id;
    }

    public int getVote_id() {
        return vote_id;
    }

    public void setVote_id(int vote_id) {
        this.vote_id = vote_id;
    }

    public int getSelect_id() {
        return select_id;
    }

    public void setSelect_id(int select_id) {
        this.select_id = select_id;
    }

    public int getOption_id() {
        return option_id;
    }

    public void setOption_id(int option_id) {
        this.option_id = option_id;
    }

    public String getVote_time() {
        Date aa = new Timestamp(vote_time.getTime());
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date  =   df.format(aa);
        return date;
    }

    public void setVote_time(Date vote_time) {
        this.vote_time = vote_time;
    }

    @Override
    public String toString() {
        return "VoteContent{" +
                "id=" + id +
                ", voter_id=" + voter_id +
                ", vote_id=" + vote_id +
                ", select_id=" + select_id +
                ", option_id=" + option_id +
                ", vote_time=" + vote_time +
                '}';
    }
}
