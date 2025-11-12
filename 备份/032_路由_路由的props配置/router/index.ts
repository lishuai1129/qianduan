// 创建一个路由器，并暴露出去
//引入
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 引入一个个可能呈现的组件

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

//第二部 创建
const router = createRouter({
  // 路由器工作模式
  history: createWebHistory(),  // history 模式
  // history: createWebHashHistory(), // hash 模式
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiang',
          path: 'detail',
          component: Detail,
          // 第一种写法 将路由收到的所有params参数作为props传给路由组件
          // props: true
          // 第二种写法
          props(route) {
            return route.query
          }
          // 第三种写法
          /* props:{
           a: 1,
           b: 2
          } */

        }
      ]

    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    }
  ]
})

export default router