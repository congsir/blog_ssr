import axios from 'axios'
import qs from 'qs'
import merge from 'lodash/merge'

const config = {
  serverUrl : "http://47.105.125.0:8000" 
  // serverUrl : "http://127.0.0.1:8000"
}
// import Vue from 'vue'
const http = axios.create({
  timeout: 1000 * 30,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
// http.interceptors.request.use(config => {
//   config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
//   return config
// }, error => {
//   return Promise.reject(error)
// })

/**
 * 响应拦截
 */
// http.interceptors.response.use(response => {
//   if (response.data && response.data.code === 401) { // 401, token失效
//     clearLoginInfo()
//     router.push({ name: 'login' })
//   }
//   return response
// }, error => {
//   return Promise.reject(error)  
// })

http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return config.serverUrl + actionName
}
/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
