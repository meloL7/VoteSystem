package com.elvis.vote.pojo;

import java.io.Serializable;

public class Login implements Serializable {
    private Integer id;
    private String sno;
    private String email;
    private String sname;
    private String identify; //教师 学生
    private String sex;
    private Integer age;
    private String colleage;
    private String major;
    private String grade;
    private String classes;
    private String colleage_name;
    private String major_name;
    private String grade_name;
    private String classes_name;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getIdentify() {
        return identify;
    }

    public void setIdentify(String identify) {
        this.identify = identify;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getColleage() {
        return colleage;
    }

    public void setColleage(String colleage) {
        this.colleage = colleage;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getColleage_name() {
        return colleage_name;
    }

    public void setColleage_name(String colleage_name) {
        this.colleage_name = colleage_name;
    }

    public String getMajor_name() {
        return major_name;
    }

    public void setMajor_name(String major_name) {
        this.major_name = major_name;
    }

    public String getGrade_name() {
        return grade_name;
    }

    public void setGrade_name(String grade_name) {
        this.grade_name = grade_name;
    }

    public String getClasses_name() {
        return classes_name;
    }

    public void setClasses_name(String classes_name) {
        this.classes_name = classes_name;
    }

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", sno='" + sno + '\'' +
                ", email='" + email + '\'' +
                ", sname='" + sname + '\'' +
                ", identify='" + identify + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", colleage='" + colleage + '\'' +
                ", major='" + major + '\'' +
                ", grade='" + grade + '\'' +
                ", classes='" + classes + '\'' +
                ", colleage_name='" + colleage_name + '\'' +
                ", major_name='" + major_name + '\'' +
                ", grade_name='" + grade_name + '\'' +
                ", classes_name='" + classes_name + '\'' +
                '}';
    }
}
