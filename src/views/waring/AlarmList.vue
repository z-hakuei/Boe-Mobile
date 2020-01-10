<template>
  <div id="alarmlist">
    <div id="header">
      <table width="95%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
        <tr>
          <td width="25%" style="text-align: left;"><a href="/home" style="color: white;"><i class="iconfont icon-fanhui-copy">返回</i></a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 22px;">告警列表</p></td>
          <td width="25%" style="text-align: right; color: white;"><i class="iconfont icon-sousuo"></i></td>
        </tr>
      </table>
    </div>
    <div id="content">
      <load-more
              :pageIndex="pageIndex"
              :pageSize="pageSize"
              :totalCount="totalCount"
              :openRefresh="true"
              @refresh="refresh"
              @loadmore="loadmore">
<!--      <table width="95%" style="font-size: 12px; margin: auto;">-->
<!--        <tr v-for="warn in warnList">-->
<!--          <td>-->
            <table v-for="warn in warnList" width="100%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
              <tr>
                <td style="text-align: left;" colspan="2">
                  <router-link :to="{ path: '/AlarmTreated' }">
                    这是{{warn.id}}告警信息：{{warn.name}}
                  </router-link>
                </td>
              </tr>
              <tr>
                <td style="text-align: left;">电站名称：山东高密</td>
                <td style="text-align: right;">告警时间：{{warn.warn_time}}</td>
              </tr>
              <tr>
                <td style="text-align: left;" colspan="2">告警信息：{{warn.detail}}</td>
              </tr>
              <tr>
                <td  colspan="2" style="text-align: left;">
                  处理状态：
                  <button style="border-color: #00FFFF; background: transparent; font-size: 12px;">
                    <p style="color: #00FFFF;">已处理</p>
                  </button>
                </td>
              </tr>
            </table>
<!--          </td>-->
<!--        </tr>-->
<!--      </table>-->
      </load-more>
    </div>
    <div id="footer" class="boss">
      <!-- <div><i class="iconfont icon-shouye"></i><div>首页</div></div>
      <div><i class="iconfont icon-biandianzhan"></i><div>电站</div></div>
      <div><i class="iconfont icon-ditu"></i><div>地图</div></div>
      <div><i class="iconfont icon-gaojing"></i><div>告警</div></div> -->
    </div>
  </div>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
</template>

<script>
  import {request} from "../../network/request";
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import  storage from '@/model/storage.js'
  export default {
    name: 'AlarmList',
    components:{
      Cryptojs,
      storage
    },
    data() {
      return {
        value: '',//搜索框选中数据
        defaultResult:[],//搜索框默认数据
        warnList: [],//告警数据
        Token : storage.get('token'),
        pageIndex: 0,
        pageSize: 6,
        totalCount: 0
      }
    },
    beforeCreate() {},
    created() {//创建完成以后请求数据
      this.getData();
    },
    beforeMount() {},
    mounted() {
      window.addEventListener('scroll', this.scrollFn);
      this.mainIndex()
    },
    beforeDestroy() {},
    destroyed() {
      window.removeEventListener('scroll', this.scrollFn); // 销毁监听
    },
    computed : {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods: {
      mainIndex() {
      },
      loadmore(pageIndex){
        //上滑加载更多，pageIndex为下一页页码,
        this.handleLoading();
        this.pageIndex = pageIndex
        this.getData();
      },
      refresh(){//刷新
      },
      handleroute(id){
        this.$router.push({ path: '/AlarmTreated',query:{id:id} })
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
      submit(){//搜索按钮提交数据
        let Message = this.pageSize+this.value+this.pageIndex;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message, key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('index',this.pageIndex);
        formData.append('num',this.pageSize);
        formData.append('sign',sign);
        formData.append('name',this.value);
        request({
          url: '/interface/Warns',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let pvarray=[];
          let data = res.data.data.list;
          this.warnList = data;
          this.totalCount = data.length+1;
          for(let i =0;i<data.length;i++) {
            pvarray.push(data[i].name);
          }
          this.defaultResult = pvarray;
        }).catch(err => {
          console.log(err);
        })
      },
      getImgURL(item){//拼接图像src
        return 'http://brmsh5.boeet.com.cn:82'+item.img;
      },
      getData(name){
        if(name == null){
          name = '';
        }
        let Message = this.pageSize+name+this.pageIndex;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(), key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('index',this.pageIndex);
        formData.append('num',this.pageSize);
        formData.append('name',name);
        formData.append('sign',sign);
        request({
          url: '/interface/Warns',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {
          let pvarray=[];
          let data = res.data.data.list;
          if(data.length != 0){
            this.warnList = this.warnList.concat(data);
            this.totalCount = this.totalCount+data.length;
          }

          for(let i =0;i<data.length;i++) {
            pvarray.push(data[i].name);
          }
          this.defaultResult = pvarray;
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
     color: white;
   }
   a{
     text-decoration: none;
     color: #00FFFF;
   }
   .boss{
     height: auto;
     width: 100%;
     display: flex;
     justify-content: space-around;
     }
   #content table{
     width: 100%;
     height: 100%;
     font-size: 12px;
     padding: 20px;
   }
   #content table tr td{
     padding: 3px;
     text-align: left;
     color: white;
   }
 #alarmlist {
   background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
   text-align: center;
   position: absolute;
   width: 100%;
   height: 100%;
 }
 #header{
   /* border: 1px #00FFFF; */
   height: 8%;
 }
 #content{
   /* border: 1px #00FFFF; */
   width: 95%;
   margin: auto;
   height: 100%;
 }
 #footer{
   background-color: #04122F;
   color: white;
   height: auto;
   border: 1px #00FFFF;
   bottom: 0px;
   position: absolute;
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
 </style>
