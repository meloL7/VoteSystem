package com.elvis.vote.pojo;

public class Classes {
    private int classes_id;
    private String classes_name;
    private int grade_id;

    public int getClasses_id() {
        return classes_id;
    }

    public void setClasses_id(int classes_id) {
        this.classes_id = classes_id;
    }

    public String getClasses_name() {
        return classes_name;
    }

    public void setClasses_name(String classes_name) {
        this.classes_name = classes_name;
    }

    public int getGrade_id() {
        return grade_id;
    }

    public void setGrade_id(int grade_id) {
        this.grade_id = grade_id;
    }

    @Override
    public String toString() {
        return "classes{" +
                "classes_id=" + classes_id +
                ", classes_name='" + classes_name + '\'' +
                ", grade_id=" + grade_id +
                '}';
    }
}
