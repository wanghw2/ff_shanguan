import axios from 'axios'
import {domainUrl} from '@/config/config.js'
axios.defaults.withCredentials = true

// import qs from 'query-string'
export default function (opts) {
  let Token = JSON.parse(window.sessionStorage.getItem('token'))
  const settings = {
    baseURL: domainUrl,
    method: 'post',
    headers: {
      'token': Token ? Token.sessionId : ''
    },
    responseType: 'arraybuffer',
    url: '',
    params: {},
    data: {},
    done () {}
  }
  opts = Object.assign({}, settings, opts)
  return axios(opts).then(response => {
    opts.done(response.data)
  }).catch((err) => {
    console.log(err)
  })
}
