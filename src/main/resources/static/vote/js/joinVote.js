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

    var voter_id = value[1];
    var type = value[2];
    var voter_status = value[3];
    var indexpage = value[4];

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