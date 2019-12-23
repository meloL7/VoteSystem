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

    voteDetail(voter_id,vote_id);

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
        if(value.length > 5){
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
function voteDetail(voter_id,vote_id) {
    $.post(
        "/elvis/user/voteDetail.do",
        {
            voter_id:voter_id,
            vote_id:vote_id,
        },
        function (data) {
            console.log(data);

            var list_content = $("#ctl02_ContentPlaceHolder1_divStatData");

            var content = $(".title-item");



            var title = "<div class='title'>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>"+data.data.vote.title+"</h1>\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>"+data.data.vote.introduction+"</h2>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";

            content.append(title);

            for (var index = 0; index < data.data.select.length; index++) {
                //拼接哪个问题下的所有选项
                var optionIndex = "option"+index;
                console.log(optionIndex);

                var head = "<div class='count unit'>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jumbotron well\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>"+data.data.select[index].select_tiltle+"</h3>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>";

                content.append(head);

                //判断是单选还是多选
                if(data.data.select[index].select_type == 2){
                    //遍历所有的选项
                    for(var i = 0;i < data.data.allOption.option0.length;i++){
                        var options = "<div class=\"checkbox icheck-peterriver\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked id=\"ck1\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck1\">"+data.data.allOption.option0[i].option_content+"</label>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";
                        content.append(options);
                    }
                }else {
                    for (var i = 0; i < data.data.allOption.option0.length; i++) {
                        options = "<div class=\"radio icheck-peterriver\">\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"peterriver1\" name=\"peterriver\" />\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"peterriver1\">"+data.data.allOption.option0[i].option_content+"</label>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";

                        content.append(options);
                    }
                }
                content.append("</div>");
                content.append("</div>");
                content.append("</div>");
            }






            
            // var content = "<div class='title-item'>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='title'>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>"+data.data.vote.title+"</h1>\n" +
            //     "\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>"+data.data.vote.introduction+"</h2>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='count unit'>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jumbotron well\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>"+data.data.select[index].select_title+"</h3>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"peterriver1\" name=\"peterriver\" />\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"peterriver1\">"+data.data.allOption.option0[0].option_content+"</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" checked id=\"peterriver2\" name=\"peterriver\" />\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"peterriver2\">"+data.data.allOption.option0[1].option_content+"</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" checked id=\"peterriver3\" name=\"peterriver\" />\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"peterriver3\">"+data.data.allOption.option0[2].option_content+"</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" checked id=\"peterriver4\" name=\"peterriver\" />\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"peterriver4\">"+data.data.allOption.option0[3].option_content+"</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n" +
            //     "\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jumbotron well\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>你最喜欢的明星</h3>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked id=\"ck1\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck1\">peterriver</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"ck2\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck2\">peterriver</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  id=\"ck3\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck3\">peterriver</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox icheck-peterriver\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  id=\"ck4\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ck4\">peterriver</label>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 10px 0 10px;\">\n" +
            //     "\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"clear: both;\">\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"padding-bottom: 30px;\">\n" +
            //     "\n" +
            //     "\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"divclear\"></div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"divclear\"></div>\n" +
            //     "\t\t\t\t\t\t\t\t\t\t\t\t</div>";

           // list_content.append(content);

        }
    )
}