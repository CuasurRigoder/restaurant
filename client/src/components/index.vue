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

<script>
export default {
  data () {
    return {
      msg: 'index.vue'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(true)
  },
  // 组建创建完成之后执行
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  // 监听路由变化
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      setTimeout(() => {
        this.msg = 'index.vue fetchData()已经被执行过'
      }, 1000)
    }
  }
}
</script>

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
