package com.elvis.vote.controllers.User;

import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class UserController {

    @Resource(type = UserServices.class)
    private UserServices userServices;

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



}
