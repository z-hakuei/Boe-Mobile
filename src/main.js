/*
 * @Author: ldk
 * @Date: 2019-12-14 22:25:09
 * @LastEditTime : 2020-01-08 13:37:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compress\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont0.css'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
import MD5 from 'js-md5'
import Message from 'vue-m-message'//全局注册消息提示组件
import LoadMore from 'vue-loadmore-simple'//全局注册懒加载组件

Vue.prototype.$axios =axios
Vue.use(BaiduMap, {
  ak: 'Wqi84dc8Q1blFrKcmAQWMC8MDXBrjhA1'
})
Vue.use(MintUI)
Vue.use(Message)
Vue.use(LoadMore)
Vue.prototype.$MD5 = MD5;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),//等价于render:function(h){return h(App);}.
  router
}).$mount('#app')
