package com.elvis.vote.services.Admin;

import com.elvis.vote.pojo.User;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;

public interface AdminUserServices {
//
//    /**
//     * 修改密码，发送邮箱告知
//     * @param id
//     */
//    boolean ResetPwd(Integer id);

    /**
     * 修改邮箱
     * @param id
     * @param newEmail
     */
    APIResult stuChangeEmail(Integer id, String newEmail);


    /**
     * 所有教师,学生列表
     * @param
     * @return
     */
    APIResult loadUserList(String identify,Integer indexpage);



    /**
     * 根据条件来查询教师，学生
     * @param
     * @return
     */
    APIResult searchUserList(Integer key, String value, String identify, Integer indexpage);













    //权限管理
    public void searchColleage();
    public void searchMajor(String colleagename);
    public void searchGrade(String colleagename,String majorname);
    public void searchClasses(String colleagename,String majorname,String gradename);










}