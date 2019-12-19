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
        Pager pager = new Pager(num, indexpage, 10);
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
