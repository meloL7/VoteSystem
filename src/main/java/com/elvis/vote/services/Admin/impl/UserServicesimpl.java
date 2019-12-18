package com.elvis.vote.services.Admin.impl;

import com.elvis.vote.dao.Admin.UserDao;
import com.elvis.vote.pojo.colleage;
import com.elvis.vote.pojo.major;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class UserServicesimpl implements com.elvis.vote.services.Admin.UserServices {

    @Resource
    UserDao dao;

    @Override
    public void loadByIdentify(int identify) {

    }

    @Override
    public void ResetPwd(Long id) {

    }

    @Override
    public void stuChangeEmail(Long id, String newEmail) {

    }





    //权限



    @Override
    public void searchColleage() {
        List<colleage> colleages = dao.searchColleages();
        System.out.println(colleages.size());
        for (colleage c:colleages
             ) {
            System.out.println(c);
        }
    }

    @Override
    public void searchMajor(String colleagename) {
        List<major> majors = dao.searchMajors(colleagename);
        for (major m:majors
             ) {
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
