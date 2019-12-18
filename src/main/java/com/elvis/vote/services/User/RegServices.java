package com.elvis.vote.services.User;

public interface RegServices {

    /**
     * 检查学校的学生库是否存在该学号
     * @param id
     */
    public void checkSchoolStunameIsExist(Long id);

    /**
     * 检查学校的教师库是否存在该工号
     * @param id
     */
    public void checkSchoolTecnameIsExist(Long id);


    /**
     * 检查系统的库是否存在该号码
     * @param id
     */
    public void checkUsernameIsExist(Long id, int indentify);



    /**
     * 检查学号是否已经注册
     * 从学校提供的数据中获取学生学号是否存在，查询返回信息
     * @param sno
     * @return
     */
    public boolean checkStuReg(Long sno);

    /**
     * 检查工号是否已经注册
     * 从学校提供的数据中获取老师工号是否存在,查询返回信息
     * @param tno
     * @return
     */
    public boolean checkTecReg(Long tno);

    /**
     * 检查邮箱是否被注册
     * @param email
     * @return
     */
    public Boolean checkEmailExist(String email);





    /**
     * 获取验证码
     * @param email
     * @return
     */
    public Integer getKeyCode(String email);

    /**
     * 检查验证码是否输入正确
     */
    public void checkKeyCodeIsCorrect();



    /**
     * 用户注册
     * @param sno
     * @param pwd
     * @param name
     * @param sex
     * @param age
     * @param colleage
     * @param major
     * @param classes
     * @param email
     * @param identify //0是学生 1是教师
     * @return
     */
    public Boolean tecReg(Long sno, String pwd, String name,
                          String sex, String age, String colleage,
                          String major, String classes, String email, int identify);
}
