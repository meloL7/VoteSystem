package com.elvis.vote.services.User;

import com.elvis.vote.pojo.Student;
import com.elvis.vote.pojo.Teacher;
import com.elvis.vote.pojo.User;
import com.elvis.vote.utils.APIRequest;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;

import java.util.List;

public interface UserServices {

    /**
     * 登录
     * @param sno
     * @param pwd
     * @return
     */
    APIResult login(String sno, String pwd);

    /**
     * 更改用户密码
     * @param newPwd
     */
    APIResult updatePwd(Integer id,String oldPwd, String newPwd);


    /**
     * 加载教师/学生信息
     * @param sno
     * @return
     */
    APIResult loadUserInfo(String sno);


    /**
     * 用户是否存在
     * @param sno
     * @return
     */
    APIResult isUserExsit(String sno);

    /**
     * 忘记密码后更新密码
     * @param id
     * @param newPwd
     * @return
     */
    APIResult rePwd(Integer id,String newPwd);

    APIResult isExsitEmail(String email);


    public APIResult getSinfo(String sno);
    public APIResult getTinfo(String sno);

    APIResult regist(String sno, String identify, String email, String pwd, String sname, String sex, Integer age, String colleage, String major, String grade, String classes);


//    APIResult tregist(String sno);

    /**
     * 第一个参数是条件 ，第二个是内容
     * @param condition
     * @param content
     */
    public void search(String condition, String content);

    public void searchByTitle(String title);

    public void searchByOpenVoter(String name);

    public void searchByAllVoters(int num);

    public APIResult checkPower(String sno);

//    /**
//     *
//     * @param id
//     * @param vote_Status
//     * @param indexpage
//     * @param countRows
//     * @param pagesize
//     * @return
//     */
//    public Page loadVoteInfo(Long id,int vote_Status,int indexpage,int countRows,int pagesize);



}
