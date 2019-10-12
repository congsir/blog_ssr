import Vue from 'vue'
import http from '@/utils/http'
import fn from '@/utils/fn'

// 挂载全局
Vue.prototype.$http = http // ajax请求方法
Vue.prototype.$fn = fn     // 工具方法