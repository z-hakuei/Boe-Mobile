<template>
  <div id="Home">
    <mt-header title="无人化智能运维平台">
      <router-link to="/" slot="left">
        <mt-button><i class="mintui mintui-Group-"></i></mt-button>
      </router-link>
    </mt-header>
    <div class="homeBody">
      <div class="installCapacityStatistics">
        <div class="installStatistics">
          <div class="number"><span>800</span></div>
          <div class="explainTitleText"><span>累计安装容量（MW）</span></div>
        </div>
        <div class="singleStatistics">
          <div class="yearInstallStatistics">
            <div class="singleStatisticsNumber"><span>6800</span></div>
            <div class="explainTitleText"><span>当年累计安装数量（个）</span></div>
          </div>
          <div class="totalProfit">
            <div class="singleStatisticsNumber"><span>1.8</span></div>
            <div class="explainTitleText"><span>累计增加收益（亿元）</span></div>
          </div>
        </div>
      </div>
      <div class="facilityStatistics">
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>99%</span></div>
          <div class="explainTitleText"><span>设备可用率</span></div>
        </div>
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>116</span></div>
          <div class="explainTitleText"><span>已安装电站数量</span></div>
        </div>
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>100%</span></div>
          <div class="explainTitleText"><span>设备在线率</span></div>
        </div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox"><span>设备安装统计</span></div>
        <div id="facilityInstallStatisticsChart" class="fullChartBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
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
        this.makeChartsFacilityInstallStatistics() // 设备安装统计
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
      /* 数据处理 arrangeData* */
      /* 渲染 makeCharts* */
      makeChartsFacilityInstallStatistics () {
        const charts = echarts.init(document.getElementById('facilityInstallStatisticsChart'))
        const option = {
          color: 'rgba(90,109,255,0.6)',
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            data: ['发电机', '机器人', '摆渡车', '太阳能板', '变压器']
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'deepskyblue'
              }
            }
          },
          grid: {
            left: '10%',
            right: '10%',
            containLabel: true
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }
        charts.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  /* lang="less" */
  #Home {
    background-color: #051534;
    font-size: 14px;
    .homeBody {
      /* public start */
      .explainTitleText {
        color: #566cac;
      }
      .titleBox {
        padding: 10px;
        color: #fff;
        box-shadow: 0 0 10px 4px #7188ff inset;
      }
      .fullChartBox {
        width: 100%;
        height: 400px;
      }
      /* public end */
      .installCapacityStatistics {
        text-align: center;
        padding: 30px 10px 20px;
        .installStatistics {
          padding: 20px 0;
          >.number {
            color: #fff;
            font-size: 30px;
            font-weight: bold;
          }
        }
        .singleStatistics {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .singleStatisticsNumber {
            color: #fff;
            font-size: 22px;
            font-weight: bold;
          }
        }
      }
      .facilityStatistics {
        padding: 20px 6px 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        >.facilityTypeStatistics {
          text-align: center;
          width: 33%;
          >.statisticsNumber {
            color: #fff;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
