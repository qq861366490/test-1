
var mongo = require("mongodb").MongoClient;//载入数据库连接模块
var event = require("../events/events.js");//载入事件模块
const DB_CONN_STR = "mongodb://localhost:27017/project";//设定数据库连接信息 连接的数据库为project

var dbDo = {
    insert : data => {//注册方法

        mongo.connect(DB_CONN_STR , (err , db) => {//开始连接数据库

            if(err){
                //连接错误,触发数据库连接错误事件
                event.emit("DB_CONNECT_ERROR" , err);
            }else{

                //获取需要操作的集合
                var uc = db.collection("users");

                uc.insert(data , (err , data) => {

                    if(err){
                        //触发数据插入错误
                        event.emit("DB_USERS_INSERT_ERROR" , err);
                    }else{

                        //触发数据插入成功
                        event.emit("DB_USERS_INSERT_SUCCESS" , data); 

                        //关闭数据库
                        db.close();                       
                    }
                });
                
            }
        })
    },
    find : username => {
         mongo.connect(DB_CONN_STR , (err , db) => {
            
            if(err){
                event.emit("DB_CONNECT_ERROR" , err);
            }else{
                
                var uc = db.collection("users");

                uc.find({username : username}).toArray((err , data) => {
                    if(err){
                        event.emit("DB_USERS_FIND_ERROR",err);
                    }else{
                        event.emit("DB_USERS_FIND_SUCCESS" , data);
                    }
                });
            }

         });
    }

}


module.exports = dbDo;