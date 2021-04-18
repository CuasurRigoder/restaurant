import Vue from 'vue'
import Router from 'vue-router'
// 路由组建加载
import IndexRouter from './index/indexRouter.js'
import HelloRouter from './hello/helloRouter.js'

Vue.use(Router)

// 错误模板（配合）
const error = {
  template: '<div>404</div>'
}

export default new Router({
  mode: 'history',
  routes: [
    // 错误路径的场合返回404
    { path: '*', component: error },
    // index 模块
    IndexRouter,
    // hello 模块
    HelloRouter
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
