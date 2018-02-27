var event = require("../events/events.js");
var db = require("../db/dbConnect.js");
var jm = require("../function/crypto.js").md5;
var wss = require("../function/webSocketServer.js");

var userService = {
    regPage : (req , res) => {//访问注册页面
        res.render("main" , {
            page : 'reg'
        })
    },
    findUser : (req , res) => {//验证用户名是否存在
        //清空所有的注册事件,防止重复注册  
        event.removeAllListeners();

        //获取用户名
        var username = req.query.username ;
        

        //发送给客户端的数据对象
        var bObj = {};

        event.once("DB_CONNECT_ERROR",data => {
            bObj.code = -1;
            bObj.txt = "数据库连接失败";
            res.json(bObj);
        });

        event.once("DB_USERS_FIND_ERROR",data => {
            bObj.code = -2;
            bObj.txt = "数据库查询失败";
            res.json(bObj);
        });

        event.once("DB_USERS_FIND_SUCCESS",data => {
            if(data.length != 0){
                bObj.code = 1;
                bObj.txt = "用户名已存在";
            }else{
                bObj.code = 0;
                bObj.txt = "用户名可用";
            }
            res.json(bObj);
        });

        db.find(username);
    },
    register : (req , res) => {
        //清空所有的注册事件,防止重复注册  
        event.removeAllListeners();


        //从客户端接收到的数据
        var dataObj = req.body;


        //对密码进行加密
        dataObj.password = jm(dataObj.password);

        //发送给客户端的数据对象
        var bObj = {};

        //数据库连接失败
        event.once("DB_CONNECT_ERROR" , data => {
            bObj.code = -1;
            bObj.txt = "数据库连接失败";
            res.json(bObj);
        });

        //数据库信息插入失败
        event.once("DB_USERS_INSERT_ERROR" , data => {
            bObj.code = -2;
            bObj.txt = "数据库插入失败";
            res.json(bObj);
        });

        //数据库信息插入成功
        event.once("DB_USERS_INSERT_SUCCESS" , data => {
            bObj.code = 2;
            bObj.txt = "注册成功";
            res.json(bObj);
        });

        event.once("DB_USERS_FIND_SUCCESS",data => {
            if(data.length != 0){
            bObj.code = 1;
            bObj.txt = "用户名已存在";
            res.json(bObj);
            }else{
            bObj.code = 0;
            bObj.txt = "用户名可用";

            db.insert(dataObj);
            }
        });

        //开始插入数据
        // db.insert(dataObj);

        //查询用户名是否可用
        db.find(dataObj.username);
    },
    login : (req , res) => {
        //清空所有事件监听
        event.removeAllListeners();
        
        var dataObj = req.body;

        //发送给客户端的数据对象
        var bObj = {};

        event.once("DB_CONNECT_ERROR",data => {
            bObj.code = -1;
            bObj.txt = "数据库连接失败";
            res.json(bObj);
        });

        event.once("DB_USERS_FIND_ERROR",data => {
            bObj.code = -2;
            bObj.txt = "数据库查询失败";
            res.json(bObj);
        });

        event.once("DB_USERS_FIND_SUCCESS",data => {
            bObj.code = 0;
            bObj.txt = "用户名或者密码错误";
            
            var cPwd = jm(dataObj.password);
            
            var pwd = null;

            if(data.length != 0){
                pwd = data[0].password;
                if(pwd == cPwd){
                    bObj.code = 1;
                    bObj.txt = "登录成功";

                    req.session.lastpage = dataObj;
                    // console.log(req.session);
                }
            }


            res.json(bObj);
        });

        db.find(dataObj.username);
    },
    loginPage : (req , res) => {
        res.render("main",{
            page : "login"
        });
    },
    userDataPage : (req , res) => {
        // console.log(req.session.lastpage);

        //将session传入服务
        wss(req.session.lastpage);
        
        //清空所有事件
        event.removeAllListeners();

        var username = req.query.username;

        event.once("DB_CONNECT_ERROR",data => {
            bObj.code = -1;
            bObj.txt = "数据库连接失败";
            console.log(bObj.txt);
        });

        event.once("DB_USERS_FIND_ERROR",data => {
            bObj.code = -2;
            bObj.txt = "数据库查询失败";
            console.log(bObj.txt);    
        });

        event.once("DB_USERS_FIND_SUCCESS",data => {
            
            res.render("main",{
                page : "userInfo",
                username : data[0].username,
                email : data[0].email
            });
        });

        db.find(username);
    }

}

module.exports = userService;