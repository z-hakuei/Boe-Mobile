<template>
  <div id="app">
    <mt-header class="header" title="无人化智能运维平台" >
      <router-link to="/" slot="left">
            <i class="iconfont icon-gongneng" style="font-size:.4rem"></i>
      </router-link>
    </mt-header>

    <num></num>

<!--    <router-view/>-->

    <van-tabbar v-model="active" class="vant-tab">
      <van-icon
        @click=handelClick(index)
        :class="['iconfont', bar.icon, Index === index ? 'active' : '']"
        v-for="(bar, index) in barList"
      :key="index">
        <p>{{bar.name}}</p>
      </van-icon>
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
      Index: 0,
      barList: [
        {
          icon: 'icon-shouye',
          name: '首页'
        },
        {
          icon: 'icon-biandianzhan',
          name: '电站'
        },
        {
          icon: 'icon-ditu',
          name: '地图'
        },
        {
          icon: 'icon-gaojing',
          name: '告警'
        }
      ],
      active: 1,
      icon: {
      }
    }
  },
  methods: {
    handelClick (i) {
      this.Index = i
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
  background-image: radial-gradient(rgb(9, 27, 63), rgb(10, 29, 71));
}
.header{
    background-color: #0B1A3B;
    font-size: .4rem;
    margin-top: 2%;
    height: 6%;
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
  .vant-tab
  {
    background-color: #04122F;
    height: 8%;
  }
.vant-tab i{
  color: #FFFFFF;
  margin-top: .1rem;
  font-size: 25px;
}
.vant-tab i p{
  margin-top: .1rem;

}
.vant-tab i.active{
  color: #10d5cc
}
</style>
