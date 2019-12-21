package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.Vote;

import java.util.List;

public interface AdminVoteDao {
    //1pass 2nopass 3wait 4timeout
    List<Vote> searchInfo(int type,int vote_status);
    //查询所有符合条件的数量
    int searchInfoAllNum(int type,int vote_status);
    //查询
    public List<Vote> SearchBy(String open_voter_name,String open_voter_colleage,
                               Integer open_voter_identify,String title,
                               String nopass_result,  Integer all_select_num,
                               Integer all_voter_num,Integer type,Integer vote_status);
    public int SearchCount(String open_voter_name,String open_voter_colleage,
                           Integer open_voter_identify,String title,
                           String nopass_result,  Integer all_select_num,
                           Integer all_voter_num,Integer type,Integer vote_status);
}
