package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.dao.Admin.AdminVoteDetailDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.Admin.AdminVoteDetailServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.mail.internet.MimeMessage;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class AdminVoterDetailServicesimpl implements AdminVoteDetailServices {
    @Resource(type = AdminVoteDetailDao.class)
    AdminVoteDetailDao advdDao;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailUserName;

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

        //查询出发起人的id,根据vote的状态，status为3时是等待审核，得到相应的voter_id和vote_id
        //建立联系，
        Vote vote = advdDao.selectVoteById(voteid);
        User user = advdDao.selectUseridBySno(vote.getOpen_voter());
        Integer integer1 = advdDao.addUserVote(user.getId(), voteid, 4);
        //通过了审核，改变投票的状态，更新时间
        Integer integer = advdDao.updateVoteNopass(voteid, 4, time, nopass);

        if(integer > 0){
            //给发起人发送一个email信息,通知他审核通过
            StringBuilder stringBuilder = new StringBuilder();
            if(vote.getType() == 1){
                stringBuilder.append("对不起！您的问卷未审核通过！不通过理由为："+nopass);
            }else {
                stringBuilder.append("对不起！您的投票已审核通过！不通过理由为："+nopass);
            }
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            try {
                MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
//                    SimpleMailMessage mimeMessageHelper = new SimpleMailMessage();
                mimeMessageHelper.setFrom(mailUserName);//这里只是设置username 并没有设置host和password，因为host和password在springboot启动创建JavaMailSender实例的时候已经读取了
                mimeMessageHelper.setTo(user.getEmail());
                mimeMessageHelper.setSubject("发送消息");
                mimeMessageHelper.setText(stringBuilder.toString());
                mailSender.send(mimeMessage);
            }catch (Exception e){
                e.printStackTrace();
                result = new APIResult("邮箱发送错误",false,500);
                return result;
            }
            result = new APIResult("",true,200);

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

        //查询出发起人的id,根据vote的状态，status为3时是等待审核，得到相应的voter_id和vote_id
        //建立联系，
        Vote vote = advdDao.selectVoteById(voteid);
        User uu = advdDao.selectUseridBySno(vote.getOpen_voter());
        System.out.println(uu);
        advdDao.addUserVote(uu.getId(), voteid, 1);

        //通过了审核，改变投票的状态，更新时间
        Integer integer = advdDao.updateVoteStatusByVoteid(voteid, 1, time);
        if(integer > 0){

            //给发起人发送一个email信息,通知他审核通过
            StringBuilder stringBuilder = new StringBuilder();
            if(vote.getType() == 1){
                stringBuilder.append("您的问卷已审核通过！");
            }else {
                stringBuilder.append("您的投票已审核通过！");
            }
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            try {
                MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
//                    SimpleMailMessage mimeMessageHelper = new SimpleMailMessage();
                mimeMessageHelper.setFrom(mailUserName);//这里只是设置username 并没有设置host和password，因为host和password在springboot启动创建JavaMailSender实例的时候已经读取了
                mimeMessageHelper.setTo(uu.getEmail());
                mimeMessageHelper.setSubject("发送消息");
                mimeMessageHelper.setText(stringBuilder.toString());
                mailSender.send(mimeMessage);
            }catch (Exception e){
                e.printStackTrace();
                result = new APIResult("邮箱发送错误",false,500);
                return result;
            }

            stringBuilder.setLength(0);

            //有问题。。。(应该添加一条联系，status = 1 发布)（再查询该享有权限下的所有用户，建立联系，status = 3 待参与）
            List<VoteRange> voteRanges = advdDao.selectVoteRange(voteid);
            System.out.println("voteRange = "+voteRanges);
            //存储users
            ArrayList<List> user = new ArrayList<>();
            for (int i = 0; i < voteRanges.size(); i++) {
                //表示参与的是学生和教师
                if(voteRanges.get(i).getIdentify() == 3){
                    List<User> users = advdDao.selectUserByMajor(voteRanges.get(i).getMajor_id());
                    user.add(users);
                }else if(voteRanges.get(i).getIdentify() == 2){     //表示的是教师
                    List<User> users = advdDao.selectUserByTeacher(voteRanges.get(i).getMajor_id());
                    user.add(users);
                }else {     //表示学生
                    List<User> users = advdDao.selectUserByStudent(voteRanges.get(i).getClasses_id());
                    user.add(users);
                }

            }
            System.out.println("user = " + user);

            //将user里面的用户的邮箱全部查询出来，进行邮件发送
            for (int i = 0; i < user.size(); i++) {
                for (int j = 0; j < user.get(i).size(); j++) {
                    User u = (User)user.get(i).get(j);

                    //建立联系user_vote_connection
                    Integer integer1 = advdDao.addUserVote(u.getId(), voteid, 3);

                    String email = u.getEmail();
                    //进行邮件发送
                    System.out.println("email = " + email);
                    StringBuilder string = new StringBuilder();
                    if(vote.getType() == 1){
                        stringBuilder.append("您有代参与的问卷，请在"+vote.getEnd_time()+"之前完成！");
                    }else {
                        stringBuilder.append("您有代参与的投票，请在"+vote.getEnd_time()+"之前完成！");
                    }
                    MimeMessage message = mailSender.createMimeMessage();
                    try {
                        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message,true);
//                    SimpleMailMessage mimeMessageHelper = new SimpleMailMessage();
                        mimeMessageHelper.setFrom(mailUserName);//这里只是设置username 并没有设置host和password，因为host和password在springboot启动创建JavaMailSender实例的时候已经读取了
                        mimeMessageHelper.setTo(email);
                        mimeMessageHelper.setSubject("发送消息");
                        mimeMessageHelper.setText(stringBuilder.toString());
                        mailSender.send(message);
                    }catch (Exception e){
                        e.printStackTrace();
                        result = new APIResult("邮箱发送错误",false,500);
                        return result;
                    }
                }
            }

            result = new APIResult("",true,200);


        }else {
            result = new APIResult("失败！",false,500);
        }
        return result;
    }

    @Override
    public void watchDetail(Long voterid, int voteid) {

    }
}
