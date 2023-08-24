import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//测试axios接口函数
import {getCategory} from '@/apis/testapi'
getCategory().then(res=>{
    console.log(res)
})


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
