function login() {
    var sno = $('#sno').val();
    var pwd = $('#pwd').val();
    console.log(sno+"---"+pwd);

    $.ajax({
        url: "/elvis/user/login.do",
        type: "post",
        data: {'sno':sno,'pwd':pwd},
        dataType: "json",

        success: function (data) {
            if (sno == ""||pwd=="") {
                alert("提交不能为空");
            }else if (data.result) {

                alert(data.message);
                var dd = data.data
                window.sessionStorage.id = dd[0].id;
                window.sessionStorage.sname = dd[0].sname;
                window.sessionStorage.sno = dd[0].sno;

                var str_data = JSON.stringify(dd);
                window.sessionStorage.data = str_data;

                window.location.href="/elvis/vote/my1.html";

            }else if (!data.result){
                alert(data.message);
                $('#pwd').val("");
                window.location.href="/elvis/vote/login.html";
            }
        }
    });
}


function loadInfo() {
    var sno = sessionStorage.getItem('sno');
    $.ajax({
        url:"/elvis/user/loadinfo.do",
        type:"post",
        data: {"sno":sno},
        dataType: "json",
        success:function (data) {
            console.log(data);
            var div_info = $("#user_info");
            var json = data.data[0];
            var div_inner ="<div class=\"title\">\n" +
                "                        注册信息\n" +
                "                    </div>\n" +
                "                    <div class=\"content\" style=\"height:328px\">\n" +
                "                        <div class=\"items\">\n" +
                "                            <div style=\"float:left;\"><b>学号/工号</b><span id=\"ctl01_ContentPlaceHolder1_lblLoginName\"\n" +
                "                                                                       style=\"margin-right:10px;\">"+json.sno+"</span>\n" +
                "                            </div>\n" +
                "                            <div style=\"clear:both;\"></div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"items\">\n" +
                "                            <b>姓名</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblUserId\">\n" +
                "\t\t\t\t\t\t\t\t\t\t"+json.sname+"\n" +
                "\t\t\t\t\t\t\t\t\t</span>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"items\">\n" +
                "                            <b>身份</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblUserId\">\n" +
                "\t\t\t\t\t\t\t\t\t\t"+json.identify+"\n" +
                "\t\t\t\t\t\t\t\t\t</span>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"items\">\n" +
                "                            <b>学院</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblUserId\">\n" +
                "\t\t\t\t\t\t\t\t\t\t"+json.colleage+"</span>\n" +
                "                        </div>\n" +
                "                        <div class=\"items\">\n" +
                "                            <b>专业</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblUserId\">\n" +
                "\t\t\t\t\t\t\t\t\t\t"+json.major+"\n" +
                "\t\t\t\t\t\t\t\t\t</span>\n" +
                "                        </div>\n" +
                "                        <div class=\"items\">\n" +
                "                            <b>班级</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblUserId\">\n" +
                "\t\t\t\t\t\t\t\t\t\t"+json.classes+"\n" +
                "\t\t\t\t\t\t\t\t\t</span>\n" +
                "                        </div>\n" +
                "                        <div id=\"ctl01_ContentPlaceHolder1_divEmail\" class=\"items\">\n" +
                "                            <b>邮件地址</b>\n" +
                "                            <span id=\"ctl01_ContentPlaceHolder1_lblEmail\">"+json.email+"</span>\n" +
                "                        </div>\n" +
                "                        <div id=\"ctl01_ContentPlaceHolder1_lkPasswordBox\" class=\"items\">\n" +
                "                            <b>密码</b>\n" +
                "                            <a id=\"ctl01_ContentPlaceHolder1_lkPassword\" onclick=\"add()\" class=\"wjx_alink\"\n" +
                "                               CausesValidation=\"false\" href=\"javascript:void(0);\"\n" +
                "                               style=\"display:inline-block;width:80px;\">修改密码</a>\n" +
                "                        </div>\n" +
                "                        <div class=\"items\" style=\"margin-top:10px;\">\n" +
                "\n" +
                "                        </div>\n" +
                "                        <div style=\"clear: both\"></div>\n" +
                "                    </div>";

            div_info.append(div_inner);


        }
    });

}



function changePwd() {
    var id = sessionStorage.getItem('id');
    var oldPwd = $("#oldPwd").val();
    var newPwd = $("#newpwd").val();
    var renewpwd = $("#renewpwd").val();

    console.log(oldPwd+"---"+newPwd+"---"+renewpwd);

    if (oldPwd ==""||newPwd==""||renewpwd=="") {
        alert("提交不能为空!");
    }else if (newPwd != renewpwd) {
        alert("新密码输入不一致！请重新输入!");
        $("#newpwd").val("");
        $("#renewpwd").val("");
    }else if (oldPwd==newPwd){
        alert("原密码和新密码一样！请重新输入!");
        $("#newpwd").val("");
        $("#renewpwd").val("");
    }else {
        $.ajax({
            url: "/elvis/user/changepwd.do",
            type: "post",
            data: {'id':id,'oldPwd':oldPwd,'newPwd':newPwd},
            dataType: "json",
            success: function (data) {
                if (data.result) {
                    alert(data.message);
                    $("#oldPwd").val("");
                    $("#newpwd").val("");
                    $("#renewpwd").val("");
                }else if (!data.result){
                    alert(data.message);
                    $("#oldPwd").val("");
                    $("#newpwd").val("");
                    $("#renewpwd").val("");
                }
            }
        });
    }

}