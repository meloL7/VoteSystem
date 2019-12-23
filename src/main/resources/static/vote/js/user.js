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
            if (data.result == true) {
                console.log(data)
                window.location.href = "my1.html";
                alert(data.message);
            }else if (data.result == false){
                alert(data.message);

            }
        }
    );




}