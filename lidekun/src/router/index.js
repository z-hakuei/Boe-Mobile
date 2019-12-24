/*
 * @Author: ldk
 * @Date: 2019-12-14 22:25:09
 * @LastEditTime : 2019-12-23 15:15:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compress\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from "vue-router"

import mainland from "../view/mainland/Mainland"
import Home from "../view/mainland/Home"
import Map from '../view/mainland/Map'
import Powerstation from '../view/mainland/Powerstation'
import Powerstationdetail from '../view/mainland/Powerstationdetail'
import Rebotdetail from '../view/mainland/Rebotdetail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/mainland'
    },
    { // 本土页面
      path: '/mainland',
      name: 'Mainland',
      component: mainland,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        },
        {
          path: 'Powerstation',
          name: 'Powerstation',
          component: Powerstation
        },
        {
          path: 'Powerstationdetail',
          name: 'Powerstationdetail',
          component: Powerstationdetail
        },
        {
          path: 'Map',
          name: 'Map',
          component: Map
        },
        {
          path: 'Rebotdetail',
          name: 'Rebotdetail',
          component: Rebotdetail
        }
      ]
    }
  ]
})

export default router