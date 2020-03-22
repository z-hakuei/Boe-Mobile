<template>
  <div id="alarmuntreated">
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
            告警详细
          </td>
        </tr>
        <tr>
          <td>电站名称：山东高密</td>
        </tr>
        <tr>
          <td>告警时间：{{warn.warn_time}}</td>
        </tr>
        <tr>
          <td>告警信息：{{warn.name}}</td>
        </tr>
        <tr>
          <td>{{warn.detail}}</td>
        </tr>
        <tr>
          <td>处理状态：<button>{{warn.dealResult}}</button></td>
        </tr>
        <tr>
          <td id="clcz-title">处理操作</td>
        </tr>
        <tr>
          <td>
            <button id="btn_manage" @click="manage">处理</button>
            &nbsp;&nbsp;&nbsp;
            <button id="btn_ignore" @click="ignore">忽略</button>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <div class="div1"></div>
              <div class="div">
                <textarea id="dealmsg" >
                  请输入处理信息
                </textarea>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';//引入发送post请求数据转换工具
  import {request} from "../../network/request";
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import  storage from '@/model/storage.js';

export default {
  name: 'AlarmUntreated',
  components:{
    qs,
    Cryptojs,
    storage
  },
  data () {
    return {
      warn: [],
      Token : storage.get('token')  //获取token
    }
  },
  created() {
    if(this.$route.query.warn.length === 0){
      console.log('warn list为空');
    }
    this.warn = this.$route.query.warn;
    console.log(this.$route.query.warn.length)
    console.log(this.warn);
    console.log(this.warn.reason)
    this.getWarnlist();
  },
  methods: {
    manage(){

    },
    ignore(){
      this.$router.go(-1);  //返回前一页
    },
    getWarnlist(){//连接WarnDeal接口（目前接口缺少reason参数）
      // let reason = this.$route.query.warn.reason;
      // if(this.$route.query.warn.reason === null ){
      //   reason = '误报';
      // }
      // console.log(reason);
        let Message = this.$route.query.warn.id + this.$route.query.warn.dealResult + this.$route.query.warn.reason;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(), key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = qs.stringify({'id':this.$route.query.warn.id,'dealResult':this.$route.query.warn.dealResult,'reason': this.$route.query.warn.reason,'sign':sign});

        request({
          url: '/interface/WarnDeal',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let data = res.data.data;
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style>
  p{
    margin: 0;
    color: #FFFFFF;
  }
  a{
    text-decoration: none;
    color: #36E5FF;
    font-size: 14px;
  }
  button{
    border-color: #36E5FF;
    background: transparent;
    border-radius:10px;
    width: 80px;
    font-size: 12px;
    color: #36E5FF;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  #btn_ignore{
    font-size: 13px;
    margin-left: 10px;
  }
  #btn_manage{
    font-size: 13px;
  }
  #content #gjxx-title{
    color: #36E5FF;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 15px;
  }
  #content #clcz-title{
    color: #36E5FF;
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 10px;
  }
  /*带三角的输入框样式*/
  .div{
    width: 100%;
    height: 150px;
    border-radius:8px;
    border: 1px solid #36E5FF;
    position: relative;
  }
  .div1{
    width: 0px;
    height: 0px;
    border: 5px solid;
    margin-left: 35px;
    border-color: transparent transparent #36E5FF transparent;
  }
  .div::before{
    content: '';
    width: 0;
    height: 0;
    border: 5px solid;
    position: absolute;
    /*bottom: -100px;*/
    top: -9px;
    /*left: 140px;*/
    left: 35px;
    border-color: transparent transparent rgb(8, 45, 100);
  }
  /*以上*/

  #content table{
    width: 95%;
    margin: auto;
    border-collapse:separate;
    border-spacing:0px 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 13px;
  }
  #content table tr td{
    /*padding: 0px;*/
    text-align: left;
    color: #FFFFFF;
  }
#alarmuntreated{
  background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  /*text-align: center;*/
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei";
}
 #content{
  height: 85%;
 }
  #dealmsg{/*输入框*/
    margin-top: 20px;
    margin-left: 10px;
    background-color: transparent;
    height: 120px;
    width: 95%;
    border: 0px;
    color: #939BAE;
  }
  .header-title{
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 17.5px;
    background-color: transparent;
    border-bottom: 1px solid #1B376F;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #FFFFFF;
  }
  .btn{
    border: 0px;
    text-align: left;
    background-color: transparent;
    font-size: 14px;
    color: #FFFFFF;
  }
</style>
