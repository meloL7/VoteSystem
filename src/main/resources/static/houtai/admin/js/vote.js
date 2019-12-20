//查询所有代参与的问卷信息
function wait(t,s) {
    $.post(
        "/elvis/admin/loadVote.do",
        {
            type: t,
            vote_status:s,
            indexPage: 0,
        },
        function (data) {
            if(data.code == 200){
                if (data != null) {
                    console.log(data);
                    var vote_list = $("#voteContent");
                    console.log(data.data.countrows);
                    for (var i = 0; i < data.data.countrows; i++) {
                        var vote =" <tr>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+(i+1)+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_name+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_colleage+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_voter_identify+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].title+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].all_select_num+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>"+data.data.data[i].open_time+"</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"../detail.html\">查看问卷详情</a>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t\t\t\t\t\t</tr>"

                        vote_list.append(vote);
                    }

                }
            }



        }
    );
}
