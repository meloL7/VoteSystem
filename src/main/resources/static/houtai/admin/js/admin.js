function login() {
    var username = $('#exampleInputEmail').val();
    var password = $('#exampleInputPassword').val();
    console.log(username+"---"+password);
    $.ajax({
        url: "/elvis/admin/login.do",
        type: "post",
        data: {'username':username,'password':password},
        dataType: "json",

        success: function (data) {
            if (username == ""||password=="") {
                alert("提交不能为空");
            }else if (data.result) {
                // alert(data.message);
                var dd = data.data

                window.sessionStorage.id = dd.id;
                window.sessionStorage.email = dd.email;
                window.sessionStorage.username = dd.username;

                window.location.href="/elvis/houtai/admin/index.html";

            }else if (!data.result){
                alert(data.message);
                if (data.code==501){
                    $('#exampleInputPassword').val("");
                }else if (data.code == 500) {
                    $('#exampleInputEmail').val("");
                    $('#exampleInputPassword').val("");
                }
                // window.location.href="/elvis/houtai/admin/pages-login.html";
            }
        }
    });
}