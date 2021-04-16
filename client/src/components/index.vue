<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <!-- 映射路由的 id -->
    <h3>{{ $route.params.id }}</h3>
    <!-- 映射参数 -->
    <h3>{{ $route.query }}</h3>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'index.vue'
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
