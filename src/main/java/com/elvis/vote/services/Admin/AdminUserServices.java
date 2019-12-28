package com.elvis.vote.services.Admin;

import com.elvis.vote.utils.APIResult;

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
    public APIResult searchColleage();
    public APIResult searchMajor(String []colleagecontent);
    public APIResult searchGrade(String []majorcontent);
    public APIResult searchClasses(String[] gradecontent);

    public APIResult saveResult(String[]content,String sno);
    public APIResult saveResultT(String []content,String sno);




    public APIResult checkPower(String sno);

    public APIResult removePower(String sno);
    public APIResult readPower(String sno);





}
