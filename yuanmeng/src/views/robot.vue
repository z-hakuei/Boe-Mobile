<template>
	<div id="robotdetail">
		
    <div id="header" style="border-bottom: 1px">
      <table width="100%" height="100%">
        <tr>
          <td width="25%" style="text-align: left;"><a href="" style="color: white;text-decoration: none;"><i class="iconfont icon-fanhui-copy"></i>返回</a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 25px;">1号机器人</p></td>
          <td>&nbsp;</td>
        </tr>
      </table> 
    </div>
	
	<div id="content">
		<div>1号机器人</div>
		<div><a href="">设备在线</a></div>
    </div>
	
	<div id="comb">
		<ul>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-qingsao"></i><div class="wenzi">清扫次数:96次</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-chixushichang"></i><div class="wenzi">清扫时长:51h</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-chongdian"></i><div class="wenzi">充放电次数:96</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div id="combcenter" class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-jiqiren"></i></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-dianliang"></i><div class="wenzi">剩余电量:93%</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-gaojingxinxi"></i><div class="wenzi">告警信息:正常</div></div>
				</div>
			</li>
			<li>
				<div style='position:relative;width:100px;margin:0 auto;'>
					    <div class='one'></div>
					    <div class='two'></div>
					    <div class='three'></div>
						<div class='four'><i class="iconfont icon-shebei"></i><div class="wenzi">设备状态:停止</div></div>
				</div>
			</li>
		</ul>
		
	</div>
	
	
	
	<div id="content2" class="boss" style="padding-top: 10%;">
		<div class="square"><div class="boderX"><i class="iconfont icon-zanting"></i><div class="sss">暂停</div></div></div>
		<div class="square"><div class="boderX"><i class="iconfont icon-qidong"></i><div class="sss">启动</div></div></div>
		<div class="square"><div class="boderX"><i class="iconfont icon-fanhui"></i><div class="sss">返转</div></div></div>
	</div>
	
    <div id="footer" class="boss">
		<div><i class="iconfont icon-shouye"></i><div>首页</div></div>
		<div><i class="iconfont icon-biandianzhan"></i><div>电站</div></div>	
		<div><i class="iconfont icon-ditu"></i><div>地图</div></div>	
		<div><i class="iconfont icon-gaojing"></i><div>告警</div></div>
    </div>

  </div>
</template>

<script>

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
#content a{
    text-decoration: none;
	color: #00FD77;
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
