<template>
  <div id="BaseBottomNavBar">
    <p class="AppAllExplain">{{ fileExplain }}</p>
    <ul class="listBox">
      <li class="eachItem" @touchstart="navBarItem = 'Home'">
        <router-link class="itemBox" :to="{ name: 'Home' }" v-bind:class="{'active': navBarItem === 'Home'}">
          <span class="itemIconfont"><i class="iconfont icon-tubiaozhizuomobanyihuifu-"></i></span>
          <span class="itemText">首页</span>
        </router-link>
      </li>
      <li class="eachItem" @touchstart="navBarItem = 'NextWeek'">
        <router-link class="itemBox" :to="{ name: 'Powerstation' }" v-bind:class="{'active': navBarItem === 'NextWeek'}">
          <span class="itemIconfont"><i class="iconfont icon-icon-test"></i></span>
          <span class="itemText">电站</span>
        </router-link>
      </li>
      <li class="eachItem" @touchstart="navBarItem = 'Trip'">
        <router-link class="itemBox"  :to="{name: 'Map'}" v-bind:class="{'active': navBarItem === 'Trip'}">
          <span class="itemIconfont"><i class="iconfont icon-jiaotongchuhang"></i></span>
          <span class="itemText">地图</span>
        </router-link>
      </li>
      <li class="eachItem" @touchstart="navBarItem = 'User'">
        <router-link class="itemBox" :to="{name: 'Home'}">
          <span class="itemIconfont"><i class="iconfont icon-wode"></i></span>
          <span class="itemText">告警</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BaseBottomNavBar',
    components: {},
    data() {
      return {
        fileExplain: '底部导航栏组件', // 文件说明
        navBarItem: 'Home'
      }
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
      this.mainIndex()
    },
    beforeDestroy() {},
    destroy() {},
    methods: {
      /*
      * -------------------------------------- 入口函数 --------------------------------------
      * */
      mainIndex() {
      },

      /*
      * --------------------------------------   公用   --------------------------------------
      * */
      /* 获取or请求函数 */
      /* 共用 */

      /*
      * -------------------------------------- 子组件相关函数 --------------------------------------
      * */
      // 接收检索参数

      /*
      * -------------------------------------- 页面操作 --------------------------------------
      * */

      /*
      * -------------------------------------- 图表数据处理+渲染 arrangeData*、makeCharts* --------------------------------------
      * */
      /* 数据处理 arrangeData* */
      /* 渲染 makeCharts* */
    }
  }
</script>

<style scoped lang="scss">
  /* lang="less" */
  #BaseBottomNavBar {
    bottom: 0;
    width: 100%;
    position: fixed;
    border-top: 1px solid #999999;
    background: #051534;
    color: #fff;
    .listBox{
      width: 100%;
      display: flex;
      padding: 8px 0;
      .eachItem{
        text-align: center;
        width: 25%;
        .itemBox{
          color: #fff;
          >span{
            display: block;
            &.itemIconfont>i{
              font-size: 28px;
            }
          }
          &.active{
            color: #00BCD4;
          }
        }
      }
    }
  }
</style>
