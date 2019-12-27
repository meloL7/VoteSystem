function checkALL() {
    var sno = $("#sno").val();
    console.log("---"+sno)
    $.ajax({
        url:"/elvis/isuser.do",
        type: "post",
        data: {'sno':sno},
        dataType: "json",

        success: function (data) {
            if (sno == "") {
                alert("提交不能为空");
            }else if (data.result) {
                window.sessionStorage.id = data.data[0].id;
                window.sessionStorage.sname = data.data[0].sname;
                window.sessionStorage.email = data.data[0].email;

                window.location.href="/elvis/vote/Appeal/forgetPwd2.html";
            }else if (!data.result){
                alert(data.message);
                $('#sno').val("");
                window.location.href="/elvis/vote/Appeal/demo.html";
            }
        }
    });
}

var id = window.sessionStorage.getItem("id");
var sname = window.sessionStorage.getItem("sname");
$("#pwd_sname").attr('value',sname);
var email = window.sessionStorage.getItem("email");
$("#pwd_email").attr('value',email);


function checkcodes() {
    // var code = document.getElementById("code");
    $.ajax({
        url:"/elvis/sendemail.do",
        type: "post",
        data: {'email':email},
        dataType: "json",
        success: function (data) {

        }
    });
    $("#xbtn").html("已发送");
    $("#xbtn").addClass('disabled');
    $("#xbtn").css("color","#686868");
    $("#code").removeAttr("disabled");

}


$("#sub").click(function () {
    var code = $("#code").val();
    $.ajax({
        url:"/elvis/getcode.do",
        type: "post",
        data: {'email':email},
        dataType: "json",
        success: function (data) {
            if (data.data==null){
                alert("验证码失效！");
                window.sessionStorage.clear();
                window.location.href = "/elvis/vote/Appeal/demo.html";
            }else {
                var acount = data.data.acount;
                if (code==acount){
                    window.location.href = "/elvis/vote/Appeal/forgetPwd3.html";
                }else {
                    alert("验证码错误，不匹配！请重新输入！");
                }
            }

        }
    });
});

$("#mybtn").click(function () {
    var newpwd = $("#newpwd").val();
    var renewpwd = $("#renewpwd").val();

    /**
     * 密码包含 数字,英文,字符中的两种以上，长度6-20
     */
    var reg = /^(\w){6,20}$/;

    if(!reg.exec(newpwd)){
        alert("密码格式为6~20位字母、数字或下划线，请重新输入！")
    }else if (renewpwd != newpwd) {
        alert("两次密码输入不一致，请重新输入！")
    }else {
        $.ajax({
            url:"/elvis/repwd.do",
            type: "post",
            data: {'id':id,'newPwd':newpwd},
            dataType: "json",
            success: function (data) {
                alert(data.message);
                window.location.href="/elvis/vote/Appeal/forgetPwd4.html";
            }
        });
    }


});

