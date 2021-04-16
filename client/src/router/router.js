import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Index from '@/components/index.vue'

Vue.use(Router)

Index.watch = {
  '$route' (to, from) {
  }
}

export default new Router({
  routes: [
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
  ]
})
