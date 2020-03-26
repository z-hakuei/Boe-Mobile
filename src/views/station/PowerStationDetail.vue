<template>
  <div id="PowerStationDetail">
    
    <mt-header :title="stationname" style="font-size:2.6vh;">
      <router-link to="/" slot="left">
      <router-link :to="{ path: 'powerstation' }">
        <mt-button icon="back" style="font-size:2vh;">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody">

      <div class="other-people">
        <div class="num">
          <div class="installCapacityStatistics">
            <div class="installStatistics">
              <div class="number"><span style="margin-right:55%;">{{CumulativePowerGeneration}}</span></div>
              <div class="explainTitleText"><span style="margin-right:50%;">累计发电量（万KWh）</span></div>
            </div>
            <div class="singleStatistics">
              <div class="yearInstallStatistics">
                <div class="singleStatisticsNumber"><span style="margin-right:33%;">{{CurrentPowerGeneration}}</span></div>
                <div class="explainTitleText"><span>当年发电量（万KWh）</span></div>
                <div class="progressBox"><mt-progress class="yearGeneratePower" :value="20" :bar-height="2"></mt-progress></div>
              </div>
              <div class="totalProfit">
                <div class="singleStatisticsNumber" style="margin-left:-55%;"><span>{{DayPowerGeneration}}</span></div>
                <div class="explainTitleText"><span>当日发电量（万KWh）</span></div>
                <div class="progressBox"><mt-progress class="dayGeneratePower" :value="20" :bar-height="2"></mt-progress></div>
              </div>
            </div>
          </div>
        

          <div class="facilityStatistics">
            <div class="facilityTypeStatistics" style="margin-left:2%;">
              <div class="statisticsNumber"><span>{{PowerStationCapacity}}MW</span></div>
              <div class="explainTitleText"><span style="margin-left:-20%;">电站容量</span></div>
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
        <div @click="$refs.monthPowerPicker.open()" class="titleBox">
          <span>月发电量</span>
          <span class="decoration">{{ monthPowerMonth }}</span>
        </div>
        <mt-datetime-picker
          ref="monthPowerPicker"
          type="date"
          @confirm="monthPowerSelectMonth"
        />
        <div id="MonthlyPowerGenerationChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox" @click="$refs.installRunRatioPicker.open()">
          <span>已/未安装方阵日运行趋势</span>
          <span class="decoration">{{ installRunRatioMonth }}</span>
        </div>
        <mt-datetime-picker
          ref="installRunRatioPicker"
          type="date"
          @confirm="installRunRatioSelectMonth"
        />
        <div id="DayInstallChart" class="fullChartBox"></div>
      </div>
      <div class="facilityInstallStatisticsBox">
        <div class="titleBox" @click="$refs.installPowerRatioPicker.open()">
          <span>已/未安装方阵月发电量对比</span>
          <span class="decoration">{{ installPowerRatioMonth }}</span>
        </div>
        <mt-datetime-picker
          ref="installPowerRatioPicker"
          type="date"
          @confirm="installPowerRatioSelectMonth"
        />
        <div id="MonthInstallChart" class="fullChartBox"></div>
        <div class="facilityStatistics" style="margin-left:5%;margin-right:7%;">
          <div class="facilityTypeStatistics">
            <div class="monthstatisticsNumber"><span style="margin-left:-15%;">月累计发电量</span></div>
            <div class="mytitletext"><span>{{MonthGenerationData}}</span><span class="unitText">（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics">
            <div class="monthstatisticsNumber"><span style="margin-left:-23%;">月提升电量</span></div>
            <div class="mytitletext"><span>{{MonthLiftData}}</span><span class="unitText">（万kwh）</span></div>
          </div>
          <div class="facilityTypeStatistics" style="border-right:0px;">
            <div class="monthstatisticsNumber"><span>月平均提升比</span></div>
            <div class="mytitletext"><span style="margin-left:-9%;">{{MonthAverageLift}}</span><span class="unitText">（%）</span></div>
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
        <div class="titleBox" id="reboots">
          <van-dropdown-menu class="dropmenu" style="height:25px;width:100px;">
            <van-dropdown-item v-model="value" :options="option" @change="indexSelect()" />
          </van-dropdown-menu>
          <span class="iconfont" style="font-size: 16px;" @click="get_roboot_by_name()">&#xe64c;</span>
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
                
                <div class="rebootdiv"><img @click="handleroute(item.r_id)" class="rebootimage" :src="getImgURL(item)"/></div>
                    
                <span class="stationdetail">
                  <div>清扫次数：{{item.count}}次</div>
                  <div>设备状态：{{item.status}}</div>
                  <div v-if="item.warn == 1">告警状态：<span style="color:red;">危险</span></div>
                  <div v-else-if="item.warn == 0">告警状态：<span style="color:green;">正常</span></div>
                  <div style="color:#00FF7F" v-if="item.online == 1">设备在线</div>
                  <div style="color:Red" v-else-if="item.online == 0">设备离线</div>
                </span>
                <span class="facilityNameBtn" @click="handleroute(item.r_id)">{{item.name}}</span>
              </li>
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
        pageSize: 3,
        totalCount: 0,
        monthPowerMonth: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}`,
        installRunRatioMonth: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}`,
        installPowerRatioMonth: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}`,
        value: 0,
        option: [
          { text: '请选择', value: 0 },
          { text: '1号机器人', value: 1 },
          { text: '2号机器人', value: 2 },
          { text: '3号机器人', value: 3 },
          { text: '4号机器人', value: 4 },
          { text: '5号机器人', value: 5 },
          { text: '6号机器人', value: 6 },
          { text: '7号机器人', value: 7 },
          { text: '8号机器人', value: 8 },
        ],
        robootname:''
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

      //机器人搜索
      get_roboot_by_name(){
        this.pageIndex = 0;
        this.rebotdata = [];
        this.totalCount = 0;
        if(this.robootname == '请选择'){
          name = '';
        }else{
          name = this.robootname;
        }
        
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
            this.totalCount = this.totalCount+data.length;
          }else{
            this.handleShowMsg('没有更多数据了','info');
          }
          
        }).catch(err => {
          console.log(err);
        })
      },
      indexSelect(){
        this.option.forEach(element => {
          if(this.value == element.value){
            // this.getRebot(element.text);
            this.robootname = element.text;
          }
        });
      },
      // 月发电量选择月
      monthPowerSelectMonth(value){
        let now = new Date(value)

        let year = now.getFullYear()  //取得4位数的年份
        let month = now.getMonth() + 1  //取得日期中的月份，其中0表示1月，11表示12月
        let date = now.getDate()      //返回日期月份中的天数（1到31）
        let hour = now.getHours()     //返回日期中的小时数（0到23）
        let minute = now.getMinutes() //返回日期中的分钟数（0到59）
        let second = now.getSeconds() //返回日期中的秒数（0到59）
        this.monthPowerMonth = `${year}-${month}`
        // 请求接口
        this.makeChartsMonthlyPowerGenerationStatistics(this.monthPowerMonth)
      },

      // 安装运行趋势选择月
      installRunRatioSelectMonth(value){
        let now = new Date(value)

        let year = now.getFullYear()  //取得4位数的年份
        let month = now.getMonth() + 1  //取得日期中的月份，其中0表示1月，11表示12月
        let date = now.getDate()      //返回日期月份中的天数（1到31）
        let hour = now.getHours()     //返回日期中的小时数（0到23）
        let minute = now.getMinutes() //返回日期中的分钟数（0到59）
        let second = now.getSeconds() //返回日期中的秒数（0到59）
        this.installRunRatioMonth = `${year}-${month}`
        // 请求接口
        this.makeChartDayInstallStatistics(this.installRunRatioMonth)
      },

      // 安装发电量对比选择月
      installPowerRatioSelectMonth(value){
        let now = new Date(value)

        let year = now.getFullYear()  //取得4位数的年份
        let month = now.getMonth() + 1  //取得日期中的月份，其中0表示1月，11表示12月
        let date = now.getDate()      //返回日期月份中的天数（1到31）
        let hour = now.getHours()     //返回日期中的小时数（0到23）
        let minute = now.getMinutes() //返回日期中的分钟数（0到59）
        let second = now.getSeconds() //返回日期中的秒数（0到59）
        this.installPowerRatioMonth = `${year}-${month}`
        // 请求接口
        this.markeMonthInstallChart(this.installPowerRatioMonth)
      },

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
  // 　　　　　　this.handleShowMsg('没有更多数据','info');
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
        //页面自动加载
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

    
      //设备安装统计（电站详情首页数据）
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
             backgroundColor: '#06245e',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      lineStyle: {
                          color: '#0E162E'
                      }
                  }
              },
              legend: {
                  icon: 'roundRect',
                  itemWidth: 20,
                  itemHeight: 5,
                  itemGap: 15,
                  data: ['发电量', '功率'],
                  right: '3%',
                  textStyle: {
                      fontSize: '1.9vh',
                      color: '#FFFFFF'
                  }
              },
              grid: {
                  left: '4%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  },
                  axisLabel: {
                      
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  axisTick: {
                      show:false
                  },
                  data: data.x
              }],
              yAxis: [{
                  type: 'value',
                  name: '(KWh)',
                  min: 0,//数据最小值
                  max: 10,//数据最大值
                  interval: 1,//数据间隔
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    align:'right'
                  },
                  axisTick: {
                      show:false
                  },
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              },
              {
                  type: 'value',
                  name: '(KW)',
                  min: 0,
                  max: 20000,
                  interval: 2000,
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    padding:[0,0,0,15],
                    align:'left'
                  },
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                    show:false
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          color:'#fff',
                          fontFamily:'Microsoft YaHei'
                      }
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              }],
              series: [{
                  name: '发电量',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1,
                          color:'#40BD89'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(64,189,137, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(64,189,137, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.8)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgb(64,189,137)',
                          borderColor: 'rgba(64,189,137,0.2)',
                          borderWidth: 12

                      }
                  },
                  data: data.py
              }, {
                  name: '功率',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  yAxisIndex:1,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1,
                          color:'#FC863F'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(252,134,63, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(252,134,63, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.2)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgb(252,134,63)',
                          borderColor: 'rgba(252,134,63,0.2)',
                          borderWidth: 12

                      }
                  },
                  data: data.y
              }]
            
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
              backgroundColor: '#06245e',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      lineStyle: {
                          color: '#0E162E'
                      }
                  }
              },
              grid: {
                  left: '4%',
                  right: '7%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  boundaryGap: true,
                  min: 0,
                  max: 29,
                  interval: 1,
                  color: '#fff',
                  data: data.x,
                  axisLabel: {
                    textStyle: {
                        fontSize: '1.7vh',
                        fontFamily:'Microsoft YaHei',
                        color:'#fff'
                    }
                  },
                  axisLine: {
                      lineStyle: {
                          color: '#043578',
                      }
                  },
                  axisTick: {
                      show: false
                  },
              }],
              yAxis: [{
                  type: 'value',
                  name: '(kwh)',
                  min: 0,
                  max: 22000,
                  interval: 2200,
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    padding:[0,50,0,0]
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          color:'#fff',
                          fontFamily:'Microsoft YaHei'
                      }
                  },
                  axisLine: {
                      show:false
                  },
                  axisTick: {
                      show: false
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              }],
              series: [{
                  type: 'bar',
                  data: data.y,
                  barWidth: '10px',
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: '#40BD89' // 0% 处的颜色
                          }, {
                              offset: 1,
                              color: '#06245e' // 100% 处的颜色
                          }], false),
                          barBorderRadius: [30, 30, 0, 0],
                      }
                  }
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
            this.MonthGenerationData = data.month.toFixed(2);
            this.MonthLiftData = data.up.toFixed(2);
            this.MonthAverageLift = data.up_avg.toFixed(2);

            const charts = echarts.init(document.getElementById('DayInstallChart'))
            const option = {
              backgroundColor: '#06245e',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      lineStyle: {
                          color: '#57617B'
                      }
                  }
              },
              legend: {
                  icon: 'roundRect',
                  itemWidth: 20,
                  itemHeight: 5,
                  itemGap: 5,
                  data: ['已安装', '未安装'],
                  right: '2%',
                  textStyle: {
                      fontSize: '1.9vh',
                      color: '#FFFFFF'
                  }
              },
              grid: {
                  left: '4%',
                  right: '7%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  },
                  axisLabel: {
                      
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  axisTick: {
                      show:false
                  },
                  data: data.x
              }],
              yAxis: [{
                  type: 'value',
                  name: '(KWh)',
                  min: 0,//数据最小值
                  max: 24000,//数据最大值
                  interval: 1000,//数据间隔
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    padding:[0,50,0,0]
                  },
                  axisTick: {
                      show:false
                  },
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              }],
              series: [{
                  name: '已安装',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1,
                          color:'#34ABFF'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(52,171,255, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(52,171,255, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.8)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(52,171,255)',
                          borderColor: 'rgba(52,171,255,0.2)',
                          borderWidth: 12

                      }
                  },
                  data: data.y1
              }, {
                  name: '未安装',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1,
                          color:'#FB3E3E'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(251,62,62, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(251,62,62, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.8)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {

                          color: 'rgba(251,62,62)',
                          borderColor: 'rgba(251,62,62,0.2)',
                          borderWidth: 12
                      }
                  },
                  data: data.y2
              }, ]
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
            this.MonthGenerationData = data.month.toFixed(2);
            this.MonthLiftData = data.up.toFixed(2);
            this.MonthAverageLift = data.up_avg.toFixed(2);
            const charts = echarts.init(document.getElementById('MonthInstallChart'))
            const option = {
              backgroundColor: '#06245e',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      lineStyle: {
                          color: '#0E162E'
                      }
                  }
              },
              legend: {
                  icon: 'roundRect',
                  itemWidth: 20,
                  itemHeight: 5,
                  itemGap: 15,
                  data: ['已安装', '未安装','提升比'],
                  right: '2%',
                  textStyle: {
                      fontSize: '1.9vh',
                      color: '#FFFFFF'
                  }
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  },
                  axisLabel: {
                      
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  axisTick: {
                      show:false
                  },
                  data: data.x
              }],
              yAxis: [{
                  type: 'value',
                  name: '(KWh)',
                  min: 0,//数据最小值
                  max: 24000,//数据最大值
                  interval: 800,//数据间隔
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    padding:[0,50,0,0]
                  },
                  axisTick: {
                      show:false
                  },
                  axisLine: {
                      show:false
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          fontFamily:'Microsoft YaHei',
                          color:'#fff'
                      }
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              },
              {
                  type: 'value',
                  name: '(%)',
                  min: 0,
                  max: 0.3,
                  interval: 0.01,
                  nameTextStyle:{
                    color:"#fff", 
                    fontSize:'1.7vh',
                    fontFamily:'Microsoft YaHei',
                    padding:[0,0,0,15],
                    align:'left'
                  },
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                    show:false
                  },
                  axisLabel: {
                      margin: 10,
                      textStyle: {
                          fontSize: '1.7vh',
                          color:'#fff',
                          fontFamily:'Microsoft YaHei'
                      }
                  },
                  splitLine: {
                      lineStyle: {
                          color: '#043578'
                      }
                  }
              }],
              series: [{
                  name: '已安装',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1,
                          color:'#34ABFF'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(52,171,255, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(52,171,255, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.8)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(52,171,255)',
                          borderColor: 'rgba(52,171,255,0.2)',
                          borderWidth: 12

                      }
                  },
                  data: data.y1
              }, {
                  name: '未安装',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1.5,
                          color:'#FB3E3E'
                      }
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(251,62,62, 0.8)'
                          }, {
                              offset: 1,
                              color: 'rgba(251,62,62, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.8)',
                          shadowBlur: 10
                      }
                  },
                  itemStyle: {
                      normal: {

                          color: 'rgba(251,62,62)',
                          borderColor: 'rgba(251,62,62,0.2)',
                          borderWidth: 12
                      }
                  },
                  data: data.y2
              },
              {
                  name: '提升比',
                  type: 'line',
                  smooth: true,
                  symbol: 'circle',
                  symbolSize: 5,
                  yAxisIndex:1,
                  showSymbol: false,
                  lineStyle: {
                      normal: {
                          width: 1.5,
                          color:'#FFF25F'
                      }
                  },
                  areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255,242,95, 0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,242,95, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.8)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,242,95)',
                        borderColor: 'rgba(255,242,95,0.2)',
                        borderWidth: 12

                    }
                },
                  data: data.y3
              }]
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
            this.totalCount = this.totalCount+data.length;
          }else{
            this.handleShowMsg('没有更多数据了','info');
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

<style lang="scss">

.decoration{
  font-size:1.9vh;
  color:#FFFFFF;
  border-bottom: 2px solid #36E5FF;
}
  .rebootdiv{
    position: relative; 
    top: 30px;
    left: 8px; 
    width: 100px; 
    height: 70px; 
    background: linear-gradient(to left, #36E5FF, #36E5FF) left top no-repeat, 
                linear-gradient(to bottom, #36E5FF, #36E5FF) left top no-repeat, 
                linear-gradient(to left, #36E5FF, #36E5FF) right top no-repeat,
                linear-gradient(to bottom, #36E5FF, #36E5FF) right top no-repeat, 
                linear-gradient(to left, #36E5FF, #36E5FF) left bottom no-repeat,
                linear-gradient(to bottom, #36E5FF, #36E5FF) left bottom no-repeat,
                linear-gradient(to left, #36E5FF, #36E5FF) right bottom no-repeat,
                linear-gradient(to left, #36E5FF, #36E5FF) right bottom no-repeat;
    background-size: 1px 7px, 7px 1px, 1px 7px, 7px 1px;  
  }
  .rebootimage{
    width:80px;
    margin:9px -4px 11px 10px;
  }
  .van-ellipsis{
    color:#36E5FF;
    font-size: 1.9vh;;
  }
  .dropmenu{
    color: #36E5FF;
    background: rgb(3, 38, 97);
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    border-bottom-left-radius: 20px;
    border: solid 1px #36E5FF;
    font-size: 19px;
    position: static !important;
    
    .van-dropdown-menu__title{
      color:#36E5FF !important;
    }
  }
  .dayGeneratePower {
      .mt-progress-progress {
        background: #D2FF70;
        width: 35% !important;
      }
      .mt-progress-content{
        margin-left:-33%;
        margin-right: 58%;
      }
  }
  .yearGeneratePower{
    .mt-progress-progress {
        width: 68% !important;
        background: #06F4C3;
    }
    .mt-progress-content{
      margin-left:-33%;
      margin-right: 58%;
    }
  }
  .datepicker {
    .datecss {
      background: #06245e;
    }
  }
  .monthstatisticsNumber{
    color:#fff;
    font-size:1.9vh;
    font-weight: bold;
    font-family: MicrosoftYaHei;
    letter-spacing: 0vh;
  }
</style>

<style scoped lang="scss">

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
    border-top: 1px solid #043578;
    position: relative;
    .powerstation{
      display: flex;
      padding: 2% 10%;
      flex-direction: column;
      width:22%;
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
      padding: 2% 14%;
      color: #fff;
      font-size: 1.9vh;
      line-height:4vh;
    }
    .facilityNameBtn {
      color:#36E5FF;
      position: absolute;
      right: 0px;
      bottom: 8px;
      background: #21365f;
      padding: 10px 20px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      font-size: 2vh;
    }
	}
  #PowerStationDetail {
    font-size: 14px;
    .mint-header {
      background: #1a2e54;
    }
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
        //-webkit-box-shadow: #d4d2d2 0px 0px 10px;
        -moz-box-shadow: #d4d2d2 0px 0px 10px;
      }
      .explainTitleText {
        color: #fff;
        font-size: 2vh;
      }
      .mytitletext{
         color: #fff;
        font-size: 2.6vh;
        .unitText {
          font-size: 1.7vh;
        }
      }
      .progressBox {
        display: inline-block;
        width: 60%;
      }
      .titleBox {
        padding: 10px;
        font-size: 2.5vh;
        color: #36E5FF;
        //box-shadow: 0 0 10px 4px #7188ff inset;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        z-index: 1;
        .selectFacility {
          background: transparent;
          color: #9f8686;
          border: none;
        }
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
            /*-webkit-text-stroke:1px #fff;*/
            color: #3ce3fd;
            font-size: 6vh;
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
            font-size: 4.4vh;
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
          border-right: 1px solid #1d3d7c;
          >.statisticsNumber {
            /*-webkit-text-stroke:1px #fff;*/
            color: #fff;
            font-size: 3.7vh;
            /*font-weight: bold;*/
            // text-shadow:0px 0px 8px #fff, 0px 0px 42px #fff, 0px 0px 72px #fff,0px 0px 150px #fff;
          }
        }
      }
    }
  }
</style>
