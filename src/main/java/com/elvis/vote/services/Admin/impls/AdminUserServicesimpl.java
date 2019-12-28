package com.elvis.vote.services.Admin.impls;

import com.elvis.vote.dao.Admin.AdminDao;
import com.elvis.vote.pojo.*;
import com.elvis.vote.services.Admin.AdminUserServices;
import com.elvis.vote.utils.APIResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminUserServicesimpl implements AdminUserServices {
    private int pagesize = 4;
    @Resource(type = AdminDao.class)
    AdminDao adminDao;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailUserName;


    /**
     * 修改邮箱,发送邮件。。
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
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("<html><head><title></title></head><body style=\"font-size:16px;font-family:等线;\">");
                stringBuilder.append("您好<br/>");
                stringBuilder.append("您账号绑定的邮箱已修改成功！<br/>");
                MimeMessage mimeMessage = mailSender.createMimeMessage();
                try {
                    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
//                    SimpleMailMessage mimeMessageHelper = new SimpleMailMessage();
                    mimeMessageHelper.setFrom(mailUserName);//这里只是设置username 并没有设置host和password，因为host和password在springboot启动创建JavaMailSender实例的时候已经读取了
                    mimeMessageHelper.setTo(newEmail);
                    mimeMessageHelper.setSubject("邮箱验证");
                    mimeMessageHelper.setText(stringBuilder.toString());
                    mailSender.send(mimeMessage);
                }catch (Exception e){
                    e.printStackTrace();
                }

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
        PageHelper.startPage(indexpage, pagesize);
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

    //后台登录
    @Override
    public APIResult checkAdminByUsernameAndPwd(String username, String password) {
        Admin isAdmin = adminDao.checkAdminByUsernameAndPwd(username,null);
        if (null==isAdmin){
            return new APIResult("账号不存在",false,500);
        }else {
            Admin admin = adminDao.checkAdminByUsernameAndPwd(username,password);
            if (admin==null){
                return new APIResult( "密码输入错误，请重新输入！",false,501,admin);
            }else {
                return new APIResult( "登录成功",true,200,admin);
            }
        }
    }


    //权限
    @Override
    public APIResult searchColleage() {

        List<Colleage> colleages = adminDao.searchColleages();
//        System.out.println(colleages);
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
        List<MyPower> biglist = new ArrayList();
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
    public APIResult searchGrade(String []majornames) {
        List<MyPower>biglist = new ArrayList();
//        System.out.println("这丽"+majornames[0]);
        for (String majorname:majornames
        ) {
            Integer last = majorname.lastIndexOf(">");
            String parentName = majorname;
            int i = majorname.indexOf(">");
            String col = majorname.substring(i+1,last);
//            System.out.println(col);


            String real =majorname.substring(last+1,majorname.length());
//            System.out.println(parentName);
//            System.out.println(real);
            List<Grade> grades = adminDao.searchGrades(col,real);
//            List<Grade> grades = null;
//            System.out.println(grades.size());
            MyPower power = new MyPower();
            power.setParentName(parentName);
            power.setData(grades);
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
    public APIResult searchClasses(String[] classesnames) {
        List<MyPower>biglist = new ArrayList();
        for (String classesname:classesnames
        ) {

            Integer last = classesname.lastIndexOf(">");
            String parentName = classesname;//下拉导航栏的总参数

            int i = classesname.indexOf(">");//定位总参数里面第一个>的位置
            String temp = classesname.substring(i+1,last);//切割
            int i1 = temp.indexOf(">");//切割中间 之后找到>的位置
            String col = temp.substring(0,i1);
            String maj = temp.substring((i1+1),temp.length());

            String grd =classesname.substring(last+1,classesname.length());
//            System.out.println(col);
//            System.out.println(maj);
//            System.out.println(grd);
            List<Classes> classes = adminDao.searchClasses(col, maj, grd);


            MyPower power = new MyPower();
            power.setParentName(parentName);
            power.setData(classes);
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
    public APIResult saveResult(String[]contents,String sno){
//        StringBuffer sb = new StringBuffer();
//        for (String range:ranges) {
//            String r[] = range.split(",");
//            sb.append(r[0]);
//        }
//        String range = sb.toString();
//        Integer rangeID= null;
//        if(range.equals("教师")){
//            rangeID = 1;
//        }else if(range.equals("学生")){
//            rangeID = 2;
//        }else {
//            rangeID = 3;
//        }
        APIResult result = null;
        boolean flag = true;
        for (String content:contents) {
            String[] split = content.split(">");
            String col = split[1];
            String maj = split[2];
            String gra = split[3];
            String cla = split[4];

            Integer colleageId = adminDao.searchColleageId(col);
            Integer majorId = adminDao.searchMajorId(col, maj);
            Integer gradeId = adminDao.searchGradeId(col, maj, gra);
            Integer ClassesId = adminDao.searchClassesId(col, maj, gra, cla);
//            System.out.println("1--"+colleageId);
//            System.out.println("2--"+majorId);
//            System.out.println("3--"+gradeId);
//            System.out.println("4--"+searchClassesId);


            Integer i = adminDao.addPower(sno, colleageId, majorId, gradeId, ClassesId);
            if(i<0){
                flag = false;
            }

        }

        System.out.println(flag);

        if(!flag){
            result = new APIResult("失败！", false, 500);
        }

        result = new APIResult("成功！", true, 200);







        return result;
    }

    @Override
    public APIResult checkPower(String sno) {
        APIResult result = null;
        List list = adminDao.checkPower(sno);
        if(list.size()>0){
            result = new APIResult("有权限",true,200);
        }else if (list.size()<=0){
            result = new APIResult("无权限",true,200);
        }else{
            result = new APIResult("查询权限失败",false,500);
        }
        return result;
    }

    @Override
    public APIResult removePower(String sno) {
        APIResult result = null;
        Integer i = adminDao.removePower(sno);
        if(i>0){
            result = new APIResult("删除成功",true,200);
        }else if(i<=0) {
            result = new APIResult("删除失败",true,200);
        }else {
            result = new APIResult("服务器繁忙",false,500);
        }
        return result;
    }

    @Override
    public APIResult readPower(String sno) {
        APIResult result = null;
        List<Power>list = adminDao.readPower(sno);
        List<PowerName>newList = new ArrayList<>();
        for (int i = 0; i <list.size() ; i++) {
            int colleage_id = list.get(i).getColleage_id();
            int major_id = list.get(i).getMajor_id();
            int grade_id = list.get(i).getGrade_id();
            int classes_id = list.get(i).getClasses_id();
            String colleageName = adminDao.findColleageName(colleage_id);
            String majorName = adminDao.findMajorName(major_id);
            String gradeName = adminDao.findGradeName(grade_id);
            String classesName = adminDao.findClassesName(classes_id);
            PowerName powerName = new PowerName();
            powerName.setColleage_name(colleageName);
            powerName.setMajor_name(majorName);
            powerName.setGrade_name(gradeName);
            powerName.setClasses_name(classesName);
            newList.add(powerName);
        }
        if(newList.size()>0){
            result = new APIResult("成功",true,200,newList);
        }

        return result;
    }



}
