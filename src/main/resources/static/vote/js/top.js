// var isQywx = "False" == "True";
var sname = sessionStorage.getItem('sname');
console.log("sname="+sname);

if (sname==null){
    $("#ctl01_lblUserName").html("请登录！")
    $("#icon_judge").html("<i class='index_iconfont'>&#xe63c;</i>登录页面");
    $("#icon_judge").removeAttr("onclick");
}else {
    $("#ctl01_lblUserName").html(sname)//用户栏
}

function logout(){
    sessionStorage.clear();
}
