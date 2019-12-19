package com.elvis.vote.pojo;

public class Major {
    private int major_id;

    private String major_name;

    private int colleage_id;

    public int getMajor_id() {
        return major_id;
    }

    public void setMajor_id(int major_id) {
        this.major_id = major_id;
    }

    public String getMajor_name() {
        return major_name;
    }

    public void setMajor_name(String major_name) {
        this.major_name = major_name;
    }

    public int getColleage_id() {
        return colleage_id;
    }

    public void setColleage_id(int colleage_id) {
        this.colleage_id = colleage_id;
    }

    @Override
    public String toString() {
        return "major{" +
                "major_id=" + major_id +
                ", major_name='" + major_name + '\'' +
                ", colleage_id=" + colleage_id +
                '}';
    }
}
