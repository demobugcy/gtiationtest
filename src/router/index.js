import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: () => import('../views/index/index.vue') }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

// 全局前置守卫
router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    return true
})

export default router