package com.elvis.vote.services;

import com.elvis.vote.dao.Test;
import com.elvis.vote.pojo.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class TestServices implements com.elvis.vote.services.Admin.LoginServices {

    @Resource
    Test t ;


    @Override
    public Boolean adminLogin(String ad_name, String ad_pwd) {
        return null;
    }

    @Override
    public void checkUsernameIsExist(String ad_name) {

    }
    public User test(){

        User test = t.test();
        System.out.println(test.toString());
        return test;
    }
}
