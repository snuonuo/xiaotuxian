// createRouter: 创建router实例对象
// createWebHistory：创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      //在这个页面切换 在下面设置二级路由
      children: [
        {
          path:'', //默认制空
          component: Home
        },
        {
          path:'category', 
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
