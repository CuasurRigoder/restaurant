{
  data: function () {
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
        this.msg = 'fetchData()已经被执行过'
      }, 1000)
    }
  }
}