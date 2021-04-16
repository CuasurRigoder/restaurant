import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Index from '@/components/index.vue'

Vue.use(Router)

Index.watch = {
  '$route' (to, from) {
    // 监听路由变化，进行操作
  }
}

export default new Router({
  routes: [
    {
      path: '/index/:id',
      name: 'index',
      component: Index
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
