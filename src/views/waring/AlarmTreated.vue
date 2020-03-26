<template>
  <div id="alarmtreated">
      <header>
          <div class="header-title">
              <router-link :to="{path: 'warning'}">
                  <button icon="back" class="btn">>返回</button>
              </router-link>
              <p>告警详情</p>
              <button class="btn"></button>
          </div>
      </header>
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
    color: #36E5FF;
    font-size: 3.7vw;
  }
  button{
    border-color: #36E5FF;
    background: transparent;
    border-radius:10px;
    width: 80px;
    font-size: 3.4vw;
    color: #36E5FF;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  #content #gjxx-title{
    color: #36E5FF;
    font-size: 3.7vw;
      margin-top: 10px;
      padding-bottom: 15px;
  }
  #content table{

    border-collapse:separate;
    border-spacing:0px 10px;
    margin: auto;
    width: 95%;
    font-size: 3.4vw;
  }
  #content table tr td{
    text-align: left;
    color: #FFFFFF;
      /*padding-top: 5px;*/
      padding-bottom: 3px;
  }
#alarmtreated {
  margin: 0;
  background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  /*text-align: center;*/
  position: absolute;
  width: 100%;
  height: 100%;
    font-family: "Microsoft YaHei";
}
 #content{
     width: 95%;
   /*border: 1px #00FFFF;*/
   height: 85%;
 }
  .header-title{
      width: 95%;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 4.8vw;
      background-color: transparent;
      border-bottom: 1px solid #1B376F;
      padding-top: 10px;
      padding-bottom: 10px;
      color: #FFFFFF;
  }
  .btn{
      border: 0px;
      padding: 0px;
      text-align: left;
      background-color: transparent;
      font-size: 3.7vw;
      color: #FFFFFF;
  }
</style>
