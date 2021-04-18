<template>
  <transition name="fade">
    <div class="index">
      <h1>{{ msg }}</h1>
      <!-- 映射路由的 id -->
      <h3>{{ $route.params.id }}</h3>
      <!-- 映射参数 -->
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>
      <h3>{{ $route.query }}</h3>

      <!-- 新层模板 -->
      <router-view class="view one"></router-view>
      <router-view class="view two" name="a"></router-view>

    </div>
  </transition>
</template>
<!-- 处理器文件  -->
<script type="text/javascript" src="./controller/index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped 组建私有样式 -->
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
