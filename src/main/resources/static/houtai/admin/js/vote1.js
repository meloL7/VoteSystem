//查询所有代参与的问卷信息
function wait(t,s) {
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
function timeout(t,s) {
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;|&nbsp;\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../anaysis.html\">查看选择分析</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>";

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
function pass(t,s) {
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
function nopass(t,s) {
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}

function asearch(t,s) {
    var condition = $("#condition").val();
    var content = $("#custname").val();


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
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_vote_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"
                        vote_list.append(vote);
                    }
                }
            }
        }
    );




}
function tsearch(t,s) {
    var condition = $("#condition").val();
    var content = $("#custname").val();

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
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;|&nbsp;\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../anaysis.html\">查看选择分析</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>";

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
function psearch(t,s) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    if(condition == "选择标题"){
        condition=="问卷标题"
    }
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
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote ="<tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].begin_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
function npsearch(t,s) {
    var condition = $("#condition").val();
    var content = $("#custname").val();
    if(condition == "选择标题"){
        condition=="问卷标题"
    }
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
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看选择详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}