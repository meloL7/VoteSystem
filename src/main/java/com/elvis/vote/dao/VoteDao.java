package com.elvis.vote.dao;

import com.elvis.vote.pojo.Vote;
import com.github.pagehelper.Page;

public interface VoteDao {

    public Page<Vote> selectAllVote(int type);
}
