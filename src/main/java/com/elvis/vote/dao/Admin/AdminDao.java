package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.*;

import java.util.List;

/**
 * 后台用户dao层
 */
public interface AdminDao {
    /**
     * 后台教师，学生列表
     * @param identify
     * @return
     */
    List<User> selectAllUsers(String identify);

    /**
     *
     * @param sno
     * @param sname
     * @param colleage
     * @param major
     * @return
     */
    List<User> selectUserByValue(String sno,String sname,String colleage,String major,String grade,String classes,String identify);













    //权限
    List<Colleage> searchColleages();
    List<Major> searchMajors(String colleageName);
    List<Grade> searchGrades(String colleageName, String majorName);
    List<Classes> searchClasses(String colleageName, String majorName, String gradeName);

    //大小
    Integer searchColleagesNum();
    Integer searchMajorsNum(String colleageName);
    Integer searchGradesNum(String colleageName, String majorName);
    Integer searchClassesNum(String colleageName, String majorName, String gradeName);


}
