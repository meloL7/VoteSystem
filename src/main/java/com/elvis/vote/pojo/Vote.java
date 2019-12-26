package com.elvis.vote.pojo;

import java.sql.DatabaseMetaData;
import java.util.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

public class Vote {
    private int id;
    private String title;
    private String introduction;
    private int type;//1.问卷 2.选择
    private String open_voter; //投票人学号
    private String open_voter_name;
    private String open_voter_colleage; //院
    private int open_voter_identify; //投票人身份 1老师 2学生
    private Date open_time; //开始请求审核时间
    private Date begin_time;//审核通过时间
    private Date end_time;//结束时间（审核不通过时间为结束时间，正常投票2天自动结束）
    private int all_select_num; //题目总数
    private int all_voter_num; //投票人总数
    private String range;//投票人范围（1老师，2学生，3老师和学生)
    private String nopass_result; //不通过的理由
    private int vote_status;//1.通过审核 2.未通过审核 3.等待审核 4.已结束
    private int voter_status; //1 发布 2参与  3待参与  4

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getOpen_voter() {
        return open_voter;
    }

    public void setOpen_voter(String open_voter) {
        this.open_voter = open_voter;
    }

    public String getOpen_voter_colleage() {
        return open_voter_colleage;
    }

    public void setOpen_voter_colleage(String open_voter_colleage) {
        this.open_voter_colleage = open_voter_colleage;
    }

    public String getOpen_voter_identify() {
        //投票人身份 1老师 2学生
        if(open_voter_identify == 1){
            return "教师";
        }else if(open_voter_identify == 2){
            return "学生";
        }else {
            return null;
        }




    }

    public void setOpen_voter_identify(int open_voter_identify) {
        this.open_voter_identify = open_voter_identify;
    }

    public String getOpen_time() {
        Date openTime = new Timestamp(open_time.getTime());
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = df.format(openTime);
        return date;

    }

    public void setOpen_time(Date open_time) {
        this.open_time = open_time;
    }

    public String getBegin_time() {
        Date begintime = new Timestamp(begin_time.getTime());
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = df.format(begintime);
        return date;
    }

    public void setBegin_time(Date begin_time) {
        this.begin_time = begin_time;
    }

    public String getEnd_time() {
        Date endTime = new Timestamp(end_time.getTime());
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = df.format(endTime);
        return date;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    public int getAll_select_num() {
        return all_select_num;
    }

    public void setAll_select_num(int all_select_num) {
        this.all_select_num = all_select_num;
    }

    public int getAll_voter_num() {
        return all_voter_num;
    }

    public void setAll_voter_num(int all_voter_num) {
        this.all_voter_num = all_voter_num;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public String getNopass_result() {
        return nopass_result;
    }

    public void setNopass_result(String nopass_result) {
        this.nopass_result = nopass_result;
    }

    public int getVote_status() {
        return vote_status;
    }

    public void setVote_status(int vote_status) {
        this.vote_status = vote_status;
    }

    public int getVoter_status() {
        return voter_status;
    }

    public void setVoter_status(int voter_status) {
        this.voter_status = voter_status;
    }

    public String getOpen_voter_name() {
        return open_voter_name;
    }

    public void setOpen_voter_name(String open_voter_name) {
        this.open_voter_name = open_voter_name;
    }

    @Override
    public String toString() {
        return "Vote{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", introduction='" + introduction + '\'' +
                ", type=" + type +
                ", open_voter=" + open_voter +
                ", open_voter_name='" + open_voter_name + '\'' +
                ", open_voter_colleage='" + open_voter_colleage + '\'' +
                ", open_voter_identify=" + open_voter_identify +
                ", open_time=" + open_time +
                ", begin_time=" + begin_time +
                ", end_time=" + end_time +
                ", all_select_num=" + all_select_num +
                ", all_voter_num=" + all_voter_num +
                ", range='" + range + '\'' +
                ", nopass_result='" + nopass_result + '\'' +
                ", vote_status=" + vote_status +
                ", voter_status=" + voter_status +
                '}';
    }
}
