package com.elvis.vote.dao;


import com.elvis.vote.pojo.User;
import org.apache.ibatis.annotations.Select;

public interface Test {
    @Select("select * from user ")
    User test();
}
