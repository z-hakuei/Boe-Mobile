<template>
  <div id="alarmlist">
    <div id="header">
      <table width="95%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
        <tr>
          <td width="25%" style="text-align: left;"><a href="www.baidu.com" style="color: white;"><i class="iconfont icon-fanhui-copy"></i>返回</a></td>
          <td width="50%" style="text-align: center;"><p style="font-size: 22px;">告警列表</p></td>
          <td width="25%" style="text-align: right; color: white;"><i class="iconfont icon-sousuo"></i></td>
        </tr>
      </table>
    </div>
    <div id="content">
      <table width="95%" height="100%" style="font-size: 12px; margin: auto;">
        <tr>
          <td>
            <table width="100%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
              <tr>
                <td style="text-align: left;" colspan="2">
                  <router-link :to="{ name: 'AlarmTreated' }">
                    这是01告警信息
                  </router-link>
                </td>
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
            <table width="100%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
              <tr>
                <td style="text-align: left;" colspan="2">
                  <router-link :to="{ name: 'AlarmUntreated' }">
                    这是02告警信息
                  </router-link>
                </td>
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
            <table width="100%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
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
            <table width="100%" height="100%" style="margin: auto; border-bottom: 1px solid hsla(0,0%,100%,0.5);">
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
    <div id="footer" class="boss">
      <div><i class="iconfont icon-shouye"></i><div>首页</div></div>
      <div><i class="iconfont icon-biandianzhan"></i><div>电站</div></div>
      <div><i class="iconfont icon-ditu"></i><div>地图</div></div>
      <div><i class="iconfont icon-gaojing"></i><div>告警</div></div>
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
   .boss{
     height: auto;
     width: 100%;
     display: flex;
     justify-content: space-around;
     }
   #content table{
     width: 98%;
     font-size: 12px;
   }
   #content table tr td{
     text-align: left;
     color: white;
   }
 #alarmlist {
   background-image: radial-gradient(rgb(3, 46, 125),rgb(10, 25, 56));
   text-align: center;
   position: absolute;
   width: 100%;
   height: 100%;
 }
 #header{
   /* border: 1px #00FFFF; */
   height: 8%;
 }
 #content{
   /* border: 1px #00FFFF; */
   height: 85%;
 }
 #footer{
   background-color: #04122F;
   color: white;
   height: auto;
   border: 1px #00FFFF;
   bottom: 0px;
   position: absolute;
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
 </style>
