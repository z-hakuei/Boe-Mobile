import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'

import AlarmUntreated from '@/components/AlarmUntreated'
import AlarmList from '@/components/AlarmList'
import AlarmTreated from '@/components/AlarmTreated'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AlarmList',
      component: AlarmList
    },
    {
      path: '/AlarmUntreated',
      name: 'AlarmUntreated',
      component: AlarmUntreated
    },
    {
      path: 'AlarmTreated',
      name: 'AlarmTreated',
      component: AlarmTreated
    }
  ]
})
