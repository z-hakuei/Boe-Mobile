<template>
  <div class="hello">
    <div>
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
    </div>
    <div style="display: flex;justify-content: space-around">
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
    </div>

    <div style="display: flex">
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
      <div>
        <div>800</div>
        <div>累计安装容量(MW)</div>
      </div>
    </div>
    <chunk></chunk>
  </div>
</template>

<script>
  import chunk from './chunk.vue'
export default {
  name: 'HelloWorld',
  components:{chunk},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
