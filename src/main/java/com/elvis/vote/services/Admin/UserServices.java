package com.elvis.vote.services.Admin;

import com.elvis.vote.pojo.User;
import com.elvis.vote.utils.APIResult;

public interface UserServices {

    /**
     * 通过身份加载信息
     * @param identify
     */
    public void loadByIdentify(int identify);

    /**
     * 修改密码，发送邮箱告知
     * @param id
     */
    public void ResetPwd(Long id);

    /**
     * 修改邮箱
     * @param id
     * @param newEmail
     */
    public void stuChangeEmail(Long id, String newEmail);


    /**
     * 所有教师列表
     * @param
     * @return
     */
    APIResult loadTeacherList(String identify,Integer indexpage);


    //权限管理
    public void searchColleage();
    public void searchMajor(String colleagename);
    public void searchGrade(String colleagename,String majorname);
    public void searchClasses(String colleagename,String majorname,String gradename);










}
