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
		<div style="text-align:center">1号机器人</div>
		<div style="text-align:center"><a href="">设备在线</a></div>
    </div>
	
    <div id="honeycomb">
	    <ul>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-qingsao"><span class="wenzi"><a href="">清扫次数:96次</a></span></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-chixushichang"><span class="wenzi"><a href="">清扫时长:51h</a></span></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-chongdian"><span class="wenzi"><a href="">充放电次数:96次</a></span></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-jiqiren"></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-dianliang"><span class="wenzi"><a href="">剩余电量:93%</a></span></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-gaojingxinxi"><span class="wenzi"><a href="">告警信息:正常</a></span></i></span></span>
	      </li>
	      <li>
	        <span class="hex"><span class="hexIn"><i class="iconfont icon-shebei"><span class="wenzi"><a href="">设备状态:停止</a></span></i></span></span>
	      </li>
	    </ul>
	</div>
	
	<div id="content2" class="boss" style="padding-top: 30px; ">
		<div class="square"><i class="iconfont icon-zanting"></i><div>暂停</div></div>
		<div class="square"><i class="iconfont icon-qidong"></i><div>启动</div></div>
		<div class="square"><i class="iconfont icon-fanhui"></i><div>返转</div></div>
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
  
 #content a{
    text-decoration: none;
	color: lime;
  }


#robotdetail{
	/* background-image: radial-gradient(rgb(7, 39, 100), rgb(7, 39, 100)); */
	background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
	height: 100%;
	width: 100%;
	position: absolute;
}
#header{
  /* background-color: #000066; */
  border: 1px #00FFFF;
  height: 10%;
}
#content{
	color: white;
}
#content2{
	color: white;
}
#content2 div {
	border:1px solid #0077AA;
	padding: 5px 13px;
	/* color: #0077AA; */
}

#content2 div div{
	border:none;
}

#footer{
  background-color: #04122F;
  position: absolute;
  bottom: 0px;
  color: white;
}
.wenzi{
	position: absolute;
	/* text-align: center; */
	left: 0;
	right: 0;
	top: 25%;
	font-size: 10px;
}

.wenzi a{
	color: white;
	text-decoration: none;
}

.boss{
	height: auto;
	width: 100%;
	display: flex;
	justify-content: space-around;
	}

ul {
	  margin: 0;
	  padding: 0;
	}
	ul {
		list-style: none;
		width: 360px;
		margin: 25px auto;
	}
	li {
	  float: left;
	  margin: 0 5px;
	  height: 96px;
	}
	.hex {
	  overflow: hidden;
	  display: block;
	  width: 100px;
	  height: 116px;
	  transform: rotate(-60deg) skewY(30deg); 
	  /* border:  1px solid #0077AA; */
	}
	.hexIn {
		/* border: 1px solid #0077AA; */
	  background-color: #0077AA;
	  border:  1px solid #0077AA;
	  display: block;
	  width: 100px;
	  height: 116px;
	  line-height: 116px;
	  text-align: center;
	  transform: skewY(-30deg) rotate(60deg);
	  color: white;
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
	
	
.square{
	 background: 
	 linear-gradient(royalblue,royalblue) left top,
	 linear-gradient(royalblue, royalblue) left top,
	 linear-gradient(royalblue, royalblue) right top,
	 linear-gradient(royalblue, royalblue) right top,
	 linear-gradient(royalblue, royalblue) left bottom,
	 linear-gradient(royalblue, royalblue) left bottom,
	 linear-gradient(royalblue, royalblue) right bottom,
	 linear-gradient(royalblue, royalblue) right bottom;
	 background-repeat: no-repeat;
	 background-size: 1px 5px, 5px 1px;
}

.hexIn i{
	position: relative;
	left: 0;
	top: 0;
}


</style>
