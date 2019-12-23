package com.elvis.vote.services;

import com.elvis.vote.dao.Test;
import com.elvis.vote.pojo.EmailEntity;
import com.elvis.vote.pojo.User;
import com.elvis.vote.services.Admin.AdminLoginServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.mail.internet.MimeMessage;
import java.sql.Timestamp;
import java.util.Random;

@Service
public class TestServices implements AdminLoginServices {

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

    @Resource
    private RedisUtil redisUtil;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailUserName;


    public APIResult sendEmail(String email){

        //验证邮箱是否存在


        //生成验证码
        String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);//生成短信验证码
        Timestamp outDate = new Timestamp(System.currentTimeMillis() + 5 * 60 * 1000);// 5分钟后过期

        EmailEntity emailEntity = new EmailEntity();
        //将验证码存入redis
        emailEntity.setAcount(verifyCode);
        emailEntity.setTime(outDate);
        emailEntity.setEmail("");
        //设置过期时间
        redisUtil.set("email",emailEntity);
        redisUtil.expire("email",1);
        //发送邮箱
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("<html><head><title></title></head><body>");
        stringBuilder.append("您好<br/>");
        stringBuilder.append("您的验证码是：").append(verifyCode).append("<br/>");
        stringBuilder.append("您可以复制此验证码并返回至XXX，以验证您的邮箱。<br/>");
        stringBuilder.append("此验证码只能使用一次，在5分钟内有效。验证成功则自动失效。<br/>");
        stringBuilder.append("如果您没有进行上述操作，请忽略此邮件。");
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        //发送验证码到手机或者是邮箱
//        if (true){ //邮箱
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
            mimeMessageHelper.setFrom(mailUserName);//这里只是设置username 并没有设置host和password，因为host和password在springboot启动创建JavaMailSender实例的时候已经读取了
            mimeMessageHelper.setTo("1442554245@qq.com");
            mimeMessage.setSubject("邮箱验证");
            mimeMessageHelper.setText(stringBuilder.toString(),true);
            mailSender.send(mimeMessage);
        }catch (Exception e){
            e.printStackTrace();
        }

        return null;
    }

    public APIResult getverifyCode(String email){

        EmailEntity emailEntity = (EmailEntity)redisUtil.get("email");
        System.out.println(emailEntity);
        return null;
    }
}
