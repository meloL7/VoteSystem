package com.elvis.vote.controllers.Admin;

import com.elvis.vote.services.Admin.AdminUserServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Map;

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


    //权限
    @RequestMapping("admin/loadcolleage")
    public APIResult searchColleage(){
        APIResult result = userServices.searchColleage();
        return result;
    }
    @RequestMapping("admin/loadmajor")
    public APIResult searchMajor(String[] colleagecontent){

        APIResult result = userServices.searchMajor(colleagecontent);
        return result;
    }
    @RequestMapping("admin/loadgrade")
    public APIResult searchgrade(String[] majorcontent){
        APIResult result = userServices.searchGrade(majorcontent);

        return result;
    }
    @RequestMapping("admin/loadclasses")
    public APIResult searchclasses(String[] classescontent){
        APIResult result = userServices.searchClasses(classescontent);

        return result;
    }

    @RequestMapping ("admin/saveResult")
    public APIResult saveResult(String[]content,String sno){
        APIResult result = userServices.saveResult(content, sno);
        return result;
    }
    @RequestMapping ("admin/checkPower")
    public APIResult checkPower(String sno){
        APIResult result = userServices.checkPower(sno);
        return result;
    }
    @RequestMapping("admin/removePower")
    public APIResult removePower(String sno){
        APIResult result = userServices.removePower(sno);
        return result;
    }

    @RequestMapping("admin/readPower")
    public APIResult readPower(String sno){
        APIResult result = userServices.readPower(sno);
        return result;
    }

}
