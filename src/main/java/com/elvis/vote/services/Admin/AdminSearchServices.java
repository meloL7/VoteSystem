package com.elvis.vote.services.Admin;

public interface AdminSearchServices {

    /**
     * 通过条件判断来调用哪个方法
     * @param condition
     * @param content
     */
    public void Search(String condition, String content);


    /**
     * 通过id搜索
     * @param id
     */
    public void SearchById(Long id);

    /**
     * 通过名字搜索
     * @param name
     */
    public void SearchByName(String name);

    /**
     * 通过院系搜素
     * @param colleage
     */
    public void SearchByColleage(String colleage);

    /**
     * 通过专业搜索
     * @param major
     */
    public void SearchByMajor(String major);

    /**
     * 通过年级查询
     * @param grade
     */
    public void SearchByGrade(String grade);

    /**
     * 通过班级搜索
     * @param classes
     */
    public void SearchByClasses(String classes);

    /**
     * 根据发起人姓名查询
     * @param openvoter
     */
    public void searchByOpenvoter(String openvoter, int type);

    /**
     * 根据身份查询
     * @param identify
     * @param type
     */
    public void searchByIdentify(String identify, int type);

    /**
     * 根据标题查询
     * @param title
     * @param type
     */
    public void searchByTitle(String title, int type);

    /**
     * 根据题目个数查询
     * @param num
     * @param type
     */
    public void searchByQuestionNum(String num, int type);

    /**
     * 通过未通过原因查询
     * @param result
     */
    public void searchByNopassResult(String result, int type);

    /**
     * 通过参与人数查询
     * @param allvoterNum
     */
    public void searchByAllVoter(int allvoterNum, int type);

    /**
     * 通过性别查询
     * @param sex
     */
    public void searchBySex(String sex);

}
