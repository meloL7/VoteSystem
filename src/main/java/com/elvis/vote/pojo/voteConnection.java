package com.elvis.vote.pojo;

import java.util.Date;

public class voteConnection {
    private int voter_id;
    private int vote_id;
    private int Status; //1.发布 2.待参与 3.参与


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

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }

    @Override
    public String toString() {
        return "voteConnection{" +
                "voter_id=" + voter_id +
                ", vote_id=" + vote_id +
                ", Status=" + Status +
                '}';
    }
}
