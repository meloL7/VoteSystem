package com.elvis.vote.controllers.User;

import com.elvis.vote.pojo.Student;
import com.elvis.vote.pojo.Teacher;
import com.elvis.vote.pojo.User;
import com.elvis.vote.services.TestServices;
import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class UserController {

    @Resource(type = UserServices.class)
    private UserServices userServices;

    @Resource(type = TestServices.class)
    private TestServices testServices;

    @RequestMapping("user/login.do")
    public APIResult login(String sno,String pwd){
        APIResult login = userServices.login(sno, pwd);
        return login;
    }

    @RequestMapping("user/loadinfo.do")
    public APIResult loadUserInfo(String sno) {
        APIResult result = userServices.loadUserInfo(sno);
        return result;
    }


    @RequestMapping("user/changepwd.do")
    public APIResult changePwd(Integer id,String oldPwd,String newPwd) {
        APIResult result = userServices.updatePwd(id,oldPwd,newPwd);
        return result;
    }

    @RequestMapping("/isuser.do")
    public APIResult isUser(String sno){
        APIResult userExsit = userServices.isUserExsit(sno);
        return userExsit;
    }

    @RequestMapping("/sendemail.do")
    @ResponseBody
    public void send(String email){
        testServices.sendEmail(email);
    }


    @RequestMapping("/getcode.do")
    public APIResult get(String email){
        return testServices.getverifyCode(email);
    }



    @RequestMapping("/repwd.do")
    public APIResult rePwd(Integer id,String newPwd){
        APIResult result = userServices.rePwd(id, newPwd);
        return result;
    }

    @RequestMapping("user/checkPower")
    public APIResult checkPower(String sno) {
        APIResult result = userServices.checkPower(sno);
        return result;
    }


    @RequestMapping("/getinfo.do")
    public APIResult checkSno(String identify,String sno) {
        if ("学生".equals(identify)) {
            return userServices.getSinfo(sno);
        } else if ("教师".equals(identify)) {
            return userServices.getTinfo(sno);
        }
        return null;
    }

    @RequestMapping("/register.do")
    public APIResult register(String sno, String identify, String email, String pwd, String sname, String sex, Integer age, String colleage, String major, String grade, String classes){
        if ("学生".equals(identify)) {
            return userServices.regist(sno,identify,email,pwd,sname,sex,age,colleage,major,grade,classes);
        } else if ("教师".equals(identify)) {
            return userServices.regist(sno,identify,email,pwd,sname,sex,age,colleage,major,grade,classes);
        }
        return null;
    }
    @RequestMapping("openNewVote")
    public APIResult openNewVote(String open_voter_sno,Integer type,String sname,String colleage,
                                 String mybigtitle,String myintro,Integer all_select_num,
                                 String range,String holdtime,String power,String[]content){

        System.out.println(power);
        System.out.println(content[0]);
        System.out.println(myintro);
        return null;
    }


}
