package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.VoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.User.VoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class VoteServicesImpl implements VoteServices {

    @Resource(type = VoteDao.class)
    VoteDao voteDao;


    @Override
    public APIResult queryAllVote(int voter_id,int type, int voter_status, int indexpage, int indexsize) {
        List<Vote> votes = null;
        Integer num = 0;
        APIResult result = null;
        try{
            votes = voteDao.selectAllVote(voter_id,type, voter_status, indexpage, indexsize);
            num = voteDao.selectAllNumber(voter_id,type, voter_status);
            System.out.println("数据条数："+num);
            Pager pager = new Pager(num, indexpage, 10);
            pager.setData(votes);

            if (votes.size() > 0) {
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("对不起，没有你想要的数据~~", false, 200);
            }
        }catch (Exception e){
            result = new APIResult("出现异常！",false,500);
        }

        return result;
    }

    @Override
    public APIResult queryVoteBySearch(Integer voter_id,Integer type, Integer voter_status, Integer title, String content, Integer indexpage) {

        Pager pager = null;
        APIResult result = null;

        try{
            /**
             * voter_status为1时，分为按标题查和人数查
             * 按人数查时，需要将字符串转为数组，捕捉异常
             */
            if(voter_status == 1){
                try{
                    //标题查
                    if(title == 0){
                        Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status, content, null,null);
                        pager = new Pager(number,indexpage,10);
                        List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status, content, null,null, indexpage, 10);
                        pager.setData(votes);

                        if(votes.size() > 0){
                            result = new APIResult("",true,200,pager);
                        }else {
                            result = new APIResult("对不起，没有你想要的数据~~",false,200);
                        }

                    }else if(title == 1){ //人数查
                        Integer totle = Integer.valueOf(content);
                        Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status, null, null,totle);
                        pager = new Pager(number,indexpage,10);

                        List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status, null, null,totle, indexpage, 10);

                        pager.setData(votes);
                        if(votes.size() > 0){
                            result = new APIResult("",true,200,pager);
                        }else {
                            result = new APIResult("对不起，没有你想要的数据~~",false,200);
                        }
                    }
                }catch (Exception e){
                    result = new APIResult("对不起，查询请输入正确的格式~~",false,200);
                }
            }else {
                if(title == 0){
                    Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status, content, null,null);
                    pager = new Pager(number,indexpage,10);
                    List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status, content, null, null,indexpage, 10);
                    pager.setData(votes);

                    if(votes.size() > 0){
                        result = new APIResult("",true,200,pager);
                    }else {
                        result = new APIResult("对不起，没有你想要的数据~~",false,200);
                    }

                }else if(title == 1){ //按发起人查
                    Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status, null, content,null);
                    pager = new Pager(number,indexpage,10);
                    List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status, null, content,null, indexpage, 10);

                    pager.setData(votes);
                    if(votes.size() > 0){
                        result = new APIResult("",true,200,pager);
                    }else {
                        result = new APIResult("对不起，没有你想要的数据~~",false,200);
                    }
                }
            }
        }catch (Exception e){
            result = new APIResult("出现异常！",false,500);
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
