package com.elvis.vote.controllers.User;

import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
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


}