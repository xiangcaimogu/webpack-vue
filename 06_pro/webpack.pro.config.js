module.exports={
    // entry: {
        //可以是多个入口，也可以是一个
    // }
    entry:__dirname+'/main.js',
    output: {
        path: __dirname + "",//打包后的文件存放的地方
        filename: "build.js"//打包后输出文件的文件名
    },
    watch: false//默认是false不监视文件发生改变
}