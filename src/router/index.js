/*
 * @Author: your name
 * @Date: 2020-01-03 13:06:32
 * @LastEditTime : 2020-01-06 14:20:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = () => import('@/views/home/Home')
const Map = () => import('@/views/map/Map')
const PowerStation = () => import('@/views/station/PowerStation')
const PowerStationDetail = () => import('@/views/station/PowerStationDetail')
const RebotDetail = () => import('@/views/station/RebotDetail')


const AlarmList = () => import('@/views/waring/AlarmList')
const AlarmTreated = () => import('@/views/waring/AlarmTreated')
const AlarmUntreated = () => import('@/views/waring/AlarmUntreated')
//1安装插件
Vue.use(VueRouter)

//2创建路由对象
const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	}
	,
	{
		path: '/powerstation',
		component: PowerStation
	},

	{
		path : '/powerstationdetail',
		component: PowerStationDetail
	},
	{
		path : '/rebotdetail',
		component: RebotDetail
	},
	{
		path: '/map',
		component: Map
	}
	,
	{
		path: '/warning',
		component: AlarmList
	},
	{
		path: '/AlarmUntreated',
		name: 'AlarmUntreated',
		component: AlarmUntreated
	},
	{
		path: '/AlarmTreated',
		name: 'AlarmTreated',
		component: AlarmTreated
	}
]

const router =new VueRouter({
	routes,
	mode : "history"
})

//3到处router
export default router
