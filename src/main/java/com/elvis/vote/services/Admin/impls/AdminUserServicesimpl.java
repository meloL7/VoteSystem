package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.Admin.AdminUserServices;
import com.elvis.vote.utils.APIResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AdminUserServicesimpl implements AdminUserServices {

    @Resource(type = AdminDao.class)
    AdminDao adminDao;

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
    public APIResult loadUserList(String identify, Integer indexpage) {
        PageHelper.startPage(indexpage, 2);
        //1为老师，2为学生
        List<User> users = adminDao.selectAllUsers(identify);

        PageInfo teacherlist = new PageInfo(users);
        System.out.println("teacherlist = " + teacherlist);
        return new APIResult("success", true, 200, teacherlist);
    }

    @Override
    public APIResult searchUserList(Integer key, String value, String identify, Integer indexpage) {
        try {
            if (key != null && key == 0) {
                /**
                 * 按学号查/按工号查
                 */
                List<User> listbysno = adminDao.selectUserByValue(value, null, null, null, null, null, identify);
                System.out.println("按sno查出 ： " + listbysno);
                return new APIResult("success", true, 200, listbysno);
            } else if (key != null && key == 1) {
                /**
                 * 按姓名查询
                 */
                List<User> listbyname = adminDao.selectUserByValue(null, value, null, null, null, null, identify);
                System.out.println("按name查出 ： " + listbyname);
                return new APIResult("success", true, 200, listbyname);
            } else if (key != null && key == 2) {
                /**
                 * 按学院查询
                 */
                List<User> listbycolleage = adminDao.selectUserByValue(null, null, value, null, null, null, identify);
                System.out.println("按colleage查出 ： " + listbycolleage);
                return new APIResult("success", true, 200, listbycolleage);
            } else if (key != null && key == 3) {
                /**
                 * 按专业查询
                 */
                List<User> listbymajor = adminDao.selectUserByValue(null, null, null, value, null, null, identify);
                System.out.println("按major查出 ： " + listbymajor);
                return new APIResult("success", true, 200, listbymajor);
            } else if (key != null && key == 4) {
                /**
                 * 按年级查询
                 */
                List<User> listbygrade = adminDao.selectUserByValue(null, null, null, null, value, null, identify);
                System.out.println("按grade查出 ： " + listbygrade);
                return new APIResult("success", true, 200, listbygrade);
            } else if (key != null && key == 5) {
                /**
                 * 按班级查询
                 */
                List<User> listbyclasses = adminDao.selectUserByValue(null, null, null, null, null, value, identify);
                System.out.println("按classes查出 ： " + listbyclasses);
                return new APIResult("success", true, 200, listbyclasses);
            } else {
                /**
                 * 查询所有
                 */
                List<User> listall = adminDao.selectUserByValue(null, null, null, null, null, null, identify);
                System.out.println("查出所有 ： " + listall);
                return new APIResult("success", true, 200, listall);
            }
        } catch (Exception e) {
            return new APIResult("有错误！",false,500);
        }
    }


    //权限
    @Override
    public void searchColleage() {
        List<Colleage> colleages = adminDao.searchColleages();
    }

    @Override
    public void searchMajor(String colleagename) {
        List<Major> majors = adminDao.searchMajors(colleagename);
    }

    @Override
    public void searchGrade(String colleagename, String majorname) {
        List<Grade> grades = adminDao.searchGrades(colleagename, majorname);
    }

    @Override
    public void searchClasses(String colleagename, String majorname, String gradename) {
        List<Classes> classes = adminDao.searchClasses(colleagename, majorname, gradename);
    }


}
