<!--
 * @Author: your name
 * @Date: 2020-01-03 11:00:56
 * @LastEditTime : 2020-01-04 13:39:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\tabbar\TabBar.vue
 -->
<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name : "TabBar"
	}
</script>

<style scoped>
	#tab-bar {
		display : flex;
		background-color : #03205a;
		position : fixed;
		left : 0;
		right : 0;
		bottom : 0;
		box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
	}

	
</style>