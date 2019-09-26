module.exports={
    // entry: {
        //可以是多个入口，也可以是一个
    // “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    // }
    entry:__dirname+'/main.js',
    output: {
        path: __dirname + "",//打包后的文件存放的地方
        filename: "build.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg||png||gif)$/,loader:'url-loader?limit=73411'}
        ]
    },
    watch: false//监视文件发生改变，自动产出build.js
}