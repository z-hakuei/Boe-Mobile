<template>
  <div id="alarmtreated">
    <div id="header">
      <table class="header_table">
        <tr>
          <td width="25%" style="text-align: left;"><a href="/warning" style="color: white;"><i class="iconfont icon-fanhui-copy">返回</i></a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 22px;">告警详情</p></td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </div>
    <div id="content">
      <table width="100%">
        <tr>
          <td><a href="">告警详细</a></td>
        </tr>
        <tr>
          <td>电站名称：山东高密</td>
        </tr>
        <tr>
          <td>告警时间：2019-08-08</td>
        </tr>
        <tr>
          <td>告警信息：这是01告警信息的详细情况，可点击标题查看</td>
        </tr>
        <tr>
          <td>这是01告警信息的详细情况，可点击标题查看</td>
        </tr>
        <tr>
          <td>处理状态：<button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">已处理</p></button></td>
        </tr>
      </table>
    </div>
    <div id="footer" class="boss">
      <!-- <i><i class="iconfont icon-shouye"></i><div>首页</div></div>
      <div><i class="iconfont icon-biandianzhan"></i><div>电站</div></div>
      <div><i class="iconfont icon-ditu"></i><div>地图</div></div>
      <div><i class="iconfont icon-gaojing"></i><div>告警</div></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmTreated'
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
  .header_table{
    margin: auto;
    width: 95%;
    height: 100%;
    border-bottom: 1px solid;
  }
  .boss{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    }
  #content table{
    padding: 0px;
    border-collapse:separate;
    border-spacing:0px 10px;
    margin: auto;
    width: 95%;
    font-size: 12px;
  }
  #content table tr td{
    padding: 0px;
    text-align: left;
    color: white;
  }
  #content table tr td textarea{
    text-align: left;
    font-size: 12px;
    color: white;
    width: 100%;
  }

#alarmtreated {
  margin: 0;
  background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
#header{
  margin: 0px;
   border: 1px #00FFFF;
   height: 8%;
 }
 #content{
   border: 1px #00FFFF;
   height: 85%;
 }
 #footer{
   color: white;
   background-color: #04122F;
   border: 1px #00FFFF;
   bottom: 0px;
   position: absolute;
   height: auto;
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
</style>
