package com.elvis.vote.pojo;

public class User {
    private int sno;
    private String pwd;
    private String sname;
    private int sex; //1.男  2.女
    private int age;
    private String colleage;
    private String major;
    private String grade;
    private String classes;
    private int identify; //1.教师 2.学生
    private int powerid; //权限的ID


    public int getSno() {
        return sno;
    }

    public void setSno(int sno) {
        this.sno = sno;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
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

    public int getIdentify() {
        return identify;
    }

    public void setIdentify(int identify) {
        this.identify = identify;
    }

    public int getPowerid() {
        return powerid;
    }

    public void setPowerid(int powerid) {
        this.powerid = powerid;
    }
}