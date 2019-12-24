package com.elvis.vote.pojo;

import java.util.List;

public class MyPower {
    String parentName;
    Object data;

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "MyPower{" +
                "parentName='" + parentName + '\'' +
                ", data=" + data +
                '}';
    }
}
