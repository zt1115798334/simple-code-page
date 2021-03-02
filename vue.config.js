const path = require('path');
module.exports = {
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        host:'localhost',
        open:false,
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:8083/',//正式环境
              changeOrigin: true,  //重写接口
              pathRewrite: {
                '^/api': '/api'  //重写接口
              }
            },
          },
    }
}