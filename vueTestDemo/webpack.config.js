var webpack = require("webpack");
var Ext = require("extract-text-webpack-plugin");

module.exports = {
    entry : __dirname + "/src/js/app.js",
    output : {
        path : __dirname + "/dist/",
        filename : "index.js"
    },
    devtool : "source-map",
    module : {
        loaders : [
            {test : /\.js$/ , exclude : /node_modules/ , loader : "babel-loader?presets[]=es2015"},
            {test : /\.html$/ , loader : "string-loader"},
            {test : /\.css$/ , loader : Ext.extract("css-loader")},
            {test : /\.less$/ , loader : Ext.extract("css-loader!less-loader")}
        ]
    },
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 4000,
        inline : true
    },
    plugins : [
        new Ext("index.css"),
        new webpack.ProvidePlugin({
            Vue : "vue/dist/vue.js",
            VueRes : "vue-resource/dist/vue-resource.js"
        })
    ]
}