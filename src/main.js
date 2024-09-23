import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'
import App from './App.vue'
import router from './router/index'

const pinia = createPinia()

createApp(App)
    .use(ElementPlus)
    .use(router) // 路由
    .use(pinia) // 状态管理
    .mount('#app')
