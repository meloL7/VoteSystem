function checkPower(x) {

    var sno = window.sessionStorage.sno;
    $.ajax({
        url: "/elvis/user/checkPower",
        type: "post",
        data:{
            sno
        },
        traditional: true,
        async: false,
        success: function (data) {
            if(data.message == "有权限"){
                x.href = "create.html";
            }else if(data.message == "无权限"){
                alert("无权限")
            }else {
                alert("服务器错误")
            }
        }
    });
}