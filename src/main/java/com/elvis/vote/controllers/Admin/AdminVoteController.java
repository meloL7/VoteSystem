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
//        System.out.println(type+vote_status+indexPage);

        APIResult apiResult = services.loadInfo(type, vote_status, indexPage, 10);
        return apiResult;
    }
    @RequestMapping("admin/loadSearch.do")
    public APIResult loadSearchInfo(String condition,String content,Integer type,Integer vote_status,Integer indexPage) {
//        System.out.println(type+vote_status+indexPage);

        System.out.println("--"+condition);
        System.out.println("--"+content);


        APIResult result = null;
        try {
            result = services.Search(condition, content, type, vote_status, indexPage);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;



    }

    @RequestMapping("admin/seachVote.do")
    public APIResult seachVote(Integer title,String content,Integer type,Integer indexpage){
        System.out.println(title + "---" + content + "---"+type);
        return services.queryAllVote(title,content,type,indexpage);
    }






}
