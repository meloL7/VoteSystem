package com.elvis.vote.dao.User;

import com.elvis.vote.pojo.User;

public interface UserDao {


    int isUserExist(String sno);

    User selectOne(String sno, String pwd);

}
