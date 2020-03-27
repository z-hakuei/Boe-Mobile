<template>
  <div id="alarmlist">
    <header>
      <div class="header-title">
        <router-link :to="{path: 'home'}">
          <button icon="back" class="btn1">>返回</button>
        </router-link>
        <p>告警列表</p>
        <button class="btn2" @click="showSearch = !showSearch"><i class="iconfont icon-sousuo"></i></button>
      </div>
      <div v-if="showSearch" id="header_input">
        <input type="text" placeholder="请输入搜索内容" v-model="search" id="search-input">
      </div>
    </header>
    <div id="content">
      <load-more
              :pageIndex="pageIndex"
              :pageSize="pageSize"
              :totalCount="totalCount"
              :openRefresh="true"
              @refresh="refresh"
              @loadmore="loadmore">

            <table v-for="warn in warnList"  id="table-show">
              <tr>
                <td class="headline" colspan="2">
                  <router-link v-if="warn.dealResult == '已处理'" :to="{ path: '/AlarmTreated',query: {warn:warn}}">

                  这是{{warn.id}}告警信息
                  </router-link>
                  <router-link v-else="warn.dealResult == '未处理'" :to="{ path: '/AlarmUntreated',query: {warn:warn}}">
                  这是{{warn.id}}告警信息
                  </router-link>
                </td>
              </tr>
              <tr>
                <td class="show-namewarn-time">
                  <div>电站名称：山东高密</div>
                  <div>告警时间：{{warn.warn_time}}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2">告警信息：{{warn.name}}</td>
              </tr>
              <tr>
                <td  colspan="2">
                  处理状态：
                  <button id="btn-stat">
                      {{warn.dealResult}}
                  </button>
                </td>
              </tr>
            </table>
      </load-more>
    </div>

  </div>
</template>

<script>
    import qs from 'qs';//引入发送post请求数据转换工具
  import {request} from "../../network/request";
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import  storage from '@/model/storage.js'
  export default {
    name: 'AlarmList',
    components:{
        qs,
      Cryptojs,
      storage
    },
    data() {
      return {
        nList: [],
        // warnList: [],   //接口返回的list
        Token : storage.get('token'),
        pageIndex: 0,
        pageSize: 5,

        search: '', //初始化数据为空
        tlist: [],

        totalCount: 0,
        showSearch: false
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
      //搜索功能函数
      //搜索功能	// 要求1：菜单列表显示搜索
      warnList: function() {	//数据源定义一个函数
        var search = this.search;	//定义search保存input输入的数据
        if (search) {				//判断search里面的数据
          return this.nList.filter(function(product) {//这里返回的nlist是通过get获取的数据
            // console.log('************' + product);
            return Object.keys(product).some(function(key){
              return String(product[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        // console.log(this.alist)
        return this.nList;	//返回alist数据
      }
    },
    methods: {
      // lol(){//搜索显示隐藏
      //   if(document.getElementById('search-input').style.display === 'none' ){

      //     document.getElementById('search-input').style.display ='flex';
      //     // this.$router.go(0);
      //   }else{
      //     document.getElementById('search-input').style.display = 'none';
      //   }
      // },
        mainIndex() {
        },
        loadmore(pageIndex) {
            //上滑加载更多，pageIndex为下一页页码,
            this.handleLoading();
            this.pageIndex = pageIndex;
            this.getData();
        },
        refresh() {//刷新
        },
        handleroute(id) {
            this.$router.push({path: '/AlarmTreated', query: {id: id}})
        },
        handleShowMsg(message, type) {
            this.$message({
                message: message,
                type: type,//'info', 'success', 'error', 'warning', 'loading'
                showClose: true
            })
        },
        handleLoading() {
            let l = this.$message.loading('加载中...')
            setTimeout(function () {
                l.close()
            }, 500)
        },
        //文档高度
        getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        },

        getWindowHeight() {//可视窗口高度
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        },

        getScrollHeight() {//滚动条高度
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        },
        //监听函数
        scrollFn() {
            if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
                // 　　　　　　this.handleShowMsg('没有更多数据','info');
            }
        },

        getImgURL(item) {//拼接图像src
            return 'http://brmsh5.boeet.com.cn:82' + item.img;
        },
      getData(){      //获取数据
        let Message = this.pageSize + this.search + this.pageIndex;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message, key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData();
        formData.append('index', this.pageIndex);
        formData.append('num', this.pageSize);
        formData.append('sign', sign);
        formData.append('name', this.search);
        request({
          url: '/interface/Warns',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': this.Token,
            'platform': 'a'
          },
          data: formData
        }).then(res => {
          let data = res.data.data.list;
          // this.alist = data;

          let newList = [];
          data.map(item=>(
                  newList.push({
                    id:item.id,
                    name:item.name,
                    detail:item.detail,
                    r_id:item.r_id,
                    dealResult: item.dealResult,
                    reason: item.reason,
                    warn_time:item.warn_time
                  })
          ));
          this.totalCount = data.length + 1;
          this.nList = this.nList.concat(newList);//将每次获取的数据拼接
          console.log(this.nList);
          // this.nList = newList;

        }).catch(err => {
          console.log(err);
        })
      },
    }
  }
</script>

 <style scoped lang="scss">
   p{
     margin: 0;
     color: #FFFFFF;
   }
   a{
     text-decoration: none;
     color: #36E5FF;
     font-size: 3.7vw;
   }
   .icon-sousuo{
     font-size: 3.7vw;
   }
   #table-show{
     font-size: 3.4vw;
     padding-top: 5px;
     padding-bottom: 5px;
     width: 100%;
     /*height: 100%;*/
     margin: auto;
     /*border-bottom: 1px solid hsla(0,0%,100%,0.5);*/
     border-bottom: 1px solid #1B376F;
     /*border: 1px solid red;*/
   }
   #table-show tr td{
     padding-bottom: 3px;
     text-align: left;
     color: #FFFFFF;
   }
   #table-show .headline{
     text-align: left;
     font-size: 3.7vw;
     padding-bottom: 10px;
     /*border: 1px solid red;*/
   }
   .show-namewarn-time{
     display: flex;
     justify-content: space-between;
   }
   #btn-stat{
     border-color: #36E5FF;
     background: transparent;
     border-radius:10px;
     width: 80px;
     color: #36E5FF;
     font-size: 3.2vw;
     padding-bottom: 5px;
     padding-top: 5px;
   }
 #alarmlist {
   background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
   text-align: center;
   position: absolute;
   width: 100%;
   font-family: "Microsoft YaHei";
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
   .btn1{
     border: 0px;
     padding: 0px;
     text-align: left;
     background-color: transparent;
     font-size: 3.7vw;
     color: #FFFFFF;
   }
   .btn2{
     border: 0px;
     padding: 0px;
     text-align: right;
     background-color: transparent;
     font-size: 3.7vw;
     color: #FFFFFF;
   }
   #header_input {
     margin: auto;
     text-align: center;
   }
   #search-input{
     /*display: none;*/
     width: 95%;
     height: 25px;
     font-size: 3.7vw;
     color: #939BAE;
     /*margin: auto;*/
   }
 #content{
   font-size: 3.4vw;
   width: 95%;
   margin: auto;
   display: flex;
   flex-direction: column;
   background-color: transparent;
   background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
 }
 </style>
