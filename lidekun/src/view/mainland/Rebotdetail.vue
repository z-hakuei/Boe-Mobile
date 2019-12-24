<!--
 * @Author: your name
 * @Date: 2019-12-23 15:14:28
 * @LastEditTime : 2019-12-23 16:04:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \power\src\view\mainland\Rebotdetail.vue
 -->
<template>
  <div id="Powerstation">
    <p class="AppAllExplain">{{ fileExplain }}</p>
    <mt-header title="1号机器人">
      <router-link to="/" slot="left">
      <router-link :to="{ name:'Home' }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody"><!--:value.sync="value" -->
        <div class="powerstationlist">
            <span style="text-align:center">
                <div style="color:#fff;font-size:20px;">1号机器人</div>
                <div style="color:#00FF7F;font-size:20px;">设备在线</div>
            </span>
            <span>
                <ul style="padding-left:6%;">
                    <li>
                        <span class="hex"><span class="hexIn"><i class="mintui mintui-qingsao1"></i>清扫次数</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">2</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">3</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">4</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">5</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">6</span></span>
                    </li>
                    <li>
                        <span class="hex"><span class="hexIn">7</span></span>
                    </li>
                </ul>
            </span>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Powerstation',
    components: {},
    data() {
      return {
        fileExplain: '文件说明' // 文件说明
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
        // test
      }
     
    }
  }
</script>

<style scoped lang="scss">
  /* lang="less" */
    ul {
        margin: 0;
        padding: 0;
    }
    
    ul {
        list-style: none;
        width: 360px;
        margin: 25px auto;
    }
    
    li {
        float: left;
        margin: 0 5px;
        height: 96px;
    }
    
    .hex {
        overflow: hidden;
        display: block;
        width: 100px;
        height: 116px;
        transform: rotate(-60deg) skewY(30deg);
    }
    
    .hexIn {
        background-color: #6495ED;
        display: block;
        width: 100px;
        height: 116px;
        line-height: 116px;
        text-align: center;
        transform: skewY(-30deg) rotate(60deg);
    }
    li:nth-child(7n + 1){
        margin-left: 60px;
    }
    li:nth-child(7n + 6){
        margin-left: 60px;
    }
  #Powerstation {
		font-size: 10px;
		background: #051534;
        height: 100%;
        width:100%;
        position: fixed;
    .homeBody {
        .serach{
            height: 100%;
        }
    }
  }
</style>
