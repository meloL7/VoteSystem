package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.Admin.AdminUserServices;
import com.elvis.vote.utils.APIResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminUserServicesimpl implements AdminUserServices {

    @Resource(type = AdminDao.class)
    AdminDao adminDao;


    /**
     * 修改邮箱
     * @param id
     * @param newEmail
     * @return
     */
    @Override
    public APIResult stuChangeEmail(Integer id, String newEmail) {
        int isflag = adminDao.isEmailExist(newEmail);
        if (isflag <= 0) {
            int i = adminDao.updateEmail(id, newEmail);
            if (i > 0) {
                /*发送邮件给用户表示修改邮箱成功*/

                System.out.println("修改邮箱成功");
                return new APIResult("修改成功！",true,200);
            }else {
                return new APIResult("修改失败！", false, 500);
            }
        }else{
            return new APIResult("该邮箱已经存在，不能再注册了！",false,500);
        }
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
    public APIResult searchColleage() {

        List<Colleage> colleages = adminDao.searchColleages();
        System.out.println(colleages);
        APIResult result = null;
        if(colleages!=null){
            result = new APIResult("成功！", true, 200, colleages);
        }else {
            result = new APIResult("查询失败！", false, 500);
        }
        return result;
    }



    @Override
    public APIResult searchMajor(String[] colleagenames) {
        List<MyPower>biglist = new ArrayList();
        for (String colleagename:colleagenames
             ) {
            Integer last = colleagename.lastIndexOf(">");
            String parentName = colleagename;

            String real =colleagename.substring(last+1,colleagename.length());
//            System.out.println(parentName);
//            System.out.println(real);
            List<Major> majors = adminDao.searchMajors(real);

            MyPower power = new MyPower();
            power.setParentName(parentName);
            power.setData(majors);
            biglist.add(power);
        }
//
        APIResult result = null;
        if(biglist!=null){
            result = new APIResult("成功！", true, 200, biglist);
        }else {
            result = new APIResult("查询失败！", false, 500);
        }
        return result;
    }

    @Override
    public APIResult searchGrade(String colleagename, String majorname) {
        List<Grade> grades = adminDao.searchGrades(colleagename, majorname);
        APIResult result = null;
        if(grades!=null){
            result = new APIResult("成功！", true, 200, grades);
        }else {
            result = new APIResult("查询失败！", false, 500);
        }
        return result;
    }

    @Override
    public APIResult searchClasses(String colleagename, String majorname, String gradename) {
        List<Classes> classes = adminDao.searchClasses(colleagename, majorname, gradename);
        APIResult result = null;
        if(classes!=null){
            result = new APIResult("成功！", true, 200, classes);
        }else {
            result = new APIResult("查询失败！", false, 500);
        }
        return result;
    }


}
