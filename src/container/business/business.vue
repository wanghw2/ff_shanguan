<template>
  <div class="app-container">
    <div class="topBox"
         ref="topBox">
      <div class="header">
        <div class="header-left">
          <div class="logo">
            <img class="logo-img"
                 src="/static/imgs/logo.png"
                 alt="">
          </div>
          <!-- <h2 class="title"><i class="CochinItalic">{{roleDesc}}</i></h2> -->
          <div class="CochinItalic">{{roleDesc}}</div>
        </div>
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
      <div class="topBox-bg"></div>
      <div class="content clearfix">
        <router-view />
      </div>
    </div>
    <div class="footer-box"
         ref="footer">
      <div class="footer-text">
        <img class="footer-text-img"
             src="/static/imgs/footerimg.png"
             alt="">
      </div>
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
    toggleTheme (headerImage, footerImage) { // 切换主题色
      $('.header').css('background', 'url(' + headerImage + ') no-repeat')
      $('.header').css('background-position', 'center')
      $('.header').css('background-size', 'cover')
      $('.footer-box').css('background', 'url(' + footerImage + ') no-repeat')
      $('.footer-box').css('background-position', 'center')
      $('.footer-box').css('background-size', 'cover')
    },
    calcMainHeight () {
      let screenHeight = window.innerHeight
      let clinetWidth = document.body.clientWidth
      let mHeight = 28 * clinetWidth / 1920
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
              vm.roleName = item.roleName
            }
          })
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


<style lang="less" scoped>
// @import url("../../less/business.less");
@menubg-color: #162349;
@hoverbg-color: #31467c;

.app-container {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
  margin: 0;
  padding: 0;
  // padding-top: 1.2rem; // .95rem;
  // min-width: 9.6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //头部
  .topBox {
    flex: 1;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 1.2rem; //.95rem;

    .header {
      width: 100%;
      height: 0.8rem;
      background: url("../../../static/imgs/head-bg.png") no-repeat;
      background-position: center;
      background-size: cover;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .header-left {
        margin-left: 0.65rem;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .logo {
          padding-top: 0.175rem; //.125rem;

          .logo-img {
            display: block;
            height: 0.5rem; //.35rem;
          }
        }

        .CochinItalic {
          color: #fff;
          font-family: serif;
          line-height: 0.8rem;
          font-size: 0.285rem;
          margin: 0.05rem 0 0 0.25rem;
        }
      }

      .header-right {
        margin-right: 0.25rem;
        width: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .photo {
          height: 0.4375rem;
          position: relative;
          cursor: pointer;
          color: #ddd;
          z-index: 99;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          &:hover {
            color: #fff;
          }

          img {
            display: flex;
            width: 0.375rem;
            height: 0.375rem;
            border-radius: 50%;
            margin-right: 0.1rem;
            margin-top: 0.05rem;
          }

          .userName {
            font-size: 0.175rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 0.05rem;
          }

          .arrowDown {
            margin-left: -0.1rem; //12px
            margin-top: -0.0375rem; //3px
          }

          .icon-xl {
            display: block;
            width: 100%;
            font-size: 0.5rem;
          }
        }

        .opts {
          position: absolute;
          z-index: 99;
          right: 0.075rem;
          padding-top: 0.0625rem;
          top: 0.45rem;
          width: 1.5rem;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          li {
            text-align: center;
            overflow: hidden;
            color: #fff;

            &:first-child {
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
            }

            &:last-child {
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
            }

            a {
              color: #fff;
              display: block;
              font-size: 0.15rem;
              height: 0.35rem;
              line-height: 0.35rem;
              padding: 0 0.0625rem;
              width: 1.5rem;
              background: @menubg-color;

              &:hover {
                color: #fff;
                background: @hoverbg-color;
                text-decoration: none;
              }
            }
          }
        }

        .short-btn {
          padding-right: 0.1rem;

          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          .iconfont {
            display: block;
            height: 0.5rem;
            width: 0.5rem;
            font-size: 0.5rem; // .375rem;
            line-height: 0.5rem;
            color: #ddd;
          }

          &:hover {
            cursor: pointer;
            color: #fff;
          }

          .icon-ly {
            font-size: 0.225rem;
            padding-top: 0.05rem;
          }

          .theme {
            position: relative;
          }

          .icon-toggle {
            cursor: pointer;
            position: relative;
          }

          .change-role {
            width: 4rem;
            height: auto;
            overflow: auto;
            position: absolute;
            padding-top: 0.0625rem;
            top: 0.4rem;
            left: -2rem;
            z-index: 99;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            background: @menubg-color;

            li {
              text-align: center;
              overflow: hidden;
              float: left;

              a {
                color: #fff;
                display: block;
                font-size: 0.15rem;
                height: 0.35rem;
                line-height: 0.35rem;
                padding: 0 0.0625rem;
                text-align: center;
                width: 2rem;

                &:hover {
                  background: @hoverbg-color;
                  text-decoration: none;
                }
              }
            }
          }

          .theme-toggle {
            height: auto;
            overflow: hidden;
            position: absolute;
            left: -0.5625rem;
            z-index: 99;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            background: @menubg-color;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            li {
              width: 1.5rem;
              text-align: center;
              overflow: hidden;
              color: #fff;
              font-size: 0.15rem;
              height: 0.35rem;
              line-height: 0.35rem;
              padding: 0 0.0625rem;

              &:hover {
                background: @hoverbg-color;
                text-decoration: none;
              }
            }
          }
        }
      }
    }

    .menubar {
      width: 100%;
    }
  }

  //主体
  .container {
    // width: 100%;
    // height: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .topBox-bg {
      width: 100%;
      height: 1.2rem;
    }

    .content {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      overflow: auto;
      font-size: 0.25rem;
    }
  }

  //底部
  .footer-box {
    // width: 100%;
    height: 0.35rem;
    background: url("../../../static/imgs/foot-bg.png") no-repeat;
    background-position: center;
    background-size: cover;

    .footer-text {
      height: 0.35rem;
      line-height: 0.35rem;

      .footer-text-img {
        display: block;
        height: 0.325rem;
        padding-top: 0.0875rem;
        // margin-top: .0875rem;
        margin-left: 1.25rem;
      }
    }
  }
}
</style>
