package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.*;

import java.util.List;

public interface UserDao {
    //权限
    List<Colleage> searchColleages();
    List<Major> searchMajors(String colleageName);
    List<Grade> searchGrades(String colleageName, String majorName);
    List<Classes> searchClasses(String colleageName, String majorName, String gradeName);


    List<User> selectAllUsers(Integer identify);


}
