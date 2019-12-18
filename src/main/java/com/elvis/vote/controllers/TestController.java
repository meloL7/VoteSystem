package com.elvis.vote.controllers;

import com.elvis.vote.pojo.User;
import com.elvis.vote.services.TestServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class TestController {


    @Resource(type = TestServices.class)
    TestServices services ;

    @RequestMapping("test.do")
    public User test(){
        User test = services.test();
        return test;
    }
}
