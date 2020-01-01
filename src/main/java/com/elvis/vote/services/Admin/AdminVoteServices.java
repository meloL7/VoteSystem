package com.elvis.vote.services.Admin;

import com.elvis.vote.utils.APIResult;

public interface AdminVoteServices {

    /**
     * 加载全部信息
     * @param type
     * @param vote_status
     * @return
     */
    public APIResult loadInfo(Integer type, Integer vote_status,Integer indexPage,Integer pageSize);

    /**
     * 根据条件调用方法
     * @param condition
     * @param content
     * @return
     */
    public APIResult Search(String condition, String content, Integer type, Integer vote_status,Integer indexPage,Integer pageSize);




    /**
     * 查看详情
     * @param voteid
     */
    public void watchDetail(Integer voteid, Integer type, Integer status);

    /**
     * 通过审核
     * @param voteid
     */
    public void passVote(Integer voteid);

    /**
     * 不通过审核
     * @param voteid
     * @param nopassResult
     */
    public void nopassVote(Integer voteid, String nopassResult);

    /**
     * 问卷分析
     * @param voteid
     */
    public void watchNaire(Integer voteid);


    /**
     * 加载所有投票记录
     * title 表示按照什么查
     *  content表示搜索的内容
     *  type 表示的是问卷还是投票
     *  indexpage 表示当前页
     */
    public APIResult queryAllVote(Integer title,String content,Integer type,Integer indexpage);



}
