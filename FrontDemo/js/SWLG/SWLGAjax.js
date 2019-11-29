$(document).ready(function(){
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workTypes?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workTypeId);
			newOption.append(filed.workTypeName);
			$("#workType").append(newOption);
		});
	});
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workUnits?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workUnitId);
			newOption.append(filed.workUnitName);
			$("#workUnit").append(newOption);
		});
	});
	
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionTypes?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workActionTypeId);
			newOption.append(filed.workActionTypeName);
			$(".workActionType").append(newOption);
		});
	});
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionObjects?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workActionObjectId);
			newOption.append(filed.workActionObjectName);
			$(".workActionObject").append(newOption);
		});
	});
	
});