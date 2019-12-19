package com.elvis.vote.controllers.User;

import com.elvis.vote.services.User.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class VoteController {

    @Resource(type = AdminVoteServices.class)
    AdminVoteServices voteServices;

    @RequestMapping("vote/vote.do")
    public APIResult test(Integer type, Integer voter_status, Integer indexpage) {

        System.out.println("voter_status = " + voter_status);
        System.out.println("type = " + type);
        APIResult test = voteServices.queryAllVote(type, voter_status, indexpage, 10);
        System.out.println(test);
        return test;
    }

    @RequestMapping("vote/voteBySearch.do")
    public APIResult voteBySearch(Integer type,Integer voter_status,Integer title,String content,Integer indexpage){
        APIResult result = voteServices.queryVoteBySearch(type, voter_status, title, content, indexpage);
        return result;
    }



}
