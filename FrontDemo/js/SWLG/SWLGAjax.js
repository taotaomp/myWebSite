$(document).ready(function(){
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator/workTypes?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workTypeId);
			newOption.append(filed.workTypeName);
			$("#workType").append(newOption);
		});
	});
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator/workUnits?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workUnitId);
			newOption.append(filed.workUnitName);
			$("#workUnit").append(newOption);
		});
	});
	
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator/workActionTypes?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workActionTypeId);
			newOption.append(filed.workActionTypeName);
			$(".workActionType").append(newOption);
		});
	});
	
	$.getJSON("http://localhost:8080/SimpleWorkLogGenerator/workActionObjects?callback=?",function(result){
			$.each(result,function(i,filed){
			var newOption = $("<option></option>");
			newOption.attr("value",filed.workActionObjectId);
			newOption.append(filed.workActionObjectName);
			$(".workActionObject").append(newOption);
		});
	});
	
});