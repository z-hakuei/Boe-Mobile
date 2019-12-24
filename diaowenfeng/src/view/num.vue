<template>
  <div >
    <div class="other-people">
      <div class="image-border image-border1"></div>
      <div class="image-border image-border2"></div>
      <div class="image-border image-border3"></div>
      <div class="image-border image-border4"></div>
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
          <div>
            <p class="number">
              {{number}}
            </p>
            <p>当年累计安装数量(万kwh)</p>
          </div>
          <div>
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
  export default {
    data () {
      return {
        capacity: 800,
        number: 6800,
        generation: 1.56,
        availability:100,
        pnumber:1160,
        onlinerate:100,
        option: {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12],
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
            data: [0,500,1000,1500,2000,2500,3000],
            axisLabel : {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          series: [{
            data: [1000,2500,900,500,2400,2500,3100,400,1000,1456,2900,987],
            type: 'line',
            symbol:'none',
            smooth: true,
            areaStyle: {
              color: ["#145099"]
            },
            lineStyle:{
              color:'#309EF1'
            },

          }]
        },
        width: document.body.clientWidth + 'px',
        height: '400%',
        serise: null
      }
    },
    mounted () {
      this.$nextTick(res => {
        this.width = document.body.clientHeight + 'px'
        this.drawLine()
      })
    },
    methods: {
      drawLine () {
        this.serise = this.$echarts.init(document.getElementById('echarts'))
        this.serise.setOption(this.option)
        // window.onresize = () => {
        //   let dom = document.body.clientWidth
        //   this.width = dom +'px'
        // }
      }
    }
  }
</script>

<style>

  .image-border {
    position: absolute;
    width: 20px;
    height: 20px;
  }

  .image-border1 {
    top: 0;
    left: 0;
    border-left: 5px solid #FFFFFF;
    border-top: 5px solid #FFFFFF;
  }

  .image-border2 {
    top: 0;
    right: -2px;
    border-right: 5px solid #FFFFFF;
    border-top: 5px solid #FFFFFF;
  }

  .image-border3 {
    bottom: 0;
    left: 0;
    border-bottom: 5px solid #FFFFFF;
    border-left: 5px solid #FFFFFF;
  }

  .image-border4 {
    bottom: 0;
    right: -2px;
    border-right: 5px solid #FFFFFF;
    border-bottom: 5px solid #FFFFFF;
  }
  .other-people {
    border: 1px solid #9ef5ff;;
    margin-top: 4% ;
    width: 85%;
    height: 35%;
    margin-left: 6%;
    margin-right:5%;
    padding: 5px;
    position: relative;
  }
  .van-tabbar--fixed i {
    flex: 1;
    text-align: center;
  }

  .num{
    margin: 30px 30px ;

    /*padding: 10px;*/
    /*height: 10%;*/
    /*border: 1px solid #9ef5ff;*/
    /*position: relative;*/
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
    transform:scale(.9,1.6);
    font-size: .4rem;
  }
  .sub p.model2{
    font-size: .3rem;
  }
  .num .content{
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: .2rem;
  }
  .num .content .capacity {
    color: rgb(54, 230, 254);
    font-size: .6em;
    transform:scale(.9,1.6);
  }
  .num .content .number {
    color: rgb(6, 244, 195);
    font-size: .6em;
    transform:scale(.9,1.6);
  }
  .num .content .generation {
    color: rgb(210, 255, 112);
    font-size: .6em;
    transform:scale(.9,1.6);
  }
  .num .content p{
    font-size: .2rem;
    color: #fff;
  }
  .num .content >div {
    width: 100%
  }
  .chartDiv{
    width: 100%;
    height: 100%;

  }
  #statistics{
    margin-left: 5%;
    font-size: .4em;
    color: rgb(33,152,192);
  }
</style>
