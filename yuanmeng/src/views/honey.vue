<template>
	<div id="honeydetail">
		
	<div id="header">
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
	
	<div style='position:relative;width:100px;margin:0 auto;'>
	    <div class='one'></div>
	    <div class='two'></div>
	    <div class='three'></div>
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
#honeydetail{
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
	text-align: center;
	color: white;
}
.boss{
	height: auto;
	width: 100%;
	display: flex;
	justify-content: space-around;
	}
.one {
	width: 50px;
	height: 86.6px;
	margin: 0 auto;
	border-top: 1px solid red;
	border-bottom: 1px solid red;
	}
.two {
	position: absolute;
	width: 50px;
	height: 86.6px;
	left: 25px;
	top: 0;
	transform: translate(-50%,-50%);
	transform: rotate(60deg);
	border-top: 1px solid red;
	border-bottom: 1px solid red;
	}
.three {
	position: absolute;
	width: 50px;
	height: 86.6px;
	left: 25px;
	top: 0;
	transform: translate(-50%,-50%);
	transform: rotate(300deg);
	border-top: 1px solid red;
	border-bottom: 1px solid red;}
</style>
