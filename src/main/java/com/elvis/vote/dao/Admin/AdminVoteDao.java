package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.User;
import com.elvis.vote.pojo.Vote;
import io.swagger.models.auth.In;

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


    //查找所有的投票信息
    List<Vote> selectAllVote(Integer type,String open_voter,String open_voter_name,
                             Integer open_voter_identify,String title,Integer indexpage,Integer pagesize);


    //查找投票信息总数
    Integer searchAllVoteNumber(Integer type,String open_voter,String open_voter_name,
                             Integer open_voter_identify,String title,Integer indexpage);

    List<Vote> selectAllVoteBySex(Integer type,String sex,Integer indexpage,Integer pagesize);

    Integer selectAllVoteBySexNumber(Integer type,String sex,Integer indexpage);

    //查找用户信息
    User selectUserByid(Integer id);

}
