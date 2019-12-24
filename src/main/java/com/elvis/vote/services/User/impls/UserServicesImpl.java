package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.UserDao;
import com.elvis.vote.pojo.User;
import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServicesImpl implements UserServices {

    @Resource(type = UserDao.class)
    private UserDao userDao;

    @Override
    public APIResult login(String sno, String pwd) {
        int i = userDao.isUserExist(sno);
        if (i > 0) {
            User user = userDao.selectOne(sno, pwd);
            if (user != null) {
                System.out.println("登录成功！");
                return new APIResult("登录成功！",true,200,user);
            }else {
                return new APIResult("请检查您的用户名密码是否输入正确！",true,200,user);
            }
        }else {
            return new APIResult("对不起！您的账号不存在！请先注册",false,500);
        }

    }

    @Override
    public APIResult loadUserInfo(String sno) {
        User user = userDao.selectOne(sno, null);

        return new APIResult("success",true,200,user);

    }

    @Override
    public boolean checkOldPwd(String sno, String oldpwd) {
        return false;
    }

    @Override
    public Boolean updatePwd(String sno, String newPwd) {
        return null;
    }

    @Override
    public void search(String condition, String content) {

    }

    @Override
    public void searchByTitle(String title) {

    }

    @Override
    public void searchByOpenVoter(String name) {

    }

    @Override
    public void searchByAllVoters(int num) {

    }
}
