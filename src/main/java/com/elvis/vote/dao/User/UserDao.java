package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.*;
import org.w3c.dom.ranges.Range;

import java.sql.Timestamp;
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


    /**
     * 查看用户是否已经存在于数据库中了
     * @param email
     * @return
     */
    int isEmailExist(String email);



    int addVote(Vote vote);


    int addRange1(VoteRange voteRange);
    int addRange2(VoteRange voteRange);

    int addNewSelect(Select select);

    int addNewOption(Option option);


    Integer findColleageId(String colleageName);
    Integer findMajorId(String majorName);
    Integer findGradeId(String gradeName);
    Integer findClassesId(String classesName);



}
