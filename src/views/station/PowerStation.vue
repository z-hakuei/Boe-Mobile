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
			<div class="powerstationlist" v-for="(item,key) in stationdata">
				<span class="powerstation">
					<!-- <router-link class="itemBox" :to="{ path: '/powerstation/powerstationdetail',query:{pvid:item.pv_id} }"> -->
						<span @click="handleroute(item.pv_id)">
							<img class="stationimage" :src="getImgURL(item)"/>
						</span>
					<!-- </router-link> -->
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
			</div>
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
      }
    },
    beforeCreate() {},
    created() {//创建完成以后请求数据
      this.getData();
    },
    beforeMount() {},
    mounted() {
      
      this.mainIndex()
    },
    beforeDestroy() {},
    destroy() {},
    computed : {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods: {
      mainIndex() {
      },
      handleroute(pv_id){
        this.$router.push({ path: '/powerstationdetail',query:{pvid:pv_id} })
        //
      },
      submit(){//搜索按钮提交数据
        let Message = '2'+this.value+'0';
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message, key).toString();
        let sign = this.$MD5(hash).toUpperCase();
        let formData = new FormData()
        formData.append('index','0');
        formData.append('num','2');
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
          console.log(res.data);
          let data = res.data.data.list;
          this.stationdata = data;
          console.log(data);
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
      getData(){
        let formData = new FormData()
        formData.append('index','0');
        formData.append('num','2');
        formData.append('sign','056EB16A5E2D058D1D25DE285FE60217');
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
		background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
    .homeBody {
			/* public start */
			.serach{
        height: 100%;
			}
			.powerstationlist{
				display: flex;
				flex-direction: row;
				padding:0% 1%;
				border-top: 1px solid #0849b3;
				border-bottom: 1px solid #0849b3;
				.powerstation{
					display: flex;
					padding: 2% 0%;
					flex-direction: column;
					width:22%;
					border-right: 1px solid #0849b3;
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
    }
  }
</style>
