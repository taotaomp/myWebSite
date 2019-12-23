$(document).ready(function(){
    //设置模态框加载逻辑
    $("#mainModal").on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.html();
        var modal = $(this);
        if(recipient=='新增'){ //按下的是新增按钮
            modal.find('#Wid').val('自动生成');
            modal.find('.modal-title').text('新增：' + button.attr("data-whatever"));
            modal.find('#Wdelete').hide();
            var parentType = button.parent().attr('id');
            if(parentType=="workTypeModify"){
                $("#Wsubmit").click(function () {
                    var workTypeJson = {};
                    //workTypeJson.workTypeId = $("#Wid").val();
                    workTypeJson.workTypeName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workTypeJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workType",
                        data: jsonStr,
                        type: "POST",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
            }else if(parentType=="workUnitModify"){
                $("#Wsubmit").click(function () {
                    var workUnitJson = {};
                    //workUnitJson.workUnitId = $("#Wid").val();
                    workUnitJson.workUnitName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workUnitJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workUnit",
                        data: jsonStr,
                        type: "POST",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
            }else if(parentType=="workActionTypeModify"){
                $("#Wsubmit").click(function () {
                    var workActionTypeJson = {};
                    //workActionTypeJson.workActionTypeId = $("#Wid").val();
                    workActionTypeJson.workActionTypeName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workActionTypeJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionType",
                        data: jsonStr,
                        type: "POST",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
            }else if(parentType=="workActionObjectModify"){
                $("#Wsubmit").click(function () {
                    var workActionObjectJson = {};
                    //workActionObjectJson.workActionObjectId = $("#Wid").val();
                    workActionObjectJson.workActionObjectName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workActionObjectJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionObject",
                        data: jsonStr,
                        type: "POST",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
            }
        }else {  //按下的不是新增按钮
            modal.find('.modal-title').text('修改');
            modal.find("#Wid").val(button.attr("data-whatever"));
            modal.find("#Wname").val(button.text());
            var parentType = button.parent().attr('id');
            if(parentType=="workTypeModify"){
                //提交
                $("#Wsubmit").click(function () {
                    var workTypeJson = {};
                    workTypeJson.workTypeId = $("#Wid").val();
                    workTypeJson.workTypeName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workTypeJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workType",
                        data: jsonStr,
                        type: "PUT",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
                //删除
                $("#Wdelete").click(function () {
                    //$.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workType/"+$("#Wid").val()+"?callback=?",function(result){
                    //    if(result == true){
                    //        alert("删除成功");
                    //        window.location.replace("workLogSelectsModify.html");
                    //    }
                    //});
                    //var workTypeDeleteJson = {};
                    //workTypeDeleteJson.workTypeId = $("#Wid").val();
                    //jsonStr = JSON.stringify(workTypeDeleteJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workType/"+$("#Wid").val(),
                        //data: jsonStr,
                        type: "DELETE",
                        //jsonp:"callback",
                        //jsonpCallback: "success",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("删除成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("删除失败！请检查是否认证");
                            }

                        }
                    });
                });
            }else if(parentType=="workUnitModify"){
                //提交
                $("#Wsubmit").click(function () {
                    var workUnitJson = {};
                    workUnitJson.workUnitId = $("#Wid").val();
                    workUnitJson.workUnitName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workUnitJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workUnit",
                        data: jsonStr,
                        type: "PUT",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
                //删除
                $("#Wdelete").click(function () {
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workUnit/"+$("#Wid").val(),
                        type: "DELETE",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("删除成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("删除失败！请检查是否认证");
                            }
                        }
                    });
                });
            }else if(parentType=="workActionTypeModify"){
                //提交
                $("#Wsubmit").click(function () {
                    var workActionTypeJson = {};
                    workActionTypeJson.workActionTypeId = $("#Wid").val();
                    workActionTypeJson.workActionTypeName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workActionTypeJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionType",
                        data: jsonStr,
                        type: "PUT",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }
                        }
                    });
                });
                //删除
                $("#Wdelete").click(function () {
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionType/"+$("#Wid").val(),
                        type: "DELETE",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("删除成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("删除失败！请检查是否认证");
                            }
                        }
                    });
                });
            }else if(parentType=="workActionObjectModify"){
                //提交
                $("#Wsubmit").click(function () {
                    var workActionObjectJson = {};
                    workActionObjectJson.workActionObjectId = $("#Wid").val();
                    workActionObjectJson.workActionObjectName = $("#Wname").val();
                    var jsonStr =JSON.stringify(workActionObjectJson);
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionObject",
                        data: jsonStr,
                        type: "PUT",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("保存成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("保存失败！请检查是否认证");
                            }

                        }
                    });
                });
                //删除
                $("#Wdelete").click(function () {
                    $.ajax({
                        url: "http://localhost:8080/SimpleWorkLogGenerator_war/workLogSelects/workActionObject/"+$("#Wid").val(),
                        type: "DELETE",
                        contentType :"application/json",
                        success: function(result){
                            if(result==true){
                                alert("删除成功！");
                                window.location.replace("workLogSelectsModify.html");
                            }else {
                                alert("删除失败！请检查是否认证");
                            }
                        }
                    });
                });
            }
        }
    });

    //加载四大项目
    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workTypes?callback=?",function(result){
        $.each(result,function(i,filed){
            var newButton = $("<button style='margin: 14px' class='btn btn-primary col-md-2 col-sm-2 col-lg-2' data-toggle='modal' data-target='#mainModal' data-whatever=''></button>");
            newButton.attr("data-whatever",filed.workTypeId);
            newButton.append(filed.workTypeName);
            $("#workTypeModify").append(newButton);
        });
    });

    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workUnits?callback=?",function(result){
        $.each(result,function(i,filed){
            var newButton = $("<button style='margin: 14px' class='btn btn-primary col-md-2 col-sm-2 col-lg-2' data-toggle='modal' data-target='#mainModal' data-whatever=''></button>");
            newButton.attr("data-whatever",filed.workUnitId);
            newButton.append(filed.workUnitName);
            $("#workUnitModify").append(newButton);
        });
    });


    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionTypes?callback=?",function(result){
        $.each(result,function(i,filed){
            var newButton = $("<button style='margin: 14px' class='btn btn-primary col-md-2 col-sm-2 col-lg-2' data-toggle='modal' data-target='#mainModal' data-whatever=''></button>");
            newButton.attr("data-whatever",filed.workActionTypeId);
            newButton.append(filed.workActionTypeName);
            $("#workActionTypeModify").append(newButton);
        });
    });

    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/workActionObjects?callback=?",function(result){
        $.each(result,function(i,filed){
            var newButton = $("<button style='margin: 14px' class='btn btn-primary col-md-2 col-sm-2 col-lg-2' data-toggle='modal' data-target='#mainModal' data-whatever=''></button>");
            newButton.attr("data-whatever",filed.workActionObjectId);
            newButton.append(filed.workActionObjectName);
            $("#workActionObjectModify").append(newButton);
        });
    });


});