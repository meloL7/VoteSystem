package com.elvis.vote.controllers;

import com.elvis.vote.pojo.User;
import com.elvis.vote.services.User.VoteServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class VoteController {

    @Resource(type = VoteServices.class)
    VoteServices voteServices;

    @RequestMapping("vote/vote.do")
    public APIResult test(int type) {

        System.out.println("type = " + type);
        APIResult test = voteServices.queryAllVote(type);

        return test;
    }


}
