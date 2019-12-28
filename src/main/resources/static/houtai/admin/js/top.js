var name = sessionStorage.getItem('username');
console.log("name="+name);
var ii = $("#admin_name").html();
// var ii = document.getElementById("adminname");
console.log(ii);


if (name==null){
    $("#adminname").html("请登录")
    $("#adminname").attr("href","pages-login.html");
}else {
    $("#adminname").html(name)//用户栏
}


function logout(){
    sessionStorage.clear();
}