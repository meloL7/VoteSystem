package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.Login;
import com.elvis.vote.pojo.User;

import java.util.List;

public interface UserDao {


    int isUser(String sno,String pwd);

    List<User> selectOne(String sno, String pwd);

    List<Login> selectUserAndPower(String sno, String pwd);

    int updatePwd(String pwd,Integer id);

    String selectPwd(Integer id);

}
