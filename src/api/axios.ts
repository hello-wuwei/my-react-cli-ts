import axios from 'axios'
import { message } from 'antd'

const defaultBaseURL = '/'
axios.defaults.baseURL = defaultBaseURL
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
    let errorData = (error && error.response && error.response.data) || { message: '网络错误' }
    message.error(errorData.message)
    return Promise.reject(errorData)
  }
)

export default axios