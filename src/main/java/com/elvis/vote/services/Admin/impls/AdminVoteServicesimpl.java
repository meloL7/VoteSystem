package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminVoteDao;
import com.elvis.vote.dao.Admin.AdminVoteDetailDao;
import com.elvis.vote.pojo.User;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.services.Admin.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.numberOfLeadingZeros;
import static java.lang.Integer.parseInt;

@Service
public class AdminVoteServicesimpl implements AdminVoteServices {
    @Resource(type = AdminVoteDao.class)
    AdminVoteDao dao;

    @Resource(type = AdminVoteDetailDao.class)
    AdminVoteDetailDao voteDetailDao;




    @Override
    public APIResult loadInfo(Integer type, Integer vote_status,Integer indexPage, Integer pageSize) {
        APIResult result = null;
        int countrows = dao.searchInfoAllNum(type, vote_status);
        System.out.println(countrows);
        if(countrows>0){
            Pager pager = new Pager(countrows,indexPage,pageSize);
            Integer beginrows = pager.getBeginrows();
            List<Vote> votes = dao.searchInfo(type, vote_status,beginrows,pageSize);
            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
        }else {
            result = new APIResult("错误！", false, 500);
        }



       return result;
    }

    @Override
    public APIResult Search(String condition, String content, Integer type, Integer vote_status,Integer indexPage,Integer pageSize){
        APIResult result = null;

        if(condition.equals("发起人员")){
            int countrows = dao.SearchCount(content, null,
                    null, null,
                    null, null, null
                    , type, vote_status);
            System.out.println(countrows);
            Pager pager = new Pager(countrows,indexPage,8);
            Integer beginrows = pager.getBeginrows();
            List<Vote> votes = dao.SearchBy(content,null,
                    null,null,
                    null,null,null
                    ,type,vote_status, beginrows,pageSize);


            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
            return result;

        }else if(condition.equals("院系")){


            int countrows = dao.SearchCount(null, content,
                    null, null,
                    null, null, null
                    , type, vote_status);

            Pager pager = new Pager(countrows,indexPage,8);
            Integer beginrows = pager.getBeginrows();

            List<Vote> votes = dao.SearchBy(null,content,
                    null,null,
                    null,null,null
                    ,type,vote_status,beginrows,pageSize);


            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
            return result;

        }else if(condition.equals("身份")){
            Integer open_voter_identify = 0;
            if(content.equals("教师")){
                open_voter_identify=1;
            }else if(content.equals("学生")){
                open_voter_identify=2;
            }

            int countrows = dao.SearchCount(null, null,
                    open_voter_identify, null,
                    null, null, null
                    , type, vote_status);
            Pager pager = new Pager(countrows, indexPage, 8);
            Integer beginrows = pager.getBeginrows();

            List<Vote> votes = dao.SearchBy(null, null,
                        open_voter_identify, null,
                        null, null, null
                        , type, vote_status,beginrows,pageSize);

                if (votes != null) {
                    pager.setData(votes);
                    result = new APIResult("成功！", true, 200, pager);
                } else {
                    result = new APIResult("错误！", false, 500);
                }
                return result;

        }
            else if(condition.equals("问卷标题")){

            int countrows = dao.SearchCount(null, null,
                    null, content,
                    null, null, null
                    , type, vote_status);
            Pager pager = new Pager(countrows,indexPage,8);
            Integer beginrows = pager.getBeginrows();
            List<Vote> votes = dao.SearchBy(null,null,
                    null,content,
                    null,null,null
                    ,type,vote_status,beginrows,pageSize);



            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
            return result;

        }
        else if(condition.equals("选择标题")){

            int countrows = dao.SearchCount(null, null,
                    null, content,
                    null, null, null
                    , type, vote_status);
            Pager pager = new Pager(countrows,indexPage,10);
            Integer beginrows = pager.getBeginrows();
            List<Vote> votes = dao.SearchBy(null,null,
                    null,content,
                    null,null,null
                    ,type,vote_status,beginrows,pageSize);



            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
            return result;

        }
            else if(condition.equals("未通过原因")){

            int countrows = dao.SearchCount(null, null,
                    null, null,
                    content, null, null
                    , type, vote_status);
            Pager pager = new Pager(countrows,indexPage,8);
            Integer beginrows = pager.getBeginrows();
            List<Vote> votes = dao.SearchBy(null,null,
                    null,null,
                    content,null,null
                    ,type,vote_status,beginrows,pageSize);



            if (votes != null) {
                pager.setData(votes);
                result = new APIResult("成功！", true, 200, pager);
            } else {
                result = new APIResult("错误！", false, 500);
            }
            return result;

        }else if(condition.equals("题目个数")){
            Integer all_select_num = -1;
            try{
                 all_select_num = parseInt(content);
            }catch (Exception e){
                all_select_num = -1;
                throw new Exception("参数类型转换错误");
            }finally {

                int countrows = dao.SearchCount(null, null,
                        null, null,
                        null, all_select_num, null
                        , type, vote_status);
                Pager pager = new Pager(countrows,indexPage,8);
                Integer beginrows = pager.getBeginrows();
                List<Vote> votes = dao.SearchBy(null,null,
                        null,null,
                        null,all_select_num,null
                        ,type,vote_status,beginrows,pageSize);


                if (votes != null) {
                    pager.setData(votes);
                    result = new APIResult("成功！", true, 200, pager);
                } else {
                    result = new APIResult("错误！", false, 500);
                }
                return result;
            }

        }else if(condition.equals("参与人数")){

            Integer all_voter_num = -1;
            try{
                all_voter_num = parseInt(content);
            }catch (Exception e){
                all_voter_num = -1;
                throw new Exception("参数类型转换错误");
            }finally {


                int countrows = dao.SearchCount(null, null,
                        null, null,
                        null, null, all_voter_num
                        , type, vote_status);
                Pager pager = new Pager(countrows,indexPage,10);
                Integer beginrows = pager.getBeginrows();
                List<Vote> votes = dao.SearchBy(null,null,
                        null,null,
                        null,null,all_voter_num
                        ,type,vote_status,beginrows,pageSize);



                if (votes != null) {
                    pager.setData(votes);
                    result = new APIResult("成功！", true, 200, pager);
                } else {
                    result = new APIResult("错误！", false, 500);
                }
                return result;
            }
        }else{
            result = new APIResult("搜索条件错误",false,500);
        }
        return null;
    }


