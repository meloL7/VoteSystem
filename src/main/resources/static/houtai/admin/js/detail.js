//从详情界面跳转
function returnPre(isFlag) {
    //获取href里面的值
    var href = window.location.search.substr(1);
    // console.log((href!=null)+"6666");
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    // console.log("vote.js value = "+value);

    var condition = decodeURI(value[0]);
    var content = decodeURI(value[1]);
    var type = value[2];
    var vote_status = value[3];
    var indexpage = value[4];
    var vote_id = value[5];


    console.log("condition:"+condition);
    console.log("content:"+content);
    console.log("type:"+type);
    console.log("vote_status:"+vote_status);
    console.log("indexpage:"+indexpage);
    console.log("vote_id:"+vote_id);

    if(isFlag == 1){      //表示跳转回去
        redirectBack(condition,content,type,vote_status,indexpage);
    }else if(isFlag == 0){      //表示初始化界面数据
        initVoteData(vote_id,vote_status);
    }


}

function redirectBack(condition,content,type,vote_status,indexpage) {
    if(type==1) {
        if (vote_status == "1") {
            $("#my").attr('href', 'naire_detail_list/pass.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        } else if (vote_status == "2") {
            $("#my").attr('href', 'naire_detail_list/nopass.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        } else if (vote_status == "3") {
            $("#my").attr('href', 'naire_detail_list/wait.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        } else if (vote_status == "4") {
            $("#my").attr('href', 'naire_detail_list/timeout.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        }
    }
    if(type ==2){
        if(vote_status == "1"){
            $("#my").attr('href', 'vote_detail_list/pass.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        }else if(vote_status == "2"){
            $("#my").attr('href', 'vote_detail_list/nopass.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        }else if(vote_status == "3"){
            $("#my").attr('href', 'vote_detail_list/wait.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        }else if(vote_status == "4"){
            $("#my").attr('href', 'vote_detail_list/timeout.html?condition='+condition+'&content='+content+'&type='+type+'&vote_status='+vote_status+'&indexpage='+indexpage)
        }
    }
}

//页面加载时页面布局
function initVoteData(vote_id,voter_status) {
    $.post(
        "/elvis/admin/loadVoteDetail.do",
        {
            vote_id:vote_id,
        },
        function (data) {
            console.log(data);

            var title;
            if(data.data[0].type == 1){
                title = "问卷详情";
            }else {
                title = "投票详情";
            }

            //头
            var head = $("#head");
            console.log(head);
            var h = "<div class=\"card-body\" id='saveId' value='"+vote_id+"' name='"+data.data[0].type+"'>\n" +
                "\t\t\t\t\t\t\t<h4 class=\"card-title\">"+title+"</h4>\n" +
                "\t\t\t\t\t\t\t<h1 id=\"title\">标题:&nbsp;&nbsp;"+data.data[0].title+"</h1>\n" +
                "\t\t\t\t\t\t\t<h3 id=\"introduction\">简介:&nbsp;&nbsp;"+data.data[0].introduction+"</h3>\n" +
                "\t\t\t\t\t\t\t<br>\n" +
                "\t\t\t\t\t\t\t<h3 id=\"openVoter\">发起人员:&nbsp;&nbsp;"+data.data[0].open_voter_identify+" "+data.data[1]+"</h3>\n" +
                "\t\t\t\t\t\t\t<h3 id=\"openVoteTime\"></h3>\n" +
                "\t\t\t\t\t\t</div>";

            head.append(h);

            var h = $("#openVoteTime");
            var span;
            if(voter_status == 4){
                span = "<span>结束时间:&nbsp;&nbsp;"+data.data[0].end_time+"</span>"
            }else if(voter_status == 3){
                span = "<span>发起时间:&nbsp;&nbsp;"+data.data[0].open_time+"</span>"
            }else if(voter_status == 1 || voter_status == 2){
                span = "<span>通过时间:&nbsp;&nbsp;"+data.data[0].begin_time+"</span>"
            }
            h.append(span);

            var div = $("#row");
            //遍历题目
            for (var i = 0; i < data.data[0].all_select_num; i++) {
                var selectType;
                if(data.data[2][i].select_type == 1){
                    selectType = "单选";
                }else {
                    selectType = "多选";
                }
                var question = "<div class=\"col-lg-4\">\n" +
                    "\t\t\t\t\t\t\t<div class=\"card card-body text-center\">\n" +
                    "\t\t\t\t\t\t\t\t<h4 class=\"card-title\">第"+(i + 1)+"题</h4>\n" +
                    "\t\t\t\t\t\t\t\t<h5 class=\"card-text\">题目类型:"+selectType+"</h5>\n" +
                    "\t\t\t\t\t\t\t\t<p class=\"card-text\">"+data.data[2][i].select_tiltle+"</p>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\" id='checkboxid"+data.data[2][i].select_id+"'>\n" +
                    "\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t</div>";

                div.append(question);

                var optiondiv = $("#checkboxid"+data.data[2][i].select_id);

                for(var j = 0;j < data.data[3][i].length;j++){
                    var option = "<div>\n" +
                        "\n" +
                        "\t\t\t\t\t\t\t\t\t\t<input id=\"checkbox1\" class=\"styled\" type=\"checkbox\" disabled=\"disabled\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<label for=\"checkbox1\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t"+data.data[3][i][j].option_content+"\n" +
                        "\t\t\t\t\t\t\t\t\t\t</label>\n" +
                        "\t\t\t\t\t\t\t\t\t</div>";

                    optiondiv.append(option);
                }
            }


            var foot = $("#btn");
            var f;
            if(voter_status == 3){
                f = "<div id=\"pass\" style=\"display: inline-block;\">\n" +
                    "\t\t\t\t\t\t\t<a onclick='votePass()' type=\"button\" class=\"btn btn-primary  btn-lg waves-effect waves-light\">审核通过</a>\n" +
                    "\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t<div id=\"nopass\" style=\"display: inline-block;\">\n" +
                    "\t\t\t\t\t\t\t<a type=\"button\" class=\"btn btn-info  btn-lg waves-effect waves-light\" data-toggle=\"modal\"\n" +
                    "\t\t\t\t\t\t\t   data-target=\"#exampleModalCenter\">退回审核</a>\n" +
                    "\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t<div onclick=\"returnPre(1)\" style=\"display: inline-block;\">\n" +
                    "\t\t\t\t\t\t\t<a id=\"my\" type=\"button\" class=\"btn  btn-lg waves-effect waves-light\">返回上一级</a>\n" +
                    "\t\t\t\t\t\t</div>";
            }else {
                f = "<div onclick=\"returnPre(1)\" style=\"display: inline-block;\">\n" +
                    "\t\t\t\t\t\t\t<a id=\"my\" type=\"button\" class=\"btn  btn-lg waves-effect waves-light\">返回上一级</a>\n" +
                    "\t\t\t\t\t\t</div>";
            }

            foot.append(f);




        }


    )
}

function noPass() {

    var vote_id = document.getElementById("saveId").getAttribute("value");
    var type = document.getElementById("saveId").getAttribute("name");

    //获取不通过理由
    var nopass = document.getElementById("nopassRuslt").value;
    console.log(vote_id+"-------"+nopass);
    if(nopass == null){
        alert("请填写理由");
    }

    $.post(
        "/elvis/admin/voteNoPass.do",
        {
            vote_id:vote_id,
            nopass:nopass,
        },
        function (data) {
            if(data.code == 200){
                if(type == 1){
                    console.log("进入。。。。");
                    window.location.href = "naire_detail_list/wait.html";
                }else {
                    window.location.href = "vote_detail_list/wait.html";
                }

            }else {
                alert(data.msg)
            }
        }
    )
}

function votePass() {

    var vote_id = document.getElementById("saveId").getAttribute("value");
    var type = document.getElementById("saveId").getAttribute("name");

    console.log(vote_id + "------" + type);

    $.post(
        "/elvis/admin/votePass.do",
        {
            vote_id:vote_id,
        },
        function (data) {
            if(data.code == 200){
                if(type == 1){
                    window.location.href = "naire_detail_list/wait.html";
                }else {
                    window.location.href = "vote_detail_list/wait.html";
                }

            }else {
                alert(data.msg);
            }
        }
    )

}

/**
 * 进入投票详情管理的初始化加载数据
 */
function loadVoteList(type) {
    var option = $(".form-control form-control-sm").val();
    console.log(option);

    var content = $("#custname").val();
    console.log(content);

    if(content == null || content == ""){
        option = 0;
    }
    
    $.post(
        "/elvis/admin/seachVote.do",
        {
            title:option,
            content:content,
            type:type,
            indexpage:0,
        },
        function (data) {
            console.log(data);

            var table = $("#tbody");

            for (var i = 0; i < data.data.data.length; i++) {
                var tr = "<tr>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i + 1)+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>12345</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>张帅军</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>学生</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>男</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>你最喜欢的明星</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2019/12/11</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"naire_detail_detail.html\">查看详情</a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</tr>";
            }
        }
    )
    
}