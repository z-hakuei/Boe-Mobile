<!--
 * @Author: your name
 * @Date: 2020-01-04 15:14:37
 * @LastEditTime : 2020-01-04 15:28:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \power\src\components\common\sltopn.vue
 -->
<template>
  <div>
    <el-select v-model="svalue" placeholder="请选择" filterable>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <!-- <el-button @click="clickme()">默认按钮</el-button> -->
    <!-- <input type="text" :value="value"> -->
  </div>
</template>
 
<script>
  export default {
    name: 'sltopn',
    data() {
      return {
        options:[],
        svalue: ''
      }
    },
    methods: {
      // clickme(){
      //     alert(this.svalue);
      // },
      //转换下拉框下的字段
      _dataTransform(data){
        let _data = [];
        for (let i = 0; i < data.length; i++) {
          _data[i] = {};
          _data[i].label = data[i][this.fileType.label];
          _data[i].value = data[i][this.fileType.value];
        }
        return _data;
      }
    },
    watch:{
      //判断下拉框的值是否有改变
      svalue(val, oldVal) {
        // console.log('new: %s, old: %s', val, oldVal)
        if(val!=oldVal){
          this.$emit('input', this.svalue);
        }
      },
    },
    props: {
      url:{
        type:String
      },//导入的url地址
      urlName:{
        type:String
      },//跨域请求标志
      metName:{
        type:String
      },//方法名
      dtName:{
        type:String
      },//条件参数
      value: {
        type: String
      },//接受外部v-model传入的值
      fileType:{
        type:Object
      }//定义请求回来的json数据格式
    },
    mounted(){
      //初始话下拉框的值
      this.svalue=this.value;
      //远程请求回来的数据
     /* this.$fetch(this.url)
        .then((response) => {
          this.options=this._dataTransform(response);
        })*/
 
    //   let parames = {
    //     "moduleName": eval(this.urlName),
    //     "functionName": this.url,
    //     "methodName": this.metName,
    //     "data": { // 查询条件
    //       dictTypeCode: this.dtName
    //     }
    //   };
    //   this.http(JSON.stringify(parames))
    //     .then((res)=>{
    //       alert(JSON.stringify(res.data.dictList))
    //       this.options=this._dataTransform(res.data.dictList);
    //     }).catch(error => {
    //     console.log(error);
    //   })
 
    }
  }
</script>