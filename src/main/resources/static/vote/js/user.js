function login() {
    console.log("进来了");
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
                // window.location.href="/elvis/vote/login.html";
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
    /**
     * 按条件查询学生
     */
    function searchStudent(indexpage) {
        var key = $("#student_select").val();
        var value = $("#custname").val();
        console.log("属性---值"+key+"---"+value)
        $.post(
            "/elvis/admin/searchuser.do?indexpage="+indexpage,
            {
                key:key,
                value:value,
                identify:'学生'
            },
            function (data) {
                console.log(data);
                if (data.code == 200) {
                    var s_list = $("#student_list");
                    s_list.empty();
                    var json = data.data.list;
                    for (var i = 0; i < json.length; i++) {
                        var tr_list="<tr id="+ json[i].sno+">\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].id+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sno+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].major+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].grade+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].classes+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sname+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].age+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sex+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + json[i].id + "\">"+json[i].email+"</td>\n" +
                            "<button id=\"power4\" onclick=\"loadColleage("+json[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                            "\t<button id=\"power1\" onclick=\"checkP("+json[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+json[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button onclick=\"readPower("+json[i].sno+")\"   id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                            "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"getID("+json[i].id+")\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t</tr>\n";
                        s_list.append(tr_list);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.pages,
                        current: data.data.pageNum,
                        backfun: function (e) {
                            if (e.current > data.data.pages) {
                                return
                            }
                            if (e.current == 0) {
                                e.current = 1
                            }
                            console.log(e.current+"---"+e.pageNum);
                            // pageGet(e.current, pager.pagesize);
                            searchStudent(e.current);
                        }
                    });
                }else {
                    alert(data.message+"-->出现"+data.code+"错误！请检查您输入的数值是否和选项匹配！");
                }

            }
        );
    };

    /**
     * 按条件查询教师
     */
    function searchTeacher(indexpage) {
        var key = $("#teacher_select").val();
        var value = $("#custname").val();
        console.log("属性---值"+key+"---"+value)
        if (isNaN(value) && key == 0) {
            alert("输入学号！")
        }
        $.post(
            "/elvis/admin/searchuser.do?indexpage="+indexpage,
            {
                key:key,
                value:value,
                identify:'教师'
            },
            function (data) {
                console.log(data);
                var tjson = data.data.list;
                if (data.code == 200) {
                    var tr_list = $('#teacher_list');
                    tr_list.empty()
                    for (var i = 0; i < tjson.length; i++) {
                        var td_list = "<tr id="+ tjson[i].sno+"><td>"+tjson[i].id+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sno+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].major+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sname+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].age+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sex+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + tjson[i].id + "\">"+tjson[i].email+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "<button id=\"power4\" onclick=\"loadColleage("+tjson[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                            "\t<button id=\"power1\" onclick=\"checkP("+tjson[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+tjson[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button onclick=\"readPower("+tjson[i].sno+")\"     id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"getID("+tjson[i].id+")\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                            "\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
                            "</tr>";
                        tr_list.append(td_list);
                    }
                    $(".zxf_pagediv").createPage({
                        pageNum: data.data.pages,
                        current: data.data.pageNum,
                        backfun: function (e) {
                            if (e.current > data.data.pages) {
                                return
                            }
                            if (e.current == 0) {
                                e.current = 1;
                            }
                            console.log(e.current+"---"+e.pageNum);
                            // pageGet(e.current, pager.pagesize);
                            searchTeacher(e.current);
                        }
                    });
                }else {
                    alert(data.message+"-->出现"+data.code+"错误！请检查您输入的数值是否和选项匹配！");
                }

            }
        );
    };

//加载学生数据
    function loadStudentData(indexpage) {
        $.ajax(
            {
                url:"/elvis/admin/loaduser.do?indexpage="+indexpage,
                type:"get",
                data:{'identify':'学生'},
                dataType:"json",
                // contentType:"application/json;charset=utf-8",
                success:function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        var s_list = $("#student_list");
                        s_list.empty();
                        var json = data.data.list;
                        for (var i = 0; i < json.length; i++) {
                            var tr_list = "<tr id="+ json[i].sno+">\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + (i + 1) + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sno + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].colleage + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].major + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].grade + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].classes + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sname + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].age + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sex + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + json[i].id + "\">" + json[i].email + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "<button id=\"power4\" onclick=\"loadColleage("+json[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                                "\t<button id=\"power1\" onclick=\"checkP("+json[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+json[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button  onclick=\"readPower("+json[i].sno+")\"  id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"getID("+json[i].id+")\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\t\t\t\t\t\t\t\t\t</tr>\n";
                            s_list.append(tr_list);
                        }
                        // window.sessionStorage.pages = data.data.pages;
                        // window.sessionStorage.pageNum = data.data.pageNum;
                        $(".zxf_pagediv").createPage({
                            pageNum: data.data.pages,
                            current: data.data.pageNum,
                            backfun: function (e) {
                                if (e.current > data.data.pages) {
                                    return
                                }
                                if (e.current == 0) {
                                    e.current = 1
                                }
                                console.log(e.current+"---"+e.pageNum);
                                // pageGet(e.current, pager.pagesize);
                                loadStudentData(e.current);
                            }
                        });

                    }else {
                        alert(data.message+"-->出现"+data.code+"错误");
                    }
                },error:function (data) {
                    console.log(data);
                }
            }
        );
    }


//修改邮箱
    var id;
    function getID(userid) {
        console.log("id:" + userid);
        id = userid;
    }
    $("#changeemail").click(function () {
        var newEmail = $("#newEmail").val();
        var reg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

        if (!reg.test(newEmail)) {
            alert("邮箱格式错误!")
        }else if (newEmail == ""){
            alert("邮箱不能为空！")
        }else{
            $.ajax({
                url: "/elvis/admin/changeEmail.do",
                type: "post",
                data: {'id':id,'newEmail':newEmail},
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    var email = document.getElementById("email_" + id);
                    var oldemail = document.getElementById("email_" + id).innerText;
                    if (data.result) {
                        alert(data.message);
                        email.innerHTML = "\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + id + "\">" + newEmail + "</td>\n";
                    } else if (!data.result) {
                        alert(data.message);
                        email.innerHTML = "\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + id + "\">" + oldemail + "</td>\n";
                    }
                    $("#newEmail").val("");
                    $("#exampleModalCenter").modal("hide");
                }
            });

        }
    });


//加载老师数据
    function loadTeacherData(indexpage) {
        $.ajax(
            {
                url:"/elvis/admin/loaduser.do?indexpage="+indexpage,
                type:"get",
                data:{'identify':'教师'},
                dataType:"json",
                // contentType:"application/json;charset=utf-8",
                success:function (data) {
                    console.log(data);
                    var tjson = data.data.list;
                    if (data.code == 200) {
                        var body_list = $('#teacher_list');
                        body_list.empty();
                        for (var i = 0; i < tjson.length; i++) {
                            var td_list = "<tr id="+ tjson[i].sno+"><td>"+(i+1)+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sno+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].colleage+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].major+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sname+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].age+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sex+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td id=\"email_" + tjson[i].id + "\">"+tjson[i].email+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "<button id=\"power4\" onclick=\"loadColleage("+tjson[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                                "\t<button id=\"power1\" onclick=\"checkP("+tjson[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+tjson[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button onclick=\"readPower("+tjson[i].sno+")\" id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"getID("+tjson[i].id+")\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
                                "</tr>";
                            body_list.append(td_list);
                        }
                        $(".zxf_pagediv").createPage({
                            pageNum: data.data.pages,
                            current: data.data.pageNum,
                            backfun: function (e) {
                                if (e.current > data.data.pages) {
                                    return
                                }
                                if (e.current == 0) {
                                    e.current = 1
                                }
                                console.log(e.current+"---"+e.pageNum);
                                // pageGet(e.current, pager.pagesize);
                                loadTeacherData(e.current);
                            }
                        });
                    }else {
                        alert(data.message+"-->出现"+data.code+"错误");
                    }
                },error:function (data) {
                    console.log(data);
                }
            }
        );
    }





//弃用了！
//分了页的加载学生数据(调用这个函数就行)
    function loadSPageData(indexpage) {
        $.ajax(
            {
                url:"/elvis/admin/loaduser.do?indexpage="+indexpage,
                type:"get",
                data:{'identify':'学生'},
                dataType:"json",
                // contentType:"application/json;charset=utf-8",
                success:function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        var s_list = $("#student_list");
                        s_list.empty();
                        var json = data.data.list;
                        for (var i = 0; i < json.length; i++) {
                            var tr_list = "<tr id="+ json[i].sno+" >\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + (i + 1) + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sno + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].colleage + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].major + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].grade + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sname + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].age + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].sex + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>" + json[i].email + "</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "<button id=\"power4\" onclick=\"loadColleage("+json[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                                "\t<button id=\"power1\" onclick=\"hid("+json[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+json[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button onclick=\"readPower("+json[i].sno+")\" id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\t\t\t\t\t\t\t\t\t</tr>\n";
                            s_list.append(tr_list);
                        }

                        //分页
                        var table_id = $('#page_s_table');
                        table_id.empty();
                        var page_html = "\t\t\t\t\t\t\t\t\t<tr>\n" +
                            "                                        <td colspan=\"10\" align=\"center\">\n" +
                            "                                            <ul class=\"pagination pagination-rounded\">\n" +
                            "                                                <li class=\"paginate_button page-item previous\"\n" +
                            "                                                    id=\"complex-header-datatable_previous\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadSPageData("+data.data.prePage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"0\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">\n" +
                            "                                                        <i class=\"mdi mdi-chevron-left\"></i>\n" +
                            "                                                    </a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item active\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadSPageData(1)\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+1+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">"+1+"</a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                            "                                                </li>\n";


                        for (var i = 0; i < data.data.navigatepageNums.length; i++) {
                            page_html += "                                       <li class=\"paginate_button page-item\">\n" +
                                "                                                    <a href=\"javascript:void(0);\" onclick=\"loadSPageData("+data.data.navigatepageNums[i]+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.navigatepageNums[i]+"\"\n" +
                                "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.navigatepageNums[i]+"</a>\n" +
                                "                                                </li>\n" ;
                        }

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadSPageData("+data.data.pages+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.pages+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.pages+"</a>\n" +
                            "                                                </li>\n";


                        page_html +="                                        <li class=\"paginate_button page-item next\"\n" +
                            "                                                    id=\"complex-header-datatable_next\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadSPageData("+data.data.nextPage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+(data.data.pages+1)+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\"><i\n" +
                            "                                                            class=\"mdi mdi-chevron-right\"></i></a>\n" +
                            "                                                </li>\n" +
                            "                                            </ul>\n" +
                            "                                        </td>\n" +
                            "                                    </tr>";

                        table_id.append(page_html);

                    }else {
                        alert(data.message+"-->出现"+data.code+"错误");
                    }
                },error:function (data) {
                    console.log(data);
                }
            }
        );
    }



//分了页的加载老师数据（调用这个函数就行）
    function loadTPageData(indexpage) {
        $.ajax(
            {
                url:"/elvis/admin/loaduser.do?indexpage="+indexpage,
                type:"get",
                data:{'identify':'教师'},
                dataType:"json",
                // contentType:"application/json;charset=utf-8",
                success:function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        var body_list = $('#teacher_list');
                        body_list.empty();
                        for (var i = 0; i < data.data.list.length; i++) {
                            var td_list = "<tr><td>"+data.data.list[i].id+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sno+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].colleage+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].major+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sname+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].age+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sex+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].email+"</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "<button id=\"power4\" onclick=\"loadColleage("+tjson[i].sno+")\"  type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\".bd-example-modal-lg\">赋予权限</button>"+
                                "\t<button id=\"power1\" onclick=\"hid("+tjson[i].sno+")\" type=\"button\" class=\"btn btn-primary waves-effect waves-light\" >权限管理</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"power2\" onclick=\"xclose("+tjson[i].sno+");\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"btn btn-primary waves-effect waves-light\">取消权限</button>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button onclick=\"readPower("+tjson[i].sno+")\" id=\"power3\" type=\"button\" style=\"display: none;\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\"\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-target=\"#modal2\">查看权限</button>"+
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
                                "\n" +
                                "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
                                "</tr>";
                            body_list.append(td_list);
                        }

                        // 分页
                        var table_id = $('#page_t_table');
                        table_id.empty();

                        var page_html = "\t\t\t\t\t\t\t\t\t<tr>\n" +
                            "                                        <td colspan=\"10\" align=\"center\">\n" +
                            "                                            <ul class=\"pagination pagination-rounded\" id=\"paginate\">\n" +
                            "                                                <li class=\"paginate_button page-item previous\"\n" +
                            "                                                    id=\"complex-header-datatable_previous\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTPageData("+data.data.prePage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"0\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">\n" +
                            "                                                        <i class=\"mdi mdi-chevron-left\"></i>\n" +
                            "                                                    </a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item active\">\n" +
                            "                                                    <a id=\"a"+data.data.pageNum+"\" href=\"javascript:void(0);\" onclick=\"loadTPageData(1)\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+1+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">"+1+"</a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                            "                                                </li>\n";


                        for (var i = 0; i < data.data.navigatepageNums.length; i++) {
                            page_html += "                                       <li class=\"paginate_button page-item\">\n" +
                                "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTPageData("+data.data.navigatepageNums[i]+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.navigatepageNums[i]+"\"\n" +
                                "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.navigatepageNums[i]+"</a>\n" +
                                "                                                </li>\n" ;
                        }

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                            "                                                </li>\n";

                        page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTPageData("+data.data.pages+")\"  aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.pages+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.pages+"</a>\n" +
                            "                                                </li>\n";


                        page_html +="                                        <li class=\"paginate_button page-item next\"\n" +
                            "                                                    id=\"complex-header-datatable_next\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTPageData("+data.data.nextPage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+(data.data.pages+1)+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\"><i\n" +
                            "                                                            class=\"mdi mdi-chevron-right\"></i></a>\n" +
                            "                                                </li>\n" +
                            "                                            </ul>\n" +
                            "                                        </td>\n" +
                            "                                    </tr>";

                        table_id.html(page_html);


                        // var pageNum = data.data.pageNum;
                        $('#a1')


                    }else {
                        alert(data.message+"-->出现"+data.code+"错误");
                    }
                },error:function (data) {
                    console.log(data);
                }
            }
        );
    }




