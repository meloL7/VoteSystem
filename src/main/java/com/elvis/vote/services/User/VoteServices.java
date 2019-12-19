package com.elvis.vote.services.User;


import com.elvis.vote.utils.APIResult;

public interface VoteServices {

    /**
     * 查询所有vote信息，
     * type 为1，则查询所有的问卷信息，为2，则查询所有投票信息
     *
     * @param type
     * @return
     */
    public APIResult queryAllVote(int type);
    /**
     * 进入投票页面需要的数据
     * @param id
     * @param voteid
     * @param voteType
     */
    public void loadVoteInfo(Long id, int voteid, int voteType);

    /**
     * 参加投票，需要录入问卷投票结果信息
     * @param id
     * @param voteid
     * @param questionJson
     */
    public void joinVote(Long id, int voteid, String questionJson);


    /**
     * 检查是否有权限，如果有，返回权限范围
     * @param id
     */
    public void cheakPower(Long id);


    /**
     * 新建投票，后台需要录入数据库剩余所需的数据，解析JSON数据
     * @param openVoterid
     * @param type
     * @param title
     * @param introduce
     * @param allJson
     */
    public void openNewVote(int openVoterid, int type, String title, String introduce, String allJson);


    /**
     * 查看详情
     * @param id
     * @param voteid
     * @param type
     *
     */
    public void watchVoteDetail(Long id, int voteid, int type,int status);


    /**
     * 查看分析 需要去判断问卷是否结束，未结束不能查看
     * @param id
     * @param voteid
     * @param type
     */
    public void watchAnaysis(Long id, int voteid, int type);

    /**
     * 判断问卷是否结束
     * @param voteid
     */
    public void voteIsOver(int voteid);
}
