var webpack = require("webpack");
var Ext = require("extract-text-webpack-plugin");

module.exports = {
    entry : __dirname + "/src/js/app.js",
    output : {
        path : __dirname + "/dist/",
        filename : "index.js"
    },
    devtool : "source-map",
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 2000,
        inline : true
    },
    module : {
        loaders : [
            {test : /\.js$/ , exclude : /node_modules/ , loader : "babel-loader?presets[]=es2015&presets[]=react"},
            {test : /\.css$/ , loader : Ext.extract("css-loader")},
            {test : /\.less$/ , loader : Ext.extract("css-loader!less-loader")}
        ]
    },
    plugins : [
        new Ext("index.css"),
        new webpack.ProvidePlugin({
            React : "react"
        })
    ]
}