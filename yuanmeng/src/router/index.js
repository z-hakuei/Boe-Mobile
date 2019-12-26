import Vue from 'vue'
import VueRouter from 'vue-router'
import robot from '../views/robot.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'robot',
      component: robot
    }
  ]
})