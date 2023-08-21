import { createRouter, createWebHistory } from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
//按需加载 import方式
const home = () => import('@/views/home.vue')
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },


    ]
})

export default router