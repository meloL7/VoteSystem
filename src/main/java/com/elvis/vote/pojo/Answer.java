package com.elvis.vote.pojo;

import io.swagger.models.auth.In;

public class Answer {
    Option option;
    Integer value;

    public Option getOption() {
        return option;
    }

    public void setOption(Option option) {
        this.option = option;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
}
