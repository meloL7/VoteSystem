package com.elvis.vote.services.User;



public interface AppealServices {
    /**
     * 通过身份和学号/工号获取该对象，如果返回对象为空，则为不存在
     * @param identify
     * @param sno
     * @return
     */
    public Object checkName(String identify, String sno);

    /**
     * 发送找回密码验证码
     * @param email
     */
    public void sendKeycodes(String email);

    /**
     * 检查验证码是否正确
     */
    public void checkKeycodeIscorrect();

    /**
     * 重置密码
     * @param newPWD
     */
    public void resetPWD(Long id, int idetnify, String newPWD);


}
