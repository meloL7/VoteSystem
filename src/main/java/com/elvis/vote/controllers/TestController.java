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

    @RequestMapping("test.do")
    public void test(){
        services.searchColleage();
    }
}
