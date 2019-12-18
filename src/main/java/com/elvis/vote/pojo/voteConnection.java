package com.elvis.vote.pojo;

import java.util.Date;

public class voteConnection {
    private int voterId;
    private int voteId;
    private int Status; //1.发布 2.待参与 3.参与


    public int getVoterId() {
        return voterId;
    }

    public void setVoterId(int voterId) {
        this.voterId = voterId;
    }

    public int getVoteId() {
        return voteId;
    }

    public void setVoteId(int voteId) {
        this.voteId = voteId;
    }

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }


}
