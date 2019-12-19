package com.elvis.vote.controllers;

import com.elvis.vote.services.Admin.UserServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Controller
@ResponseBody
public class UserController {

    @Resource(type = UserServices.class)
    private UserServices userServices;

    @CrossOrigin(origins = "*")
    @RequestMapping("admin/loaduser.do")
    public APIResult teacherList(Integer identify,@RequestParam(value = "indexpage",defaultValue = "1") Integer indexpage){
        APIResult teacherList = userServices.loadTeacherList(identify,indexpage);
        return teacherList;
    }



}
