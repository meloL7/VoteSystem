package com.elvis.vote.pojo;

public class select {
    private int selectId;
    private String selectTitle;
    private int selectType;  //1为单选 2为多选
    private int OptionId;

    public int getSelectId() {
        return selectId;
    }

    public void setSelectId(int selectId) {
        this.selectId = selectId;
    }

    public String getSelectTitle() {
        return selectTitle;
    }

    public void setSelectTitle(String selectTitle) {
        this.selectTitle = selectTitle;
    }

    public int getSelectType() {
        return selectType;
    }

    public void setSelectType(int selectType) {
        this.selectType = selectType;
    }

    public int getOptionId() {
        return OptionId;
    }

    public void setOptionId(int optionId) {
        OptionId = optionId;
    }
}
