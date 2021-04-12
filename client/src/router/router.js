import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Index from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
