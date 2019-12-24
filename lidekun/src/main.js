/*
 * @Author: ldk
 * @Date: 2019-12-14 22:25:09
 * @LastEditTime: 2019-12-20 13:15:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compress\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'Wqi84dc8Q1blFrKcmAQWMC8MDXBrjhA1'
})
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//等价于render:function(h){return h(App);}.
  router
}).$mount('#app')
