package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.classes;
import com.elvis.vote.pojo.colleage;
import com.elvis.vote.pojo.grade;
import com.elvis.vote.pojo.major;

import java.util.List;

public interface UserDao {





    //权限
    List<colleage> searchColleages();
    List<major> searchMajors(String colleage);
    List<grade> searchGrades(String colleage, String major);
    List<classes> searchClasses(String colleage, String major, String grade);

}
