import axios from 'axios'

import { getCookie } from "../config/token"
// import history from "../config/history"

const instance = axios.create({
  timeout: 10000,
  baseURL: 'http://39.108.14.16:3067'
  // baseURL: 'http://localhost:3067'
})
instance.interceptors.request.use(
  req => {
    // const token = getCookie('token')
    // // 公共请求API,请求头不带有Authorization
    // const publicUrl = ["/signup", "/signin", "/email/validate", "/user/reset", "/temp/all" ]
    // const url = req.url
    // // 其他需要Authorization的请求
    // if (publicUrl.indexOf(url) === -1) {
    //   req.headers.Authorization = token
    //   if (!token){
    //     // history.push('/login') // 当cookie中存储的token过期后自动跳转到登录页
    //   }
    // }
    return req
  },
  err => {
    throw new Error('发起请求出错')
  }
)

instance.interceptors.response.use(
  res => {
    return res
  },
  err => {
    console.log(err)
    // 本地环境错误
    if (err.message === "Network Error") {
      throw new Error( '网络环境太差，请稍后再试！')
    } else if (err.message === "timeout of 5000ms exceeded") {
      throw new Error( '请求超时，请稍后再试！')
    } else {
      throw err   // 非本地环境错误
    }
  }
)

export default instance