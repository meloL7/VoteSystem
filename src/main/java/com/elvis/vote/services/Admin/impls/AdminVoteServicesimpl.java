package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminVoteDao;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.Admin.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class AdminVoteServicesimpl implements AdminVoteServices {
    @Resource(type = AdminVoteDao.class)
    AdminVoteDao dao;




    @Override
    public APIResult loadInfo(int type, int vote_status, int indexPage, int pageSize) {
        List<Vote> votes = dao.searchInfo(type, vote_status);
        int countrows = dao.searchInfoAllNum(type, vote_status);

//        System.out.println("countRows"+countrows);
//        System.out.println(votes.get(0));
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
    public APIResult Search(String condition, String content, int type, int vote_status)throws Exception {
        APIResult result = null;
        if(condition.equals("发起人员")){
            List<Vote> votes = dao.SearchBy(content,null,
                    null,null,
                    null,-1,-1
                     ,type,vote_status);
            int countrows = dao.SearchCount(content, null,
                    null, null,
                    null, -1, -1
                    , type, vote_status);
//            System.out.println(countrows);
//            System.out.println(votes);

        }else if(condition.equals("院系")){
            List<Vote> votes = dao.SearchBy(null,content,
                    null,null,
                    null,-1,-1
                    ,type,vote_status);

            int countrows = dao.SearchCount(null, content,
                    null, null,
                    null, -1, -1
                    , type, vote_status);

        }else if(condition.equals("身份")){
            List<Vote> votes = dao.SearchBy(null,null,
                    content,null,
                    null,-1,-1
                    ,type,vote_status);

            int countrows = dao.SearchCount(null, null,
                    content, null,
                    null, -1, -1
                    , type, vote_status);


        }else if(condition.equals("问卷标题")){
            List<Vote> votes = dao.SearchBy(null,null,
                    null,content,
                    null,-1,-1
                    ,type,vote_status);
            int countrows = dao.SearchCount(null, null,
                    null, content,
                    null, -1, -1
                    , type, vote_status);


        }else if(condition.equals("未通过原因")){
            List<Vote> votes = dao.SearchBy(null,null,
                    null,null,
                    content,-1,-1
                    ,type,vote_status);
            int countrows = dao.SearchCount(null, null,
                    null, null,
                    content, -1, -1
                    , type, vote_status);


        }else if(condition.equals("题目个数")){
            Integer all_select_num = -1;
            try{
                 all_select_num = parseInt(content);
            }catch (Exception e){
                all_select_num = -1;
                throw new Exception("参数类型转换错误");
            }finally {
                List<Vote> votes = dao.SearchBy(content,null,
                        null,null,
                        null,all_select_num,-1
                        ,type,vote_status);
                int countrows = dao.SearchCount(content, null,
                        null, null,
                        null, all_select_num, -1
                        , type, vote_status);


            }



        }else if(condition.equals("参与人数")){

            Integer all_voter_num = -1;
            try{
                all_voter_num = parseInt(content);
            }catch (Exception e){
                all_voter_num = -1;
                throw new Exception("参数类型转换错误");
            }finally {
                List<Vote> votes = dao.SearchBy(content,null,
                        null,null,
                        null,-1,all_voter_num
                        ,type,vote_status);

                final int countrows = dao.SearchCount(content, null,
                        null, null,
                        null, -1, all_voter_num
                        , type, vote_status);
            }
        }else{
            result = new APIResult("搜索条件错误",false,500);
        }
        return null;
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
