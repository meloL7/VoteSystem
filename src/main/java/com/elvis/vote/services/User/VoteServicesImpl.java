package com.elvis.vote.services.User;

import com.elvis.vote.dao.VoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.utils.APIResult;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class VoteServicesImpl implements VoteServices {

    @Resource(type = VoteDao.class)
    VoteDao voteDao;


    @Override
    public APIResult queryAllVote(int type) {

        Page<Vote> votes = voteDao.selectAllVote(type);
        APIResult result = null;
        if (votes != null) {
            result = new APIResult("成功！", true, 200, votes);
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
