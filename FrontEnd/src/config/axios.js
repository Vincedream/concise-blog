import axios from 'axios'
import { notification } from 'antd';

const openNotificationWithIcon = (type, text) => {
  notification[type]({
    message: '请求错误',
    description: text,
  });
};

const instance = axios.create({
  timeout: 5000,
  // baseURL: 'http://localhost:3067/user'
  baseURL: 'http://39.108.14.16:3067/user'
})
instance.interceptors.request.use(
  req => {
    return req
  },
  err => {
    openNotificationWithIcon('error','发起请求出错，请稍后再试！')
    throw new Error('发起请求出错')
  }
)

instance.interceptors.response.use(
  res => {
    return res
  },
  err => {
    // 本地环境错误
    if (err.message === "Network Error") {
      openNotificationWithIcon('error','网络环境太差，请稍后再试！')
      throw new Error( '网络环境太差，请稍后再试！')
    } else if (err.message === "timeout of 5000ms exceeded") {
      console.log('666')
      openNotificationWithIcon('error','请求超时，请稍后再试！')
      throw new Error( '请求超时，请稍后再试！')
    } else {
      throw err   // 非本地环境错误
    }
  }
)

export default instance