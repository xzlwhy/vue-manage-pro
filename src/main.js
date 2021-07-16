import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// js语法转化
import 'babel-polyfill';

// 引入element UI框架
import './plugin/ele.js'

// 引入dataV大屏
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// 引入echarts图表
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入zTree
import 'ztree'
import 'ztree/css/metroStyle/metroStyle.css'
import 'ztree/css/zTreeStyle/zTreeStyle.css'

// 引入国际化
import VueI18n from 'vue-i18n';
import {	messages } from './components/commom/home/i18n.js';
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'zh',
	messages
});

import Loading from '@/utils/loading' // loading加载效果
Vue.use(Loading)

//全局过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//全局自定义指令
import * as directives from './directives'
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})



Vue.config.productionTip = false

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | vue-manage-system`;
	const role = localStorage.getItem('ms_username');
	if (!role && to.path !== '/login') {
		next('/login');
	} else if (to.meta.permission) {
		// 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
		role === 'admin' ? next() : next('/403');
	} else {
		// 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
		if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
			Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
				confirmButtonText: '确定'
			});
		} else {
			next();
		}
	}
});

new Vue({
	router,
	i18n,
	store,
	render: h => h(App)
}).$mount('#app')
