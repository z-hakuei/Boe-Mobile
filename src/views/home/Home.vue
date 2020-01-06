<template>
  <div class="home">
    <div class="other-people">
      <div class="border border1"></div>
      <div class="border border2"></div>
      <div class="border border3"></div>
      <div class="border border4"></div>
      <div class="num">
        <div class="content">
          <div>
            <p class="capacity">
              {{capacity}}
            </p>
            <p>累计安装容量(MW)</p>
          </div>
        </div>
        <div class="content">
          <div class="numberdiv">
            <p class="number">
              {{number}}
            </p>
            <p>当年累计安装数量(万kwh)</p>
          </div>
          <div class="generationdiv">
            <p class="generation">
              {{generation}}
            </p>
            <p>当日发电量(万kwh)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sub">
      <div>
        <p class="model1">
          {{availability}}%
        </p>
        <p class="model2">设备可用率</p>
        <span></span>
      </div>
      <div>
        <p class="model1">
          {{pnumber}}
        </p>
        <p class="model2">已安装电站数量</p>
        <span></span>
      </div>
      <div>
        <p class="model1">
          {{onlinerate}}%
        </p>
        <p class="model2">设备在线率</p>
      </div>
    </div>
    <div>
      <p id="statistics">设备安装统计</p>
    </div>
    <div class="chartDiv" :style="{ width: width}">
      <div id="echarts" :style="{ width: '100%', height: height}"></div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';//引入发送post请求数据转换工具
  import {request} from "@/network/request";//引入封装的axios
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import echarts from 'echarts';
  import  storage from '@/model/storage.js'
  export default {
    name: 'Home',
    components: {
      Cryptojs,
      qs,
      echarts,
    },
    data () {
      return {
        capacity: 800,
        number: 6800,
        generation: 1.56,
        availability:90,
        pnumber:1160,
        onlinerate:100,
        width:'100%',
        height: '400%',
        serise: null
      }
    },
    mounted () {
      this.mainIndex()//渲染表格
    },
    methods: {
      mainIndex(){
        this.getToken(),
        this.makeEcharts()
      },
      makeEcharts () {
        let Message = '';
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message,key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = qs.stringify({'sign':sign});
        request({
          url: '/interface/Home',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : storage.get('token'),
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let data = res.data.data;
          this.capacity = data.total_pv,
          this.number = data.total_count,
          this.generation = data.total_income,
          this.availability = data.dev_ava,
          this.pnumber = data.pv_count,
          this.onlinerate = data.dev_online



          const charts = echarts.init(document.getElementById('echarts'))
          const option ={
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: data.x,
              areaStyle: {
                color: ["#0c51ff"],
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            yAxis: {
              type: 'value',
              boundaryGap: false,
              axisLabel : {
                textStyle: {
                  color: '#ffffff'
                }
              },
            },
            series: [{
              data: data.y,
              type: 'line',
              symbol:'none',
              smooth: true,
              areaStyle: {
                color: ["#145099"]
              },
              lineStyle:{
                color:'#309EF1'
              },
            }],
            grid: {
              right: '2%',
              left: '2%',
              containLabel: true
            },
          }
          charts.setOption(option)
        }).catch(err => {
          console.log(err);
        })
        
      },

      //获取token
      getToken(){

        let formData = qs.stringify({'account':'1','password' : 'C4CA4238A0B923820DCC509A6F75849B','sign':'93CFFFF669BBEDD0544EB72852E0F5CD'});
        request({
          url: '/interface/Login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          storage.set('token',res.data.data.token);
        }).catch(err => {
          console.log(err);
        })
      },
    }
  }
</script>

<style>

  .home{
    /*margin-top: 1rem;*/
    background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  }
  .border {
    position: absolute;
    width: 4%;
    height: 7%;
  }

  .border1 {
    top: 0;
    left: 0;
    border-left: 4px solid #36E4FF;
    border-top: 4px solid #36E4FF;
  }

  .border2 {
    top: 0;
    right: 0;
    border-right: 4px solid #36E4FF;
    border-top: 4px solid #36E4FF;
  }

  .border3 {
    bottom: 0;
    left: 0;
    border-bottom: 4px solid #36E4FF;
    border-left: 4px solid #36E4FF;
  }

  .border4 {
    bottom: 0;
    right: 0;
    border-right: 4px solid #36E4FF;
    border-bottom: 4px solid #36E4FF;
  }
  .other-people {
    /*border: 1px solid #9ef5ff;;*/
    width: 92%;
    height: 65%;
    margin-left: 3%;
    /*margin-right:6%;*/
    padding: 5px;
    position: relative;
  }
  .van-tabbar--fixed i {
    flex: 1;
    text-align: center;
  }

  .num{
    /*margin: 1px 30px ;*/
    border: 1px solid #9ef5ff;;
    width: 100%;
    background: rgba(255,255,255,0.07);
   /*background-color: #17294F;*/
   /* opacity:0.4;*/
   /* background: rgba(0, 0, 0,0.7);*/
    /*padding: 10px;*/
    /*height: 10%;*/
    /*border: 1px solid #9ef5ff;*/
    /*position: relative;*/
  }
  .num .content{
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 7%;
    margin-bottom: 7%;

  }
  .num .content .capacity {
    color: rgb(54, 230, 254);
    font-size: .6em;
    transform:scale(2.5,3.5);
  }
  .num .content .number {
    color: rgb(6, 244, 195);
    font-size: .6em;
    transform:scale(2.4,3);
  }
  .num .content .generation {
    color: rgb(210, 255, 112);
    font-size: .6em;
    transform:scale(2.4,3);
  }

  .num .content p{
    font-size: .5rem;
    margin-top: 30px;
    color: #fff;
  }
  .num .content >div {
    width: 100%
  }
  .sub{
    margin-top: 10% ;
    margin-bottom: 10% ;

    display: flex;
    align-items: center;
    color: #fff;
  }
  .sub span {
    position: absolute;
    width: 2px;
    height: 65%;
    background: #00c2ff;
    right: 0;
    top: 15%;
    opacity: .4;
  }
  .sub strong{
    font-size: .4rem;
  }
  .sub div{
    flex: 1;
    text-align: center;
    position: relative;
  }
  .sub p.model1{
    transform:scale(2.1,3);
    font-size: .5rem;
  }
  .sub p.model2{
    font-size: .6rem;
    margin-top: 12%;
  }

  .chartDiv{
    width: 100%;
    height: 100%;

  }
  #statistics{
    margin-left: 5%;
    font-size: .7em;
    color: rgb(55,228,255);
  }
</style>