    //查看问卷详情
    @Override
    public void watchDetail(Integer voteid, Integer type, Integer status) {

    }
    //审核成功
    @Override
    public void passVote(Integer voteid) {

    }

    //审核失败
    @Override
    public void nopassVote(Integer voteid, String nopassResult) {

    }

    //查看问卷分析
    @Override
    public void watchNaire(Integer voteid) {

    }

    @Override
    public APIResult queryAllVote(Integer title, String content, Integer type, Integer indexpage) {

        Pager pager = null;
        APIResult result = null;
        ArrayList<Object> data = new ArrayList<>();
        if(title == 0){
            Integer num = dao.searchAllVoteNumber(type, null, null, null, null, indexpage);
            pager = new Pager(num,indexpage,10);

            if(num == 0){
                result = new APIResult("对不起，没有您想要的数据！",true,200);
                return result;
            }else {
                List<Vote> votes = dao.selectAllVote(type, null, null, null, null, pager.getBeginrows(),10);
                ArrayList users = new ArrayList();
                for (int i = 0; i < votes.size(); i++) {
                    User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                    users.add(user);
                }
                pager.setData(votes);
                data.add(pager);
                data.add(users);
                result = new APIResult("",true,200,data);
            }
        }else if(title == 1){     //按照投票人id查
            Integer num = dao.searchAllVoteNumber(type, content, null, null, null, indexpage);
            pager = new Pager(num,indexpage,10);
            if(num == 0){
                result = new APIResult("对不起，没有您想要的数据！",true,200);
                return result;
            }else {
                List<Vote> votes = dao.selectAllVote(type, content, null, null, null, pager.getBeginrows(),10);
                ArrayList users = new ArrayList();
                for (int i = 0; i < votes.size(); i++) {
                    User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                    users.add(user);
                }

                pager.setData(votes);
                data.add(pager);
                data.add(users);
                result = new APIResult("",true,200,data);
            }

        }else if(title == 2){   //按照投票人姓名查
            Integer num = dao.searchAllVoteNumber(type, null, content, null, null, indexpage);
            pager = new Pager(num,indexpage,10);
            if(num == 0){
                result = new APIResult("对不起，没有您想要的数据！",true,200);
                return result;
            }else {
                List<Vote> votes = dao.selectAllVote(type, null, content, null, null, pager.getBeginrows(),10);
                ArrayList users = new ArrayList();
                for (int i = 0; i < votes.size(); i++) {
                    User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                    users.add(user);
                }

                pager.setData(votes);
                data.add(pager);
                data.add(users);
                result = new APIResult("",true,200,data);
            }

        }else if(title == 3){   //按照投票人身份查
            if(content.equals("学生")){
                Integer num = dao.searchAllVoteNumber(type, null, null, 2, null, indexpage);
                pager = new Pager(num,indexpage,10);
                if(num == 0){
                    result = new APIResult("对不起，没有您想要的数据！",true,200);
                }else {
                    List<Vote> votes = dao.selectAllVote(type, null, null, 2, null, pager.getBeginrows(),10);
                    ArrayList users = new ArrayList();
                    for (int i = 0; i < votes.size(); i++) {
                        User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                        users.add(user);
                    }

                    pager.setData(votes);
                    data.add(pager);
                    data.add(users);
                    result = new APIResult("",true,200,data);
                }

            }else if(content.equals("教师")){
                Integer num = dao.searchAllVoteNumber(type, null, null, 1, null, indexpage);
                pager = new Pager(num,indexpage,10);
                if(num == 0){
                    result = new APIResult("对不起，没有您想要的数据！",true,200);
                    return result;
                }else {
                    List<Vote> votes = dao.selectAllVote(type, null, null, 1, null, pager.getBeginrows(),10);
                    ArrayList users = new ArrayList();
                    for (int i = 0; i < votes.size(); i++) {
                        User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                        users.add(user);
                    }

                    pager.setData(votes);
                    data.add(pager);
                    data.add(users);
                    result = new APIResult("",true,200,data);
                }

            }else {
                result = new APIResult("对不起，您输入的信息不对！请输入学生或者教师！",false,200);
            }
        }else if(title == 4){   //按照投票人性别查
            Integer num = dao.selectAllVoteBySexNumber(type, content);
            pager = new Pager(num,indexpage,10);
            if(num == 0){
                result = new APIResult("对不起，没有您想要的数据！",true,200);
                return result;
            }else {
                List<Vote> votes = dao.selectAllVoteBySex(type, content, pager.getBeginrows(),10);
                ArrayList users = new ArrayList();
                for (int i = 0; i < votes.size(); i++) {
                    User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                    users.add(user);
                }

                pager.setData(votes);
                data.add(pager);
                data.add(users);
                result = new APIResult("",true,200,data);
            }

        }else if(title == 5){   //按照主题查
            Integer num = dao.searchAllVoteNumber(type, null, null, null, content, indexpage);
            pager = new Pager(num,indexpage,10);
            if(num == 0){
                result = new APIResult("对不起，没有您想要的数据！",true,200);
                return result;
            }else {
                List<Vote> votes = dao.selectAllVote(type, null, null, null, content, pager.getBeginrows(),10);
                ArrayList users = new ArrayList();
                for (int i = 0; i < votes.size(); i++) {
                    User user = voteDetailDao.selectUserBysno(votes.get(i).getOpen_voter());
                    users.add(user);
                }
                pager.setData(votes);
                data.add(pager);
                data.add(users);
                result = new APIResult("",true,200,data);
            }

        }

        return result;
    }
}
