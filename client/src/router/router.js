import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Index from '@/components/index.vue'

Vue.use(Router)

// 错误模板（配合）
const error = {
  template: '<div>404</div>'
}

// 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象
Index.watch = {
  '$route' (to, from) {
  }
}

// 在渲染该组件的对应路由被 confirm 前调用
// 不！能！获取组件实例 `this`
// 因为当钩子执行前，组件实例还没被创建
Index.beforeRouteEnter = (to, from, next) => {
  next()
}

// 在当前路由改变，但是该组件被复用时调用
// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// 可以访问组件实例 `this`
Index.beforeRouteUpdate = (to, from, next) => {
  next()
}

// 导航离开该组件的对应路由时调用
// 可以访问组件实例 `this`
Index.beforeRouteLeave = (to, from, next) => {
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component: error },
    {
      // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      path: '/index/:id',
      // 别名
      alias: '/alias/:id',
      // 重定向
      // redirect: '/hello',
      // redirect: { name: 'hello' },
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      // redirect: to => {
      // }
      name: 'index',
      component: Index,
      // 路由独享钩子
      beforeEnter: (to, from, next) => {
        next()
      },
      children: [
        {
          // 当 /index/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'hello',
          components: {
            default: Hello,
            a: Index
          }
        }
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ],
  // history 模式下才有效
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 100 }
      // 如果你要模拟『滚动到锚点』的行为：
      // selector: to.hash
    }
  },
  // 全局路由钩子（之前执行）疑似未生效
  beforeEach: (to, from, next) => {
    next(false)
  },
  // 全局钩子（之后执行）疑似未生效
  afterEach: () => {
  }
})
