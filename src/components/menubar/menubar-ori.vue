<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="list-item"
          :class="{current: itemIndex === index}"
          @click="addLine(item, index)"
          v-for="(item, index) in menuArr"
          :key="index">
        <a class="list-item-a"
           href="javascript:;">{{item.menuName}}</a>
        <ul class="sub-menu">
          <li class="sub-item"
              v-for="(subItem,i) in item.secondMenu"
              :key="i">
            <router-link class="sub-item-a"
                         :to="subItem.url">{{subItem.menuName}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    roleId: {
      type: Number,
      required: true
    },
    roleName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      menuArr: [],
      itemIndex: null
    }
  },
  watch: {
    roleId () {
      this.getMenuList()
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    getMenuList () {
      let vm = this
      this.$ajax({
        method: 'get',
        url: '/getResource?id=' + vm.roleId + '&roleName=' + vm.roleName,
        data: {},
        done (data) {
          vm.menuArr = [].concat(data)
        }
      })
    },
    addLine (item, index) {
      this.itemIndex = index
      // console.log(index)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
menubg-color = #2f2f30
hoverbg-color = #888a92
.menu
  width 100%
  height 0.35rem // 28px
  background #242424
  // background url(/static/imgs/bj0.png) repeat-x
  .menu-list
    width 95%
    height 0.35rem // 28px
    margin 0 auto
    font-size 0.1625rem // 13px
    font-family '微软雅黑'
    .list-item
      display block
      float left
      position relative
      left -4rem
      font-family '微软雅黑' !important
      &.current
        // border-bottom 2px solid #1589c9
        background rgba(0, 0, 0, 0.2)
        .list-item-a
          color #fff
      &:hover
        .sub-menu
          display block
        .list-item-a
          color #fff
      .list-item-a
        display block
        overflow hidden
        padding 0 0.175rem // 14px
        height 0.35rem // 28px
        line-height 0.35rem // 28px
        text-decoration none
        letter-spacing 1px
        font-family '微软雅黑'
        color #ccc
      .sub-menu
        position absolute
        left -0.125rem // -10px
        top 0.35rem // 28px
        width 1.6875rem // 1.5625rem // 125px
        height auto
        display none
        z-index 999
        .sub-item
          background menubg-color
          height 0.375rem // 30px
          line-height 0.375rem // 30px
          padding 0 0.125rem // 10px
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          &:first-child
            border-top-left-radius 2px
            border-top-right-radius 2px
          &:last-child
            border-bottom-left-radius 2px
            border-bottom-right-radius 2px
          &:hover
            background hoverbg-color
            .sub-item-a
              display block
              text-decoration none
              color #fff
          .sub-item-a
            font-size 0.15rem // 12px
            text-align center
            color #fff
            display block
</style>
