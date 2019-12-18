package com.elvis.vote.pojo;

public class major {
    private int majorId;

    private String majorName;

    private int colleage_id;

    public int getMajorId() {
        return majorId;
    }

    public void setMajorId(int majorId) {
        this.majorId = majorId;
    }

    public String getMajorName() {
        return majorName;
    }

    public void setMajorName(String majorName) {
        this.majorName = majorName;
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
                "majorId=" + majorId +
                ", majorName='" + majorName + '\'' +
                ", colleage_id=" + colleage_id +
                '}';
    }
}
