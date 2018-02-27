var ws = new WebSocket("ws://192.168.55.48:9000");
var listBox = $(".socket-user-list");
var listItem = listBox.find("li").clone(false);

ws.onopen = function(){
    // ws.send()
}

listBox.empty();

ws.onmessage = function(event){
    var message = JSON.parse(event.data);
    var userList = message.content;
    
    //需要更新用户列表
    if(message.type == "USER_LIST"){
        upUserList(userList);
    }
}

//更新用户列表
function upUserList(list){
    listBox.empty();

    for(var i = 0; i < list.length; i++){
        var Dom = listItem.clone(false);
        Dom.find("a").text(list[i]);
        listBox.append(Dom);
    }
    
}