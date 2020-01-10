<!--
 * @Author: your name
 * @Date: 2020-01-04 08:45:00
 * @LastEditTime : 2020-01-04 15:02:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\MainTabBar.vue
 -->
<template>
	<tab-bar>
		<tab-bar-item path="/home" activecolor="#051534">
			<img slot="item-icon" src="../../assets/images/tabbar/index.svg" alt="">
			<img slot="item-icon-active" src="../../assets/images/tabbar/index_active.svg" alt="">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/powerstation" activecolor="#051534">
			<img slot="item-icon" src="../../assets/images/tabbar/station.svg" alt="">
			<img slot="item-icon-active" src="../../assets/images/tabbar/station_active.svg" alt="">
			<div slot="item-text">电站</div>
		</tab-bar-item>
		<tab-bar-item path="/map" activecolor="#051534">
			<img slot="item-icon" src="../../assets/images/tabbar/map.svg" alt="">
			<img slot="item-icon-active" src="../../assets/images/tabbar/map_active.svg" alt="">
			<div slot="item-text">地图</div>
		</tab-bar-item>
		<tab-bar-item path="/warning" activecolor="#051534;">
			<img slot="item-icon" src="../../assets/images/tabbar/warning.svg" alt="">
			<img slot="item-icon-active" src="../../assets/images/tabbar/warning_active.svg" alt="">
			<div slot="item-text">告警</div>
		</tab-bar-item>
		</tab-bar>
</template>


<script>
	import TabBar from 'components/tabbar/TabBar'
	import TabBarItem from 'components/tabbar/TabBarItem'

	export default {
			name : "MainTabBar",
			components: {
				TabBar,
				TabBarItem
			}
	}
</script>

<style scoped>

</style>
