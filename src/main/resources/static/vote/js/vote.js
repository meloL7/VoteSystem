//查询所有待参与的问卷信息(my1)
function fmy1(t) {

    var voter_id = document.getElementById("ctl01_lblUserName").innerText;


    console.log(voter_id);

    $.post(
        "vote.do",
        {
            voter_id:voter_id,
            type: t,
            voter_status: 3,
            indexpage: 0,
        },
        function (data) {
            console.log(data);
            if(data.code == 200){
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");

                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name)
                        var vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>" + data.data.data[i].title + "</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:" + data.data.data[i].id + "</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起人:<a href='javascript:void(0);' class='runing-num'>" + data.data.data[i].open_voter_name + "</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: " + data.data.data[i].begin_time + "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='joinVote.html?id='" + data.data.data[0].id + " class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>投票</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        list_item.append(vote_list);
                        // list_item.innerHTML = vote_list;
                    }

                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            }else {
                alert(data.message);
            }

        }
    );
}

//根据条件查询,待参与问卷信息(my1)
function selectByNamemy1(t) {

    var voter_id = document.getElementById("ctl01_lblUserName").innerText;
    console.log(voter_id);
    var title = document.getElementById("selectpick-div").value;
    var name = document.getElementById("serachbox").value;

    console.log("item = " + title);


    $.post(
        "voteBySearch.do",
        {
            voter_id:voter_id,
            type: t,
            voter_status: 3,
            indexpage: 0,
            title: title,
            content: name,
        },
        function (data) {
            if(data.code == 200){
                if (data.result) {
                    console.log("数据：" + data.data.data[0]);
                    var listvote = $("#voteList");
                    listvote.empty();

                    console.log("voteList = " + listvote[0]);

                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>" + data.data.data[i].title + "</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:" + data.data.data[i].id + "</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起人:<a href='javascript:void(0);' class='runing-num'>" + data.data.data[i].open_voter_name + "</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: " + data.data.data[i].begin_time + "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='joinVote.html?id='" + data.data.data[0].id + " class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>投票</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        listvote.append(vote_list);

                        // listvote.innerHTML = vote_list;
                    }


                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            }else {
                alert(data.message);
            }


        }
    );
}


//查询所有参与问卷信息（my2）
function fmy2(t) {

    var voter_id = document.getElementById("ctl01_lblUserName").innerText;


    console.log(voter_id);

    $.post(
        "vote.do",
        {
            voter_id:voter_id,
            type: t,
            voter_status: 2,
            indexpage: 0,
        },
        function (data) {
            console.log(data);
            if(data.code == 200){
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");

                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name)

                        var  vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>"+data.data.data[i].title+"</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:"+data.data.data[i].id+"</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起人:<a href='javascript:void(0);' class='runing-num'>"+data.data.data[i].open_voter_name+"</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: "+data.data.data[i].begin_time+"\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;参与时间: 12/06/20:23\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid='"+data.data.data[i].id+" class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>查看详情</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        list_item.append(vote_list);
                    }

                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            }else {
                alert(data.message);
            }

        }
    );

}


//根据条件，查询所有参与问卷信息
function selectByNamemy2(t) {
    var voter_id = document.getElementById("ctl01_lblUserName").innerText;
    console.log(voter_id);
    var title = document.getElementById("selectpick-div").value;
    var name = document.getElementById("serachbox").value;

    console.log(title + "-----" + name);

    $.post(
        "voteBySearch.do",
        {
            voter_id: voter_id,
            type: t,
            voter_status: 2,
            indexpage: 0,
            title: title,
            content: name,
        },
        function (data) {
            console.log(data);
            if (data.code == 200) {
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");
                    list_item.empty();
                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name)

                        var vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>" + data.data.data[i].title + "</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:" + data.data.data[i].id + "</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起人:<a href='javascript:void(0);' class='runing-num'>" + data.data.data[i].open_voter_name + "</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: " + data.data.data[i].begin_time + "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;参与时间: 12/06/20:23\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid='" + data.data.data[i].id + " class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>查看详情</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        list_item.append(vote_list);
                    }

                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            } else {
                alert(data.message);
            }
        }
    );

}

//查询所有发布的问卷信息（my3）
function fmy3(t) {

    var voter_id = document.getElementById("ctl01_lblUserName").innerText;


    $.post(
        "vote.do",
        {
            voter_id:voter_id,
            type: t,
            voter_status: 1,
            indexpage: 0,
        },
        function (data) {
            console.log(data);
            if(data.code == 200){
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");


                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id);

                        console.log(data.data.data[0].open_voter_name);

                        var  vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>"+data.data.data[i].title+"</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:"+data.data.data[i].id+"</div>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: "+data.data.data[i].begin_time+"\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;参与人数:<a href='javascript:void(0);' class='runing-num'>"+data.data.data[i].all_voter_num+"</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='voteanalysis.html' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>分析报告</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        list_item.append(vote_list);
                    }

                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            }else {
                alert(data.message);
            }

        }
    );
}

function selectByNamemy3(t) {
    var voter_id = document.getElementById("ctl01_lblUserName").innerText;
    console.log(voter_id);
    var title = document.getElementById("selectpick-div").value;
    var name = document.getElementById("serachbox").value;

    console.log(title + "-----" + name);

    $.post(
        "voteBySearch.do",
        {
            voter_id: voter_id,
            type: t,
            voter_status: 1,
            indexpage: 0,
            title: title,
            content: name,
        },
        function (data) {
            console.log(data);
            if (data.code == 200) {
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");
                    list_item.empty();
                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name)

                        var vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='的撒旦'>"+data.data.data[i].title+"</a></div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-id'>ID:"+data.data.data[i].id+"</div>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-data'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t发起时间: "+data.data.data[i].begin_time+"\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left item-sheet'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;参与人数:<a href='javascript:void(0);' class='runing-num'>"+data.data.data[i].all_voter_num+"</a>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dt>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dd class='item-bot'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='process-box pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-1 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<dl class='process-2 pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd class='spinner-list'>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='operation-box pull-right'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='voteanalysis.html' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class='index_iconfont'>&#xe651;</i><span class='vam'>分析报告</span></a>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t</dd>\n" +
                            "\t\t\t\t\t\t\t\t\t\t</dl>\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t</div>";

                        list_item.append(vote_list);
                    }

                }else {
                    var message = "<span>"+data.message+"</span>";
                    var message_item = $("#voteList");
                    message_item.append(message);
                }
            } else {
                alert(data.message);
            }
        }
    );
}