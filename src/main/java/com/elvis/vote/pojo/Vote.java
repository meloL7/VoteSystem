package com.elvis.vote.pojo;

import java.sql.DatabaseMetaData;
import java.sql.Date;

public class Vote {
    private int id;
    private String title;
    private String introduction;
    private int type;//1.问卷 2.选择
    private int open_voter; //投票人id
    private String open_voter_name;
    private int open_voter_identify; //投票人身份
    private Date open_time; //开始请求审核时间
    private Date begin_time;//审核通过时间
    private Date end_time;//结束时间（审核不通过时间为结束时间，正常投票2天自动结束）
    private int all_voter_num; //投票人总数
    private String range;//投票人范围（1老师，2学生，3老师和学生)
    private String nopass_result; //不通过的理由
    private int vote_status;//1.通过审核 2.未通过审核 3.等待审核 4.已结束
    private int voter_status; //1 发布 2参与  3待参与

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

    public int getOpen_voter() {
        return open_voter;
    }

    public void setOpen_voter(int open_voter) {
        this.open_voter = open_voter;
    }

    public int getOpen_voter_identify() {
        return open_voter_identify;
    }

    public void setOpen_voter_identify(int open_voter_identify) {
        this.open_voter_identify = open_voter_identify;
    }

    public Date getOpen_time() {
        return open_time;
    }

    public void setOpen_time(Date open_time) {
        this.open_time = open_time;
    }

    public Date getBegin_time() {
        return begin_time;
    }

    public void setBegin_time(Date begin_time) {
        this.begin_time = begin_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
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
                ", open_voter_identify=" + open_voter_identify +
                ", open_time=" + open_time +
                ", begin_time=" + begin_time +
                ", end_time=" + end_time +
                ", all_voter_num=" + all_voter_num +
                ", range='" + range + '\'' +
                ", nopass_result='" + nopass_result + '\'' +
                ", vote_status=" + vote_status +
                ", voter_status=" + voter_status +
                '}';
    }
}
