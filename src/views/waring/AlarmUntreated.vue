<template>
  <div id="alarmuntreated">
    <div id="header">
      <table class="header_table">
        <tr>
          <td width="25%" style="text-align: left;"><a href="" style="color: white;"><i class="iconfont icon-fanhui-copy"></i>返回</a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 22px;">告警详情</p></td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </div>
    <div id="content">
      <table>
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
          <td>处理状态：<el-button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">未处理</p></el-button></td>
        </tr>
        <tr>
          <td><a href="">处理操作</a></td>
        </tr>
        <tr>
          <td>
            <button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">处理</p></button>
            &nbsp;&nbsp;
            <button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">忽略</p></button>
          </td>
        </tr>
        <tr>
          <td><textarea rows="10%" cols="40%" style="background-color: #606266; border-color: #00FFFF;">请输入处理信息</textarea></td>
        </tr>
      </table>
    </div>
    <div id="footer" class="boss">
      <!-- <div><i class="iconfont icon-shouye"></i><div>首页</div></div>
      <div><i class="iconfont icon-biandianzhan"></i><div>电站</div></div>
      <div><i class="iconfont icon-ditu"></i><div>地图</div></div>
      <div><i class="iconfont icon-gaojing"></i><div>告警</div></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmUntreated'
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
  .header_table{
    margin: auto;
    height: 100%;
    width: 95%;
    border-bottom: 1px solid;
  }
  #content table{
    width: 95%;
    margin: auto;
    border-collapse:separate;
    border-spacing:0px 10px;
    font-size: 12px;
  }
  #content table tr td{
    text-align: left;
    color: white;
  }
  #content table tr td textarea{
    text-align: left;
    font-size: 12px;
    color: white;
  }

#alarmuntreated{
  background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
#header{
  text-align: center;
  height: 8%;
 }
 #content{
  height: 85%;
 }
 #footer{
   color: white;
   background-color: #04122F;
   bottom: 0px;
   height: auto;
   position: absolute;
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
</style>
