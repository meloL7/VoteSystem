package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.UserDao;
import com.elvis.vote.pojo.Login;
import com.elvis.vote.pojo.Student;
import com.elvis.vote.pojo.Teacher;
import com.elvis.vote.pojo.User;
import com.elvis.vote.services.User.UserServices;
import com.elvis.vote.utils.APIResult;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServicesImpl implements UserServices {

    @Resource(type = UserDao.class)
    private UserDao userDao;

    @Override
    public APIResult login(String sno, String pwd) {
        int i = userDao.isUser(sno,null);
        if (i > 0) {
            //判断密码是否正确
            int isPwdRight = userDao.isUser(sno, pwd);
            if (isPwdRight > 0) {
                //已经注册，查询出来的结果
                List<Login> user = userDao.selectUserAndPower(sno, pwd);
                //查询出来的结果为空的时候/即该用户没有任何权限
                if (null==user||user.size()==0) {
                    List<User> one = userDao.selectOne(sno, pwd);
                    return new APIResult("登录成功！",true,200,one);
                }else {
                    return new APIResult("登录成功！",true,200,user);
                }
            }else {
                return new APIResult("账号/密码错误！请重新输入",false,500);
            }

        }else {
            return new APIResult("对不起！您的账号不存在！请先注册",false,500);
        }

    }

    @Override
    public APIResult updatePwd(Integer id,String oldPwd, String newPwd) {
        String oldpwd = userDao.selectPwd(id);
        if (!oldpwd.equals(oldPwd)) {
            return new APIResult("原密码输入错误！",false,500);
        }else {
            int i = userDao.updatePwd(newPwd, id);
            if (i > 0) {
                return new APIResult("修改密码成功！",true,200);
            }else {
                return new APIResult("修改密码失败！",false,500);
            }
        }
    }

    @Override
    public APIResult loadUserInfo(String sno) {
        List<User> users = userDao.selectOne(sno, null);
        return new APIResult("加载个人信息",true,200,users);
    }

    @Override
    public APIResult isUserExsit(String sno) {
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            List<User> user = userDao.selectOne(sno, null);
            return new APIResult("success",true,200,user);
        }else {
            return new APIResult("该账号未注册，请先注册！",false,500);
        }
    }

    @Override
    public APIResult rePwd(Integer id, String newPwd) {
        int i = userDao.updatePwd(newPwd, id);
        if (i>0){
            return new APIResult("新密码设置成功！",true,200);
        }else {
            return new APIResult("新密码设置失败！",false,200);
        }
    }

    /**
     * 检测邮箱是否已经注册了
     * @param email
     * @return
     */
    public APIResult isExsitEmail(String email){
        int isflag = userDao.isEmailExist(email);
        if (isflag > 0) {
            return new APIResult("该邮箱已注册！请重新输入！",false,500);
        }
        return new APIResult("",true,200);
    }


    //注册验证
    public APIResult getSinfo(String sno){
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            return new APIResult("该账号已经存在，返回登陆即可！", false, 500);
        } else {
            Student s = userDao.selectStudent(sno);
            if (s != null) {
                return new APIResult("验证通过",true,200,s);
            }else {
                return new APIResult("该学号不存在，请重新输入!",false,500);
            }
        }
    }


    //注册验证
    public APIResult getTinfo(String sno){
        int i = userDao.isUser(sno, null);
        if (i > 0) {
            return new APIResult("该账号已经存在，返回登陆即可！", false, 500);
        } else {
            Teacher t = userDao.selectTeacher(sno);
            if (t != null) {
                return new APIResult("验证通过",true,200,t);
            }else {
                return new APIResult("该工号不存在，请重新输入!",false,500);
            }
        }
    }


    //注册 -->
    @Override
    public APIResult regist(String sno, String identify, String email, String pwd, String sname, String sex, Integer age, String colleage, String major, String grade, String classes) {
        User user = new User(sno,pwd,email,sname,sex,age,colleage,major,grade,classes,identify);
        int j = userDao.insertUser(user);
        if (j > 0) {
            return new APIResult("注册成功！", true, 200);
        } else {
            return new APIResult("注册失败！", false, 500);
        }
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
