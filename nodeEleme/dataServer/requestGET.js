var https = require('https');
 
var options = {
    hostname : "api.douban.com",
    port : 443,
    method : "GET",
    path : "/v2/movie/top250"
};

var li = '', ul ="";

function get(subjects){
    var data = [];
        subjects.map(function(value , index){
            var large = value.images.large,
                title = value.title,
                src = value.alt
            data.push({
                title : title,
                large : large,
                src : src
            });
        });
    return data;
};
function print(data){
    for(var i=0; i<data.length; i++){
        li += `
                <li>
                    <img src="${data[i].large} style="width: 40px;height: 40px;"/>
                    <a href="${data[i].src}">${data[i].title}</a>
                </li>
                `;
    }
    ul =`<ul style="float: left;">${li}</ul>`;
};
var request = https.request(options , function(response) {
    var txt = "";
    response.on("data" , function(data) {
        txt += data;
    });
    response.on("end" , function() {
        var subjects = JSON.parse(txt).subjects;
        var data = get(subjects);
        print(data);
    });
});
request.end();
function create2(res){
    res.write(ul);
};
exports.create2 = create2;