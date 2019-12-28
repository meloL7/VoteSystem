package com.elvis.vote.dao.Admin;
import com.elvis.vote.pojo.*;
import io.swagger.models.auth.In;

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
     * 按条件来查找教师学生列表
     * @param sno
     * @param sname
     * @param colleage
     * @param major
     * @return
     */
    List<User> selectUserByValue(String sno,String sname,String colleage,String major,String grade,String classes,String identify);


    /**
     * 通过用户的ID来修改邮箱
     * @param id
     * @param email
     * @return
     */
    int updateEmail(Integer id,String email);


    /**
     * 通过用户的ID来修改密码
     * @param id
     * @param email
     * @return
     */
    int updatePwd(Integer id,String email);


    /**
     * 查看用户是否已经存在于数据库中了
     * @param email
     * @return
     */
    int isEmailExist(String email);



    //权限
    List<Colleage> searchColleages();
    List<Major> searchMajors(String colleageName);
    List<Grade> searchGrades(String colleageName, String majorName);
    List<Classes> searchClasses(String colleageName, String majorName, String gradeName);


    Integer searchColleageId(String colleagename);
    Integer searchMajorId(String colleagename,String majorname);
    Integer searchGradeId(String colleagename,String majorname,String gradename);
    Integer searchClassesId(String colleagename,String majorname,String gradename,String classesname);

    Integer addPower(String sno,Integer colleageId,Integer majorId,Integer gradeId,Integer searchClassesId);
    Integer addTPower(String sno,Integer colleageId,Integer majorId);

    List checkPower(String sno);

    Integer removePower(String sno);

    List<Power> readPower(String sno);

    String findColleageName(Integer colleageId);
    String findMajorName(Integer majorId);
    String findGradeName(Integer gradeId);
    String findClassesName(Integer classesId);


}