<template>
	<div id="robotdetail">
		<mt-header :title="Name">
      <router-link to="/" slot="left">
      <router-link :to="{path:'powerstationdetail',query:{pvid:this.$route.query.pvid}  }">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      </router-link>
    </mt-header>
	
	<div id="content">
		<div>{{Name}}</div>
		<div v-if="Online == 1"><span style="color:#00FD77;">设备在线</span></div>
		<div v-else="Online == 0"><span style="color:red;">设备离线</span></div>
    </div>
	
	<div id="comb">
		<ul>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-qingsao"></i><div class="wenzi">清扫次数:{{Count}}次</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-chixushichang"></i><div class="wenzi">清扫时长:{{Hours}}h</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-chongdian"></i><div class="wenzi">充放电次数:{{Charge}}次</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div id="combcenter" class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'>
							<img style="width:80px;" :src="getImgURL(Img)"/>
						</div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-dianliang"></i><div class="wenzi">剩余电量:{{Quantity}}%</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'>
							<i class="iconfont icon-gaojingxinxi"></i>
							<div class="wenzi" v-if="Warn == 1"><span style="color:#00FD77;">告警信息:正常</span></div>
							<div class="wenzi" v-if="Warn == 0"><span style="color:red;">告警信息:异常</span></div>
						</div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-shebei"></i><div class="wenzi">设备状态:{{Status}}</div></div>
				</div>
			</li>
		</ul>
		
	</div>
	
	
	
	<div id="content2" class="boss" style="padding-top: 10%;">
		<div class="square" @click="RebotManage(0)"><div class="boderX"><i class="iconfont icon-zanting"></i><div class="sss">暂停</div></div></div>
		<div class="square" @click="RebotManage(1)"><div class="boderX"><i class="iconfont icon-qidong"></i><div class="sss">启动</div></div></div>
		<div class="square" @click="RebotManage(2)"><div class="boderX"><i class="iconfont icon-fanhui"></i><div class="sss">返转</div></div></div>
	</div>

  </div>
</template>

<script>
	import qs from 'qs';//引入发送post请求数据转换工具
  import {request} from "@/network/request";//引入封装的axios
  import Cryptojs from 'crypto-js';//全局引用不好使，因此局部引用
  import  storage from '@/model/storage.js'
	export default {
		name: 'RebotDetail',
		components: {
			qs,
			request,
			Cryptojs,
			storage
		},

		data() {
      return {
				Token:storage.get('token'),//登录token
				Name : '',//机器人名字
				Charge : '',//充电次数
				Count : '',//清扫次数
				Status : '',//机器人状态
				Warn : '',//告警状态
				Hours : '',//清扫时长
				Quantity : '',//电量
				Online : '',//在线状态
				Count : '',//清扫次数
				Img : '',//机器人照片
      }
		},
		mounted() {
			this.mainIndex();
		},

		methods: {
			mainIndex() {
				this.getData()
			},
			
			//获得机器人数据
			getData(){

				let RebotID = this.$route.query.rebotid;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(RebotID.toString(),key).toString();
        let sign = this.$MD5(hash).toUpperCase();
				let formData = qs.stringify({'r_id':RebotID,'sign':sign});
				
        request({
          url: '/interface/RobootInfo',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {//数据回调函数
					
					let data = res.data.data;
					this.Name = data.name;//机器人名字
					this.Charge = data.charge;//充电次数
					this.Status = data.status;//机器人状态
					this.Warn = data.warn;//告警状态
					this.Hours = data.hour;//清扫时长
					this.Quantity = data.quantity;//电量
					this.Online = data.online;//在线状态
					this.Count = data.count;//清扫次数
					this.Img = data.img;//机器人照片
				}).catch(err => {
					console.log(err);
				})
			},

			//获得机器人照片URL
			getImgURL(item){
				return 'http://brmsh5.boeet.com.cn:82'+item;
			},

			//暂停机器人  0--暂停  1--启动   2--翻转
			RebotManage(type){
				let RebotID = this.$route.query.rebotid;
				let Message = RebotID+type;
        let key = 'H@ppy1@3';
        let hash = Cryptojs.HmacSHA256(Message.toString(),key).toString();
        let sign = this.$MD5(hash).toUpperCase();
				let formData = qs.stringify({'r_id':RebotID,'action': type,'sign':sign});
				
        request({
          url: '/interface/robootManage',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : this.Token,
            'platform' : 'a'
          },
          data: formData
        }).then(res => {//数据回调函数
					if(type == 0){
						console.log('暂停成功');
					}else if(type == 1){
						console.log('启动成功');
					}else{
						console.log('翻转成功');
					}
					
				}).catch(err => {
					console.log(err);
				})
			}
		}

	}
