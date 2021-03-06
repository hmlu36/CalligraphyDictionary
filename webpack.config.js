const path = require('path');
module.exports = {
    entry: ['./index.js', './app.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            //編譯JSX的loader，將@babel/preset-env加進preset中
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為8888
        port: 8888
    }
};