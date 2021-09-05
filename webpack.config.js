const path = require('path') // node에 자동으로 내장

module.exports ={
    name :'wordrelay-setting',
    mode:'development',
    devtool:'eval',

    resolve:{
        extensions:['.js', '.jsx']
    }, // 확장자를 모두 입력하기 귀찮을 때, 자동으로 js, jsx 파일을 찾아서 하나로 만들어준다.

    entry:{
        app : ['./client.jsx'] // client.jsx에서 react, dom, wordrelay.를 불러오므로 하나만 쓰면 된다.
    }, // 입력
    
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output:{
        path:path.join(__dirname,'dist'), // 현재 폴더 안에 들어있는 dist 폴더의 경로
        filename: 'app.js'
    } // 출력

};