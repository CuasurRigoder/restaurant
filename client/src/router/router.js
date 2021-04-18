import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/view/Hello.vue'
import Index from '@/components/view/index.vue'

Vue.use(Router)

// 错误模板（配合）
const error = {
  template: '<div>404</div>'
}

// 在渲染该组件的对应路由被 confirm 前调用
// 不！能！获取组件实例 `this`
// 因为当钩子执行前，组件实例还没被创建
// Index.beforeRouteEnter = (to, from, next) => {
//   next(true)
// }

// 懒加载的实现
const FooIndex = r => require.ensure([], () => r(Index), 'group-foo')

export default new Router({
  mode: 'history',
  routes: [
    // 错误路径的场合返回404
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
      component: FooIndex,
      // 路由独享钩子
      beforeEnter: (to, from, next) => {
        next(true)
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
      // 返回按钮的场合，定位到离开的位置
      return savedPosition
    } else {
      return { x: 0, y: 0 }
      // 如果你要模拟『滚动到锚点』的行为：
      // selector: to.hash
    }
  },
  // 全局路由钩子（之前执行）疑似未生效
  beforeEach: (to, from, next) => {
    // next(false)
  },
  // 全局钩子（之后执行）疑似未生效
  afterEach: () => {
  }
})
