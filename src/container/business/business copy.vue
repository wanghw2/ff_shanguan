<template>
  <div class="app-container">
    <div class="topBox"
         ref="topBox">
      <div class="header">
        <h1 class="logo"><img src="/static/imgs/logo.png"
               alt=""></h1>
        <h2 class="title"><i class="CochinItalic">{{roleDesc}}</i></h2>
        <div class="header-right">
          <div class="short-btn">
            <span class="iconfont icon-liuyan"></span>
            <span class="iconfont icon-sz theme"
                  @mouseover="changetheme=!changetheme"
                  @mouseout="changetheme=!changetheme">
              <ul class="theme-toggle"
                  v-show="changetheme">
                <li @click="toggleTheme('/static/imgs/head-bg1.png', '/static/imgs/foot-bg1.png')">赤焰红</li>
                <li @click="toggleTheme('/static/imgs/head-bg2.png', '/static/imgs/foot-bg2.png')">流沙金</li>
                <li @click="toggleTheme('/static/imgs/head-bg3.png', '/static/imgs/foot-bg3.png')">冰川蓝</li>
                <li @click="toggleTheme('/static/imgs/head-bg4.png', '/static/imgs/foot-bg4.png')">动感红</li>
                <li @click="toggleTheme('/static/imgs/head-bg5.png', '/static/imgs/foot-bg5.png')">罗兰紫</li>
                <li @click="toggleTheme('/static/imgs/head-bg6.png', '/static/imgs/foot-bg6.png')">布旗粉</li>
                <li @click="toggleTheme('/static/imgs/head-bg7.png', '/static/imgs/foot-bg7.png')">草木绿</li>
                <li @click="toggleTheme('/static/imgs/head-bg.png', '/static/imgs/foot-bg.png')">星空蓝</li>
              </ul>
            </span>
            <span class="icon-toggle iconfont icon-qh"
                  @mouseover="toggleRole"
                  @mouseout="toggleRole">
              <!-- 角色列表 -->
              <ul class="change-role"
                  v-show="changeRole">
                <li v-for="item in roleLists"
                    :key="item.id"
                    @click="getRoleInfo(item)">
                  <router-link :to="item.url">{{item.showName}}</router-link>
                </li>
              </ul>
            </span>
          </div>
          <div class="photo"
               @mouseover="optsShow=!optsShow"
               @mouseout="optsShow=!optsShow">
            <img v-if="this.$store.state.token && this.$store.state.token.icon"
                 id="viewItem"
                 alt />
            <img v-else
                 src="/static/imgs/getIcon.png"
                 alt />
            <span class="userName">{{userNameStr}}</span>
            <span class="arrowDown"><i class="iconfont icon-xl"></i></span>
            <div class="opts"
                 v-show="optsShow">
              <ul>
                <li>
                  <router-link to="/modifyPwd">修改密码</router-link>
                </li>
                <li>
                  <router-link to="/changePhoto">修改头像</router-link>
                </li>
                <li @click="logout">
                  <router-link to="/home">注销</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="menubar"
           ref="menubar">
        <keep-alive>
          <menu-bar ref="menubar"
                    :role-name="roleName"
                    :role-id="roleId"></menu-bar>
        </keep-alive>
      </div>
    </div>
    <div class="container"
         ref="main">
      <div class="content clearfix">
        <router-view />
      </div>
    </div>
    <div class="footer-box"
         ref="footer">
      <h2><img src="/static/imgs/footerimg.png"
             alt=""></h2>
    </div>
  </div>
