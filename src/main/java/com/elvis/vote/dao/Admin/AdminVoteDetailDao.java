package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public interface AdminVoteDetailDao {
    List<VoteContent> searchVoteContentList(Integer title,String content,Integer type,Integer indexpage);

    Vote selectVoteById(Integer id);

    List<Select> selectAllSelectbyVoteid(Integer vote_id);

    User selectUserBysno(String sno);

    List<Option> selectAllOptionBySelectid(Integer select_id);

    Integer updateVoteStatusByVoteid(Integer voteid, Integer vote_status, Timestamp time);

    Integer updateVoteNopass(Integer voteid, Integer vote_status, Timestamp time, String nopass);

    //修改user_vote_connection表
    Integer updateUserVote(Integer voteid,Integer status);

}
