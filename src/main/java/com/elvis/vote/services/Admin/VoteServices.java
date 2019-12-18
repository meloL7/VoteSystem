package com.elvis.vote.services.Admin;

public interface VoteServices {

    /**
     * 加载问卷信息
     * @param type
     * @param status
     */
    public void loadNaireInfo(int type, int status);

    /**
     * 根据条件调用方法
     * @param condition
     * @param content
     */
    public void Search(String condition, String content, int type);



    /**
     * 查看详情
     * @param id
     */
    public void watchDetail(int id, int type, int status);

    /**
     * 通过审核
     * @param id
     */
    public void passVote(int id);

    /**
     * 不通过审核
     * @param id
     * @param nopassResult
     */
    public void nopassVote(int id, String nopassResult);

    /**
     * 问卷分析
     * @param id
     */
    public void watchNaire(int id);




}
