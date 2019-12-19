package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.Vote;
import com.github.pagehelper.Page;

import java.util.List;

public interface VoteDao {

    public List<Vote> selectAllVote(int type, int voter_status, int indexpages, int pagesize);

    public Integer selectAllNumber(int type, int voter_status);

    public List<Vote> selectVoteBySearch(int type, int voter_status, String title, String voterName, int indexpages, int pagesize);

}
