package com.elvis.vote.services.Admin;

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






    //权限管理









}
