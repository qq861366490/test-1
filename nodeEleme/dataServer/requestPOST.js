var http = require('http');
var qs = require('querystring');

var dataObj = {
    'question[title]':'皮皮虾我们走！',
    'question[content]':'<p>test</p>',
    'question[courseId]':'227',
    'question[lessonId]':'1739',
    '_csrf_token':'55c8573d3b9288528525686dd089c5c2286273b8'
};

var strData = qs.stringify(dataObj);

var option = {
    hostname : 'www.codingke.com',
    port : 80,
    method : 'POST',
    path : '/ajax/create/course/question',
    headers : {
        'Accept':'*/*',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':strData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'PHPSESSID=30ebgibrt7jhl357o6stdcrql4; UM_distinctid=15aef8ed3cf150-0ac1cbb289eb49-6a11157a-13c680-15aef8ed3d0263; CNZZDATA1256018185=1361240947-1490076407-%7C1490076407;Hm_lvt_9f92046de4640f3c08cf26535ffdd93c=1490077800; Hm_lpvt_9f92046de4640f3c08cf26535ffdd93c=1490077895',
        'Host':'www.codingke.com',
        'Origin':'http://www.codingke.com',
        'Referer':'http://www.codingke.com/v/395-chapter-227-course',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'X-CSRF-Token':'55c8573d3b9288528525686dd089c5c2286273b8',
        'X-Requested-With':'XMLHttpRequest'
    }
};
var txt = '';

var request = http.request(option , function(response){
    response.setEncoding('utf-8');
    response.on('data' , function(data){
        txt += data;
    });
    response.on('end' , function(){
        console.log(txt);
    });
});

request.write(strData);
request.end();