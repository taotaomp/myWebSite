$(document).ready(function(){
	$("#submit").click(function(){
		//生成JSON对象
		var jsonRow ={};
		jsonRow.currentDate = $("#currentDate").val();
		var workTypeValue = {};
		workTypeValue.workTypeId = $("#workType").find("option:selected").val();
		workTypeValue.workTypeName = $("#workType").find("option:selected").html();
		jsonRow.workType = workTypeValue;
		jsonRow.startTime = $("#startTime").val();
		jsonRow.finishTime = $("#finishTime").val();
		var workUnitValue = {};
		workUnitValue.workUnitId = $("#workUnit").find("option:selected").val();
		workUnitValue.workUnitName = $("#workUnit").find("option:selected").html();
		jsonRow.workUnit = workUnitValue;
		jsonRow.workLogItems = $("#workLogItems").text();
		//将json对象转换为json字符串
		var jsonStr = JSON.stringify(jsonRow);
		
		console.log(jsonStr);
		$.ajax({
			url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLog",
			data: jsonStr,
			type: "POST",
			// dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
			// jsonp : "callback", //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
   //          jsonpCallback: "handleResponse",
			contentType :"application/json",
			success: function(result){
				alert(result);
			}
		})
	});
});