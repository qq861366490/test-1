var express = require('express');
var router = express.Router();
var fileService = require("../service/fileService.js");

router.post("/head", (req , res , next) => {
  fileService.upFile(req , res);
});

module.exports = router;
