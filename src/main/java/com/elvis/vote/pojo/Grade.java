package com.elvis.vote.pojo;

public class Grade {
   private int grade_id;
   private String grade_name;
   private int major_id;

    public int getGrade_id() {
        return grade_id;
    }

    public void setGrade_id(int grade_id) {
        this.grade_id = grade_id;
    }

    public String getGrade_name() {
        return grade_name;
    }

    public void setGrade_name(String grade_name) {
        this.grade_name = grade_name;
    }

    public int getMajor_id() {
        return major_id;
    }

    public void setMajor_id(int major_id) {
        this.major_id = major_id;
    }

    @Override
    public String toString() {
        return "grade{" +
                "grade_id=" + grade_id +
                ", grade_name='" + grade_name + '\'' +
                ", major_id=" + major_id +
                '}';
    }
}
