package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.Option;
import com.elvis.vote.pojo.Select;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.pojo.VoteContent;
import com.github.pagehelper.Page;
import io.swagger.models.auth.In;
import org.omg.CORBA.PUBLIC_MEMBER;

import java.util.List;

public interface VoteDao {

    /**
     * 查询所有的问卷信息
     * @param voter_id
     * @param type
     * @param voter_status
     * @param vote_status
     * @param indexpages
     * @param pagesize
     * @return
     */
    public List<Vote> selectAllVote(int voter_id,int type, int voter_status,int vote_status, int indexpages, int pagesize);

    /**
     * 查询所有的问卷信息的总数
     * @param voter_id
     * @param type
     * @param voter_status
     * @param vote_status
     * @return
     */
    public Integer selectAllNumber(int voter_id,int type, int voter_status,int vote_status);

    /**
     * 根据条件查询所有的问卷信息
     * @param voter_id
     * @param type
     * @param voter_status
     * @param vote_status
     * @param title
     * @param voterName
     * @param totle
     * @param indexpages
     * @param pagesize
     * @return
     */
    public List<Vote> selectVoteBySearch(int voter_id,int type, int voter_status,int vote_status, String title, String voterName,Integer totle, int indexpages, int pagesize);

    /**
     * 根据查询条件查询的问卷的总数目
     * @param voter_id
     * @param type
     * @param voter_status
     * @param vote_status
     * @param title
     * @param voterName
     * @param totle
     * @return
     */
    public Integer selectVoteBySearchNumber(int voter_id,int type, int voter_status,int vote_status, String title, String voterName,Integer totle);

    public Vote selectVoteByid(Integer vote_id);

    //根据vote_id查询所有的问题
    public List<Select> selectAllSelect(Integer voter_id,Integer vote_id);

    //查询问题下的所有选项
    public List<Option> selectAllOption(Integer select_id);

    //查询用户在该题的所选的答案
    public List<Option> selectAllOptionByselectid(Integer voter_id,Integer vote_id,Integer select_id);

    //查询详情表
    public VoteContent selectAllVoteDetail(Integer voter_id,Integer vote_id);

    public Integer addVoteDetail(Integer voter_id,Integer vote_id,Integer select_id,Integer option_id);

    public Integer updateVoteConnection(Integer voter_id,Integer vote_id,Integer status);

    Integer updateVote(Integer vote_id,Integer status);
}
