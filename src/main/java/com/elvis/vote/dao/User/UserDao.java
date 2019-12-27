package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.Login;
import com.elvis.vote.pojo.Student;
import com.elvis.vote.pojo.Teacher;
import com.elvis.vote.pojo.User;

import java.util.List;

public interface UserDao {


    int isUser(String sno,String pwd);

    List<User> selectOne(String sno, String pwd);

    List<Login> selectUserAndPower(String sno, String pwd);

    int updatePwd(String pwd,Integer id);

    String selectPwd(Integer id);

    List checkPower(String sno);

    /**
     * 从学校的学生表中通过学号查询这个人是否是这个学校的
     * @param sno
     * @return
     */
    Student selectStudent(String sno);

    /**
     * 从学校的教师表中通过学号查询这个老师是否是这个学校的
     * @param sno
     * @return
     */
    Teacher selectTeacher(String sno);

    /**
     * 注册
     * @param user
     * @return
     */
    int insertUser(User user);


}
