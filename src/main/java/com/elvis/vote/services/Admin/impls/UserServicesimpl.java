package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.UserDao;
import com.elvis.vote.pojo.Colleage;
import com.elvis.vote.pojo.Major;
import com.elvis.vote.pojo.User;
import com.elvis.vote.services.Admin.UserServices;
import com.elvis.vote.utils.APIResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServicesimpl implements UserServices {

    @Resource(type = UserDao.class)
    UserDao userDao;

    @Override
    public void loadByIdentify(int identify) {

    }

    @Override
    public void ResetPwd(Long id) {

    }

    @Override
    public void stuChangeEmail(Long id, String newEmail) {

    }

    @Override
    public APIResult loadTeacherList(Integer identify,Integer indexpage) {
        PageHelper.startPage(indexpage,5);
        //1为老师
        List<User> users = userDao.selectAllUsers(identify);

        PageInfo teacherlist = new PageInfo(users);
        System.out.println("teacherlist = " + teacherlist);
        return new APIResult("success",true,200,teacherlist);
    }

    //权限
    @Override
    public void searchColleage() {
        List<Colleage> colleages = userDao.searchColleages();
        System.out.println(colleages.size());
        for (Colleage c:colleages) {
            System.out.println(c);
        }
    }

    @Override
    public void searchMajor(String colleagename) {
        List<Major> majors = userDao.searchMajors(colleagename);
        for (Major m:majors) {
            System.out.println(m);
        }
    }

    @Override
    public void searchGrade(String colleagename, String majorname) {

    }

    @Override
    public void searchClasses(String colleagename, String majorname, String gradename) {

    }
}