</script>

<style scoped>	
  p{
    margin: 0;
    color: white;
  }  
#robotdetail{
	background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
	height: 100%;
	width: 100%;
	position: absolute;
}
#header{
  border: 1px #00FFFF;
  height: 10%;
}
#content{
	color: white;
	text-align: center;
}
#content2{
	color: white;
}
#footer{
  background-color: #04122F;
  position: absolute;
  bottom: 0px;
  color: white;
}
#combcenter{
	/* box-shadow:0 0 10px #23BFF9 inset; */
	/* box-shadow:
	-2px 0 3px -1px #31D1EE inset,
	0 0px 0px 0px transparent inset,
	0 0px 0px 0px transparent inset,
	2px 0 3px -1px #31D1EE inset; */
}
.boss{
	height: auto;
	width: 100%;
	display: flex;
	justify-content: space-around;
	}
.square{
	 background: 
	 linear-gradient(#34E4FC,#34E4FC) left top,
	 linear-gradient(#34E4FC, #34E4FC) left top,
	 linear-gradient(#34E4FC, #34E4FC) right top,
	 linear-gradient(#34E4FC, #34E4FC) right top,
	 linear-gradient(#34E4FC, #34E4FC) left bottom,
	 linear-gradient(#34E4FC, #34E4FC) left bottom,
	 linear-gradient(#34E4FC, #34E4FC) right bottom,
	 linear-gradient(#34E4FC, #34E4FC) right bottom;
	 background-repeat: no-repeat;
	 background-size: 1px 5px, 5px 1px;
	 padding: 1px 1px;
}
.boderX{
	border: 1px solid #0DBAD5;
	padding: 10% 25px;
	text-align: center;
	background: rgba(255,255,255,0.07);

}
.boderX i{
	color: #36E4FE;
	font-size: 20px;
}
.sss{
	color: white;
	font-size:10px ;
	text-align: center;
	padding: 0;
}
.one {
	width: 86.6px;
	height: 50px;
	margin: 0 auto;
	border-left: 1px solid #31D1EE;
	border-right: 1px solid #31D1EE;
	}
.two {
	position: absolute;
	width: 86.6px;
	height: 50px;
	left: 5px;
	top: 0;
	/* transform: translate(-50%,-50%); */
	transform: rotate(60deg);
	border-left: 1px solid #31D1EE;
	border-right: 1px solid #31D1EE;
	}
.three {
	position: absolute;
	width: 86.6px;
	height: 50px;
	left: 5px;
	top: 0;
	/* transform: translate(-50%,-50%); */
	transform: rotate(300deg);
	border-left: 1px solid #31D1EE;
	border-right: 1px solid #31D1EE;
	}   
.four{
	position: absolute;
	margin: 0 auto;
	left: 5px;
	top: 0px;
	width: 86.6px;
	height: 50px;
	text-align: center;
}
.four i{
	color: #36E4FE;
	font-size: 30px;
	position: relative;
	left: 0;
	top: 0;
}
.wenzi{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	font-size: 10px;
	color: white;
}
ul {
	  margin: 0;
	  padding: 0;
	  list-style: none;
	  width: 360px;
	  margin: 25px auto;
	}
li{
	float: left;
	margin: 0 5px;
	height: 96px;
	}
li:nth-child(7n + 1) {
	margin-left: 60px;
	}
li:nth-child(7n + 6){ 
	margin-left: 60px;
	}
li i{
		display: block;
	}
</style>
