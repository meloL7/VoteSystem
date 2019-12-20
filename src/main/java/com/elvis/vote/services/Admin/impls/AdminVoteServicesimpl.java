package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminVoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.Admin.VoteServices;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AdminVoteServicesimpl implements VoteServices {
    @Resource(type = AdminVoteDao.class)
    AdminVoteDao dao;
    @Override
    public void loadInfo(int type, int vote_status) {
        List<Vote> votes = dao.searchInfo(type, vote_status);
    }


    @Override
    public void Search(String condition, String content, int type) {

    }

    @Override
    public void searchByOpenVoterName(String open_voter_name) {

    }

    @Override
    public void searchByColleage(String colleage_name) {

    }

    @Override
    public void searchByOpenVoterIdentify(int open_voter_identify) {

    }

    @Override
    public void searchByVoteTitle(String title) {

    }

    @Override
    public void searchByAllSelectNum(int all_select_num) {

    }

    @Override
    public void searchByAllVoterNum(int all_voter_num) {

    }

    @Override
    public void searchByNopassResult(String nopass_result) {

    }

    //查看问卷详情
    @Override
    public void watchDetail(int voteid, int type, int status) {

    }
    //审核成功
    @Override
    public void passVote(int voteid) {

    }

    //审核失败
    @Override
    public void nopassVote(int voteid, String nopassResult) {

    }

    //查看问卷分析
    @Override
    public void watchNaire(int voteid) {

    }
}
