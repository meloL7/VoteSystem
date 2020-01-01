package com.elvis.vote.pojo;

public class VoteRange {
    Integer vote_id;
    Integer identify;
    Integer colleage_id;
    Integer major_id;
    Integer grade_id;
    Integer classes_id;

    public VoteRange(Integer vote_id, Integer identify, Integer colleage_id, Integer major_id) {
        this.vote_id = vote_id;
        this.identify = identify;
        this.colleage_id = colleage_id;
        this.major_id = major_id;

    }

    public VoteRange(Integer vote_id, Integer identify, Integer colleage_id, Integer major_id, Integer grade_id, Integer classes_id) {
        this.vote_id = vote_id;
        this.identify = identify;
        this.colleage_id = colleage_id;
        this.major_id = major_id;
        this.grade_id = grade_id;
        this.classes_id = classes_id;
    }

    public Integer getVote_id() {
        return vote_id;
    }

    public void setVote_id(Integer vote_id) {
        this.vote_id = vote_id;
    }

    public Integer getIdentify() {
        return identify;
    }

    public void setIdentify(Integer identify) {
        this.identify = identify;
    }

    public Integer getColleage_id() {
        return colleage_id;
    }

    public void setColleage_id(Integer colleage_id) {
        this.colleage_id = colleage_id;
    }

    public Integer getMajor_id() {
        return major_id;
    }

    public void setMajor_id(Integer major_id) {
        this.major_id = major_id;
    }

    public Integer getGrade_id() {
        return grade_id;
    }

    public void setGrade_id(Integer grade_id) {
        this.grade_id = grade_id;
    }

    public Integer getClasses_id() {
        return classes_id;
    }

    public void setClasses_id(Integer classes_id) {
        this.classes_id = classes_id;
    }

    @Override
    public String toString() {
        return "VoteRange{" +
                "vote_id=" + vote_id +
                ", identify=" + identify +
                ", colleage_id=" + colleage_id +
                ", major_id=" + major_id +
                ", grade_id=" + grade_id +
                ", classes_id=" + classes_id +
                '}';
    }
}
