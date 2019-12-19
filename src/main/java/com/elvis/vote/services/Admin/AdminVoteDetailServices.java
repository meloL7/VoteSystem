package com.elvis.vote.services.Admin;

public interface AdminVoteDetailServices {
    /**
     * 加载所有投票记录
     */
    public void loadInfo(int type);

    /**
     * 查看详情
     * @param voterid
     * @param voteid
     */
    public void watchDetail(Long voterid, int voteid);




}
