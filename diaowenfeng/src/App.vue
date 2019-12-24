<template>
  <div id="app">
    <mt-header class="header" title="无人化智能运维平台" >
      <router-link to="/" slot="left">
            <i class="iconfont icon-gongneng" style="font-size:.4rem"></i>
      </router-link>
    </mt-header>

    <num></num>

<!--    <router-view/>-->

    <van-tabbar v-model="active">
      <van-icon class="iconfont icon-shouye"><p>首页</p></van-icon>
      <van-icon class="iconfont icon-biandianzhan"><p>电站</p></van-icon>
      <van-icon class="iconfont icon-ditu"><p>地图</p></van-icon>
      <van-icon class="iconfont icon-gaojing"><p>告警</p></van-icon>
    </van-tabbar>
  </div>
</template>

<script>
import num from "./view/num"
export default {
  name: 'App',
  components: {
    num
  },
  data(){
    return {
      active: 0,
      icon: {
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  max-width: 640px;
  margin: 0 auto;
  overflow-x: hidden;
  background-image: radial-gradient(rgb(7, 39, 100), rgb(7, 39, 100));
}
.header{
    background-color: #072764;
    font-size: .3rem;
    margin-top: 2%;
}
body,html,#app{
  height: 100%;
}
*{
  margin:0;
  padding:0;
}
i {
  font-size: 25px;
}
</style>
