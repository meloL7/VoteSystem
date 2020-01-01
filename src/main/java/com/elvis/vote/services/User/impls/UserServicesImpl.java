package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.UserDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Service;
import org.w3c.dom.ranges.Range;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class UserServicesImpl implements UserServices {

    @Resource(type = UserDao.class)
    private UserDao userDao;

    @Override
    public APIResult login(String sno, String pwd) {
        int i = userDao.isUser(sno,null);
        if (i > 0) {
            //判断密码是否正确
            int isPwdRight = userDao.isUser(sno, pwd);
            if (isPwdRight > 0) {
                //已经注册，查询出来的结果
                List<Login> user = userDao.selectUserAndPower(sno, pwd);
                //查询出来的结果为空的时候/即该用户没有任何权限
                if (null==user||user.size()==0) {
                    List<User> one = userDao.selectOne(sno, pwd);
                    return new APIResult("登录成功！",true,200,one);
                }else {
                    return new APIResult("登录成功！",true,200,user);
                }
            }else {
                return new APIResult("账号/密码错误！请重新输入",false,500);
            }

        }else {
            return new APIResult("对不起！您的账号不存在！请先注册",false,500);
        }

    }

    @Override
    public APIResult updatePwd(Integer id,String oldPwd, String newPwd) {
        String oldpwd = userDao.selectPwd(id);
        if (!oldpwd.equals(oldPwd)) {
            return new APIResult("原密码输入错误！",false,500);
        }else {
            int i = userDao.updatePwd(newPwd, id);
            if (i > 0) {
                return new APIResult("修改密码成功！",true,200);
            }else {
                return new APIResult("修改密码失败！",false,500);
            }
        }
    }

    @Override
    public APIResult loadUserInfo(String sno) {
        List<User> users = userDao.selectOne(sno, null);
        return new APIResult("加载个人信息",true,200,users);
    }

    @Override
    public APIResult isUserExsit(String sno) {
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            List<User> user = userDao.selectOne(sno, null);
            return new APIResult("success",true,200,user);
        }else {
            return new APIResult("该账号未注册，请先注册！",false,500);
        }
    }

    @Override
    public APIResult rePwd(Integer id, String newPwd) {
        int i = userDao.updatePwd(newPwd, id);
        if (i>0){
            return new APIResult("新密码设置成功！",true,200);
        }else {
            return new APIResult("新密码设置失败！",false,200);
        }
    }

    /**
     * 检测邮箱是否已经注册了
     * @param email
     * @return
     */
    public APIResult isExsitEmail(String email){
        int isflag = userDao.isEmailExist(email);
        if (isflag > 0) {
            return new APIResult("该邮箱已注册！请重新输入！",false,500);
        }
        return new APIResult("",true,200);
    }


    //注册验证
    public APIResult getSinfo(String sno){
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            return new APIResult("该账号已经存在，返回登陆即可！", false, 500);
        } else {
            Student s = userDao.selectStudent(sno);
            if (s != null) {
                return new APIResult("验证通过",true,200,s);
            }else {
                return new APIResult("该学号不存在，请重新输入!",false,500);
            }
        }
    }


    //注册验证
    public APIResult getTinfo(String sno){
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            return new APIResult("该账号已经存在，返回登陆即可！", false, 500);
        } else {
            Teacher t = userDao.selectTeacher(sno);
            if (t != null) {
                return new APIResult("验证通过",true,200,t);
            }else {
                return new APIResult("该工号不存在，请重新输入!",false,500);
            }
        }
    }


    //注册 -->
    @Override
    public APIResult regist(String sno, String identify, String email, String pwd, String sname, String sex, Integer age, String colleage, String major, String grade, String classes) {
        User user = new User(sno,pwd,email,sname,sex,age,colleage,major,grade,classes,identify);
        int j = userDao.insertUser(user);
        if (j > 0) {
            return new APIResult("注册成功！", true, 200);
        } else {
            return new APIResult("注册失败！", false, 500);
        }
    }


    @Override
    public void search(String condition, String content) {

    }

    @Override
    public void searchByTitle(String title) {

    }

    @Override
    public void searchByOpenVoter(String name) {

    }

    @Override
    public void searchByAllVoters(int num) {

    }

    @Override
    public APIResult checkPower(String sno) {
        APIResult result = null;
        List list = userDao.checkPower(sno);
//        System.out.println("test"+list.size());
        if(list.size()>0){
            result = new APIResult("有权限",true,200);
        }else if(list.size()<=0){
            result = new APIResult("无权限",true,200);
        }else{
            result = new APIResult("查询失败",false,500);
        }


        return result;

    }



    @Override
    public APIResult addVote(String open_voter_sno, Integer type, String sname, Integer identify,
                             String colleage, String mybigtitle, String myintro,
                             Integer all_select_num, String range, String holdtime,
                             String power, String[] content) {
        APIResult result = null;
        //1.新建投票信息;(投票状态)
        System.out.println(range);
        int newRange = 0;
        if(range.equals("学生")){
            range = "1";
            newRange = Integer.parseInt(range);
        }
        if(range.equals("教师")){
            range = "2";
            newRange = Integer.parseInt(range);
        }

        if(range.equals("教师和学生")){
            range = "3";
            newRange = Integer.parseInt(range);
        }


        if(identify==1){
            identify=3;
        }
        if(identify==2){
            identify=4;
        }
        Vote vote = new Vote();
        vote.setTitle(mybigtitle);
        vote.setIntroduction(myintro);
        vote.setType(type);
        vote.setOpen_voter(open_voter_sno);
        vote.setOpen_voter_name(sname);
        vote.setOpen_voter_colleage(colleage);
        vote.setOpen_voter_identify(identify);
        vote.setAll_select_num(all_select_num);
        vote.setAll_voter_num(0);
        vote.setVote_status(3);
        vote.setHold_time(holdtime);
        int addVoteflag = userDao.addVote(vote);
        Boolean flag = true;
        if(addVoteflag>0){
            //新增投票成功
            int voteid  = vote.getId();
            //插入投票的权限范围
            String[] powers = power.split(",");
            for (int i = 0; i <powers.length ; i++) {
                String[] ct = powers[i].split(">");
                if(ct.length==3){
                    Integer colleageId = userDao.findColleageId(ct[1]);
                    Integer majorId = userDao.findMajorId(ct[2]);
                    VoteRange voteRange = new VoteRange(voteid,newRange,colleageId,majorId);
                    int x = userDao.addRange1(voteRange);
                    if(x<0){
                        flag = false;
                    }
                }
                if(ct.length==5){
                    Integer colleageId = userDao.findColleageId(ct[1]);
                    Integer majorId = userDao.findMajorId(ct[2]);
                    Integer gradeId = userDao.findGradeId(ct[3]);
                    Integer classesId = userDao.findClassesId(ct[4]);
                    VoteRange voteRange = new VoteRange(voteid,newRange,colleageId,majorId,gradeId,classesId);
                    int x = userDao.addRange2(voteRange);
                    if(x<0){
                        flag = false;
                    }
                }
            }
            //新增加select
            for (int i = 0; i <content.length ; i++) {
                String[] ops = content[i].split(">");
                String title = ops[0];
                Integer stype = Integer.valueOf(ops[ops.length-1]);
                Select select = new Select();
                select.setSelect_tiltle(title);
                select.setSelect_type(stype);
                select.setVote_id(voteid);
                int i1 = userDao.addNewSelect(select);
                int select_id = select.getSelect_id();
                if(i1>0) {
                    //新增加option
                    for (int j = 1; j <ops.length-1 ; j++) {
                        String opContent = ops[j];
                        Option option = new Option();
                        option.setOption_content(opContent);
                        option.setSelect_id(select_id);
                        int i2 = userDao.addNewOption(option);
                        if(i2<0){
                            flag = false;
                        }
                    }




                }else {
                    flag = false;
                }
            }



        }else {
            flag = false;
        }

        if(flag){
            result = new APIResult("成功",true,200);
        }else {
            result = new APIResult("失败",false,500);
        }


        return result;



    }
}
