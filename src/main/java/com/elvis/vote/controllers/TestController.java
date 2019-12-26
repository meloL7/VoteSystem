package com.elvis.vote.controllers;

import com.elvis.vote.services.Admin.impls.AdminVoteServicesimpl;
import com.elvis.vote.services.TestServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class TestController {

//
//    @Resource(type = com.elvis.vote.services.Admin.impls.UserServicesimpl.class)
//    UserServicesimpl services ;

//    @Resource(type = com.elvis.vote.services.Admin.impls.AdminVoterDetailServicesimpl.class)
//    AdminVoterDetailServicesimpl services ;
    @Resource(type = com.elvis.vote.services.Admin.impls.AdminVoteServicesimpl.class)
    AdminVoteServicesimpl services ;

    @RequestMapping("test.do")

    public void test() throws Exception {
//        services.Search("发起人员","顶峰2",1,2);

           }

    @Autowired
    TestServices testServices;

    @RequestMapping("/send")
    @ResponseBody
    public void send(){
        testServices.sendEmail(null);
    }

    @RequestMapping("/get")
    @ResponseBody
    public APIResult get(){


        return testServices.getverifyCode("email");
    }





}
