// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
// import router from './router'
import router from './router/indexDevelop.js'
import store from './vuex'
import VCharts from 'v-charts'
import Liquidfill from 'echarts-liquidfill'
import 'v-charts/lib/style.css' // 使用loading和dataEmpty属性
import '../static/css/common.css'
import '../static/css/iconfont.css'
import plugins from '@/plugins'

import echarts from 'echarts'
import 'echarts/map/js/china'
import 'echarts/extension/dataTool'

// import 'lib-flexible'
import 'lib-flexible/flexible.js'
// import 'bootstrap'
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.prototype.$echarts = echarts
Vue.use(plugins)
Vue.use(ElementUi)
Vue.use(VCharts)
Vue.use(Liquidfill)
Vue.config.productionTip = false
Vue.config.debug = true

router.beforeEach((to, from, next) => {
  store.commit('updateToken')
  if (/^\/(home)?$/.test(to.fullPath)) {
            // 访问的是登录页面
    next()
  } else {
            // 访问的不是登录页面
    if (store.state.token && store.state.token.id) {
                // 用户已否登录
      next()
    } else {
                // 如果没有登录，跳转到登录页面
      next('/home')
    }
  }
})
    /* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  created () {
    this.$store.commit('updateUserSets')
  },
  template: '<App/>',
  components: {
    App
  }
})

window.mainApp = app
