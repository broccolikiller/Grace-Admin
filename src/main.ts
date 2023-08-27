import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './styles/normalize.scss'
import './styles/common.scss'
import 'element-plus/dist/index.css'
import router from "@/routers";

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
