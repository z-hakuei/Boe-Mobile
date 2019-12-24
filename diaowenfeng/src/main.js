// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/icon/iconfont.css'
import './assets/icon/iconfont0.css'
import VueResource from 'vue-resource'
import echarts from 'echarts/dist/echarts.min'

import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.prototype.$echarts = echarts;
Vue.use(Vant);
Vue.use(Mint)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.component(Header.name, Header);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
