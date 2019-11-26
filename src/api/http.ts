import axios from './axios'

export const post = (url: string, data: object) => axios.post(url, data)

export const get = (url: string, data: object) => axios.get(url, { params: { r: Math.random(), ...data } })

export const put = (url: string, data: object) => axios.put(url, data)

export const del = (url: string, data: object) => axios.delete(url, { params: data })

export const patch = (url: string, data: object) => axios.patch(url, data)