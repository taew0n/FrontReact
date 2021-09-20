const path = require('path') // node에 자동으로 내장
//const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')
//const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports ={
    name :'NumberBasballGo',
    mode:'development',
    devtool:'eval',

    resolve:{
        extensions:['.js', '.jsx']
    }, // 확장자를 모두 입력하기 귀찮을 때, 자동으로 js, jsx 파일을 찾아서 하나로 만들어준다.

    entry:{
        app : ['./client'] // client.jsx에서 react, dom, wordrelay를 불러오므로 하나만 쓰면 된다.
    }, // 입력
    
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:[
                '@babel/preset-env',
                '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties',]
                //'react-refresh/babel'], //babel loader의 plugin
            },
        }],
    },

    plugins:[
        //new RefreshWebpackPlugin(),
        //new LoaderOptionsPlugin()
    ],

    output:{
        path:path.join(__dirname,'dist'), // 현재 폴더 안에 들어있는 dist 폴더의 경로
        filename: 'app.js',
        publicPath:'/dist/',
    }, // 출력

    devServer:{
        static:{
            publicPath:'/dist/',
        },
        hot:true,
    },
};