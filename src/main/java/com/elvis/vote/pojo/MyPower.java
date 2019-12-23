package com.elvis.vote.pojo;

import java.io.Serializable;
import java.util.List;

public class MyPower implements Serializable {
    String parentName;
    List data;

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }
}
