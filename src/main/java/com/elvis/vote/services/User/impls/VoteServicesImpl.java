package com.elvis.vote.services.User.impls;

import com.elvis.vote.dao.User.VoteDao;
import com.elvis.vote.pojo.Option;
import com.elvis.vote.pojo.Select;
import com.elvis.vote.pojo.Vote;
import com.elvis.vote.pojo.VoteContent;
import com.elvis.vote.services.User.VoteServices;
import com.elvis.vote.utils.APIResult;
import com.elvis.vote.utils.Pager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VoteServicesImpl implements VoteServices {

    private int indexsize = 10;

    @Resource(type = VoteDao.class)
    VoteDao voteDao;


    @Override
    public APIResult queryAllVote(int voter_id,int type, int voter_status,int vote_status, int indexpage) {
        List<Vote> votes = null;
        Integer num = 0;

        APIResult result = null;
        try{

            num = voteDao.selectAllNumber(voter_id,type, voter_status,vote_status);
            System.out.println("数据条数："+num);
            if(num == 0){
                result = new APIResult("对不起，没有你想要的数据~~", false, 200);
                return result;
            }
            Pager pager = new Pager(num, indexpage, indexsize);
            votes = voteDao.selectAllVote(voter_id,type, voter_status,vote_status, pager.getBeginrows(), indexsize);

            pager.setData(votes);

            result = new APIResult("成功！", true, 200, pager);

        }catch (Exception e){
            e.printStackTrace();
            result = new APIResult("出现异常！",false,500);
        }

        return result;
    }

    @Override
    public APIResult queryVoteBySearch(Integer voter_id,Integer type, Integer voter_status,int vote_status, Integer title, String content, Integer indexpage) {

        Pager pager = null;
        APIResult result = null;

        try{
            /**
             * voter_status为1时，分为按标题查和人数查
             * 按人数查时，需要将字符串转为数组，捕捉异常
             */
            if(voter_status == 1){
                try{
                    //标题查
                    if(title == 0){

                        Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status,vote_status, content, null,null);
                        if(number == 0){
                            result = new APIResult("对不起，没有你想要的数据~~",false,200);
                            return result;
                        }
                        pager = new Pager(number,indexpage,10);
                        List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status,vote_status, content, null,null, pager.getBeginrows(), indexsize);
                        String time = null;


                        pager.setData(votes);

                        result = new APIResult("",true,200,pager);


                    }else if(title == 1){ //人数查
                        Integer totle = Integer.valueOf(content);
                        Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status,vote_status, null, null,totle);
                        if(number == 0){
                            result = new APIResult("对不起，没有你想要的数据~~",false,200);
                            return result;
                        }
                        pager = new Pager(number,indexpage,10);

                        List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status,vote_status, null, null,totle, indexpage, 10);


                        pager.setData(votes);

                        result = new APIResult("",true,200,pager);

                    }
                }catch (Exception e){
                    result = new APIResult("对不起，查询请输入正确的格式~~",false,200);
                }
            }else {
                if(title == 0){
                    Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status,vote_status, content, null,null);
                    if(number == 0){
                        result = new APIResult("对不起，没有你想要的数据~~",false,200);
                        return result;
                    }
                    pager = new Pager(number,indexpage,10);
                    List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status,vote_status, content, null, null,pager.getBeginrows(), 10);


                    pager.setData(votes);

                    result = new APIResult("",true,200,pager);


                }else if(title == 1){ //按发起人查
                    Integer number = voteDao.selectVoteBySearchNumber(voter_id,type, voter_status,vote_status, null, content,null);
                    if(number == 0){
                        result = new APIResult("对不起，没有你想要的数据~~",false,200);
                        return result;
                    }
                    pager = new Pager(number,indexpage,10);
                    List<Vote> votes = voteDao.selectVoteBySearch(voter_id,type, voter_status,vote_status, null, content,null, pager.getBeginrows(), 10);

                    pager.setData(votes);

                    result = new APIResult("",true,200,pager);

                }
            }
        }catch (Exception e){
            result = new APIResult("出现异常！",false,500);
        }
        return result;
    }

    @Override
    public APIResult queryVoteDetail(Integer voter_id, Integer vote_id) {
        //先得到vote信息（标题、简介、题目总数）
        Vote voteByid = voteDao.selectVoteByid(vote_id);
        APIResult result = null;
        if(voteByid != null){
            result = new APIResult("",true,200);
            Map<Object,Object> data = new HashMap<>();
            data.put("vote",voteByid);
            //查询所有的题目
            List<Select> selects = voteDao.selectAllSelect(voter_id, vote_id);
            data.put("select",selects);

            //保存一个题目的所有选项
            Map<String,List> optionMap = new HashMap<>();
            ArrayList<List> optionArray = new ArrayList<>();

            //保存一个题目的用户所选的选项
            Map<String,List> answer = new HashMap<>();
            ArrayList<List> answerArray = new ArrayList<>();

            //根据题目查询出所有的选项
            for (int i = 0; i < selects.size(); i++) {

                List<Option> options = voteDao.selectAllOption(selects.get(i).getSelect_id());
//                optionMap.put("option"+i,options);
                optionArray.add(i,options);

                //得到该题目的用户所选的选项
                List<Option> ans = voteDao.selectAllOptionByselectid(voter_id, vote_id, selects.get(i).getSelect_id());
//                answer.put("answer"+i,ans);
                answerArray.add(i,ans);


            }
            data.put("allOption",optionArray);
            data.put("option",answerArray);

            result.setData(data);
        }else {
            result = new APIResult("没有vote_id!",false,500);
        }

        return result;
    }

    //投票功能
    @Override
    public APIResult addVoteDetail(Integer voter_id, Integer vote_id,Integer type,String connect) {
        Integer result = -1;
        APIResult apiResult = null;
        System.out.println("connect = " + connect + "voter_id = " + voter_id + "vote_id = " + vote_id);
        String[] conn = connect.split("}");

        try{
            //每一个为一道题
            for (int i = 0; i < conn.length; i++) {

                //表示单选
                if(conn[i].indexOf("option_id") > 0){
                    String[] values = conn[i].split(",");
                    String ss = null;
                    ArrayList<String> save = new ArrayList();
                    for (int j = 0; j < values.length; j++) {
                        if(values[j].indexOf(":") > 0){
                            String[] split_select = values[j].split(":");
                            ss = split_select[1].replaceAll("\"","");
                            save.add(ss);
                        }
                    }
                    Integer select_id = Integer.parseInt(save.get(0));
                    Integer option_id = Integer.parseInt(save.get(1));
                    result = voteDao.addVoteDetail(voter_id, vote_id, select_id, option_id);
                    System.out.println(select_id + "-----" + option_id);
                }else {     //表示多选
                    if(conn[i].indexOf(":") > 0){
                        String[] values = conn[i].split(":");

                        //得到题目
                        String[] select = values[1].split(",");
                        String select_id = select[0].replaceAll("\"","");
                        System.out.println(select_id);
                        //得到选项
                        ArrayList<String> options = new ArrayList();
                        String test = values[2].replaceAll("\"","");
                        String test1 = test.replace("[","");
                        String test2 = test1.replace("]","");
                        System.out.println(test2);

                        if(test2.indexOf(",") > 0){
                            String[] split = test2.split(",");
                            for (int j = 0; j < split.length; j++) {
                                options.add(split[j]);
                            }
                        }else {
                            options.add(test2);
                        }
                        for (int j = 0; j < options.size(); j++) {
                            result = voteDao.addVoteDetail(voter_id, vote_id, Integer.parseInt(select_id), Integer.parseInt(options.get(j)));
                        }
                    }

                }

            }
            apiResult = new APIResult("",true,200,type);
        }catch (Exception e){
            e.printStackTrace();
            apiResult = new APIResult("出现异常！",false,500);
            return apiResult;
        }
        Integer integer = voteDao.updateVoteConnection(voter_id, vote_id, 2);
//        Integer integer1 = voteDao.updateVote(vote_id, 2);
        return  apiResult;
    }

    @Override
    public void loadVoteInfo(Long id, int voteid, int voteType) {

    }

    @Override
    public void joinVote(Long id, int voteid, String questionJson) {

    }

    @Override
    public void cheakPower(Long id) {

    }

    @Override
    public void openNewVote(int openVoterid, int type, String title, String introduce, String allJson) {

    }

    @Override
    public void watchVoteDetail(Long id, int voteid, int type, int status) {

    }

    @Override
    public void watchAnaysis(Long id, int voteid, int type) {

    }

    @Override
    public void voteIsOver(int voteid) {

    }
}
