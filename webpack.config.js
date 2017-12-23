var path = require('path');
 
module.exports = {
    entry: ['babel-polyfill', './app/app'],                                 
    output:{
        path: path.resolve(__dirname, './public'),     
        publicPath: '/public/',
        filename: "bundle.js"                          
    },
    module:{
        rules:[                                 //загрузчик для jsx
            {
                test: /\.jsx?$/,                // определяем тип файлов
                exclude: /(node_modules)/,      // исключаем из обработки папку node_modules
                loader: "babel-loader",         // определяем загрузчик
                options:{
                    presets:["env", "react", "stage-0"]    // используемые плагины
                }
            }
        ]
    }
}