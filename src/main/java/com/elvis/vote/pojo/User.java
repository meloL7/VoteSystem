package com.elvis.vote.pojo;

public class User {
    private Integer id;
    private Integer sno;
    private String pwd;
    private String email;
    private String sname;
    private String sex;
    private Integer age;
    private String colleage;
    private String major;
    private String grade;
    private String classes;
    private String remark;
    private String del_flag;
    private String identify; //教师 学生

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSno() {
        return sno;
    }

    public void setSno(Integer sno) {
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

    public String getDel_flag() {
        return del_flag;
    }

    public void setDel_flag(String del_flag) {
        this.del_flag = del_flag;
    }

    public String getIdentify() {
        return identify;
    }

    public void setIdentify(String identify) {
        this.identify = identify;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", sno=" + sno +
                ", pwd='" + pwd + '\'' +
                ", email='" + email + '\'' +
                ", sname='" + sname + '\'' +
                ", sex=" + sex +
                ", age=" + age +
                ", colleage='" + colleage + '\'' +
                ", major='" + major + '\'' +
                ", grade='" + grade + '\'' +
                ", classes='" + classes + '\'' +
                ", remark='" + remark + '\'' +
                ", del_flag='" + del_flag + '\'' +
                ", identify=" + identify +
                '}';
    }
}