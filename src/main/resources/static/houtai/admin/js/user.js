// 加载所有教师
$(function loadTeacherList() {
    $.post(
      "http://localhost:8080/elvis/admin/loaduser.do",
        {
            identify:1
        },
        function (data) {
            console.log(data);
            var tr_list = $('#teacher_list');
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
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-xl\">赋予</button>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a href=\"#\" onclick=\"resetpwd()\">重置密码</a>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</td></tr>";
                tr_list.append(td_list);
            }
        }
    );
});
//加载所有学生
$(function loadStudentList() {
    $.post(
        "http://localhost:8080/elvis/admin/loaduser.do",
        {
            identify:2
        },
        function (data) {
            console.log(data)
            var s_list = $("#student_list");
            var json = data.data.list;
            for (var i = 0; i < json.length; i++) {
                var tr_list="<tr>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].id+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sno+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].colleage+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].major+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].grade+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].class+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sname+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].age+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].sex+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>"+json[i].email+"</td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-xl\">赋予</button>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                    "\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a href=\"#\" onclick=\"resetpwd()\">重置密码</a>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
                    "\t\t\t\t\t\t\t\t\t</tr>\n";
                s_list.append(tr_list);
            }
        }
    );
});




















