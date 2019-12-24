<template>
  <div id="Home">
    <p class="AppAllExplain">{{ fileExplain }}</p>
    <mt-header title="山东高密">
      <router-link to="/" slot="left">
      <router-link :to="{ name: 'Powerstation' }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody">

      <div class="installCapacityStatistics">
        <div class="installStatistics">
          <div class="number"><span style="margin-right:53%;">13241.77</span></div>
          <div class="explainTitleText"><span style="margin-right:50%;">累计发电量（万KWh）</span></div>
        </div>
        <div class="singleStatistics">
          <div class="yearInstallStatistics">
            <div class="singleStatisticsNumber"><span style="margin-right:33%;">341.77</span></div>
            <div class="explainTitleText"><span>当年发电量（万KWh）</span></div>
          </div>
          <div class="totalProfit">
            <div class="singleStatisticsNumber"><span>1.56</span></div>
            <div class="explainTitleText"><span>当日发电量（万KWh）</span></div>
          </div>
        </div>
      </div>
      <div class="facilityStatistics">
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>3MW</span></div>
          <div class="explainTitleText"><span>电站容量</span></div>
        </div>
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>27台</span></div>
          <div class="explainTitleText"><span>清洗机器人</span></div>
        </div>
        <div class="facilityTypeStatistics">
          <div class="statisticsNumber"><span>1台</span></div>
          <div class="explainTitleText"><span>环境检测系统</span></div>
        </div>
      </div>

      <div class="facilityInstallStatisticsBox">
        <div class="titleBox"><span>当日发电趋势</span></div>
        <div id="facilityInstallStatisticsChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>月发电量</span>
        </div>
        <div id="MonthlyPowerGenerationChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>已/未安装方阵日运行趋势</span>
        </div>
        <div id="DayInstallChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>已/未安装方阵月发电量对比</span>
        </div>
        <div id="MonthInstallChart" class="fullChartBox"></div>
        <div class="facilityStatistics">
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月累计发电量</span></div>
            <div class="explainTitleText"><span>10.32（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月提升电量</span></div>
            <div class="explainTitleText"><span>1.86（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月平均提升比</span></div>
            <div class="explainTitleText"><span>22.44（%）</span></div>
          </div>
          </div>
        </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>清洗机器人分布</span>
        </div>
        <!-- :icon="{url: marker.url, size: { width: 200, height: 171 }}"-->
        <baidu-map class="map" @ready="handler" center="中国" :map-click="false">
          <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <div v-for="(marker, i) of markers" :key="i">
              <bm-marker
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
                
                :position="{lng: marker.lng, lat: marker.lat}"
                @click="infoWindowOpen(marker)"
              >
                <bm-info-window
                  title="弹窗信息"
                  :position="{lng: marker.lng, lat: marker.lat}"
                  :show="marker.showFlag"
                  @close="infoWindowClose(marker)"
                  @open="infoWindowOpen(marker)"
                >
                  <p>123456789</p>
                  <p>123456789</p>
                  <p>123456789</p>
                  <p>123456789</p>
                  <p>123456789</p>
                </bm-info-window>
              </bm-marker>
            </div>
         
        </baidu-map>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span @click="actionSheet">机器人</span>
            <span>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
              </mt-actionsheet>
              </span>
        </div>
        <div id="DayInstallChart" class="fullChartBox">
            <div class="powerstationlist">
              <span class="powerstation">
                <router-link class="itemBox" :to="{ name: 'Rebotdetail' }">
                  <span>
                    <span><i class="mintui mintui-jiqiren" style="font-size:73px;"></i></span>
                  </span>
                </router-link>
              </span>
              <span class="stationdetail">
                <div>清扫次数:96次</div>
                <div>设备状态:停止</div>
                <div>告警状态:正常</div>
                <div style="color:#00FF7F">设备在线</div>
              </span>
              <span style="color:#00FFFF;padding-top:17%;margin-left:10%;">1号机器人</span>
            </div>
            <div class="powerstationlist">
              <span class="powerstation">
                <router-link class="itemBox" :to="{ name: 'Rebotdetail' }">
                  <span>
                    <span><i class="mintui mintui-jiqiren" style="font-size:73px;"></i></span>
                  </span>
                </router-link>
              </span>
              <span class="stationdetail">
                <div>清扫次数:96次</div>
                <div>设备状态:停止</div>
                <div>告警状态:正常</div>
                <div style="color:#FF0000">设备离线</div>
              </span>
              <span style="color:#00FFFF;padding-top:17%;margin-left:10%;">2号机器人</span>
            </div>
           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  // 按需引入点聚合
  // import { BmlMarkerClusterer } from 'vue-baidu-map'
  // 引入marker
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
  // 插入 100 个随机点
  const markers = []
  for (let i = 0; i < 100; i++) {
    const position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21, url: '../../assets/images/rebot.png', showFlag: false }
    const position1 = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21, url: '../../assets/images/rebot.png', showFlag: false }
    if (i % 2 === 0) {
      markers.push(position)
    } else {
      markers.push(position1)
    }
  }
  const carList = [
    {}
  ]
  export default {
    name: 'Home',
    components: {
      // BmlMarkerClusterer,
      BmMarker
    },
    data() {
      return {
        fileExplain: '文件说明', // 文件说明
        BMap: '',
        map: '',
        markers,
        carList,
        show: false,
        data:[
          {
            name: '机器人1',
            method : this.getrebot(name)	// 调用methods中的函数
          }, 
          {
            name: '机器人2', 
            method : this.getrebot(name)	// 调用methods中的函数
          }
        ],
        sheetVisible:false
      }
    },
    beforeCreate() {},
    created() {
    },
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
        // 设备安装统计
        this.makeChartsFacilityInstallStatistics(), 
        //月发电量统计
        this.makeChartsMonthlyPowerGenerationStatistics(),
        //已/未安装方阵日运行趋势
        this.makeChartDayInstallStatistics(),
        //已/未安装方阵月发电量对比
        this.markeMonthInstallChart()
      },
      makeChartsFacilityInstallStatistics () {
        const charts = echarts.init(document.getElementById('facilityInstallStatisticsChart'))
        const option = {
          color: ['green','red'],//表格全局颜色
          legend:{
               textStyle:{
                fontSize: 18,//字体大小
                color:['#566cac','#566cac']//字体颜色
               },
              data:['发电量','功率']//表格图例
          },
          tooltip: {
            trigger: 'axis'//点击图标中的点显示的信息
          },
          dataZoom: [
              {
                  show: true,
                  realtime: true,
                  start: 65,
                  end: 85
              },
              {
                  type: 'inside',
                  realtime: true,
                  start: 65,
                  end: 85
              }
          ],
           xAxis: [
                {
                    type: 'category',//数据类型
                    axisLabel:{
                        interval: 0,//数据间隔，当数据过多时设置为0 全部显示
                        rotate: 70,

                    },
                    data: ['00时','01时','02时','03时','04时','05时','06时','07时','08时','09时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时'],
                    axisLine: {
                        lineStyle: {
                            color: 'deepskyblue'//x轴数据颜色
                        }
                    },
                    splitLine: {
                        show: false//是否在y轴显示横线与x轴数据对齐
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'KWh',
                    min: 0,
                    max: 1.8,
                    interval: 0.3,
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
                {
                    type: 'value',//数据类型
                    name: 'KW',
                    min: 0,//数据最小值
                    max: 2500,//数据最大值
                    interval: 500,//数据间隔
                    axisLine: {
                        lineStyle: {
                            color: 'deepskyblue'//y轴右边文字描述颜色
                        }
                    },
                    splitLine: {
                        show: false//y轴右边横线是否与数据对齐
                    }
                }
            ],
            series: [  
                {
                    name:'功率',
                    type:'line',
                    smooth: true,//平滑曲线
                    itemStyle : {
                        normal : {
                            // color:'#fff', //改变折线点的颜色
                            lineStyle:{
                                color:'#16d634' //改变折线颜色
                            }
                        }
                    },
                    data:[0,0.1,0.2,0.5,0.6,0.65,0.67,0.69,0.71,
                    0.73,0.74,0.82,0.85,0.61,0.62,0.69,1.2,1.5,1.3,1.4,1.45,1.55,1.65,1.8]
                },
                {
                    name:'发电量',
                    type:'line',
                    smooth: true,//平滑曲线
                    yAxisIndex: 1,//当存在2个y轴时，右边数据轴必须设置此项
                    data:[0,100,200,300,400,500,600,700,800,900,1000,1100,1200,
                        1300,1400,1500,1600,890,1800,1900,2000,2100,2200,2500
                    ]
                }
            ],
          grid: {//表格样式
            left: '10%',
            right: '10%',
            containLabel: true
          }     
        }
        charts.setOption(option)
      },
      makeChartsMonthlyPowerGenerationStatistics(){
        const charts = echarts.init(document.getElementById('MonthlyPowerGenerationChart'))
        const option = {
          color: 'rgba(90,109,255,0.6)',
          xAxis: {
            type: 'category',
            boundaryGap: true,//false y轴第一个数据以0为中心
            axisLine: {
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            data: ['01', '02', '03', '04', '05', '06', '07', '08']
          },
          yAxis: {
            type: 'value',
            name: '发电量(KWh)',
            min: 0,
            max: 21000,
            interval: 3000,
            barWidth : 10,//柱状图的宽度
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
            data: [3000, 15000, 19000, 18500, 5000, 10000, 17000, 16000],
            type: 'bar',
            areaStyle: {}
          }]
        }
        charts.setOption(option)
      },
      makeChartDayInstallStatistics(){
        const charts = echarts.init(document.getElementById('DayInstallChart'))
        const option = {
          color: ['red','green'],
          tooltip: {
              trigger: 'axis'
          },
          legend: {
             textStyle:{//图例文字的样式
                color:'#566cac',
                fontSize:16
            },
            data:['已安装','未安装']
          },
          xAxis: {
            type: 'category',
            axisLabel:{
                interval: 0,//数据间隔，当数据过多时设置为0 全部显示
                // rotate: 70,
            },
            boundaryGap: false,//false y轴第一个数据以0为中心
            axisLine: {
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            data: ['2018-05-09 05:00:00', '2018-05-09 12:00:00', '2018-05-09 17:00:00']
          },
          yAxis: {
            type: 'value',
            name: 'KWh',
            min: 0,
            max: 350,
            interval: 50,
            barWidth : 10,//柱状图的宽度
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
          series: [
            {
              name:'已安装',
              data: [0, 160, 300],
              type: 'line',
              smooth: true,//平滑曲线
              itemStyle : {
                normal : {
                    // color:'#fff', //改变折线点的颜色
                    lineStyle:{
                        color:'#16d634' //改变折线颜色
                    }
                }
              }
            },
            {
              name:'未安装',
              data: [0, 130, 270],
              type: 'line',
              smooth: true,//平滑曲线
              itemStyle : {
                normal : {
                    // color:'#fff', //改变折线点的颜色
                    lineStyle:{
                        color:'red' //改变折线颜色
                    }
                }
              }
            }
          ]
        }
        charts.setOption(option)
      },
      markeMonthInstallChart(){
        const charts = echarts.init(document.getElementById('MonthInstallChart'))
        const option = {
          color: ['red','green','yellow'],//图例图标颜色，有几个图标就写几个颜色
          tooltip: {
            trigger: 'axis'//点击图标中的点显示的信息
          },
          legend: {
             textStyle:{//图例文字的样式
                color:'#fff',//图例文字颜色
                fontSize:16//图例文字大小
            },
            data:['已安装','未安装','提升比']
          },
          xAxis: {
            type: 'category',
            axisLabel:{
                interval: 0,//x轴的数据间隔，当数据过多时设置为0 全部显示
                // rotate: 70,//x轴数据旋转度数，用于x轴数据过多时使用
            },
            boundaryGap: false,//false x轴第一个数据以0为中心，true不会贴近y轴
            axisLine: {
              // show: true,
              lineStyle: {
                color: 'deepskyblue'//x轴数据颜色
              }
            },
            splitLine: {
              show: false,//true显示竖直的数据分割线，false显示横向的数据分割线
              lineStyle: {
                color: 'deepskyblue'
              }
            },
            data: ['2018-05-09 05:00:00', '2018-05-09 12:00:00', '2018-05-09 17:00:00']//x轴数据
          },
          yAxis: [
            {
              type: 'value',
              name: '(KWh)',
              min: 0,
              max: 350,
              interval: 50,
              barWidth : 10,//柱状图的宽度
              axisLine: {
                lineStyle: {
                  color: 'deepskyblue'//y轴文字数据颜色
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'deepskyblue'//y轴横线的颜色
                }
              }
            },
            {
              type: 'value',//数据类型
              name: '(%)',
              min: 0,//数据最小值
              max: 35,//数据最大值
              interval: 5,//数据间隔
              axisLine: {
                lineStyle: {
                    color: 'deepskyblue'//y轴右边文字描述颜色
                }
              },
              splitLine: {
                show: false//y轴右边横线是否与数据对齐
              }
            }
          ],
          grid: {//图标整体布局样式
            left: '10%',
            right: '10%',
            containLabel: true
          },
          series: [
            {
              name:'已安装',
              data: [250, 130, 170],
              type: 'line',
              smooth: true,//平滑曲线
              itemStyle : {
                normal : {
                    // color:'#fff', //改变折线点的颜色
                    lineStyle:{
                        color:'red' //改变折线颜色
                    }
                }
              },
              areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'red'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
              },
            },
            {
              name:'未安装',
              data: [100,80,90],
              type: 'line',
              smooth: true,//平滑曲线
              itemStyle : {
                normal : {
                    // color:'#fff', //改变折线点的颜色
                    lineStyle:{
                        color:'#16d634' //改变折线颜色
                    }
                }
              },
              areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'green'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
              },
            },
            {
              name:'提升比',
              type:'line',
              smooth: true,//平滑曲线
              itemStyle : {
                normal : {
                    // color:'#fff', //改变折线点的颜色
                    lineStyle:{
                        color:'yellow' //改变折线颜色
                    }
                }
              },
              areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'yellow'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
              },
              yAxisIndex: 1,//当存在2个y轴时，右边数据轴必须设置此项
              data:[10,3,8]
            }
          ]
        }
        charts.setOption(option)
      },
      handler ({ BMap, map }) {
        map.enableScrollWheelZoom(true)
        // map.centerAndZoom('青岛市', 13)
        // 赋值，方便调用，本节没用到
        this.BMap = BMap
        this.map = map
      },
      // 关闭信息窗口 @close 自带的方法
      infoWindowClose (marker) {
        marker.showFlag = false
      },
      // 首先点击marker时开启信息窗口，其实没必要在 bm-info-window 上写 @open 因为如果是关闭状态根本就点不到，所以就无法触发 @open
      // 如果在 bm-info-window 上写了 @open 在点击marker时会触发两次infoWindowOpen函数，而且可以很明显的看到有延时
      infoWindowOpen (marker) {
        marker.showFlag = true
      },
      actionSheet: function(){
    	  // 打开action sheet
        this.sheetVisible = true;
      },
      getrebot() {
        // console.log(this.value);
        // console.log('调用'+name);
      }
    }
  }
</script>

<style scoped lang="scss">
  /* lang="less" */
  .map {
    width: 100%;
    height: 300px;
  }
  .powerstationlist{
    display: flex;
    flex-direction: row;
    padding:0% 1%;
    border-top: 1px solid #778899;
    border-bottom: 1px solid #778899;
    .powerstation{
      display: flex;
      padding: 2% 10%;
      flex-direction: column;
      width:22%;
      border-right: 1px solid 	#778899;
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
  #Home {
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
            -webkit-text-stroke:1px #fff;
            color: #023fa0;
            font-size: 30px;
            font-weight: bold;
            // text-shadow:0px 0px 8px #fff, 0px 0px 42px #fff, 0px 0px 72px #fff,0px 0px 150px #fff;
          }
        }
        .singleStatistics {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .singleStatisticsNumber {
            -webkit-text-stroke:1px #fff;
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            // text-shadow:0px 0px 8px #fff, 0px 0px 42px #fff, 0px 0px 72px #fff,0px 0px 150px #fff;
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
            -webkit-text-stroke:1px #fff;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            // text-shadow:0px 0px 8px #fff, 0px 0px 42px #fff, 0px 0px 72px #fff,0px 0px 150px #fff;
          }
        }
      }
    }
  }
</style>
