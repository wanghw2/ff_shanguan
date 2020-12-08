<template>
  <div class="login">
    <div class="item">
      <div class="user-info">
        <form @submit.prevent="loginHandler">
          <div class="user-box">
            <input class="user"
                   type="text"
                   placeholder="请输入账号"
                   v-model="loginName">
            <div class="errinfo">{{loginNameMsg}}</div>
            <div class="icon-user"><img src="/static/imgs/user.png"
                   alt=""></div>
            <div class="icon-line"><img src="/static/imgs/line.png"
                   alt=""></div>
          </div>
          <div class="pwd-box">
            <input class="pwd"
                   type="password"
                   placeholder="请输入密码"
                   v-model="password">
            <div class="errinfo">{{passwordMsg}}</div>
            <div class="icon-line"><img src="/static/imgs/line.png"
                   alt=""></div>
            <div class="icon-lock"><img src="/static/imgs/lock.png"
                   alt=""></div>
          </div>
          <div class="errMsg">{{errMsg}}</div>
          <input class="btn"
                 id="loginBtn"
                 type="submit"
                 value="登   录">
          <!-- <div class="forgetpwd">
            <a href="javascript:;"  @click="findPassword=true">忘记密码?</a>
          </div> -->
        </form>
      </div>
    </div>
    <!-- 找回密码 -->
    <div class="findPwd"
         v-show="findPassword">
      <div class="findPwd-box">
        <form action="">
          <label for="">用户名：<input type="text"
                   v-model="findUser"
                   placeholder="请输入用户名"></label>
          <div class="erruser">您输入的用户名不存在</div>
          <div class="btn">
            <input type="button"
                   value="确定">
            <input type="button"
                   @click="findPassword=false"
                   value="取消">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { domainUrl } from '@/config/config.js'
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
        this.$store.commit('setLoginInfo', { loginName: this.$base64.encode(this.loginName), loginPwd: this.$base64.encode(this.password) })
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
          let { password, ...result } = data // 去除password后的字段存储起来
          vm.$store.commit('setToken', Object.assign(result, { icon: domainUrl + '/getIcon?time=' + new Date().getTime() }))
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
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  min-width: 6.25rem;
  min-height: 7.875rem;
  background: url("/static/imgs/loginbg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  .item {
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 0.4rem; //0.2875rem;
    .user-info {
      width: 4.5rem; //3.125
      height: auto;
      margin: 0 auto;
      .user-box,
      .pwd-box {
        position: relative;
        width: 100%;
        .errinfo {
          position: absolute;
          left: 3.25rem;
          top: 0;
          width: 2.5rem;
          height: 0.375rem;
          line-height: 0.375rem;
          color: #a9b4bf;
        }
        .icon-user {
          position: absolute;
          left: 0.15rem;
          top: 0.1rem;
          img {
            display: block;
            width: 0.3rem; //0.1875rem;
            height: 0.3rem; //0.1875rem;
          }
        }
        .icon-line {
          position: absolute;
          left: 0.4375rem;
          top: 0.125rem;
          img {
            display: block;
            width: 0.3rem; //0.15rem;
            height: 0.3rem; // 0.15rem;
          }
        }
        .icon-lock {
          position: absolute;
          left: 0.15rem;
          top: 0.1rem;
          img {
            display: block;
            width: 0.3rem; //0.1875rem;
            height: 0.3rem; //0.1875rem;
          }
        }
        .icon-line {
          position: absolute;
          left: 0.4375rem;
          top: 0.1rem;
        }
        .user,
        .pwd {
          width: 100%;
          height: 0.5rem;
          font-size: 0.2rem;
          color: #fff;
          border-radius: 0.1875rem;
          background: transparent;
          border: 0.0125rem solid #08a6ef;
          margin-bottom: 0.4rem; //0.225rem;
          padding: 0.0375rem 0.75rem;
        }
        .pwd {
          margin-bottom: 0;
        }
      }
      .errMsg {
        height: 0.4rem; //0.3125rem;
        color: #a9b4bf;
        line-height: 0.3125rem;
        text-align: center;
      }
      .btn {
        width: 100%;
        height: 0.6rem;
        color: #fff;
        cursor: pointer;
        font-size: 0.25rem; //0.175rem;
        font-family: "微软雅黑";
        border-radius: 0.1875rem;
        background: url("/static/imgs/logo-btn-bg.png") repeat-x;
        &:hover {
          background: #0d90ce;
          .forgetpwd {
            width: 100%;
            height: 0.3125rem;
            text-align: center;
            padding-top: 0.0625rem;
            a {
              width: 100%;
              height: 0.3125rem;
              line-height: 0.3125rem;
              letter-spacing: 0.025rem;
              color: #fff;
              display: block;
              &:hover {
                color: #0d90ce;
              }
            }
          }
        }
      }
    }
  }
  .findPwd {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    .findPwd-box {
      border: 0.0125rem solid #ccc;
      width: 5rem;
      height: 3.75rem;
      margin: 1.25rem auto;
      background: #eee;
      form {
        width: 100%;
        height: 100%;
        padding-top: 1.25rem;
        label {
          width: 1rem;
          height: 0.4375rem;
          line-height: 0.4375rem;
          font-size: 0.175rem;
          padding-left: 0.625rem;
          input {
            border: 0.0125rem solid #ccc;
            width: 2.5rem;
            height: 0.4375rem;
            line-height: 0.4375rem;
            padding: 0.0625rem;
            border-radius: 0.075rem;
          }
        }
        .erruser {
          padding-left: 1.375rem;
          color: #a9b4bf;
          height: 0.3125rem;
          line-height: 0.3125rem;
          .btn {
            width: 100%;
            height: 0.375rem;
            margin: 0.25rem auto;
            text-align: center;
            input {
              width: 1.25rem;
              height: 0.375rem;
              margin-right: 0.1875rem;
              background: #00adff;
              border-radius: 0.075rem;
              color: #fff;
              cursor: pointer;
              &:last-child {
                margin: 0;
              }
              &:hover {
                background: #0d90ce;
              }
            }
          }
        }
      }
    }
  }
}
</style>
