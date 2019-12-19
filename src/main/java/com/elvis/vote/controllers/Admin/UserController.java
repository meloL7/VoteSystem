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

        String s = "<td>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">权限查看<tton>\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                "\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a id=\"change\" href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>";
        return teacherList;
    }



}
