// 加载所有教师
function loadTeacherList() {
    $.post(
      "http://localhost:8080/elvis/admin/loaduser.do",
        {
            identify:'教师',
        },
        function (data) {
            console.log(data);
            if (data.code == 200) {
                var tr_list = $('#teacher_list');
                for (var i = 0; i < data.data.list.length; i++) {
                    var td_list = "<tr><td>"+(i+1)+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sno+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].colleage+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].major+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sname+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].age+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].sex+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.list[i].email+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">权限管理</button>\n" +
                        "\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
                        "\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
                        "</tr>";
                    tr_list.append(td_list);
                }
            }else {
                alert(data.message+"-->出现"+data.code+"错误");
            }

            //分页

        }
    );
};
//加载所有学生
function loadStudentList() {
    $.post(
        "http://localhost:8080/elvis/admin/loaduser.do",
        {
            identify:'学生',
        },
        function (data) {
            console.log(data);
            if (data.code = 200) {
                var s_list = $("#student_list");
                var json = data.data.list;
                for (var i = 0; i < json.length; i++) {
                    var tr_list="<tr>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
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
                        "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">赋予</button>\n" +
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
            }else {
                alert(data.message+"-->出现"+data.code+"错误");
            }
        }
    );
};

/**
 * 按条件查询学生
 */
function searchStudent() {
    var key = $("#student_select").val();
    var value = $("#custname").val();
    console.log("属性---值"+key+"---"+value)
    $.post(
        "http://localhost:8080/elvis/admin/searchuser.do",
        {
            key:key,
            value:value,
            identify:'学生',
        },
        function (data) {
            console.log(data);
            if (data.code == 200) {
                var s_list = $("#student_list");
                s_list.empty();
                var json = data.data;
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
                        "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">赋予</button>\n" +
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
            }else {
                alert(data.message+"-->出现"+data.code+"错误！请检查您输入的数值是否和选项匹配！");
            }

        }
    );
};

/**
 * 按条件查询教师
 */
function searchTeacher() {
    var key = $("#teacher_select").val();
    var value = $("#custname").val();
    console.log("属性---值"+key+"---"+value)
    if (isNaN(value) && key == 0) {
        alert("输入学号！")
    }
    $.post(
        "http://localhost:8080/elvis/admin/searchuser.do",
        {
            key:key,
            value:value,
            identify:'教师',
        },
        function (data) {
            console.log(data);
            var tjson = data.data;
            if (data.code == 200) {
                var tr_list = $('#teacher_list');
                tr_list.empty()
                for (var i = 0; i < tjson.length; i++) {
                    var td_list = "<tr><td>"+tjson[i].id+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sno+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].colleage+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].major+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sname+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].age+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].sex+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+tjson[i].email+"</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">权限管理</button>\n" +
                        "\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">修改邮箱</a>\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; | &nbsp;<a id=\"reset\" href=\"#\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">重置密码</a>\n" +
                        "\n" +
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>" +
                        "</tr>";
                    tr_list.append(td_list);
                }
            }else {
                alert(data.message+"-->出现"+data.code+"错误！请检查您输入的数值是否和选项匹配！");
            }

        }
    );
};

function loadTPageData(indexpage) {
    $.ajax(
        {
            url:"http://localhost:8080/elvis/admin/loaduser.do?indexpage="+indexpage,
            type:"get",
            data:{'identify':'教师'},
            dataType:"json",
            // contentType:"application/json;charset=utf-8",
            success:function (data) {
                console.log(data);
                if (data.code == 200) {
                    var body_list = $('#teacher_list');
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
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">权限管理</button>\n" +
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

                    var table_id = $('#page_table');
                    //第一页不能点
                    var page_html = "\t\t\t\t\t\t\t\t\t<tr>\n" +
                        "                                        <td colspan=\"10\" align=\"center\">\n" +
                        "                                            <ul class=\"pagination pagination-rounded\">\n" +
                        "                                                <li class=\"paginate_button page-item previous disabled\"\n" +
                        "                                                    id=\"complex-header-datatable_previous\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTeacherList("+data.data.prePage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"0\"\n" +
                        "                                                       tabindex=\"0\" class=\"page-link\">\n" +
                        "                                                        <i class=\"mdi mdi-chevron-left\"></i>\n" +
                        "                                                    </a>\n" +
                        "                                                </li>\n";

                    page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTeacherList(1)\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+1+"\"\n" +
                        "                                                       tabindex=\"0\" class=\"page-link\">"+1+"</a>\n" +
                        "                                                </li>\n";

                    page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                        "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                        "                                                </li>\n";


                    for (var i = 0; i < data.data.navigatepageNums.length; i++) {
                        page_html += "                                       <li class=\"paginate_button page-item\">\n" +
                            "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTeacherList("+data.data.navigatepageNums[i]+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.navigatepageNums[i]+"\"\n" +
                            "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.navigatepageNums[i]+"</a>\n" +
                            "                                                </li>\n" ;
                    }

                    page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" aria-controls=\"complex-header-datatable\" data-dt-idx=\"...\"\n" +
                        "                                                       tabindex=\"0\" class=\"page-link\">...</a>\n" +
                        "                                                </li>\n";

                    page_html +="                                        <li class=\"paginate_button page-item\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTeacherList("+data.data.pages+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+data.data.pages+"\"\n" +
                        "                                                       tabindex=\"0\" class=\"page-link\">"+data.data.pages+"</a>\n" +
                        "                                                </li>\n";


                    page_html +="                                        <li class=\"paginate_button page-item next\"\n" +
                        "                                                    id=\"complex-header-datatable_next\">\n" +
                        "                                                    <a href=\"javascript:void(0);\" onclick=\"loadTeacherList("+data.data.nextPage+")\" aria-controls=\"complex-header-datatable\" data-dt-idx=\""+(data.data.pages+1)+"\"\n" +
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













