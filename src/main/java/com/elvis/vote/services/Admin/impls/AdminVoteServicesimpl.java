package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminVoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.Admin.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AdminVoteServicesimpl implements AdminVoteServices {
    @Resource(type = AdminVoteDao.class)
    AdminVoteDao dao;


    @Override
    public APIResult loadInfo(int type, int vote_status, int indexPage, int pageSize) {
        List<Vote> votes = dao.searchInfo(type, vote_status);
        int countrows = dao.searchInfoAllNum(type, vote_status);

        System.out.println("countRows"+countrows);
        System.out.println(votes.get(0));
        Pager pager = new Pager(countrows,indexPage,10);
        pager.setData(votes);

        APIResult result = null;
        if (votes != null) {
            result = new APIResult("成功！", true, 200, pager);
        } else {
            result = new APIResult("错误！", false, 500);
        }
       return result;
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
