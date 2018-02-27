var express = require('express');
var router = express.Router();
var userService = require("../service/userService.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//进入注册页面
router.get("/register" , (req , res , next) => {
  
  userService.regPage(req , res);
})

//进入登录页面
router.get("/login" , (req , res , next) => {
  // console.log(1233);
  userService.loginPage(req , res);
})

//进入用户信息页面
router.get("/data" , (req , res , next) => {
  userService.userDataPage(req , res);
})

module.exports = router;
