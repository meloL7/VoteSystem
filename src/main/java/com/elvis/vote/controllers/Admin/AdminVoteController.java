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
    public APIResult loadInfo(Integer type,Integer vote_status,Integer indexPage){
//        System.out.println(type+vote_status+indexPage);
        System.out.println("test"+indexPage);
        APIResult apiResult = services.loadInfo(type, vote_status, indexPage, 8);

        return apiResult;
    }
    @RequestMapping("admin/loadSearch.do")
    public APIResult loadSearchInfo(String condition,String content,Integer type,Integer vote_status,Integer indexPage) {
        System.out.println(type+vote_status+indexPage+condition+content);

        APIResult result = null;

        result = services.Search(condition, content, type, vote_status, indexPage,8);


        return result;



    }

    @RequestMapping("admin/seachVote.do")
    public APIResult seachVote(Integer title,String content,Integer type,Integer indexpage){
        System.out.println(title + "---" + content + "---"+type);
        return services.queryAllVote(title,content,type,indexpage);
    }






}
