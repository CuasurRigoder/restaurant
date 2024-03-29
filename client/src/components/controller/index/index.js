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
    next()
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
        this.msg = 'fetchData()已经被执行过'
      }, 1000)
    }
  }
}
