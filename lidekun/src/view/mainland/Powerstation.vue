<template>
  <div id="Powerstation">
    <p class="AppAllExplain">{{ fileExplain }}</p>
    <mt-header title="电站列表">
      <router-link to="/" slot="left">
      <router-link :to="{ name:'Home' }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody"><!--:value.sync="value" -->
    <mt-search
        
        cancel-text="取消"
        placeholder="搜索" class="serach">
    </mt-search>
			<div class="powerstationlist">
				<span class="powerstation">
					<router-link class="itemBox" :to="{ name: 'Powerstationdetail' }">
						<span>
							<img class="stationimage" src="../../assets/images/power2.jpg"/>
						</span>
					</router-link>
					<span class="addresstitle">山东高密</span>
					<span class="detailtitle">总装机容量0MW</span>
				</span>
				<span class="stationdetail">
					<div>设备总量:27</div>
					<div>在线设备总量:17</div>
					<div>机器人数量:27</div>
					<div>环监数量:0</div>
					<div>摆渡车数量:0</div>
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
      },

      /*
      * --------------------------------------   公用   --------------------------------------
      * */
      /* 获取or请求函数 */

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
     
    }
  }
</script>

<style scoped lang="scss">
  /* lang="less" */
  #Powerstation {
		font-size: 10px;
		background: #051534;
    height: 100%;
    width:100%;
    position: fixed;
    .homeBody {
			/* public start */
			.serach{
        height: 100%;
			}
			.powerstationlist{
				display: flex;
				flex-direction: row;
				padding:0% 1%;
				border-top: 1px solid #0849b3;
				border-bottom: 1px solid #0849b3;
				.powerstation{
					display: flex;
					padding: 2% 0%;
					flex-direction: column;
					width:22%;
					border-right: 1px solid #0849b3;
					.itemBox{
          >span{
            display: block;
          }
          &.active{
            color: #00BCD4;
          }
        }
					.stationimage{
						width:35%;
						margin:10px 10px;
					}
					.detailtitle{
						padding-left: 6%;
						color: #566cac;
					}
					.addresstitle{
						padding-left: 6%;
						color: #fff;
					}
				}
				.stationdetail{
					padding: 2% 2%;
					color: #fff;
				}
			}
    }
  }
</style>
