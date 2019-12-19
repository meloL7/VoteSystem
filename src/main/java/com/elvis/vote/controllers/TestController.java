package com.elvis.vote.controllers;

import com.elvis.vote.pojo.User;
import com.elvis.vote.services.Admin.UserServices;
import com.elvis.vote.services.Admin.impl.UserServicesimpl;
import com.elvis.vote.services.TestServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class TestController {


    @Resource(type = com.elvis.vote.services.Admin.impl.UserServicesimpl.class)
    UserServicesimpl services ;

//    @RequestMapping("test.do")
//<<<<<<< Updated upstream
//    public void test(){
//        services.searchMajor("体育学院");    }
//=======
//    public User test(){
//        User test = services.test();
//        return test;
//    }
//
//
//>>>>>>> Stashed changes
}
