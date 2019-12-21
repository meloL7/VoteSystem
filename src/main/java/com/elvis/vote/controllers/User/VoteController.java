package com.elvis.vote.controllers.User;

import com.elvis.vote.services.User.VoteServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class VoteController {

    @Resource(type = VoteServices.class)
    VoteServices voteServices;

    @RequestMapping("user/vote.do")
    public APIResult test(Integer voter_id, Integer type, Integer voter_status,Integer vote_status, Integer indexpage) {
        System.out.println("voter_status = " + voter_status);
        System.out.println("type = " + type);
        System.out.println(voter_id);
        APIResult test = voteServices.queryAllVote(voter_id,type, voter_status,vote_status, indexpage, 10);
        System.out.println(test);
        return test;
    }

    @RequestMapping("user/voteBySearch.do")
    public APIResult voteBySearch(Integer voter_id,Integer type,Integer voter_status,Integer vote_status,Integer title,String content,Integer indexpage){
        APIResult result = voteServices.queryVoteBySearch(voter_id,type, voter_status,vote_status, title, content, indexpage);
        return result;
    }



}