</template>
<script>
import MenuBar from '@/components/menubar/menubar'
import { domainUrl } from '@/config/config.js'
const $ = window.$
export default {
  data () {
    return {
      changeRole: false, // 角色切换
      changetheme: false, // 主题切换
      optsShow: false, // 密码、头像、注销的开关
      userName: '',
      roleName: '',
      getRoleId: '',
      userPhoto: '',
      roleLists: [], // 获取角色列表
      roleId: -1,
      userRole: '',
      userNameStr: '', // 用户名的显示字段，显示后两位
      roleDesc: 'Thinking makes difference'
    }
  },
  provide () {
    return {
      getAvatar: this.getAvatar
    }
  },
  components: {
    MenuBar
  },
  computed: {
  },
  created () {
    this.getRole()
    this.userNameStr = this.$store.state.token.name.substr(-2)
    this.roleId = this.$store.state.token.deRoleId // 4
    this.roleName = this.$store.state.token.deRoleName || ''
  },
  mounted () {
    this.calcMainHeight() // 计算页面的最低高度
    window.addEventListener('resize', () => {
      window.clearTimeout(this.timer)
      this.timer = window.setTimeout(() => {
        this.calcMainHeight()
      }, 100)
    })
    this.getAvatar()
  },
  methods: {
    getAvatar () {
      let img = document.getElementById('viewItem')
      let url = domainUrl + '/getIcon?time=' + new Date().getTime()
      let request = new XMLHttpRequest()
      let Token = JSON.parse(window.sessionStorage.getItem('token'))
      request.responseType = 'blob'
      request.open('get', url, true)
      request.setRequestHeader('token', Token ? Token.sessionId : '')
      request.onreadystatechange = e => {
        if (
          request.readyState === XMLHttpRequest.DONE &&
          request.status === 200
        ) {
          img.src = URL.createObjectURL(request.response)
          img.onload = () => {
            URL.revokeObjectURL(img.src)
          }
        }
      }
      request.send(null)
    },
    setRoleBoxWidth () { // 角色盒子的宽度
      // console.log($('.change-role').width())
      // console.log(this.roleLists.length)
      if (this.roleLists.length > 54) {
        $('.change-role').css('width', '480px')
        $('.change-role').css('left', '-350px')
      } else if (this.roleLists.length > 36) {
        $('.change-role').css('width', '360px')
        $('.change-role').css('left', '-230px')
      } else if (this.roleLists.length > 18) {
        $('.change-role').css('width', '240px')
        $('.change-role').css('left', '-110px')
      }
    },
    toggleTheme (headerImage, footerImage) { // 切换主题色
      $('.header').css('background', 'url(' + headerImage + ') no-repeat')
      $('.header').css('background-position', 'center')
      $('.header').css('background-size', 'cover')
      $('.footer-box').css('background', 'url(' + footerImage + ') no-repeat')
      $('.footer-box').css('background-position', 'center')
      $('.footer-box').css('background-size', 'cover')
    },
    calcMainHeight () {
      // let clinetWidth = document.body.clientWidth
      // let clinetHeight = document.body.clientHeight
      // let headerHeight = this.$refs.topBox.offsetHeight // 头部高为76px
      // let bottmoHeight = this.$refs.footer-box.offsetHeight
      // let mainMinHeight = screenHeight - 76 
      // let basefont = window.getComputedStyle(document.documentElement)["fontSize"]
      let screenHeight = window.innerHeight
      let mHeight = (76 + 28 + 2) * clinetWidth / 1920
      let mainMinHeight = screenHeight - mHeight 
      $('.container').css('minHeight', mainMinHeight + 'px')
    },
    toggleRole () {
      this.changeRole = !this.changeRole
    },
    getRoleInfo (item) {
      this.roleId = item.id
      this.roleName = item.roleName
      this.roleDesc = item.desc
      this.$store.commit('setToken', { deRoleName: this.roleName, deRoleId: this.roleId })
    },
    getRole () {
      let vm = this
      this.$ajax({
        url: '/getRole',
        method: 'get',
        done (data) {
          vm.roleLists = [].concat(data)
          vm.roleLists.forEach((item) => {
            if (item.id === vm.roleId) {
              vm.roleDesc = item.desc
              // vm.roleName = item.roleName
            }
          })
          vm.setRoleBoxWidth()
        }
      })
    },
    // 注销功能
    logout () {
      this.$store.commit('clearToken')
      this.$store.commit('clearLoginInfo')
      this.$store.commit('clearUserSets')
    }
  }
}
</script>
// <style lang="stylus" rel="stylesheet/stylus" scoped>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// @import url("../../less/business");

menubg-color = #162349
hoverbg-color = #31467C

