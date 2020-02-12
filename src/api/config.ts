
const urls:any = {
  'development': '/api/',    // http://mall-dev.cnzhiyuanhui.com(在代理处配置)
  'dev': 'http://10.255.50.48:20081',
  'test': 'http://10.255.50.49:10081',
  'production': ''   // 待配置
}

const baseUrl:string = urls[process.env.APP_ENV!]

export { baseUrl }