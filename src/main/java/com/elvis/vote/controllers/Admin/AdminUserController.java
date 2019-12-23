package com.elvis.vote.controllers.Admin;

import com.elvis.vote.services.Admin.AdminUserServices;
import com.elvis.vote.utils.APIResult;
import io.lettuce.core.dynamic.annotation.Param;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class AdminUserController {

    @Resource(type = AdminUserServices.class)
    private AdminUserServices userServices;

    @CrossOrigin(origins = "*")
    @RequestMapping("admin/loaduser.do")
    public APIResult userList(String identify,Integer indexpage){
        APIResult list = userServices.loadUserList(identify,indexpage);
        return list;
    }


    @RequestMapping("admin/searchuser.do")
    public APIResult searchUser(Integer key,String value,String identify,Integer indexpage){
        APIResult list = userServices.searchUserList(key, value, identify, indexpage);
        return list;
    }


    @RequestMapping("admin/changeEmail.do")
    public APIResult changeEmail(Integer id,String newEmail){
        APIResult result = userServices.stuChangeEmail(id, newEmail);
        return result;
    }






}