// 傻逼写法
// // 加载所有教师
// function loadTeacherList() {
//     $.post(
//       "/elvis/admin/loaduser.do",
//         {
//             identify:'教师',
//         },
//         function (data) {
//             console.log(data);
//             if (data.code == 200) {
//                 var tr_list = $('#teacher_list');
//                 for (var i = 0; i < data.data.list.length; i++) {
//                     var td_list = "<tr><td>"+(i+1)+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sno+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].colleage+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].major+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sname+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].age+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sex+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].email+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">权限管理</button>\n" +
//                         "\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
//                         "\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
//                         "</tr>";
//                     tr_list.append(td_list);
//                 }
//             }else {
//                 alert(data.message+"-->出现"+data.code+"错误");
//             }
//
//             //分页
//
//         }
//     );
// };
//加载所有学生
// function loadStudentList() {
//     $.post(
//         "/elvis/admin/loaduser.do",
//         {
//             identify:'学生',
//         },
//         function (data) {
//             console.log(data);
//             if (data.code = 200) {
//                 var s_list = $("#student_list");
//                 var json = data.data.list;
//                 for (var i = 0; i < json.length; i++) {
//                     var tr_list="<tr>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sno+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].colleage+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].major+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].grade+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].class+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sname+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].age+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sex+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].email+"</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">赋予</button>\n" +
//                         "\n" +
//                         "\t\t\t\t\t\t\t\t\t\t</td>\n" +
//                         "\n" +
//                         "\n" +
//                         "\t\t\t\t\t\t\t\t\t\t<td>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
//                         "\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
//                         "\n" +
//                         "\t\t\t\t\t\t\t\t\t\t</td>\n" +
//                         "\t\t\t\t\t\t\t\t\t</tr>\n";
//                     s_list.append(tr_list);
//                 }
//             }else {
//                 alert(data.message+"-->出现"+data.code+"错误");
//             }
//         }
//     );
// };

    var sno1;

