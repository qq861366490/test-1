var event = require("../events/events.js");
var db = require("../db/dbConnect.js");
var multiparty = require("multiparty");//上传文件模块
var fs = require("fs");

var fileServive = {
    upFile: (req, res) => {

        //生成multiparty对象,并设置文件存储位置
        var form = new multiparty.Form({ uploadDir: "./userFile/headimg/" });

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(files.inputFile);

                //获取临时文件对象
                //注意,此处的files.后面的值应该是input上传框的name值
                var inputFile = files.headImg[0];


                //获取临时文件的存储路径
                var uploadPath = inputFile.path;

                console.log(inputFile);

                //获取原始文件名并拼接路径
                var dstPath = "./userFile/headimg/" + inputFile.originalFilename;

                fs.rename(uploadPath, dstPath, err => {
                    if (err) {
                        console.log("文件处理失败");
                        console.log(`临时文件路径为${uploadPath}`);
                    } else {
                        console.log("上传成功");
                        res.end();
                    }
                })
            }
        });
    }
}

module.exports = fileServive;