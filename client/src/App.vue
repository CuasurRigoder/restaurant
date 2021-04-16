<template>
  <div id="app">
    <!-- 渲染成 a 标签 -->
    <!-- 可写导航菜单 -->
    <!-- 编程式 -->
    <!-- router.push(...) -->
    <router-link to="/index/zhang?zhang=123">Go to index</router-link>
    <router-link to="/hello">Go to hello</router-link>

    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'App.vue'
    }
  }
}
</script>
