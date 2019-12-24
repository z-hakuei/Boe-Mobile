<!--
 * @Author: ldk
 * @Date: 2019-12-14 22:25:09
 * @LastEditTime: 2019-12-14 23:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compress\src\view\mainland\Mainland.vue
 -->
<template>
  <div id="mainland">
    <p class="AppAllExplain">{{ fileExplain }}</p>
    <router-view />
    <base-bottom-nav-bar />
  </div>
</template>

<script>
  import BaseBottomNavBar from '../../components/base/BaseBottomNavBar'
  export default {
    name: 'mainland',
    components: {
      BaseBottomNavBar: BaseBottomNavBar
    },
    data() {
      return {
        fileExplain: '本土页面' // 文件说明
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
      mainIndex() {},

      /*
      * --------------------------------------   公用   --------------------------------------
      * */
      /* 获取or请求函数 */
      /* 共用 */
      requestCallBackArrange(local, res) { // local：位置，res：数据
        // 出错 alert(local + res.错误信息)
        alert(local, res)
      }

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
  #mainland {
    background: #051534;
  }
</style>
