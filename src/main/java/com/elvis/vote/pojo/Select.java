package com.elvis.vote.pojo;

public class Select {
    private int id;
    private int select_id;
    private String select_title;
    private int select_type;  //1为单选 2为多选
    private int vote_id;    //属于那份投票的ID

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

    public String getSelect_title() {
        return select_title;
    }

    public void setSelect_title(String select_title) {
        this.select_title = select_title;
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
        return "select{" +
                "id=" + id +
                ", select_id=" + select_id +
                ", select_title='" + select_title + '\'' +
                ", select_type=" + select_type +
                ", vote_id=" + vote_id +
                '}';
    }
}
