const path = require('path')

module.exports ={

    name:'GuGuDan',
    mode:'development',
    devtool:'eval',

    resolve:{
        extensions:['.js', '.jsx']
    },

    entry:{
        app : ['./client']
    },

    module:{
        rules:[{
            test:/.\jsx?/,
            loader:'babel-loader',
            options:{
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    plugins:[],

    output:{
        path:path.join(__dirname,'dist'), // 현재 폴더 안에 들어있는 dist 폴더의 경로
        filename: 'app.js'
    }


}