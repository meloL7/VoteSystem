//页面加载时页面布局


//从详情界面跳转
function returnPre() {
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


    console.log("condition:"+condition);
    console.log("content:"+content);
    console.log("type:"+type);
    console.log("vote_status:"+vote_status);
    console.log("indexpage:"+indexpage);

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