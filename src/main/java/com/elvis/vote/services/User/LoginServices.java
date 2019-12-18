package com.elvis.vote.services.User;



public interface LoginServices {



    /**
     * 登录
     * @param sno
     * @param pwd
     * @return
     */
    public void userLogin(Long sno, String pwd);

    /**
     * 检查账号是否存在
     * @param id
     */
    public void checkUsernameIsExist(Long id);


}
