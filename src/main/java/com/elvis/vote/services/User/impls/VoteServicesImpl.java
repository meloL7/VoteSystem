package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.VoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.User.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import com.github.pagehelper.Page;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class VoteServicesImpl implements AdminVoteServices {

    @Resource(type = VoteDao.class)
    VoteDao voteDao;


    @Override
    public APIResult queryAllVote(int type, int voter_status, int indexpage, int indexsize) {

        List<Vote> votes = voteDao.selectAllVote(type, voter_status, indexpage, indexsize);
        Integer num = voteDao.selectAllNumber(type, voter_status);
        System.out.println("数据条数："+num);
        Pager pager = new Pager(num, indexpage, 10);
        pager.setData(votes);

        APIResult result = null;
        if (votes != null) {
            result = new APIResult("成功！", true, 200, pager);
        } else {
            result = new APIResult("错误！", false, 500);
        }
        System.out.println(pager);
        return result;
    }

    @Override
    public APIResult queryVoteBySearch(Integer type, Integer voter_status, Integer title, String content, Integer indexpage) {

        Pager pager = null;

        APIResult result = null;

        //按主题查询
        if(title == 0){
            Integer number = voteDao.selectVoteBySearchNumber(type, voter_status, content, null);
            pager = new Pager(number,indexpage,10);
            List<Vote> votes = voteDao.selectVoteBySearch(type, voter_status, content, null, indexpage, 10);
            pager.setData(votes);
            if(votes != null){
                result = new APIResult("",true,200,pager);
            }else {
                result = new APIResult("",false,500);
            }

        }else if(title == 1){
            Integer number = voteDao.selectVoteBySearchNumber(type, voter_status, null, content);
            pager = new Pager(number,indexpage,10);
            List<Vote> votes = voteDao.selectVoteBySearch(type, voter_status, null, content, indexpage, 10);
            pager.setData(votes);
            if(votes != null){
                result = new APIResult("",true,200,pager);
            }else {
                result = new APIResult("",false,500);
            }
        }
        return result;
    }

    @Override
    public void loadVoteInfo(Long id, int voteid, int voteType) {

    }

    @Override
    public void joinVote(Long id, int voteid, String questionJson) {

    }

    @Override
    public void cheakPower(Long id) {

    }

    @Override
    public void openNewVote(int openVoterid, int type, String title, String introduce, String allJson) {

    }

    @Override
    public void watchVoteDetail(Long id, int voteid, int type, int status) {

    }

    @Override
    public void watchAnaysis(Long id, int voteid, int type) {

    }

    @Override
    public void voteIsOver(int voteid) {

    }
}
