package com.elvis.vote.services.User;

public interface AdminServices {

    /**
     * 加载用户信息
     * @param xno
     * @return
     */
    public Object loadUserInfo(String xno);

    /**
     * 查询原密码是否正确
     * @param id
     * @param oldpwd
     * @return
     */
    public boolean checkOldPwd(Long id, String oldpwd);
    /**
     * 更新用户信息
     * @param newPwd
     */
    public Boolean updateUserInfo(Long id, String newPwd);


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
