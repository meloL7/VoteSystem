package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.dao.Admin.AdminVoteDetailDao;
import com.elvis.vote.pojo.VoteContent;
import com.elvis.vote.services.Admin.AdminVoteDetailServices;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class AdminVoterDetailServicesimpl implements AdminVoteDetailServices {
    @Resource(type = AdminVoteDetailDao.class)
    AdminVoteDetailDao advdDao;


    public void test(){
        List<VoteContent> voteContents = advdDao.searchVoteContentList();
        for (VoteContent v:voteContents
             ) {
            System.out.println(v);
        }
    }


    @Override
    public void loadInfo(int type) {

    }

    @Override
    public void watchDetail(Long voterid, int voteid) {

    }
}
