package com.elvis.vote.controllers.Admin;

import com.elvis.vote.services.Admin.AdminVoteServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class AdminVoteController {
    @Resource(type = AdminVoteServices.class)
    AdminVoteServices services;

    @RequestMapping("admin/loadVote.do")
    public APIResult loadInfo(int type,int vote_status,int indexPage){
        System.out.println(type+vote_status+indexPage);

        APIResult apiResult = services.loadInfo(type, vote_status, indexPage, 10);
        return apiResult;
    }




}
