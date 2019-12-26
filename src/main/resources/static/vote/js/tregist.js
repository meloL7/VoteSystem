
function checkSno() {
    var sno = $("#Register1_UserName").val();

    if (sno != "") {
        $.ajax({
            url:"/elvis/getinfo.do",
            type:"post",
            data: {'identify':'教师','sno':sno},
            dataType: "json",
            success:function (data) {
                if (data.result){
                    console.log(data);
                    alert(data.message);
                    $("#Password").removeAttr("disabled");
                    $("#Register1_EMAIL").removeAttr("disabled");
                    window.sessionStorage.sname = data.data.sname;
                    window.sessionStorage.sex = data.data.sex;
                    window.sessionStorage.age = data.data.age;
                    window.sessionStorage.colleage = data.data.colleage;
                    window.sessionStorage.major = data.data.major;
                    window.sessionStorage.grade = data.data.grade;
                    window.sessionStorage.classes = data.data.classes;
                }else if (!data.result){
                    alert(data.message);
                }
            }
        });
    }else {
        alert("请输入学号再验证!")
    }

}

/**
 * 邮箱验证
 */
function Mycheckemail() {
    var myeamil = $("#Register1_EMAIL").val();
    console.log("输入的email："+myeamil)

    // var mybtn = $("#checkemail").val();
    // mybtn.hide();
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (myeamil == "") {
        alert("邮箱不能为空！")
    }else if (!myReg.test(myeamil)) {
        alert("请输入正确的邮箱格式");
        // mybtn.html("验证成功");
        $("#Register1_EMAIL").val("");
        // $("#Register1_EMAIL").attr("placeholder", "邮箱格式不对")

    } else {
        //AJAX掉后台发送验证码
        $.ajax({
            url:"/elvis/sendemail.do",
            type: "post",
            data: {'email':myeamil},
            dataType: "json",
            success: function (data) {

            }
        });
        $("#checkemail").html("已发送");
        $("#checkemail").attr("disabled","disabled");
        $('#keycodes').removeAttr('disabled');
        $('#keycodes').attr("placeholder", "请输入验证码");
    }
}

/**
 * 注册业务
 */
function registStudent() {
    var sname = window.sessionStorage.getItem("sname");
    var sex = window.sessionStorage.getItem("sex");
    var age = window.sessionStorage.getItem("age");
    var colleage = window.sessionStorage.getItem("colleage");
    var major = window.sessionStorage.getItem("major");
    var grade = window.sessionStorage.getItem("grade");
    var classes = window.sessionStorage.getItem("classes");
    var sno = $("#Register1_UserName").val();
    var email = $("#Register1_EMAIL").val();
    var pwd = $("#Password").val();

    /**
     * 密码包含 数字,英文,字符中的两种以上，长度6-20
     */
    var reg = /^(\w){6,20}$/;
    /**
     * 密码验证
     */
    $.ajax({
        url:"/elvis/register.do",
        type:"post",
        data:{'sno':sno,'identify':'教师','email':email,'pwd':pwd,'sname':sname,'sex':sex,'age':age,'colleage':colleage,'major':major,'grade':grade,'classes':classes},
        dataType:"json",
        success:function (data) {
            if (reg.exec(pwd)) {
                if (data.result) {
                    alert(data.message);
                    sessionStorage.clear();
                    window.location.href="/elvis/vote/login.html";
                }else if(!data.result){
                    alert(data.message);
                }
            } else {
                alert("请输入正确的密码格式！")
            }
        }
    });

}

