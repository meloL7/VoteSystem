package com.elvis.vote.pojo;

import java.sql.DatabaseMetaData;
import java.sql.Date;

public class Vote {
    private String title;
    private String introduction;
    private int type;//1.问卷 2.选择
    private int openVoterId;
    private int openVoterIdentify;
    private Date open_time; //开始请求审核时间
    private Date begin_time;//审核通过时间
    private Date end_time;//结束时间（审核不通过时间为结束时间，正常投票2天自动结束）
    private int allVoterNum; //投票人总数
    private int range;//投票人范围（1老师，2学生，3老师和学生）
//    private int status;//
    private int selectId; //选择的ID

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

    public int getOpenVoterId() {
        return openVoterId;
    }

    public void setOpenVoterId(int openVoterId) {
        this.openVoterId = openVoterId;
    }

    public int getOpenVoterIdentify() {
        return openVoterIdentify;
    }

    public void setOpenVoterIdentify(int openVoterIdentify) {
        this.openVoterIdentify = openVoterIdentify;
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

    public int getAllVoterNum() {
        return allVoterNum;
    }

    public void setAllVoterNum(int allVoterNum) {
        this.allVoterNum = allVoterNum;
    }

    public int getRange() {
        return range;
    }

    public void setRange(int range) {
        this.range = range;
    }

    public int getSelectId() {
        return selectId;
    }

    public void setSelectId(int childId) {
        this.selectId = selectId;
    }
}
