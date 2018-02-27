var view = require("../../views/main.html");
var Top = require("./header.js");
var Bottom = require("./footer.js");

var Main = {
    template : view,
    components : {
        Top : Top,
        Bottom : Bottom
    }
}

module.exports = Main;