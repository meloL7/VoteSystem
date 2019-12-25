//查询所有待参与的问卷信息(my1)
function fmy1(voter_id,type,voter_status,indexpage) {

    var id = sessionStorage.getItem('id');


    console.log(id);
    if(voter_id == null){
        voter_id = id;
    }

    $.post(
        "/elvis/user/vote.do",
        {
            voter_id:voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:1,
            indexpage: indexpage,
        },
        function (data) {
            console.log(data);
            if(data.code == 200){
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");

                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name);

                        // <a href='joinVote.html>跳转需要保存参数：用户id:voter_id,类别:type,状态:voter_status,
                        // 当前页:indexpages

                        var vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title+"'>" + data.data.data[i].title + "</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='joinVote.html?id=" + data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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
function selectByNamemy1(voter_id,type,voter_status,indexpage,title,content) {

    // <a href='joinVote.html>跳转需要保存参数：用户id:voter_id,类别:type,状态:voter_status
     // 搜索条件：title、name

    if(voter_id == null){
        var id = sessionStorage.getItem('id');
        console.log(voter_id);
        var t = document.getElementById("selectpick-div").value;
        var name = document.getElementById("serachbox").value;
        voter_id = id;
        title = t;
        content = name;
    }


    console.log("item = " + title);


    $.post(
        "/elvis/user/voteBySearch.do",
        {
            voter_id:voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:1,
            indexpage: indexpage,
            title: title,
            content: content,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title+"'>" + data.data.data[i].title + "</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='joinVote.html?id=" + data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"&option="+title+"&content="+name+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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
function fmy2(voter_id,type,voter_status,indexpage) {

    var id = sessionStorage.getItem('id');

    if(voter_id == null){
        voter_id = id;
    }

    console.log(voter_id);

    $.post(
        "/elvis/user/vote.do",
        {
            voter_id:voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:1,
            indexpage: indexpage,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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


//根据条件，查询所有参与问卷信息(my2)
function selectByNamemy2(voter_id,type,voter_status,indexpage,title,content) {

    if(voter_id == null){
        var id = sessionStorage.getItem('id');

        var t = document.getElementById("selectpick-div").value;
        var name = document.getElementById("serachbox").value;

        voter_id = id;
        title = t;
        content = name;

        console.log(voter_id + "------" + title + "-------" + content);
    }

    $.post(
        "/elvis/user/voteBySearch.do",
        {
            voter_id: voter_id,
            type: type,
            voter_status: voter_status,
            indexpage: indexpage,
            vote_status:1,
            title: title,
            content: content,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title +"'>" + data.data.data[i].title + "</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"&option="+title+"&content="+content+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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
function fmy3(voter_id,type,voter_status,indexpage) {
    if(voter_id == null){
        var id = sessionStorage.getItem('id');
        voter_id = id;
    }

    $.post(
        "/elvis/user/vote.do",
        {
            voter_id:voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:1,
            indexpage: indexpage,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title+"'>"+data.data.data[i].title+"</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='voteanalysis.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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

// 根据条件，查询所有发布问卷信息()my3
function selectByNamemy3(voter_id,type,voter_status,indexpage,title,content) {

    if(voter_id == null){
        var id = sessionStorage.getItem('id');

        var t = document.getElementById("selectpick-div").value;
        var name = document.getElementById("serachbox").value;

        voter_id = id;
        title = t;
        content = name;

    }


    $.post(
        "/elvis/user/voteBySearch.do",
        {
            voter_id: voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:1,
            indexpage: indexpage,
            title: title,
            content: content,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title+"'>"+data.data.data[i].title+"</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='voteanalysis.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"&option="+title+"&content="+content+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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


//查询所有未通过问卷
function fmy0(voter_id,type,voter_status,indexpage) {

    var id = sessionStorage.getItem('id');

    if(voter_id == null){
        voter_id = id;
    }

    console.log(voter_id);
    var vote_status = 2;

    $.post(
        "/elvis/user/vote.do",
        {
            voter_id:voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:2,
            indexpage: indexpage,
        },
        function (data) {
            console.log(data);
            if(data.code == 200){
                if (data.result) {
                    console.log(data);
                    var list_item = $("#voteList");
                    list_item.empty();

                    for (var i = 0; i < data.data.countrows; i++) {

                        console.log("data.data.data[i].id = " + data.data.data[i].id)

                        console.log(data.data.data[0].open_voter_name);

                        var  vote_list = "<div id=\"ctl01_ContentPlaceHolder1_qls\" class=\"survey-list\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<dl class='survey-items' style='z-index:100;position:relative'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<dt class='item-top'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t<div class='pull-left'>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='/wjx/design/previewmobile.aspx?activity=51795833&s=1' target='_blank' class='pull-left item-tit'\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title+"'>"+data.data.data[i].title+"</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"&vote_status="+vote_status+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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

//通过查询条件，查询所有未通过问卷
function selectByNamemy0(voter_id,type,voter_status,indexpage,title,content) {

    if(voter_id == null){
        var id = sessionStorage.getItem('id');

        var t = document.getElementById("selectpick-div").value;
        var name = document.getElementById("serachbox").value;

        voter_id = id;
        title = t;
        content = name;

        console.log(voter_id + "------" + title + "-------" + content);
    }
    var vote_status = 2;

    $.post(
        "/elvis/user/voteBySearch.do",
        {
            voter_id: voter_id,
            type: type,
            voter_status: voter_status,
            vote_status:vote_status,
            indexpage: indexpage,
            title: title,
            content: content,
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t title='"+data.data.data[i].title +"'>" + data.data.data[i].title + "</a></div>\n" +
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href='watchvotedetail.html?voteid="+ data.data.data[i].id + "&voter_id="+voter_id+"&type="+type+"&voter_status="+voter_status+"&indexpage="+indexpage+"&option="+title+"&content="+content+"&vote_status="+vote_status+"' class='pull-left release-items' title='此问卷状态是草稿，点击发布问卷'>\n" +
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

//从详情界面跳转
function backDetail() {
    //获取href里面的值
    var href = window.location.search.substr(1);
    var flag = 0;
    if(href.indexOf("vote_status") > 0){
        //标记为未通过审核状态
        flag = 1;
    }
    console.log(href);
    var split = href.split("&");
    console.log(split);
    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }
    console.log("vote.js value = "+value);

    var voter_id = value[0];
    var type = value[1];
    var voter_status = value[2];
    var indexpage = value[3];

    if(flag == 0){
        if(value.length > 5){
            var title = value[4];
            var c = value[5];
            var content = decodeURI(c);
            console.log("乱码问题。。。。" + content);

            if(voter_status == "3"){
                console.log("voter_status = " + voter_status);
                selectByNamemy1(voter_id,type,voter_status,indexpage,title,content);
            }else if(voter_status == "2"){
                selectByNamemy2(voter_id,type,voter_status,indexpage,title,content);
            }else {
                selectByNamemy3(voter_id,type,voter_status,indexpage,title,content);
            }
        }else {
            if(voter_status == "3"){
                console.log("voter_status = " + voter_status);
                fmy1(voter_id,type,voter_status,indexpage);
            }else if(voter_status == "2"){
                fmy2(voter_id,type,voter_status,indexpage);
            }else {
                fmy3(voter_id,type,voter_status,indexpage);
            }
        }
    }else {
        if(value.length > 5) {
            var title = value[4];
            var c = value[5];
            var content = decodeURI(c);
            console.log("乱码问题。。。。" + content);
            selectByNamemy0(voter_id,type,voter_status,indexpage,title,content);
        }else {
            fmy0(voter_id,type,voter_status,indexpage);
        }
    }

}
