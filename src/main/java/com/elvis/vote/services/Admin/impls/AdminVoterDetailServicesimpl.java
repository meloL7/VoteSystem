package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.dao.Admin.AdminVoteDetailDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.Admin.AdminVoteDetailServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class AdminVoterDetailServicesimpl implements AdminVoteDetailServices {
    @Resource(type = AdminVoteDetailDao.class)
    AdminVoteDetailDao advdDao;

    @Override
    public APIResult queryAdminVoteDetail(Integer vote_id) {

        if(vote_id == null){
            return new APIResult("对不起，没有找到投票的id",false,500);
        }
        //将所有的数据都封装到data链表里
        ArrayList<Object> data = new ArrayList<>();

        //先从vote表中将主题、简介、发起时间
        Vote vote = advdDao.selectVoteById(vote_id);
        data.add(vote);

        //在根据open_vote去查发起人的姓名
        User user = advdDao.selectUserBysno(vote.getOpen_voter());
        data.add(user.getSname());

        //查询该问卷的所有题目
        List<Select> selects = advdDao.selectAllSelectbyVoteid(vote_id);
        data.add(selects);

        //遍历每一个题目，得到每一个题目下的所有选项
        ArrayList<List> options = new ArrayList<>();
        for (Select s:selects) {
            List<Option> option = advdDao.selectAllOptionBySelectid(s.getSelect_id());
            options.add(option);
        }
        data.add(options);

        APIResult result = new APIResult("",true,200,data);
        return result;
    }

    @Override
    public APIResult voteNopass(Integer voteid, String nopass) {
        APIResult result = null;
        //获取系统当前时间
        Date date = new Date(System.currentTimeMillis());
        System.out.println(date);

        //将时间转化为数据库时间
        java.sql.Timestamp time = new java.sql.Timestamp(date.getTime());
        System.out.println(time);

        Integer integer = advdDao.updateVoteNopass(voteid, 4, time, nopass);

        if(integer > 0){
            //有问题。。。(应该添加一条联系，status = 1 发布)（再查询该享有权限下的所有用户，建立联系，status = 3 待参与）
            Integer i = advdDao.updateUserVote(voteid, 4);
            result = new APIResult("",true,200,i);

        }else {
            result = new APIResult("失败！",false,500);
        }
        return result;
    }

    @Override
    public APIResult votePass(Integer voteid) {
        APIResult result = null;
        Date date = new Date(System.currentTimeMillis());
        System.out.println(date);

        //将时间转化为数据库时间
        java.sql.Timestamp time = new java.sql.Timestamp(date.getTime());
        System.out.println(time);

        Integer integer = advdDao.updateVoteStatusByVoteid(voteid, 2, time);
        if(integer > 0){

            //有问题。。。(应该添加一条联系，status = 1 发布)（再查询该享有权限下的所有用户，建立联系，status = 3 待参与）
            Integer i = advdDao.updateUserVote(voteid, 2);
            result = new APIResult("",true,200,i);


        }else {
            result = new APIResult("失败！",false,500);
        }
        return result;
    }

    @Override
    public void watchDetail(Long voterid, int voteid) {

    }
}
