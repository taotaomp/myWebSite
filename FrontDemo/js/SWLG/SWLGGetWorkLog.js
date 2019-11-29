$(document).ready(function(){
    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workLogs?callback=?",function(result){
        $.each(result,function(i,filed){
            //添加报表内容项
            var newTr = $("<tr class='workLogItemsValue'></tr>");
            var newTd1 =  $("<td></td>");
            newTd1.append(filed.currentDate);
            var newTd2 =  $("<td></td>");
            newTd2.append(filed.startTime+"-"+filed.finishTime);
            var newTd3 =  $("<td></td>");
            newTd3.append(filed.workTypeName);
            var newTd4 =  $("<td></td>");
            newTd4.append(filed.workUnitName);
            var newTd5 =  $("<td></td>");
            newTd5.append(filed.workLogItems);
            newTr.append(newTd1);
            newTr.append(newTd2);
            newTr.append(newTd3);
            newTr.append(newTd4);
            newTr.append(newTd5);

            $("#workLogContainer").append(newTr);

        });
    });

    //日期生成，并预选择
    var date = new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();

    for(var i = 2019; i<=2025 ;i++){
        $("#currentDateSelectY").append($("<option value='"+i+"'>"+i+"</option>>"))
    }
    $("#currentDateSelectY").find("option[value='"+year+"']").attr("selected","selected");

    for(var i = 1; i<=12 ;i++){
        $("#currentDateSelectM").append($("<option value='"+i+"'>"+i+"</option>>"))
    }
    $("#currentDateSelectM").find("option[value='"+month+"']").attr("selected","selected");

    for(var i = 1; i<=31 ;i++){
        $("#currentDateSelectD").append($("<option value='"+i+"'>"+i+"</option>>"))
    }
    $("#currentDateSelectD").find("option[value='"+day+"']").attr("selected","selected");

    //提交筛选条件
    $("#submitCurrentDateSelect").click(function(){
        var currentDateStr=$("#currentDateSelectY").find("option:selected").val()+"-"+
            +$("#currentDateSelectM").find("option:selected").val()+"-"+
            +$("#currentDateSelectD").find("option:selected").val();
        $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workLog?currentDate="+currentDateStr+"&callback=?",function(result){
            $(".workLogItemsValue").remove();
            $.each(result,function(i,filed){
                //添加报表内容项
                var newTr = $("<tr class='workLogItemsValue'></tr>");
                var newTd1 =  $("<td></td>");
                newTd1.append(filed.currentDate);
                var newTd2 =  $("<td></td>");
                newTd2.append(filed.startTime+"-"+filed.finishTime);
                var newTd3 =  $("<td></td>");
                newTd3.append(filed.workTypeName);
                var newTd4 =  $("<td></td>");
                newTd4.append(filed.workUnitName);
                var newTd5 =  $("<td></td>");
                newTd5.append(filed.workLogItems);
                newTr.append(newTd1);
                newTr.append(newTd2);
                newTr.append(newTd3);
                newTr.append(newTd4);
                newTr.append(newTd5);

                $("#workLogContainer").append(newTr);

            });
        });
    });
});