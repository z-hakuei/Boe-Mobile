import Vue from 'vue'
import Router from 'vue-router'
import num from '@/view/num'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'num',
      component: num
    }
  ]
})
