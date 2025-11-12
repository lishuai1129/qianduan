// 创建一个路由器，并暴露出去
//引入
import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

// 引入一个个可能呈现的组件

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'

//第二部 创建
const router = createRouter({
  history: createWebHistory(), // 路由器工作模式
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router