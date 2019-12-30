package com.elvis.vote.services.Admin;

import com.elvis.vote.utils.APIResult;

public interface AdminVoteDetailServices {

    /**
     * 查看vite的详情
     * @param vote_id
     * @return
     */
    public APIResult queryAdminVoteDetail(Integer vote_id);

    /**
     * 退回审核
     * @param voteid
     * @param nopass 理由
     * @return
     */
    public APIResult voteNopass(Integer voteid,String nopass);

    /**
     * 通过审核
     * @param voteid
     * @return
     */
    public APIResult votePass(Integer voteid);

    /**
     * 查看详情
     * @param voterid
     * @param voteid
     */
    public void watchDetail(Long voterid, int voteid);





}
