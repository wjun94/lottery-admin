import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import '@/css/common.less'
import 'element-plus/lib/theme-chalk/index.css';
import api from "@/api/api";
import utils from "@/utils";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: any;
        $utils: any;
    }
}


const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app');

// 全局属性
app.config.globalProperties.$api = api;
app.config.globalProperties.$utils = utils;
