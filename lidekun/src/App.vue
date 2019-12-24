<!--
 * @Author: your name
 * @Date: 2019-12-21 11:40:36
 * @LastEditTime: 2019-12-23 15:04:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \power\src\App.vue
 -->
<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  /* 距离设置归零 */
  * { padding: 0; margin: 0; }
  /*清除列表格式*/
  li { list-style-type: none; }
  /*页面and界面最顶部说明*/
  .AppAllExplain{
    color: red;
    font-weight: 700;
    text-align: center;
    display: none;
  }
</style>
