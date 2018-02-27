var express = require('express');
var router = express.Router();
var userService = require("../service/userService.js");


/* GET users listing. */
router.post('/reg', function(req, res, next) {
  userService.register(req , res);
});

router.get("/findUser",(req , res , next) => {
  userService.findUser(req , res);
})

router.post("/login", (req , res , next) => {
  userService.login(req , res);
})

module.exports = router;
