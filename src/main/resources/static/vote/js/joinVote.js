


function init() {

    var href = window.location.search.substr(1);
    console.log(href);

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


    if(type.equals("1")){

    }
}