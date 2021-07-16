import Vue from 'vue'
import { debounce } from '@/utils'

Vue.directive('permission', {
  inserted(el, binding, vnode) {
    let btnPermission = vnode.context.$route.meta.btnPermission;
    // console.log(btnPermission, el.parentNode);
    !btnPermission.includes(binding.value) && el.parentNode.removeChild(el);
  }
});

Vue.directive('debounce', {
  inserted(el, binding) {
    if (!binding.value.handler || typeof binding.value.handler !== 'function') {
      return
    }
    const handler = binding.value.handler
    const wait = binding.value.await || 1000
    const immediate = !!binding.value.immediate
    const event = binding.value.event || 'input'
    el.addEventListener(event, debounce(handler, wait, immediate))
  }
})

Vue.directive('longpress', {
  bind: function (el, binding, vNode) {
    // 确保提供的表达式是函数
    if (typeof binding.value.fn !== 'function') {
      // 获取组件名称
      const compName = vNode.context.name
      // 将警告传递给控制台
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `
      if (compName) { warn += `Found in component '${compName}' ` }
      console.warn(warn)
    }
    // 定义变量
    let pressTimer = null
    // 定义函数处理程序
    // 创建计时器（ 1秒后执行函数 ）
    let start = (e) => {
      if (e.type === 'click' || e.type === 'mousedown') {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler()
        }, 500)
      }
    }
    // 取消计时器
    let cancel = (e) => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法
      binding.value.fn(...binding.value.args)
    }
    // 添加事件监听器
    el.addEventListener("mousedown", start)
    el.addEventListener("touchstart", start)
    // 取消计时器
    el.addEventListener("click", cancel)
    el.addEventListener("mouseout", cancel)
    el.addEventListener("touchend", cancel)
    el.addEventListener("touchcancel", cancel)
  }
})
