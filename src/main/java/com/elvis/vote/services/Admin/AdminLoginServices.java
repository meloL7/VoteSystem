package com.elvis.vote.services.Admin;

public interface AdminLoginServices {
    /**
     * 管理员登录
     * @param ad_name
     * @param ad_pwd
     * @return
     */
    public Boolean adminLogin(String ad_name, String ad_pwd);


    public void checkUsernameIsExist(String ad_name);
}
