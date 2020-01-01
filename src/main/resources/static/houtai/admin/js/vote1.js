//查询所有代参与的问卷信息
function wait(t,s,indexpage) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function success(data) {
            console.log(data);
            if(data.code == 200){
                if (data != null) {
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    for (var i = 0; i < data.data.data.length; i++) {

                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }
                    console.log("indexpage"+data.data.indexpage);
                    console.log("countpage"+data.data.countpage);


                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            wait(t,s,e.current);
                        }
                    });

                }
            }



        }
    );
}

function asearch(t,s,indexpage,condition,content) {
    if(content == null){
        content = $("#custname").val();
    }
    if(condition == null){
        condition = $("#condition").val();
    }
    console.log(content);
    console.log(condition);

    // 获取href里面的值
    $.post(
        "/elvis/admin/loadSearch.do",
        {
            condition:condition,
            content:content,
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"
                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            asearch(t,s,e.current,condition,content);
                        }
                    });
                }
            }
        }
    );




}

function aasearch() {
    var href = window.location.search.substr(1);
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    // console.log("vote.js value = "+value);
    condition = decodeURI(value[0]);
    content = decodeURI(value[1]);
    t = value[2];
    s = value[3];
    indexpage = value[4];
    asearch(t, s, indexpage,condition,content);
}

function timeout(t,s,indexpage) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].all_voter_num+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].end_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;|&nbsp;\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../anaysis.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择分析</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>";

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            timeout(t,s,e.current);
                        }
                    });
                }
            }



        }
    );
}

function tsearch1(t,s,indexpage,condition,content) {
    if(content == null){
        content = $("#custname").val();
    }
    if(condition == null){
        condition = $("#condition").val();
    }


    $.post(
        "/elvis/admin/loadSearch.do",
        {
            condition:condition,
            content:content,
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].all_voter_num+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].end_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;|&nbsp;\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../anaysis.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择分析</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>";

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            tsearch(t,s,e.current,condition,content);
                        }
                    });

                }
            }



        }
    );
}

function ttsearch() {
    var href = window.location.search.substr(1);
    console.log("进来了");
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    // console.log("vote.js value = "+value);
    condition = decodeURI(value[0]);
    content = decodeURI(value[1]);
    t = value[2];
    s = value[3];
    indexpage = value[4];

    tsearch1(t,s,indexpage,condition,content)

}

function pass(t,s,indexpage) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage:indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            pass(t,s,e.current);
                        }
                    });

                }
            }



        }
    );
}

function psearch(t,s,indexpage,condition,content) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    var indexpage= 0;
    //获取href里面的值

    $.post(
        "/elvis/admin/loadSearch.do",
        {
            condition:condition,
            content:content,
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    console.log(data.data.data.length);
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            psearch(t,s,e.current,condition,content);
                        }
                    });

                }
            }



        }
    );
}

function ppsearch() {
    var href = window.location.search.substr(1);
    console.log("进来了");
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    // console.log("vote.js value = "+value);
    condition = decodeURI(value[0]);
    content = decodeURI(value[1]);
    t = value[2];
    s = value[3];
    indexpage = value[4];
    psearch(t,s,indexpage,condition,content);
}

function nopass(t,s,indexpage) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.data.length);
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].all_select_num+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].end_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].nopass_result+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            nopass(t,s,e.current);
                        }
                    });

                }
            }



        }
    );
}
function npsearch(t,s,indexpage,condition,content) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    //获取href里面的值

    $.post(
        "/elvis/admin/loadSearch.do",
        {
            condition:condition,
            content:content,
            type: t,
            vote_status:s,
            indexPage: indexpage,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    vote_list.empty();
                    console.log(data.data.data.length);
                    for (var i = 0; i < data.data.data.length; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].all_select_num+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].end_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].nopass_result+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html?condition="+condition+"&content="+content+"&type="+t+"&vote_status="+s+"&indexpage="+indexpage+"&vote_id="+data.data.data[i].id+"\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.countpage,
                        current: data.data.indexpage,
                        backfun: function (e) {
                            if (e.current > data.data.countpage) {
                                return;
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            npsearch(t,s,e.current,condition,content);
                        }
                    });

                }
            }



        }
    );
}
function nppsearch() {
    var href = window.location.search.substr(1);
    console.log("进来了");
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    // console.log("vote.js value = "+value);
    condition = decodeURI(value[0]);
    content = decodeURI(value[1]);
    t = value[2];
    s = value[3];
    indexpage = value[4];
    npsearch(t,s,indexpage,condition,content);
}
