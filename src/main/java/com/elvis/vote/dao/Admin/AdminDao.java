package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.*;

import java.util.List;

/**
 * 后台用户dao层
 */
public interface AdminDao {
    List<User> selectAllUsers(Integer identify);















    //权限
    List<Colleage> searchColleages();
    List<Major> searchMajors(String colleageName);
    List<Grade> searchGrades(String colleageName, String majorName);
    List<Classes> searchClasses(String colleageName, String majorName, String gradeName);


}
