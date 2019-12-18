package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.classes;
import com.elvis.vote.pojo.colleage;
import com.elvis.vote.pojo.grade;
import com.elvis.vote.pojo.major;

import java.util.List;

public interface UserDao {





    //权限
    List<colleage> searchColleages();
    List<major> searchMajors(String colleageName);
    List<grade> searchGrades(String colleageName, String majorName);
    List<classes> searchClasses(String colleageName, String majorName, String gradeName);

}
