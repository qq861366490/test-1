var view = `<a href='javascript:;' @click='fun'><slot></slot></a>`;

var btn = {
    template : view,
    props : ["fun"]
};

module.exports = btn;