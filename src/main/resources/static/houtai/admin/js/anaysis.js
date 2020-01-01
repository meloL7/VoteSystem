function returnPre(a) {
    //获取href里面的值
    var href = window.location.search.substr(1);
    // console.log((href!=null)+"6666");
    var split = href.split("&");

    var value = [];
    for (var i = 0; i < split.length; i++) {
        var v = split[i].split("=");
        value.push(v[1]);
    }

    var condition = decodeURI(value[0]);
    var content = decodeURI(value[1]);
    var type = value[2];
    var vote_status = value[3];
    var indexpage = value[4];
    var vote_id = value[5];

    if(type ==1){
        a.href="naire_detail_list/timeout.html?condition="+condition+"&content="+content+"&type="+type+"&vote_status="+vote_status+"&indexpage="+indexpage;
    }
    if(type == 2){
        a.href="vote_detail_list/timeout.html?condition="+condition+"&content="+content+"&type="+type+"&vote_status="+vote_status+"&indexpage="+indexpage;
    }



}
