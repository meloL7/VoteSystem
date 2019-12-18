package com.elvis.vote.pojo;

public class User {
    private int sno;
    private String pwd;
    private String email;
    private String sname;
    private int sex; //1.男  2.女
    private int age;
    private String colleage;
    private String major;
    private String grade;
    private String classes;
    private int identify; //1.教师 2.学生


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

    @Override
    public String toString() {
        return "User{" +
                "sno=" + sno +
                ", pwd='" + pwd + '\'' +
                ", email='" + email + '\'' +
                ", sname='" + sname + '\'' +
                ", sex=" + sex +
                ", age=" + age +
                ", colleage='" + colleage + '\'' +
                ", major='" + major + '\'' +
                ", grade='" + grade + '\'' +
                ", classes='" + classes + '\'' +
                ", identify=" + identify +
                '}';
    }
}