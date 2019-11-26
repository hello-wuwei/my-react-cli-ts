import { get, post, put, del } from '../http'

export const standardList = (data: object) => get('/care/tpl', data) // 获取照护标准列表