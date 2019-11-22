$(document).ready(function(){
    //工作记录生成
    $("#generate").click(function(){
		//清空之前生成的记录
		$("#workLogContainer").remove();
        //table标签
        var newTable = $("<table></table>");
        newTable.attr("class","table table-bordered");
		newTable.attr("id","workLogContainer");
		var tHead = $("<tr><td>时间</td><td>工作类型</td><td>工作单元</td><td>工作内容</td></tr>");
		newTable.append(tHead);
        //tr标签
        var newTr = $("<tr></tr>");
        //时间工作类型工作单元
        var newTd1 = $("<td></td>");
        newTd1.append($("#startTime").val()+"-"+$("#finishTime").val());
        var newTd2 = $("<td></td>");
        newTd2.append($("#workType").find("option:selected").text());
        var newTd3 = $("<td></td>");
        newTd3.append($("#workUnit").find("option:selected").text());
        newTr.append(newTd1);
        newTr.append(newTd2);
        newTr.append(newTd3);

        //获取待生成的所有工作记录项
        var workActionItemArrays = $(".workActionItem");
        
        //加入表格
        
		//遍历所有工作记录项
		var newTd4 = $("<td></td>");
		newTd4.attr("id","workLogItems");
        $.each(workActionItemArrays,function(i,n) {
			newTd4.append($(this).find(".workActionType").find("option:selected").text());
			newTd4.append($(this).find(".workActionDescription").val());
			newTd4.append($(this).find(".workActionObject").find("option:selected").text());
			newTd4.append("<br>");
            //alert($(this).find(".workActionType").val());
        });
		newTr.append(newTd4);
        //记录添加
        newTable.append(newTr);
        $("#workLogHead").append(newTable);

        return false;
    });
});