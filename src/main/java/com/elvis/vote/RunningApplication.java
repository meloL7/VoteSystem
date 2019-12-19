package com.elvis.vote;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.elvis")
@MapperScan("com.elvis.vote.dao")
public class RunningApplication {


    public static void main(String[] args) {
        SpringApplication.run(RunningApplication.class, args);
        System.out.println("运行成功！");
    }


}
