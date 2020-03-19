<template>
  <div id="alarmtreated">
    <mt-header title="告警详情" style="font-size: 36px; background-color: transparent;border-bottom: 1px solid hsla(0,0%,100%,0.5); padding: 30px;">
      <router-link to="/" slot="left">
      <router-link :to="{ path:'warning' }">
        <mt-button icon="back" style="font-size: 26px; color: white;">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div id="content">
      <table>
        <tr>
          <td id="gjxx-title">
<!--            <router-link to="" @click.native="refresh">-->
              告警详细
<!--            </router-link>-->
          </td>
        </tr>
        <tr>
          <td>电站名称：山东高密</td>
        </tr>
        <tr>
          <td>告警时间：{{warn.warn_time}}
<!--            {{warn_time}}-->
          </td>
        </tr>
        <tr>
          <td>告警信息：{{warn.name}}</td>
        </tr>
        <tr>
          <td>{{warn.detail}}</td>
        </tr>
        <tr>
          <td>处理状态：<button @click="btnclick">{{warn.dealResult}}</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlarmTreated',
  data () {
    return {
      warn: [] //本条数据的list
    }
  },
  created() {
    if(this.$route.query.warn.length === 0){
      this.id = 'warn list为空'
    }
    this.warn = this.$route.query.warn;
    console.log(this.warn);
  },
  methods: {//获取数据
    btnclick(){
      this.$router.go(-1);
    },
    refresh(){
      this.$router.go(0);
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
    color: #00FFFF;
    font-size: 28px;
  }
  button{
    border-color: #00FFFF;
    background: transparent;
    border-radius:13px;
    width: 130px;
    font-size: 24px;
    color: #00FFFF;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  #content #gjxx-title{
    color: #00FFFF;
    font-size: 28px;
  }
  #content table{
    padding: 0px;
    border-collapse:separate;
    border-spacing:0px 10px;
    margin: auto;
    width: 95%;
    font-size: 26px;
  }
  #content table tr td{
    padding: 0px;
    text-align: left;
    color: white;
  }
#alarmtreated {
  margin: 0;
  background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
 #content{
   border: 1px #00FFFF;
   height: 85%;
 }
</style>
