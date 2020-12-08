import ajax from './ajax'
import ajax1 from './ajax1'
import md5 from 'md5'
import validate from './validate'
import { Base64 } from 'js-base64'

// 注册插件，为了方便，统一导出
export default {
  install (Vue, options) {
    Vue.prototype.$ajax = ajax
    Vue.prototype.$ajax1 = ajax1
    Vue.prototype.$md5 = md5
    Vue.prototype.$validate = validate
    Vue.prototype.$base64 = Base64
  }
}