.app-container
  width 100%
  // height 100%
  padding-top .95rem  //76px
  min-width  9.6rem   //768px // 1240px
  background #fff
  overflow auto

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .topBox
    position fixed
    top 0
    z-index 100
    width 100%
    height .95rem //auto
    // 头部
    .header
      width 100%
      height .6rem /* 48/80 */
      background url('/static/imgs/head-bg.png') no-repeat
      background-position center
      background-size cover
      .logo
        float left
        padding-top .125rem /* 10/80 */
        margin-left .65rem /* 52/80 */
        img
          display block
          height .35rem /* 28/80 */
      .title
        color #fff
        font-family serif
        margin 15px 0 0 20px
        float left
        i
          border-bottom 1px solid #fff
      .header-right
        float right
        padding-right .25rem /* 20/80 */
        .photo
          height .6rem /* 48/80 */
          padding-top .1rem /* 8/80 */
          float left
          position relative
          cursor pointer
          margin-left .125rem /* 10/80 */
          color #ddd
          z-index 99
          &:hover
            color #fff
          img
            display inline-block
            width .4375rem /* 35/80 */
            height .4375rem /* 35/80 */
            float left
            // border 1px solid #0E294A
            // box-shadow: 0 0 8px #ccc
            border-radius 50%
            margin-right 2px
          .userName
            width .325rem /* 26/80 */
            height .4375rem /* 35/80 */
            line-height .4375rem /* 35/80 */
            float left
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
          .arrowDown
            display block
            float left
            margin-left -0.15rem    //12px
            margin-top -0.0375rem   //3px
            .icon-xl
              display block
              width 100%
              font-size .5rem /* 40/80 */
        .opts
          position absolute
          right .025rem /* 2/80 */
          padding-top .0625rem /* 5/80 */
          top .6rem /* 48/80 */
          z-index 99
          li
            text-align center
            overflow hidden
            position relative
            // margin-bottom 1px
            &:first-child
              border-top-left-radius 6px
              border-top-right-radius 6px
            &:last-child
              border-bottom-left-radius 6px
              border-bottom-right-radius 6px
            a
              color #fff
              display block
              font-size .15rem    /* 12/80 */
              height .35rem       /* 28/80 */
              line-height .35rem  /* 28/80 */
              padding 0 .0625rem  /* 5/80 */
              width 1.5rem        /* 120/80 */
              background menubg-color
              &:hover
                background hoverbg-color
                text-decoration none
        .short-btn
          float left
          height .6rem /* 48/80 */
          span
            margin-right .1rem /* 8/80 */
            font-size .325rem /* 26/80 */
            display block
            float left
            width .275rem /* 22/80 */
            padding-top .05rem /* 4/80 */
            line-height .55rem /* 44/80 */
            color #ddd
            &:hover
              cursor pointer
              color #fff
          .icon-ly
            font-size .225rem /* 18/80 */
            padding-top .05rem /* 4/80 */
          .theme
            position relative
          .icon-toggle
            cursor pointer
            position relative
            margin-right 0
          .change-role
            width 1.5rem /* 120/80 */
            height auto
            overflow hidden
            position absolute
            padding-top .0625rem /* 5/80 */
            top .55rem /* 44/80 */
            left -0.5625rem // -45px
            z-index 99
            border-bottom-left-radius 6px
            border-bottom-right-radius 6px
            background menubg-color
            li
              text-align center
              overflow hidden
              float left
              a
                color #fff
                display block
                font-size .15rem /* 12/80 */
                height .35rem /* 28/80 */
                line-height .35rem /* 28/80 */
                padding 0 .0625rem /* 5/80 */
                width 1.5rem /* 120/80 */
                &:hover
                  background hoverbg-color
                  text-decoration none
          .theme-toggle
            width 1.5rem /* 120/80 */
            height auto
            overflow hidden
            position absolute
            padding-top .0625rem /* 5/80 */
            top .6rem /* 48/80 */
            left -0.5625rem // -45px
            z-index 99
            border-bottom-left-radius 6px
            border-bottom-right-radius 6px
            background menubg-color
            li
              width 1.5rem /* 120/80 */
              text-align center
              overflow hidden
              color #fff
              font-size .15rem /* 12/80 */
              height .35rem /* 28/80 */
              line-height .35rem /* 28/80 */
              padding 0 .0625rem /* 5/80 */
              &:hover
                background hoverbg-color
                text-decoration none
    .menubar
      width 100%
      height .35rem /* 28/80 */
  .container
    // width 100%
    // height 100%

    flex: 1;
    overflow auto;
    
    display: flex;
    justify-content: center;
    .content
      // height 100%;
      // width 100%;
      flex: 1;
      display: flex;
      justify-content: center;
  .footer-box
    width 100%
    height .35rem //28px
    background url('/static/imgs/foot-bg.png') no-repeat
    background-position center
    background-size cover
    h2
      height .35rem /* 28/80 */
      line-height .35rem /* 28/80 */
      img
        display inline-block
        height .2rem /* 16/80 */
        margin-top .0875rem /* 7/80 */
        margin-left 1.25rem /* 100/80 */
</style>
