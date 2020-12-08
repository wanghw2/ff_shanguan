import axios from 'axios'
import {domainUrl} from '@/config/config.js'
axios.defaults.withCredentials = true

// import qs from 'query-string'

export default function (opts) {
  let Token = JSON.parse(window.sessionStorage.getItem('token'))
  const SUCCESSCODE = '200' // 成功
  const NOLOGIN = '401' // 未登录
  const ERRCODE = '500' // 失败
  const settings = {
    baseURL: domainUrl,
    method: 'post',
    headers: {
      'token': Token ? Token.sessionId : ''
    },
    url: '',
    params: {},
    data: {},
    done () {},
    fail () {}
  }

  // if (opts.method === 'get') {
  // 加时间戳，解决get请求的缓存问题， 但是如果参数里面有该值，要让用户的设置覆盖这个设置
  // opts.params = Object.assign({}, {time: new Date().getTime()}, opts.params)
  // }
  opts = Object.assign({}, settings, opts)

  return axios(opts).then(response => {
    let result = response.data
    let {data = {}, retCode, message} = result
    // retCode = '401'
    if (retCode === SUCCESSCODE) {
      opts.done(data, result)
    } else if (retCode === ERRCODE) {
      opts.fail(message)
    } else if (retCode === NOLOGIN) {
      this.$store.commit('clearToken')
      this.$router.push('/home')
    }
  }).catch((err) => {
    console.log(err)
  })
}
