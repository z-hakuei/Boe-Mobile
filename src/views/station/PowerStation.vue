<template>
  <div id="Powerstation">
    <mt-header title="电站列表">
      <router-link to="/" slot="left">
      <router-link :to="{ path:'home' }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
    <div class="homeBody" v-on:keyup.13="submit"><!--:value.sync="value" -->
      <mt-search
          v-model="value"
          :result="filterResult"
          cancel-text="取消"
          placeholder="搜索" class="serach">
      </mt-search>
      <load-more
        :pageIndex="pageIndex"
        :pageSize="pageSize"
        :totalCount="totalCount"
        :openRefresh="true"
        @refresh="refresh"
        @loadmore="loadmore"
      >
        <ul>
          <li class="powerstationlist" v-for="(item,key) in stationdata">
            <span class="powerstation">
                <span @click="handleroute(item.pv_id)">
                  <img class="stationimage" :src="getImgURL(item)"/>
                </span>
              <span class="addresstitle">{{item.name}}</span>
              <span class="detailtitle">总装机容量{{item.mw}}MW</span>
            </span>
            <span class="stationdetail">
              <div>设备总量:{{item['dev_count']}}</div>
              <div>在线设备总量:{{item['dev_online']}}</div>
              <div>机器人数量:{{item['roboot_count']}}</div>
              <div>环监数量:{{item['env_count']}}</div>
              <div>摆渡车数量:{{item['shuttle_count']}}</div>
            </span>
          </li>
        </ul>
      </load-more>
    </div>
    
  </div>
</template>

<script>
  import {request} from "../../network/request";
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import  storage from '@/model/storage.js'
  export default {
    name: 'Powerstation',
    components: {
      Cryptojs,
      storage
    },
    data() {
      return {
        value: '',//搜索框选中数据
        defaultResult:[],//搜索框默认数据
        stationdata: [],//电站数据
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
        console.log('刷新')
      },
      handleroute(pv_id){
        this.$router.push({ path: '/powerstationdetail',query:{pvid:pv_id} })
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
          url: '/interface/Pv',
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
          this.stationdata = data;
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
          url: '/interface/Pv',
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
            this.stationdata = this.stationdata.concat(data);
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

<style scoped lang="scss">
  /* lang="less" */
  #Powerstation {
    position:absolute;
    width:100%;
    height:100%;
		font-size: 10px;
    .mint-header {
      background-color: transparent !important;
    }
    .homeBody {
			/* public start */
      background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
			.serach{
        height: 100%;
        .mint-searchbar {
          background: #1a2e54;
        }
			}
			.powerstationlist{
				display: flex;
				flex-direction: row;
        margin: 0 10px;
        padding: 10px 8px;
				border-bottom: 1px solid #505050;
				.powerstation{
					display: flex;
					flex-direction: column;
					width: 140px;
					.itemBox {
            > span {
              display: block;
            }
            &.active {
              color: #00BCD4;
            }
          }
					.stationimage{
						width: 100%;
            border: 1px solid skyblue;
					}
					.detailtitle{
						text-align: center;
						color: #566cac;
					}
					.addresstitle{
						text-align: center;
            padding: 6px 0;
						color: #fff;
					}
				}
				.stationdetail{
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
					color: #e6ecf0;
				}
			}
    }
  }
</style>