function login() {
    var sno = $('#sno').val();
    var pwd = $('#pwd').val();
    console.log(sno+"---"+pwd);

    $.post(
        "http://localhost:8080/elvis/user/login.do",
        {
            sno:sno,
            pwd:pwd
        },
        function(data) {
            if (sno == ""||pwd=="") {
                alert("提交不能为空");
            }else if (sno != ""&&pwd!=""&&data.result == true) {
                console.log(data);
                window.location.href = "my1.html";
                alert(data.message);
            }else if (data.result == false){
                window.location.href = "login.html";
                alert(data.message);

            }
        }
    );




}