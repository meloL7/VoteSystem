package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.Vote;

import java.util.List;

public interface AdminVoteDao {
    //1pass 2nopass 3wait 4timeout
    List<Vote> searchInfo(int type,int vote_status);
    //查询所有符合条件的数量
    int searchInfoAllNum(int type,int vote_status);
    //查询
    public void SearchBy(String open_voter_name,String open_voter_colleage,
                         String open_voter_identify,String title,
                         String nopass_result,  int all_select_num,
                         int all_voter_num,int type,int vote_status);
}
