var wsServer = require("ws").Server;

var socket = new wsServer({ port: 9000 });

//客户端集合
var clientMap = {};

//获取userObj
var runSocketServer = (userObj) => {//在被执行的时候 获取用户对象
    socket.once("connection", client => {
        var username = userObj.username;

        //如果该用户不在线,则将该用户添加到用户集合当中,并更新好友列表
        if (!clientMap[username]) {
            clientMap[username] = client;
    console.log(clientMap);
            // console.log(clientMap);
            //更新用户名
            upUserList();
        }


        //监听用户发送的消息
        client.on("message" , message => {
            //打印消息
            console.log(message);
        });


        //监听用户下线
        client.on("close" , () => {
            // 当用户下线,清除集合列表
            delete clientMap[username];
            
            //更新用户列表
            upUserList();
        });

        client.on("error" , err => {
            console.log(err);
        })

    });

}

//根据对象获取key值
var getKey = value => {
    var inKey;
    for (var key in clientMap) {
        if (clientMap[key] == value) {
            inKey = key;
            break;
        }
    }

    return inKey;
}

//返回用户名列表
var getUsernames = () => {
    var userList = [];
    for (var key in clientMap) {
        userList.push(key);
    }

    return userList;
}

//广播消息
var emitMessage = text => {
    for (var key in clientMap) {
        clientMap[key].send(text);
    }
}

//更新用户列表
var upUserList = () => {
    //获取用户名列表
    var userList = getUsernames();

    //封装消息
    var dataObj = {
        type: "USER_LIST",
        content: userList
    }
    //广播消息
    emitMessage(JSON.stringify(dataObj));
}

module.exports = runSocketServer;