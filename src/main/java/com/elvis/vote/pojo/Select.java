package com.elvis.vote.pojo;

public class Select {
    private int id;
    private int select_id;
    private String select_tiltle;
    private int select_type;  //1为单选 2为多选
    private int vote_id;    //属于那份投票的ID

    public String getSelect_tiltle() {
        return select_tiltle;
    }

    public void setSelect_tiltle(String select_tiltle) {
        this.select_tiltle = select_tiltle;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSelect_id() {
        return select_id;
    }

    public void setSelect_id(int select_id) {
        this.select_id = select_id;
    }



    public int getSelect_type() {
        return select_type;
    }

    public void setSelect_type(int select_type) {
        this.select_type = select_type;
    }

    public int getVote_id() {
        return vote_id;
    }

    public void setVote_id(int vote_id) {
        this.vote_id = vote_id;
    }

    @Override
    public String toString() {
        return "Select{" +
                "id=" + id +
                ", select_id=" + select_id +
                ", select_tiltle='" + select_tiltle + '\'' +
                ", select_type=" + select_type +
                ", vote_id=" + vote_id +
                '}';
    }
}