//权限初始数据记载
    function loadColleage(sno) {
        // console.log("点击事件触发了")
        sno1 = sno;
        $.post(
            "/elvis/admin/loadcolleage",
            {},
            function (data) {
                if(data.code == 200){

                    var colleagess = $("#colleageselc")
                    colleagess.empty();
                    var cop =  document.createElement("optgroup");
                    cop.className = "optgroup-1";
                    cop.label = "湖南理工大学"
                    for (var i = 0; i <data.data.length ; i++) {
                        console.log(data.data[i].colleage_name)
                        var option = document.createElement("option");
                        option.className = "option-1";
                        option.text = data.data[i].colleage_name;
                        cop.append(option);
                    }
                    console.log(cop)
                    colleagess.append(cop);
                    colleagess.selectpicker('refresh');

                }
            }
        );

    }
    function loadMajor(c) {

        var data = {
            colleagecontent:c
        }
        // console.log(data)
        $.ajax({
            url:"/elvis/admin/loadmajor",
            type:"post",
            data:data,
            traditional:true,
            success:function (data) {
                if(data.code == 200){

                    var majorss = $("#majorselc");
                    majorss.empty();
                    // data.data == biglist
                    // data.data.data[i] ==第几个小list

                    for (var i = 0; i <data.data.length ; i++) {
                        var cop =  document.createElement("optgroup");
                        cop.className = "optgroup-"+(i+1);
                        // console.log(data.data[i].parentName)
                        cop.label = data.data[i].parentName;
                        // console.log("test"+data.data[0].data.length)
                        for (var j = 0; j <data.data[i].data.length ; j++) {
                            var option = document.createElement("option");
                            option.className = "option-"+(i+1);
                            option.text = data.data[i].data[j].major_name;
                            cop.append(option);
                        }
                        majorss.append(cop);

                    }


                    majorss.selectpicker('refresh');


                }
            }
        });

    }

    function loadgrade(c) {
        console.log("进入了loadgrade")
        var data = {
            majorcontent:c
        }

        $.ajax({
            url:"/elvis/admin/loadgrade",
            type:"post",
            data:data,
            traditional:true,
            success:function (data) {

                if(data.code == 200){

                    var gradess = $("#gradeselc");
                    gradess.empty();
                    // data.data == biglist
                    // data.data.data[i] ==第几个小list

                    for (var i = 0; i <data.data.length ; i++) {

                        var cop =  document.createElement("optgroup");
                        cop.className = "optgroup-"+(i+1);
                        // console.log(data.data[i].parentName)
                        cop.label = data.data[i].parentName;
                        // console.log("test"+data.data[0].data.length)
                        for (var j = 0; j <data.data[i].data.length ; j++) {
                            var option = document.createElement("option");
                            option.className = "option-"+(i+1);
                            option.text = data.data[i].data[j].grade_name;
                            cop.append(option);
                        }
                        gradess.append(cop);
                        gradess.selectpicker('refresh');


                    }





                }
            }
        });

    }
    function loadclasses(c) {
        console.log("进入loadclasses")
        var data = {
            classescontent:c
        }

        $.ajax({
            url:"/elvis/admin/loadclasses",
            type:"post",
            data:data,
            traditional:true,
            success:function (data) {

                if(data.code == 200){

                    var classes = $("#classesselc");
                    classes.empty();
                    // data.data == biglist
                    // data.data.data[i] ==第几个小list

                    for (var i = 0; i <data.data.length ; i++) {

                        var cop =  document.createElement("optgroup");
                        cop.className = "optgroup-"+(i+1);
                        // console.log(data.data[i].parentName)
                        cop.label = data.data[i].parentName;
                        // console.log("test"+data.data[0].data.length)
                        for (var j = 0; j <data.data[i].data.length ; j++) {
                            var option = document.createElement("option");
                            option.className = "option-"+(i+1);
                            option.text = data.data[i].data[j].classes_name;
                            cop.append(option);
                        }
                        classes.append(cop);
                        classes.selectpicker('refresh');


                    }





                }
            }
        });

    }
    function checkNull(t) {
        var flag =false;
        console.log($(t).find("li.selected"))
        if($(t).find("li.selected").length>0){
            flag = true;
        }

        return flag;


    }


    function saveResult() {
        // var sno = window.sessionStorage.getItem("sno");

        var f1 = checkNull("#t1");
        var f2 = checkNull("#t2");
        var f3 = checkNull("#t3");
        var f4 = checkNull("#t4");
        console.log(f1)
        console.log(f2)
        console.log(f3)
        console.log(f4)
        if(f1&f2&f3&f4){
            var val = "",
                staffs = [];
            // staffs1 = []
            // var group =  $(t).find("li.dropdown-header").eq(0).find(".text").text()
            // var group =  $(t).find("li.dropdown-header").eq(0).find(".text").text()

            //循环的取出插件选择的元素(通过是否添加了selected类名判断)
            for (var i = 0; i < $("#t4").find("li.selected").length; i++) {
                // console.log("size"+$("li.selected").length)
                var kk = $("#t4").find("li.selected").eq(i)
                // for(var  j in kk){
                //     var value = j+"-----"+kk[j]
                //     console.log(value)
                // }
                // console.log("kk"+kk.attr("class"))
                var g = kk.attr("class")
                // console.log("test"+g)
                g = `li.${g.substr(0,g.length-8)}`;
                // // console.log(g)
                var op = $("#t4").find(g).eq(0).find(".text").text()
                val = $("#t4").find("li.selected").eq(i).find(".text").text();
                var c = $("#t4").find("li.selected").eq(i)
                console.log("test--"+val+"dsa")

                if (val != '') {
                    // console.log("XX进来了")
                    val = op + ">" + val
                    staffs.push(val);
                }
            }

            $.ajax({
                url:"/elvis/admin/saveResult",
                type:"post",
                data:{
                    content:staffs,
                    // range:staffs1,
                    sno:sno1

                },
                traditional:true,
                success:function (data) {
                    console.log(data.code)
                    if(data.code == 200){
                        alert("赋予成功")
                        var x = "#"+sno1;
                        $("#modal1").modal("hide");
                        $(x). find("#power4").css('display','none');
                        $(x). find("#power2").css('display','inline-block');
                        $(x). find("#power3").css('display','inline-block');
                    }else {
                        alert("赋予失败")
                    }
                }

            });




        }else {
            alert("您输入的有为空项,请检查后提交")
        }



    }
    function saveResultT() {
        var tstaff = [];
        // var sno = window.sessionStorage.getItem("sno");

        var f1 = checkNull("#t1");
        var f2 = checkNull("#t2");

        console.log(f1)
        console.log(f2)
        if(f1&f2){
            var val = "",
                staffs = [];
            // staffs1 = []
            // var group =  $(t).find("li.dropdown-header").eq(0).find(".text").text()
            // var group =  $(t).find("li.dropdown-header").eq(0).find(".text").text()

            //循环的取出插件选择的元素(通过是否添加了selected类名判断)
            for (var i = 0; i < $("#t2").find("li.selected").length; i++) {
                // console.log("size"+$("li.selected").length)
                var kk = $("#t2").find("li.selected").eq(i)
                // for(var  j in kk){
                //     var value = j+"-----"+kk[j]
                //     console.log(value)
                // }
                // console.log("kk"+kk.attr("class"))
                var g = kk.attr("class")
                // console.log("test"+g)
                g = `li.${g.substr(0,g.length-8)}`
                // // console.log(g)
                var op = $("#t2").find(g).eq(0).find(".text").text()
                val = $("#t2").find("li.selected").eq(i).find(".text").text();
                var c = $("#t2").find("li.selected").eq(i)
                console.log("test--"+val+"dsa")

                if (val != '') {
                    // console.log("XX进来了")
                    val = op + ">" + val
                    tstaff.push(val);
                }
                console.log(tstaff)
            }

            $.ajax({
                url:"/elvis/admin/saveResultT",
                type:"post",
                data:{
                    content:tstaff,
                    // range:staffs1,
                    sno:sno1

                },
                traditional:true,
                success:function (data) {
                    console.log(data.code)
                    if(data.code == 200){
                        alert("赋予成功")
                        var x = "#"+sno1;
                        $("#modal1").modal("hide");
                        $(x). find("#power4").css('display','none');
                        $(x). find("#power2").css('display','inline-block');
                        $(x). find("#power3").css('display','inline-block');
                    }else {
                        alert("赋予失败")
                    }
                }

            });




        }else {
            alert("您输入的有为空项,请检查后提交")
        }



    }






}



function changePwd() {
    var id = sessionStorage.getItem('id');
    var oldPwd = $("#oldPwd").val();
    var newPwd = $("#newpwd").val();
    var renewpwd = $("#renewpwd").val();

    console.log(oldPwd+"---"+newPwd+"---"+renewpwd);

    var reg = /^(\w){6,20}$/;

    if(!reg.exec(newPwd)){
        alert("密码格式为6~20位字母、数字或下划线，请重新输入！")
    }else if (oldPwd ==""||newPwd==""||renewpwd=="") {
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
                    sessionStorage.clear();
                    location.href = "/elvis/vote/login.html"

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