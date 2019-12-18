package com.elvis.vote.pojo;

public class option {
    private int id;
    private int option_id;
    private String option_content;
    private int select_id;//属于哪个选项的选项id

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOption_id() {
        return option_id;
    }

    public void setOption_id(int option_id) {
        this.option_id = option_id;
    }

    public String getOption_content() {
        return option_content;
    }

    public void setOption_content(String option_content) {
        this.option_content = option_content;
    }

    public int getSelect_id() {
        return select_id;
    }

    public void setSelect_id(int select_id) {
        this.select_id = select_id;
    }

    @Override
    public String toString() {
        return "option{" +
                "id=" + id +
                ", option_id=" + option_id +
                ", option_content='" + option_content + '\'' +
                ", select_id=" + select_id +
                '}';
    }
}
