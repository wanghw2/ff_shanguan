import Vuex from 'vuex'
import Vue from 'vue'
import store from 'store'
import { Base64 } from 'js-base64'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo: null, // 保存登录时的用户名和密码
    token: null, // 登录后的用户信息
    userSets: null // 用户个人的设置信息保存（如：菜单折叠功能）
  },
  mutations: {
    // 获取本地存储的用户信息，如果没有信息，就设置默认信息，并在页面显示该信息
    updateToken (state) {
      // let token = store.get('token') // localStorage
      let token = JSON.parse(window.sessionStorage.getItem('token')) // sessionStorage
      if (token != null && token.id) {
        // 如果有用户信息就算作登录了，设置状态
        state.token = token
      }
    },
    // 给用户信息设置在本地存储里
    setToken (state, payload) {
      if (payload == null) {
        return
      }
      let newToken = Object.assign({}, state.token, payload, {time: new Date().getTime()})
      window.sessionStorage.setItem('token', JSON.stringify(newToken)) // sessionStorage
      state.token = newToken
    },
    // 清空本地存储
    clearToken (state) {
      state.token = null
      // store.remove('token') // localStorage
      window.sessionStorage.removeItem('token') // sessionStorage
    },
    // 设置用户登录时的用户名和密码信息
    setLoginInfo (state, loginInfo) {
      if (loginInfo == null) {
        return
      }
      var loginInfoStr = `${loginInfo.loginName}&${loginInfo.loginPwd}` // Base64.encode(wanghw2)&Base64.encode(123456)
      // Base64加密
      let encodeInfo = Base64.encode(loginInfoStr)
      store.set('loginInfo', encodeInfo)
      state.loginInfo = encodeInfo
    },
    updateLoginInfo (state) {
      let localInfo = store.get('loginInfo')
      if (!localInfo) {
        state.loginInfo = null
        return
      }
      state.loginInfo = localInfo
    },
    clearLoginInfo (state) {
      store.remove('loginInfo')
      state.loginInfo = null
    },
    updateUserSets (state) {
      // 如果本地没有存储信息的话就是null，那么当在this.$store.userSets.isFoldMenu的时候是会报错
      state.userSets = store.get('userSets') || {} // 代码健壮性，顶多访问的时候是undefined而不是报错
    },
    setUserSets (state, userSets) {
      // 首先判断本地的存储状态，如果有就替换当前的状态，如果没有就保存为一个对象
      if (userSets == null) {
        return
      }
      let localUserSets = store.get('userSets')
      localUserSets = Object.assign({}, localUserSets, userSets)
      store.set('userSets', localUserSets) // 修改本地的状态信息
      state.userSets = localUserSets // 更新vuex里存储的信息
    },
    clearUserSets (state) {
      store.remove('userSets')
      state.userSets = null
    }
  },
  getters: {},
  actions: {}
})
