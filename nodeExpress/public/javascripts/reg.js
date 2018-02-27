var regDom = $(".reg-form");

regDom.on("submit" , function(e){
    e.preventDefault();

    var dataObj = {
        username : $("#username").val(),
        password : $("#password").val(),
        email : $("#email").val()
    }

    $.ajax({
        url : "/ajax/reg",
        data : dataObj,
        type : "post",
        success : function(data){
            if(data.code == 2){
                alert("恭喜您注册成功!");
                window.location.href = "/users/login";
            }else{
                alert("对不起注册失败,请联系管理员!");
            }

            console.log(data);
        }
    })
});

$("#username").on("change",function(e){
     var username = $(this).val();

     $.ajax({
         url : "/ajax/findUser",
         data : {username:username},
         type : "get",
         success : function(data){
             if(data.code == 0){
                 $("label.user").find("p").attr("class","right").text(data.txt);
             }else{
                 $("label.user").find("p").attr("class","error").text(data.txt);                 
             }
         }
     })
})