package com.elvis.vote.pojo;

import java.io.Serializable;

/**
 * 学校学生表
 */
public class Student implements Serializable {
    private String sno;
    private String sname;
    private String sex;
    private Integer age;
    private String colleage;
    private String major;
    private String grade;
    private String classes;
    private String remark;
    private char del_flag;


    public Student() {
    }

    public Student(String sno, String sname, String sex, Integer age, String colleage, String major, String grade, String classes, String remark, char del_flag) {
        this.sno = sno;
        this.sname = sname;
        this.sex = sex;
        this.age = age;
        this.colleage = colleage;
        this.major = major;
        this.grade = grade;
        this.classes = classes;
        this.remark = remark;
        this.del_flag = del_flag;
    }

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public char getDel_flag() {
        return del_flag;
    }

    public void setDel_flag(char del_flag) {
        this.del_flag = del_flag;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sno='" + sno + '\'' +
                ", sname='" + sname + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", colleage='" + colleage + '\'' +
                ", major='" + major + '\'' +
                ", grade='" + grade + '\'' +
                ", classes='" + classes + '\'' +
                ", remark='" + remark + '\'' +
                ", del_flag=" + del_flag +
                '}';
    }




}