import Vue from 'vue'
import VueRouter from 'vue-router'

import conponentArr from "./component"
import errorArr from "./error"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import('@/components/commom/home/Home.vue'),
    meta: { title: '自述文件' },
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { title: '系统首页' }
      },
      {
        path: '/table',
        component: () => import('@/views/baseTable/BaseTable.vue'),
        meta: { title: '基础表格' }
      },
      {
        path: '/search',
        component: () => import('@/views/search/Search.vue'),
        meta: { title: '简单查询' }
      },
      // 组件
      ...conponentArr,
      {
        path: '/echarts',
        component: () => import('@/views/echarts/Echarts.vue'),
        meta: { title: 'echarts的使用' }
      },
      {
        path: '/zTree',
        component: () => import('@/views/zTree/ZTree.vue'),
        meta: { title: 'zTree的使用' }
      },
      {
        // 拖拽列表组件
        path: '/dragList',
        component: () => import('@/views/dragList/DragList.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        // 国际化组件
        path: '/i18n',
        component: () => import('@/views/I18n/I18n.vue'),
        meta: { title: '国际化' }
      },
      // 错误页面
      ...errorArr,
      {
        // 支持苦逼开发者
        path: '/authors',
        component: () => import('@/views/authors/Authors.vue'),
        meta: { title: '支持苦逼开发者' }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: { title: '登录' }
  },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  routes
})

// 解决 Vue 重复点击相同路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
