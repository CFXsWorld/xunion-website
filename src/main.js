import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Supports weights 100-900
import '@fontsource-variable/outfit';


const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

