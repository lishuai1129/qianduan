// 引入createApp用于创建应用
import { createApp } from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router/index'

const app = createApp(App)

//s挂载路由器
app.use(router)

// 挂载应用
app.mount('#app')


// createApp(App).mount('#app')