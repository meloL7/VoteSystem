package com.elvis.vote.services.Admin;

public interface AdminVoteServices {

    /**
     * 加载全部信息
     * @param type
     * @param vote_status
     */
    public void loadInfo(int type, int vote_status);

    /**
     * 根据条件调用方法
     * @param condition
     * @param content
     */
    public void Search(String condition, String content, int type);

    public void searchByOpenVoterName(String open_voter_name);

    public void searchByColleage(String colleage_name);

    public void searchByOpenVoterIdentify(int open_voter_identify);

    public void searchByVoteTitle(String title);

    public void searchByAllSelectNum(int all_select_num);

    public void searchByAllVoterNum(int all_voter_num);

    public void searchByNopassResult(String nopass_result);


    /**
     * 查看详情
     * @param voteid
     */
    public void watchDetail(int voteid, int type, int status);

    /**
     * 通过审核
     * @param voteid
     */
    public void passVote(int voteid);

    /**
     * 不通过审核
     * @param voteid
     * @param nopassResult
     */
    public void nopassVote(int voteid, String nopassResult);

    /**
     * 问卷分析
     * @param voteid
     */
    public void watchNaire(int voteid);




}
