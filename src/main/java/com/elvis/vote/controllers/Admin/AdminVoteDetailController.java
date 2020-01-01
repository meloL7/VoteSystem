package com.elvis.vote.controllers.Admin;

import com.elvis.vote.services.Admin.AdminVoteDetailServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class AdminVoteDetailController {

    @Resource(type = AdminVoteDetailServices.class)
    AdminVoteDetailServices voteDetailServices;

    @RequestMapping("admin/loadVoteDetail.do")
    public APIResult loadVoteDetail(Integer vote_id){
        APIResult result = voteDetailServices.queryAdminVoteDetail(vote_id);
        System.out.println(result);
        return result;
    }

    @RequestMapping("admin/voteNoPass.do")
    public APIResult voteNoPass(Integer vote_id,String nopass){
        APIResult result = voteDetailServices.voteNopass(vote_id, nopass);
        System.out.println(result);
        return result;
    }

    @RequestMapping("admin/votePass.do")
    public APIResult votePass(Integer vote_id){
        APIResult result = voteDetailServices.votePass(vote_id);
        System.out.println(result);
        return result;
    }
//    @RequestMapping("admin/getQuestion")
//    public APIResult getQuestion(Integer vote_id){
//        APIResult result = a.votePass(vote_id);
//        System.out.println(result);
//        return result;
//    }

}
