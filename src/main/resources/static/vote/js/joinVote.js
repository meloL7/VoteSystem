function init() {

    var href = window.location.search.substr(1);
    console.log(href);

    var flag = 0;
    if(href.indexOf("vote_status") > 0){
        //标记为审核未通过
        flag = 1;
    }
    var split = href.split("&");
    console.log(split);

    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");

        value.push(v[1]);


    }
    console.log(value);

    var vote_id = value[0];
    var voter_id = value[1];
    var type = value[2];
    var voter_status = value[3];
    var indexpage = value[4];


    if(flag == 1){
        //未通过
        voteDetail(voter_id,vote_id,type,false);
    }else {
        voteDetail(voter_id,vote_id,type,true);
    }



    if(flag == 0){
        if(value.length > 5){
            var title = value[5];
            var c = value[6];
            var content = decodeURI(c);
            console.log("乱码问题。。。" + content);
            if(voter_status == "3"){
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my1.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my4.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);

                }
            }else if(voter_status == "2"){
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my2.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my5.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);

                }
            }else {
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my3.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my6.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content);

                }
            }

        }else {
            if(voter_status == "3"){
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my1.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my4.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);

                }
            }else if(voter_status == "2"){
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my2.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my5.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);

                }
            }else {
                if(type == "1"){
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my3.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);
                }else {
                    console.log("进入。。。。");
                    $("#return-wrapper").attr('href','my6.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage);

                }
            }


        }
    }else {
        if(value.length > 6){
            var title = value[5];
            var c = value[6];
            var content = decodeURI(c);
            console.log("乱码问题。。。" + content);
            if(type == "1"){
                console.log("进入。。。。");
                $("#return-wrapper").attr('href','my0.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content+"&vote_status");
            }else {
                console.log("进入。。。。");
                $("#return-wrapper").attr('href','my7.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+'&title='+title+'&content='+content+"&vote_status");

            }
        }else {
            if(type == "1"){
                console.log("进入。。。。");
                $("#return-wrapper").attr('href','my0.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+"&vote_status");
            }else {
                console.log("进入。。。。");
                $("#return-wrapper").attr('href','my7.html?voter_id='+voter_id+'&type='+type+'&voter_status='+voter_status+'&indexpage='+indexpage+"&vote_status");

            }
        }

    }


}


//
function voteDetail(voter_id,vote_id,type,isFlag) {
    $.post(
        "/elvis/user/voteDetail.do",
        {
            voter_id:voter_id,
            vote_id:vote_id,
        },
        function (data) {
            console.log(data);

            var h = $("#divFilter");


            if(type == 1){

                con = "<div class=\"playSet\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"head clearfix\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"htit pull-left\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"text-decoration: underline; cursor: pointer;\">问卷详情</span>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>";

            }else {
                con ="<div class=\"playSet\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"head clearfix\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"htit pull-left\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"text-decoration: underline; cursor: pointer;\">投票详情</span>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>";

                console.log(con)

            }
            h.append(con);

            //审核不通过原因
            var beacuse = $("#beacuse");
            console.log(h);
            var con;
            if(!isFlag){
                var cuse = "<span>不通过原因："+data.data.vote.nopass_result+"</span>";
            }
            beacuse.append(cuse);

            var content = $(".title-item");



            var title = "<div class='title'>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>"+data.data.vote.title+"</h1>\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>"+data.data.vote.introduction+"</h2>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";

            content.append(title);

            //遍历所有的题目
            for (var index = 0; index < data.data.select.length; index++) {

                var head = "<div class='count unit'>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jumbotron well\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>"+data.data.select[index].select_tiltle+"</h3>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>";

                content.append(head);

                //判断是单选还是多选
                if(data.data.select[index].select_type == 2){
                    //遍历该题目所有的选项
                    for(var k = index;k < index + 1;k++){
                        //遍历所有的选项
                        for (var j = 0; j < data.data.allOption[k].length; j++) {
                            var options = "<div class=\"checkbox icheck-peterriver\" id='"+data.data.allOption[k][j].option_id+"'>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"   class='radio_detail' >\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck1\">"+data.data.allOption[k][j].option_content+"</label>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";
                            content.append(options);
                        }

                    }
                }else {
                    for (var q = index;q < index + 1;q++){

                        for (var i = 0; i < data.data.allOption[q].length; i++) {

                            options = "<div class=\"radio icheck-peterriver\" id='"+data.data.allOption[q][i].option_id+"' >\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class='radio_detail' id='peterriver"+data.data.allOption[q][i].option_id+"'  name='peterriver"+data.data.allOption[q][i].option_id+"' />\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for='peterriver"+data.data.allOption[q][i].option_id+"' >"+data.data.allOption[q][i].option_content+"</label>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";

                            content.append(options);
                        }
                    }

                }
                content.append("</div>");
                content.append("</div>");
                content.append("</div>");

                voteAnswer(index,data);


            }
        }
    );
}

//渲染答案
//index表示哪一道题
function voteAnswer(index,data) {
    //获取span标签里面的option_id的值

    for (var i = 0; i < data.data.allOption[index].length; i++) {
        for (var j = 0; j < data.data.option[index].length; j++) {
            if(data.data.allOption[index][i].option_id == data.data.option[index][j].option_id){
                console.log("找到正确答案。。。" + data.data.option[index][j].option_id);
                var test = $("#"+data.data.allOption[index][i].option_id);

                var x = test.find(".radio_detail");
                x.attr("checked","true");



                // console.log(test);
                 console.log("input"+x);

            }
        }
    }


    // var test = document.getElementsByClassName("radio icheck-peterriver")[0].getAttribute("value");
    // console.log(test);

    // var option_id = [];
    // option_id.push($(".option_id").text());

    // console.log("option_id = "+option_id.pop());



    // var answer = [];
    // //得到该题所选的选项
    // for (var i = 0; i < data.data.option[index].length; i++) {
    //     answer.push(data.data.option[index][i].option_id);
    // }
    //
    // for (var j = 0; j <answer.length;j++){
    //     if(data.data.allOption[index][i].option_id == answer[j]){
    //
    //     }
    //
    // }
    //

    // console.log(answer.pop());






}