<template>
  <div id="PowerStationDetail">
    
    <mt-header :title="stationname">
      <router-link to="/" slot="left">
      <router-link :to="{ path: 'powerstation' }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody">

      <div class="other-people">
        <div class="num">
          <div class="installCapacityStatistics">
            <div class="installStatistics">
              <div class="number"><span style="margin-right:53%;">{{CumulativePowerGeneration}}</span></div>
              <div class="explainTitleText"><span style="margin-right:50%;">累计发电量（万KWh）</span></div>
            </div>
            <div class="singleStatistics">
              <div class="yearInstallStatistics">
                <div class="singleStatisticsNumber"><span style="margin-right:33%;">{{CurrentPowerGeneration}}</span></div>
                <div class="explainTitleText"><span>当年发电量（万KWh）</span></div>
              </div>
              <div class="totalProfit">
                <div class="singleStatisticsNumber"><span>{{DayPowerGeneration}}</span></div>
                <div class="explainTitleText"><span>当日发电量（万KWh）</span></div>
              </div>
            </div>
          </div>
        

          <div class="facilityStatistics">
            <div class="facilityTypeStatistics">
              <div class="statisticsNumber"><span>{{PowerStationCapacity}}</span></div>
              <div class="explainTitleText"><span>电站容量</span></div>
            </div>
            <div class="facilityTypeStatistics">
              <div class="statisticsNumber"><span>{{Rebots}}台</span></div>
              <div class="explainTitleText"><span>清洗机器人</span></div>
            </div>
            <div class="facilityTypeStatistics">
              <div class="statisticsNumber"><span>{{EnvironmentalMonitoring}}台</span></div>
              <div class="explainTitleText"><span>环境检测系统</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="facilityInstallStatisticsBox">
        <div class="titleBox"><span>当日发电趋势</span></div>
        <div id="facilityInstallStatisticsChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>月发电量</span>
            <vue-datepicker-local 
            v-model="time" 
            format="YYYY-MM" 
            @confirm="confirm(1)" 
            style="width: 40px;"
            inputClass="datecss"
            show-buttons />
            
        </div>
        <div id="MonthlyPowerGenerationChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>已/未安装方阵日运行趋势</span>
            <vue-datepicker-local 
            v-model="time" 
            format="YYYY-MM" 
            @confirm="confirm(2)" 
            style="width: 40px;"
            inputClass="datecss"
            show-buttons />
        </div>
        <div id="DayInstallChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox">
            <span>已/未安装方阵月发电量对比</span>
            <vue-datepicker-local 
            v-model="time" 
            format="YYYY-MM" 
            @confirm="confirm(3)" 
            style="width: 40px;"
            inputClass="datecss"
            show-buttons />
        </div>
        <div id="MonthInstallChart" class="fullChartBox"></div>
        <div class="facilityStatistics">
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月累计发电量</span></div>
            <div class="explainTitleText"><span>{{MonthGenerationData}}（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月提升电量</span></div>
            <div class="explainTitleText"><span>{{MonthLiftData}}（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics">
            <div class="statisticsNumber"><span>月平均提升比</span></div>
            <div class="explainTitleText"><span>{{MonthAverageLift}}（%）</span></div>
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
          机器人
        </div>
        <div id="DayInstallChart" class="fullChartBox">
          <load-more 
            :pageIndex="pageIndex" 
            :pageSize="pageSize" 
            :totalCount="totalCount" 
            :openRefresh="true"
            @refresh="refresh"
            @loadmore="loadmore" style="position: relative;">
              <li class="powerstationlist" v-for="(item,index) in rebotdata">
                <span class="powerstation">
                    <span>
                      <span><img @click="handleroute(item.r_id)" style="width:80px;margin:10px;margin-left:-38px;margin-top:20px;" :src="getImgURL(item)"/></span>
                    </span>
                </span>
                <span class="stationdetail" style="line-height:20px;">
                  <div>清扫次数:{{item.count}}次</div>
                  <div>设备状态:{{item.status}}</div>
                  <div v-if="item.warn == 1">告警状态:<span style="color:red;">危险</span></div>
                  <div v-else-if="item.warn == 0">告警状态:<span style="color:green;">正常</span></div>
                  <div style="color:#00FF7F" v-if="item.online == 1">设备在线</div>
                  <div style="color:Red" v-else-if="item.online == 0">设备离线</div>
                </span>
                <span @click="handleroute(item.r_id)" style="color:#00FFFF;padding-top:17%;display:fiex;position:absolute;padding-left:300px;">{{item.name}}</span>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </load-more>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';//引入发送post请求数据转换工具
  import {request} from "../../network/request";//引入封装的axios
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import echarts from 'echarts';
  import  storage from '@/model/storage.js'//存储token
  import VueDatepickerLocal from 'vue-datepicker-local'//日期选择器
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
    name: 'PowerStationDetail',
    components: {
      // BmlMarkerClusterer,
      BmMarker,
      qs,
      storage,
      VueDatepickerLocal
    },

    data() {
      return {
        Token:storage.get('token'),
        PVID:'',
        BMap: '',
        map: '',
        markers,
        carList,
        show: false,
        sheetVisible:false,
        MonthGenerationData:'',//月发电量
        MonthLiftData:'',//月提升量
        MonthAverageLift:'',//月平均提升量
        stationname:'',
        CumulativePowerGeneration:'',//累计发电量
        CurrentPowerGeneration:'',//当年发电量
        DayPowerGeneration:'',//当日发电量
        PowerStationCapacity:'',//电站容量
        Rebots:'',//机器人数量
        EnvironmentalMonitoring:'',//环境检测系统
        rebotdata:[],//机器人数据
        time: new Date(),
        pageIndex: 0,
        pageSize: 6,
        totalCount: 0
      }
    },

    beforeCreate() {},

    created() {
      this.getRebot()
    },
    beforeRouteEnter (to, from, next){
      next(vm => {
      // vm 相当于 this,，这个时候组件已经创建
        
      })
    },
    beforeMount() {},

    mounted() {
      window.addEventListener('scroll', this.scrollFn); 
      this.mainIndex(),//渲染表格
      this.getIndexData()//获得首页的数据
    },
    beforeDestroy() {},

    destroyed() {
      window.removeEventListener('scroll', this.scrollFn); // 销毁监听
    },

    methods: {

      loadmore(pageIndex){
        //上滑加载更多，pageIndex为下一页页码,
        this.handleLoading();
        this.pageIndex = pageIndex
        this.getRebot();
      },
      refresh(){//刷新
      },
      //文档高度
      getScrollTop(){
    　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    　　　　if(document.body){
    　　　　　　bodyScrollTop = document.body.scrollTop;
    　　　　}
    　　　　if(document.documentElement){
    　　　　　　documentScrollTop = document.documentElement.scrollTop;
    　　　　}
    　　　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    　　　　return scrollTop;
　　  },

      //可视窗口高度 
  　　getWindowHeight(){
  　　  var windowHeight = 0;
  　　　　if(document.compatMode == "CSS1Compat"){
  　　　　　　windowHeight = document.documentElement.clientHeight;
  　　　　}
  　　　　else{
  　　　　　　windowHeight = document.body.clientHeight;
  　　　　}
  　　　　return windowHeight;
  　　},

      //滚动条高度
  　　getScrollHeight(){
  　　　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  　　　　if(document.body){
  　　　　　　bodyScrollHeight = document.body.scrollHeight;
  　　　　}　　
  　　　　if(document.documentElement){
  　　　　　　documentScrollHeight = document.documentElement.scrollHeight;
  　　　　}
  　　　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  　　　　return scrollHeight;
  　　},

      //监听函数
      scrollFn(){
  　　　　if(this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()){
             console.log(this.getScrollTop());
             console.log(this.getWindowHeight());
             console.log(this.getScrollHeight());
  　　　　　　this.handleShowMsg('没有更多数据','info');
  　　　　}
  　　},
      //时间选择按钮确定
      confirm(type){

        let y = this.time.getFullYear();
        let m = this.time.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let date = y + '-' + m;
        if(type == 1){
          this.handleLoading();
          this.makeChartsMonthlyPowerGenerationStatistics(date);
        }else if(type == 2){
          this.handleLoading();
          this.makeChartDayInstallStatistics(date);
        }else if(type == 3){
          this.handleLoading();
          this.markeMonthInstallChart(date);
        }
        
      },
      handleShowMsg(message,type) {
        this.$message({
          message: message,
          type: type,//'info', 'success', 'error', 'warning', 'loading'
          showClose: true
        })
      },
      handleLoading () {
        let l = this.$message.loading('加载中...')
        setTimeout(function () {
          l.close()
        }, 500)
      },
      mainIndex() {
        // 设备安装统计
        this.makeChartsFacilityInstallStatistics(), 
        //月发电量统计
        this.makeChartsMonthlyPowerGenerationStatistics(),
        //已/未安装方阵日运行趋势
        this.makeChartDayInstallStatistics(),
        //已/未安装方阵月发电量对比
        this.markeMonthInstallChart()
        //获取首页数据CumulativePowerGeneration
      },

      //
      makeChartsFacilityInstallStatistics () {

        this.handleLoading();
        let Message = this.$route.query.pvid;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(),key).toString();
        let sign = this.$MD5(hash).toUpperCase();
          // let formData = new FormData()
          // formData.append('pv_id',this.$route.query.pvid);
          // formData.append('sign',sign);
        let formData = qs.stringify({'pv_id':this.$route.query.pvid,'sign':sign});
        request({
          url: '/interface/PvIndex',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let data = res.data.data;
          this.CumulativePowerGeneration = data.tgc,//累计发电量
          this.CurrentPowerGeneration = data.ygc,//当年发电量
          this.DayPowerGeneration = data.dgc,//当日发电量
          this.PowerStationCapacity = data.mw,//电站容量
          this.Rebots = data.roboot_count,//机器人数量
          this.EnvironmentalMonitoring = data.env_count//环境检测系统



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
            // dataZoom: [
            //     {
            //         show: true,
            //         realtime: true,
            //         start: 65,
            //         end: 85
            //     },
            //     {
            //         type: 'inside',
            //         realtime: true,
            //         start: 65,
            //         end: 85
            //     }
            // ],
            xAxis: [
                  {
                      type: 'category',//数据类型
                      axisLabel:{
                          interval: 0,//数据间隔，当数据过多时设置为0 全部显示
                          rotate: 70,

                      },
                      data: data.x,
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
                      max: 15000,
                      interval: 1000,
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
                      max: 10,//数据最大值
                      interval: 1,//数据间隔
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
                      name:'发电量',
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
                      data:data.y
                  },
                  {
                      name:'功率',
                      type:'line',
                      smooth: true,//平滑曲线
                      yAxisIndex: 1,//当存在2个y轴时，右边数据轴必须设置此项
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
                      data:data.py
                  }
              ],
            grid: {//表格样式
              left: '10%',
              right: '10%',
              containLabel: true
            }     
          }
          charts.setOption(option)
        }).catch(err => {
          console.log(err);
        })
       
      },

      //月发电量 默认时间2019-06，默认电站id是1
      makeChartsMonthlyPowerGenerationStatistics(date="2019-06"){

        let Message = this.$route.query.pvid+date;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(), key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('pv_id',this.$route.query.pvid);
        formData.append('month',date);
        formData.append('sign',sign);
        request({
          url: '/interface/PvGc',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          if(res.data.data != null){

            
            // this.handleShowMsg('Success','success')
            let data = res.data.data;

            const charts = echarts.init(document.getElementById('MonthlyPowerGenerationChart'))
            // console.log(xdata);
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
                data: data.x
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
                data: data.y,
                type: 'bar',
                areaStyle: {}
              }]
            }
            charts.setOption(option)
          }else{
            this.handleShowMsg('数据为空','warning')
          }
          
        }).catch(err => {
          console.log(err);
        })
        
      },

      makeChartDayInstallStatistics(date="2019-06"){

        let Message = this.$route.query.pvid.toString()+date;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message, key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('pv_id',this.$route.query.pvid);
        formData.append('month',date);
        formData.append('sign',sign);
        request({
          url: '/interface/PvGcBattleMonth',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          if(res.data.data != null) {
            let data = res.data.data;
            this.MonthGenerationData = data.month;
            this.MonthLiftData = data.up;
            this.MonthAverageLift = data.up_avg;

            const charts = echarts.init(document.getElementById('DayInstallChart'))
            const option = {
              color: ['blue','red'],//折线点的颜色
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
                data: data.x
              },
              yAxis: {
                type: 'value',
                name: 'KWh',
                min: 0,
                max: 35000,
                interval: 2000,
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
                  data: data.y1,
                  type: 'line',
                  smooth: true,//平滑曲线
                  itemStyle : {
                    normal : {
                        // color:'#fff', //改变折线点的颜色
                        lineStyle:{
                            color:'blue' //改变折线颜色
                        }
                    }
                  },
                  areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'blue'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                  }
                },
                {
                  name:'未安装',
                  data: data.y2,
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
                }
              ]
            }
            charts.setOption(option)
          }else{
            this.handleShowMsg('数据为空','waring');
          }
          
        }).catch(err => {
          console.log(err);
        })
        
      },

      //已安装/未安装方阵月发电量对比
      markeMonthInstallChart(date="2019-06"){

        let Message = this.$route.query.pvid+date;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message, key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('pv_id',this.$route.query.pvid);
        formData.append('month',date);
        formData.append('sign',sign);
        request({
          url: '/interface/PvGcBattleMonth',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          if(res.data.data != null) {
            let data = res.data.data;
            this.MonthGenerationData = data.month;
            this.MonthLiftData = data.up;
            this.MonthAverageLift = data.up_avg;
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
                    rotate: 45,//x轴数据旋转度数，用于x轴数据过多时使用
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
                data: data.x//x轴数据
              },
              yAxis: [
                {
                  type: 'value',
                  name: '(KWh)',
                  min: 0,
                  max: 35000,
                  interval: 5000,
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
                  max: 0.5,//数据最大值
                  interval: 0.05,//数据间隔
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
                  data: data.y1,
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
                  data: data.y2,
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
                  data:data.y3
                }
              ]
            }
            charts.setOption(option)
          }else{
            this.handleShowMsg('数据为空','waring');
          }
          
        }).catch(err => {
          console.log(err);
        })
        
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

      //获取首页数据
      getIndexData(){

        let Message = this.$route.query.pvid;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(),key).toString();
        let sign = this.$MD5(hash).toUpperCase();
          // let formData = new FormData()
          // formData.append('pv_id',this.$route.query.pvid);
          // formData.append('sign',sign);
        let formData = qs.stringify({'pv_id':this.$route.query.pvid,'sign':sign});
        request({
          url: '/interface/PvIndex',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let data = res.data.data;
          this.stationname = data.station.name,
          this.CumulativePowerGeneration = data.tgc,//累计发电量
          this.CurrentPowerGeneration = data.ygc,//当年发电量
          this.DayPowerGeneration = data.dgc,//当日发电量
          this.PowerStationCapacity = data.mw,//电站容量
          this.Rebots = data.roboot_count,//机器人数量
          this.EnvironmentalMonitoring = data.env_count//环境检测系统
        }).catch(err => {
          console.log(err);
        })
      },

      //获得机器人数据
      getRebot(name=''){

        let Message = this.$route.query.pvid.toString()+this.pageSize+name+this.pageIndex;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(), key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('index',this.pageIndex);
        formData.append('name',name);
        formData.append('num',this.pageSize);
        formData.append('pv_id',this.$route.query.pvid);
        formData.append('sign',sign);
        request({
          url: '/interface/PvRoboots',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {

          let data = res.data.data.list;
          if(data.length != 0){

            this.rebotdata = this.rebotdata.concat(data);
            this.totalCount = data.length+1;
          }else{
            this.handleShowMsg('机器人数据为空','info');
          }
          
        }).catch(err => {
          console.log(err);
        })
      },

      //获得机器人照片URL
      getImgURL(item){
        return 'http://brmsh5.boeet.com.cn:82'+item.img;
      },
      handleroute(r_id){
        let pvid = this.$route.query.pvid;
        this.$router.push({ path: '/rebotdetail',query:{rebotid:r_id,pvid:pvid} })
        //
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
  li{
    background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  }
  ul{
    background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
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
  #PowerStationDetail {
    
    font-size: 14px;
    .homeBody {
      background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
      .other-people {
        width: 92%;
        height: 65%;
        margin-left: 3%;
        padding: 5px;
        position: relative;
      }
      .datecss {
        background:red;
      }
      .datepicker>input{
        background-color:red !important;
      }
      .num{
        border: 1px solid #9ef5ff;;
        width: 100%;
        background: rgba(255,255,255,0.07);
        margin-bottom: 15px;
        border-radius: 2px;
        box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .05);
        -webkit-box-shadow: #d4d2d2 0px 0px 10px;
        -moz-box-shadow: #d4d2d2 0px 0px 10px;
      }
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
