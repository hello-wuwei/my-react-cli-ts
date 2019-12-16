// import * as api from 'api'
import { enmu_brands } from '@/enmu'

const gets:{[key: string]: any} = {}

// 楼区列表
gets.enmu_brands = () => enmu_brands.list

type GetsTypes = 'enmu_brands'

export { gets, GetsTypes }