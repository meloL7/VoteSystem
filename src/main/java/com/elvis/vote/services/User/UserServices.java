package com.elvis.vote.services.User;

import com.elvis.vote.utils.APIResult;

public interface UserServices {

    APIResult login(String sno, String pwd);


    /**
     * 加载用户信息
     * @param sno
     * @return
     */
    public APIResult loadUserInfo(String sno);

    /**
     * 查询原密码是否正确
     * @param sno
     * @param oldpwd
     * @return
     */
    public boolean checkOldPwd(String sno, String oldpwd);

    /**
     * 更改用户密码
     * @param newPwd
     */
    public Boolean updatePwd(String sno, String newPwd);



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