import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/css/common.less'
import 'element-plus/lib/theme-chalk/index.css';
import api from "@/api/api";
import utils from "@/utils";
import '@/global'


window.$api = api;

const app = createApp(App);
app.use(store).use(router).use(ElementPlus, { locale, size: 'small' }).mount('#app');

// 全局属性
app.config.globalProperties.$api = api;
app.config.globalProperties.$utils = utils;
