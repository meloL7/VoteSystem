package com.elvis.vote.services.User;

import com.elvis.vote.utils.APIResult;

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
     * 第一个参数是条件 ，第二个是内容
     * @param condition
     * @param content
     */
    public void search(String condition, String content);

    public void searchByTitle(String title);

    public void searchByOpenVoter(String name);

    public void searchByAllVoters(int num);



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
