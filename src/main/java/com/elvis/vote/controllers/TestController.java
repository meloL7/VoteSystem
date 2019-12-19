package com.elvis.vote.controllers;

import com.elvis.vote.services.Admin.impls.UserServicesimpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class TestController {


    @Resource(type = com.elvis.vote.services.Admin.impls.UserServicesimpl.class)
    UserServicesimpl services ;

    @RequestMapping("test.do")

    public void test(){
        services.searchMajor("体育学院");    }




   
}
