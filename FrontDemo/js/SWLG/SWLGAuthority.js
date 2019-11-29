$(document).ready(function(){
    //认证判断
    $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/isAuthority?callback=?",function(result){
        if(result==1){
            $("#expireAuthority").show();
            $("#authorityForm").hide();
        }
        else {
            $("#expireAuthority").hide();
            $("#authorityForm").show();
        }
    });

    //认证
    $("#authorityFormsubmit").click(function(){
        $.ajax({
            url: "http://localhost:8080/SimpleWorkLogGenerator_war/authority",
            data: $("#authorityInput").val(),
            type: "POST",
            contentType :"application/json",
            success: function(result){
                if(result==true){
                    $("#authorityForm").hide();
                    $("#expireAuthority").show();
                }else {
                    alert("认证失败");
                }
            }
        })
    });

    //废除认证
    $("#expireAuthority").click(function(){
        $.getJSON("http://localhost:8080/SimpleWorkLogGenerator_war/authority?callback=?",function(result){
            if(result==true){
                $("#expireAuthority").hide();
                $("#authorityForm").show();
            }
            else {
                $("#expireAuthority").show();
                $("#authorityForm").hide();
            }
        });
    });
});
