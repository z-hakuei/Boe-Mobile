/*
 * @Author: your name
 * @Date: 2019-12-21 15:16:58
 * @LastEditTime : 2020-01-06 15:10:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \power\vue.config.js
 */
module.exports = {
  configureWebpack : {
    resolve : {
        alias : {
            'assets' : '@/assets',
            'common' : '@/common',
            'components' : '@/components',
            'network' : '@/network',
            'views' : '@/views',
            'model' : '@/model'
        }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://brmsh5.boeet.com.cn:82',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
  },
  
  lintOnSave: false
}