
let conponentArr = [
  {
    path: '/SelectPage',
    component: () => import('@/views/componentC/select/SelectPage.vue'),
    meta: { title: '下拉菜单' }
  },
  {
    path: '/formLink',
    component: () => import('@/views/componentC/formLink/FormLink.vue'),
    meta: { title: '表单联动' }
  },
  {
    // 富文本编辑器组件
    path: '/vueEditor',
    component: () => import('@/views/componentC/vueEditor/VueEditor.vue'),
    meta: { title: '富文本编辑器' }
  },
  {
    // 无缝滚动插件
    path: '/vueScroll',
    component: () => import('@/views/componentC/vueScroll/VueScroll.vue'),
    meta: { title: '无缝滚动插件' }
  },
]
export default conponentArr;
