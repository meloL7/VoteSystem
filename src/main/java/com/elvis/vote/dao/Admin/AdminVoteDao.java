package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.Vote;

import java.util.List;

public interface AdminVoteDao {
    //1pass 2nopass 3wait 4timeout
    List<Vote> searchInfo(int type,int vote_status);
    //查询所有符合条件的数量
    int searchInfoAllNum(int type,int vote_status);
}
