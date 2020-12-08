<template>
  <div class="login">
    <div class="item">
      <div class="user-info">
        <form @submit.prevent="loginHandler">
          <div class="user-box">
            <input class="user" type="text" placeholder="请输入账号" v-model="loginName">
            <div class="errinfo">{{loginNameMsg}}</div>
            <div class="icon-user"><img src="/static/imgs/user.png" alt=""></div>
            <div class="icon-line"><img src="/static/imgs/line.png" alt=""></div>
          </div>
          <div class="pwd-box">
            <input class="pwd" type="password" placeholder="请输入密码" v-model="password">
            <div class="errinfo">{{passwordMsg}}</div>
            <div class="icon-line"><img src="/static/imgs/line.png" alt=""></div>
            <div class="icon-lock"><img src="/static/imgs/lock.png" alt=""></div>
          </div>
          <div class="errMsg">{{errMsg}}</div>
          <input class="btn" id="loginBtn" type="submit" value="登   录">
          <!-- <div class="forgetpwd">
            <a href="javascript:;"  @click="findPassword=true">忘记密码?</a>
          </div> -->
        </form>
      </div>
    </div>
    <!-- 找回密码 -->
    <div class="findPwd" v-show="findPassword">
      <div class="findPwd-box">
        <form action="">
          <label for="">用户名：<input type="text" v-model="findUser" placeholder="请输入用户名"></label>
          <div class="erruser">您输入的用户名不存在</div>
          <div class="btn">
            <input type="button" value="确定">
            <input type="button" @click="findPassword=false" value="取消">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
const $ = window.$
export default {
  data () {
    return {
      findPassword: false,
      findUser: '',
      userName: '',
      loginName: '',
      loginUrl: '', // 登录成功后要跳转的首页链接
      password: '',
      loginNameMsg: '',
      passwordMsg: '',
      errMsg: '',
      erruser: ''
    }
  },
  created () {
    this.scrollBottom() // 默认页面滚到底部
    this.$store.commit('updateLoginInfo') // 更新用户上次输入的登录信息
    // 获取用户上次输入的登录信息,加密过的
    let loginInfo = this.$store.state.loginInfo
    if (loginInfo) {
      let decodeInfo = this.$base64.decode(loginInfo).split('&') // [wanghw2, lenovo]
      this.loginName = this.$base64.decode(decodeInfo[0])
      this.password = this.$base64.decode(decodeInfo[1])
    }
  },
  methods: {
    loginHandler () {
      // 首先判断用户和密码是否为空
      // 如果为空就直接显示信息，不去后台请求数据
      if (this.validate()) {
        this.$store.commit('setLoginInfo', {loginName: this.$base64.encode(this.loginName), loginPwd: this.$base64.encode(this.password)})
        this.login()
      }
    },
    validate () {
      this.loginNameMsg = ''
      this.passwordMsg = ''
      this.errMsg = ''
      let rules = {
        loginName: {
          patterns: [{
            pattern: /^\w{4,18}$/, // 4到18位
            msg: '用户名的格式不正确'
          }],
          required: '请输入用户名'
        },
        password: {
          patterns: [{
            pattern: /^\w|.{6,18}$/,
            msg: '密码的格式不正确'
          }],
          required: '请输入密码'
        }
      }
      return this.$validate(rules)
    },
    login () {
      let vm = this
      this.$ajax({
        url: '/login',
        data: {
          loginName: this.loginName,
          password: this.$md5(this.password)
        },
        done (data) {
          vm.loginUrl = data.url
          let {password, ...result} = data // 去除password后的字段存储起来
          vm.$store.commit('setToken', Object.assign(result, {icon: domainUrl + '/getIcon?time=' + new Date().getTime()}))
          vm.$router.push(vm.loginUrl) // 跳到默认的业务线首页
        },
        fail (msg) {
          vm.errMsg = msg
        }
      })
    },
    scrollBottom () {
      let screenHeight = window.innerHeight
      let domHeight = $(document).height()
      if (domHeight > screenHeight) {
        $(window).scrollTop(domHeight)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
// errMsg-color = #a9b4bf
.login
  width 100%
  height 100%
  min-width 500px
  min-height 630px
  background url(/static/imgs/loginbg.jpg) no-repeat
  background-size cover
  background-position center
  position absolute
.item
  width 100%
  overflow hidden
  position absolute
  bottom 35px
  .user-info
    width 250px
    height auto
    margin 0 auto
    .user-box,.pwd-box
      position relative
      width 100%
      .errinfo
        position absolute
        left 260px
        top 0
        width 200px
        height 30px
        line-height 30px
        color #a9b4bf
      .icon-user
        position absolute
        left 10px
        top 8px
        img
          display block
          width 15px
          height 15px
      .icon-line
        position absolute
        left 35px
        top 10px
        img
          display block
          width 12px
          height 12px
      .icon-lock
        position absolute
        left 10px
        top 8px
        img
          display block
          width 15px
          height 15px
      .icon-line
        position absolute
        left 35px
        top 10px
    .user, .pwd
      width 100%
      height 30px
      font-size 12px
      color #fff
      border-radius 15px
      background transparent
      border 1px solid #08a6ef
      margin-bottom 18px
      padding 3px 60px
    .pwd
      margin-bottom 0
    .errMsg
      height 25px
      color #a9b4bf
      line-height 25px
      text-align center
    .btn
      width 100%
      height 30px
      color #fff
      cursor pointer
      font-size 14px
      font-family "微软雅黑"
      border-radius 15px
      background url(/static/imgs/logo-btn-bg.png) repeat-x
      &:hover
        background #0D90CE
    // .forgetpwd
    //   width 100%
    //   height 25px
    //   text-align center
    //   padding-top 5px
    //   a
    //     width 100%
    //     height 25px
    //     line-height 25px
    //     letter-spacing 2px
    //     color #fff
    //     display block
    //     &:hover
    //       color #0D90CE
.findPwd
  left 0
  top 0
  bottom 0
  right 0
  position absolute
  margin 0 auto
  background rgba(0,0,0,.6)
  z-index 99
  .findPwd-box
    border 1px solid #ccc
    width 400px
    height 300px
    margin 100px auto
    background #eee
    form
      width 100%
      height 100%
      padding-top 100px
      label
        width 80px
        height 35px
        line-height 35px
        font-size 14px
        padding-left 50px
        input
          border 1px solid #ccc
          width 200px
          height 35px
          line-height 35px
          padding 5px
          border-radius 6px
      .erruser
        padding-left 110px
        color errMsg-color
        height 25px
        line-height 25px
      .btn
        width 100%
        height 30px
        margin 20px auto
        text-align center
        input
          width 100px
          height 30px
          margin-right 15px
          background #00adff
          border-radius 6px
          color #fff
          cursor pointer
          &:last-child
            margin 0
          &:hover
            background #0D90CE
</style>
