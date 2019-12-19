package com.elvis.vote.controllers.Admin;

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
    public APIResult teacherList(String identify,@RequestParam(value = "indexpage",defaultValue = "1") Integer indexpage){
        APIResult teacherList = userServices.loadTeacherList(identify,indexpage);
        return teacherList;
    }



}
