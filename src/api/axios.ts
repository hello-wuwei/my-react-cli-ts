import axios from 'axios'
import { message } from 'antd'
import { baseUrl } from './config'

axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {

    return config
  },
  error => {
    message.error('请求错误')
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // 普通数据返回通道
      return response.data
    }
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default axios