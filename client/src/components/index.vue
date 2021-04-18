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

  // 组件内路由切换监听（切换之前）
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当钩子执行前，组件实例还没被创建
  beforeRouteEnter (to, from, next) {
    next(true)
  },

  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`
  beforeRouteUpdate (to, from, next) {
  },

  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
  beforeRouteLeave (to, from, next) {
    next()
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
