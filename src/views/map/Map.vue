<!--
 * @Author: your name
 * @Date: 2020-01-06 17:22:26
 * @LastEditTime : 2020-01-09 17:09:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Boe-Mobile\src\views\map\Map.vue
 -->
<template>
  <baidu-map class="map" center="北京"></baidu-map>
</template>
<script>

export default {
  name:"Map",
  components: {
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 600px;
}
</style>