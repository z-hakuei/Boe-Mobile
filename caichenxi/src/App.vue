<template>
  <div id="app">
    <div id="header">
      <table width="100%" height="100%">
        <tr>
          <td width="25%" style="text-align: left;"><a href="www.baidu.com" style="color: white;"><i class="iconfont iconfanhui"></i>返回</a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 22px;">告警列表</p></td>
          <td width="25%" style="text-align: right; color: white;"><i class="iconfont icon-search"></i></td>
        </tr>
      </table>
    </div>
    <div id="content">
      <table border="0.2px" width="100%" height="100%" style="font-size: 12px; color: white;">
        <tr>
          <td>
            <table width="100%" height="100%" >
              <tr>
                <td style="text-align: left;" colspan="2"><a href="Alarm_Detail.vue">这是01告警信息</a></td>
              </tr>
              <tr>
                <td style="text-align: left;">电站名称：山东高密</td>
                <td style="text-align: right;">告警时间：2019-08-08</td>
              </tr>
              <tr>
                <td style="text-align: left;" colspan="2">告警信息：这是01告警信息的详细情况，可点击标题查看</td>
              </tr>
              <tr>
                <td  colspan="2" style="text-align: left;">处理状态：<el-button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">已处理</p></el-button></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%" height="100%">
              <tr>
                <td style="text-align: left;" colspan="2"><a href="Alarm_Detail.vue">这是02告警信息</a></td>
              </tr>
              <tr>
                <td style="text-align: left;">电站名称：山东高密</td>
                <td style="text-align: right;">告警时间：2019-08-08</td>
              </tr>
              <tr>
                <td style="text-align: left;" colspan="2">告警信息：这是02告警信息的详细情况，可点击标题查看</td>
              </tr>
              <tr>
                <td  colspan="2" style="text-align: left;">处理状态：<el-button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">未处理</p></el-button></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%" height="100%">
              <tr>
                <td style="text-align: left;" colspan="2"><a href="home_page.html">这是03告警信息</a></td>
              </tr>
              <tr>
                <td style="text-align: left;">电站名称：山东高密</td>
                <td style="text-align: right;">告警时间：2019-08-08</td>
              </tr>
              <tr>
                <td style="text-align: left;" colspan="2">告警信息：这是03告警信息的详细情况，可点击标题查看</td>
              </tr>
              <tr>
                <td  colspan="2" style="text-align: left;">处理状态：<el-button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">已处理</p></el-button></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%" height="100%">
              <tr>
                <td style="text-align: left;" colspan="2"><a href="Alarm_Detail.vue">这是04告警信息</a></td>
              </tr>
              <tr>
                <td style="text-align: left;">电站名称：山东高密</td>
                <td style="text-align: right;">告警时间：2019-08-08</td>
              </tr>
              <tr>
                <td style="text-align: left;" colspan="2">告警信息：这是04告警信息的详细情况，可点击标题查看</td>
              </tr>
              <tr>
                <td  colspan="2" style="text-align: left;">处理状态：<el-button style="border-color: #00FFFF; background-color: #606266; font-size: 12px;"><p style="color: #00FFFF;">未处理</p></el-button></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div id="footer">
      <table width="100%" height="100%" style="color: white;">
        <tr>
          <td width="25%"><i class="iconfont icon-home"></i></td>
          <td width="25%"><i class="iconfont icon-dianzhan"></i></td>
          <td width="25%"><i class="iconfont icon-ditu"></i></td>
          <td width="25%"><i class="iconfont icon-gaojing"></i></td>
        </tr>
        <tr>
          <td width="25%">首页</td>
          <td width="25%">电站</td>
          <td width="25%">地图</td>
          <td width="25%">告警</td>
        </tr>
      </table>
    </div>
  </div>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
</template>

<script>
export default {
  name: 'App'
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
   #content table{
     /* border-top: 1px;
     border-color: white; */
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

 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
   width: 375px;
   height: 812px;
 }
 #header{
   background-color: #606266;
   border: 1px #00FFFF;
   height: 10%;
 }
 #content{
   background-color: #606266;
   border: 1px #00FFFF;
   height: 80%;
 }
 #footer{
   background-color: #606270;
   border: 1px #00FFFF;
   height: 10%;
 }
 </style>
