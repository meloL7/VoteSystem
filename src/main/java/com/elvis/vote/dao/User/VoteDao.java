package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.Vote;
import com.github.pagehelper.Page;

import java.util.List;

public interface VoteDao {

    public List<Vote> selectAllVote(int voter_id,int type, int voter_status, int indexpages, int pagesize);

    public Integer selectAllNumber(int voter_id,int type, int voter_status);

    public List<Vote> selectVoteBySearch(int voter_id,int type, int voter_status, String title, String voterName,Integer totle, int indexpages, int pagesize);

    public Integer selectVoteBySearchNumber(int voter_id,int type, int voter_status, String title, String voterName,Integer totle);
}
