$(document).ready(function(){
    //日期
    var date = new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    $("#currentDate").val(year+"-"+month+"-"+day);
    
    //开始|结束时间
    var hour = date.getHours();
    var min = date.getMinutes();
    $("#startTime").val(hour+":"+min);
    $("#finishTime").val(hour+":");

    //点击删除该项按钮
    $(".deleteWorkActionItem").click(function(){
        $(this).parent().parent().remove();
    });
  });