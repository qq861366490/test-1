var mongo = require('mongodb').MongoClient;
var event = require('./events.js');
const DB_CONN_STR = 'mongodb://localhost:27017/shop';//数据库名字shop

var dbObj = {
	//数据库查找数据方法
    find: function (name) {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {

            } else {
                var us = db.collection('store');//数据库shop的店铺集合名字store
                us.find({ name: name }).toArray(function (err, data2) {
                    if (err) {
                        
                    } else {
                    	//数据查找成功触发事件
                        event.emit('DB_FIND_SUCCESS', data2);
                        db.close();//关闭数据库连接
                    }
                });
            }
        })
    },
	//数据库插入数据方法
    insert: function (data) {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                
            } else {
                var us = db.collection('store');//数据库shop的店铺集合名字store
                us.insert(data, function (err, data2) {
                    if (err) {
                        
                    } else {
                        
                        db.close();//关闭数据库连接
                    }
                })
            }
        })
    },
    //数据库获取数据方法
    get: function () {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                
            } else {
                var us = db.collection('store');//数据库shop的店铺集合名字store
                //us.find({},{_id:0,name:1})
                us.find({ type: 'shop' }).toArray(function (err, data2) {
                    if (err) {
                        
                    } else {
                    	//数据获取成功触发事件
                        event.emit('DB_GET_SUCCESS', data2);
                        db.close();//关闭数据库连接
                    }
                });
            }
        })
    }
    
}
//将数据库的查找,插入,获取方法暴露出去
module.exports = dbObj;