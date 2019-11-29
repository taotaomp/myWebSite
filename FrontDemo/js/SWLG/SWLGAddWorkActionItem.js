$(document).ready(function(){
    //工作记录添加
    $("#addWorkActionItem").click(function(){
        //工作记录根节点
        var newWorkActionItem = $("<div></div>");
        newWorkActionItem.attr("class","workActionItem form-group");
        
        //workActionType工作记录类型节点
        var newWorkActionType = $("<div></div>");
        newWorkActionType.attr("class","col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-2 col-md-2 col-lg-2");
        var newSelectT = $("<select></select>");
        newSelectT.attr("class","workActionType form-control");
        $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionTypes?callback=?",function(result){
        		$.each(result,function(i,filed){
        		var newOption = $("<option></option>");
        		newOption.attr("value",filed.workActionTypeId);
        		newOption.append(filed.workActionTypeName);
        		newSelectT.append(newOption);
        	});
        });
        newWorkActionType.append(newSelectT);
        newWorkActionItem.append(newWorkActionType);
  
        //workActionDescription工作记录描述节点
        var newWorkActionDescription = $("<div></div>");
        newWorkActionDescription.attr("class","col-sm-5 col-md-5 col-lg-5");
        var newInput = $("<input>");
        newInput.attr("type","text");
        newInput.attr("class","workActionDescription form-control");
        newInput.attr("placeholder","工作描述");
        newWorkActionDescription.append(newInput);
        newWorkActionItem.append(newWorkActionDescription);
  
        //workActionObject工作记录对象节点
        var newWorkActionObject = $("<div></div>");
        newWorkActionObject.attr("class","col-sm-2 col-md-2 col-lg-2");
        var newSelectO = $("<select></select>");
        newSelectO.attr("class","workActionObject form-control");
        $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionObjects?callback=?",function(result){
        		$.each(result,function(i,filed){
        		var newOption = $("<option></option>");
        		newOption.attr("value",filed.workActionObjectId);
        		newOption.append(filed.workActionObjectName);
        		newSelectO.append(newOption);
        	});
        });
        newWorkActionObject.append(newSelectO);
        newWorkActionItem.append(newWorkActionObject);
        
        //deleteWorkActionItem工作记录删除按钮节点
        var newDeleteWorkActionItem = $("<div></div>");
        newDeleteWorkActionItem.attr("class","col-sm-2 col-md-2 col-lg-2");
        var newButton = $("<button></button>");
        newButton.attr("class","deleteWorkActionItem btn btn-danger");
        newButton.append("删除该项");
        newButton.click(function(){
            $(this).parent().parent().remove();
        });
        newDeleteWorkActionItem.append(newButton);
        newWorkActionItem.append(newDeleteWorkActionItem);
  
        //把newWorkActionItem附加到工作记录附加起始点
        $("#workActionItemHead").after(newWorkActionItem);
      });
});