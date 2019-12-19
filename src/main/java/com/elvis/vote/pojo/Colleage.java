package com.elvis.vote.pojo;

public class Colleage {
    private int colleage_id;
    private String colleage_name;

    public int getColleage_id() {
        return colleage_id;
    }

    public void setColleage_id(int colleage_id) {
        this.colleage_id = colleage_id;
    }

    public String getColleage_name() {
        return colleage_name;
    }

    public void setColleage_name(String colleage_name) {
        this.colleage_name = colleage_name;
    }

    @Override
    public String toString() {
        return "colleage{" +
                "colleage_id=" + colleage_id +
                ", colleage_name='" + colleage_name + '\'' +
                '}';
    }
}
