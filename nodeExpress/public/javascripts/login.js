var regDom = $(".reg-form");

regDom.on("submit" , function(e){
    e.preventDefault();

    var dataObj = {
        username : $("#username").val(),
        password : $("#password").val()
    }

    $.ajax({
        url : "/ajax/login",
        data : dataObj,
        type : "post",
        success : function(data){
            if(data.code == 1){
                alert(data.txt);
                window.location.href = "/users/data?username="+ dataObj.username;
            }else{
                alert("登录失败,请确认用户名密码!");
            }

            console.log(data);
        }
    })
});
