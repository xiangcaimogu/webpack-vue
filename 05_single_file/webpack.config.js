const path=require('path');//引动node模块
const HtmlWebpackPlugin=require('html-webpack-plugin')//引用webpack插件模块
module.exports={
    entry:'./src/main.js',

    output: {
        path: path.resolve('./dist'),//node的api相对转绝对
        filename: "build.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg||png||gif)$/,loader:'url-loader?limit=73411'},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.js$/,loader:'babel-loader',
                exclude: /node_modules/,
                //排除node_modules目录
                options:{
                    presets:['env'], //处理关键字
                    plugins:['transform-runtime']//处理函数
                }},
                //处理vue
            {test:/\.vue$/, loader: "vue-loader"}
        ]
    },
    watch: false,//监视文件发生改变，自动产出build.js
    plugins:[
        //插件的执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html',//源模板文件
        })
    ],
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}