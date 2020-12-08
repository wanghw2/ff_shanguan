<template>
  <div class="upload-box">
    <form class="upload">
      <p class="logTip" :title="showhislog">{{showhislog}}</p>
      <div class="upload-title">
        <div class="download-box">
          <a class="submit" :disabled="disabled" :class="{'disabled': disabled}"  @click.prevent="updata">{{text}}</a>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    onSuccess: {
      type: Function,
      default: function () {}
    },
    text: {
      type: String,
      default: '计算',
      required: false
    },
    logTableName: {
      type: String,
      required: true
    },
    menuId: {
      type: String,
      required: true
    },
    menuName: {
      type: String,
      required: false
    },
    proIndex: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      disabled: false,
      showhislog: ''
    }
  },
  methods: {
    getDate () { // 获取当前时间
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      var second = date.getSeconds()
      var time = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second)
      // console.log(day)
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      return time
    },
    updata () {
      if (this.disabled) {
        return
      }
      this.disabled = true
      this.showhislog = '正在处理中。。。'
      let vm = this
      vm.$ajax({
        url: '/doCalculation251',
        method: 'get',
        params: {
          menuId: vm.menuId,
          menuName: vm.menuName,
          proIndex: vm.proIndex
        },
        done (data) {
          vm.disabled = false
          vm.showhislog = data
          vm.$emit('on-success')
        },
        fail (msg) {
          vm.showhislog = msg
          vm.disabled = false
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.upload-box
  width 100%
  height 38px
  overflow hidden
  .upload
    width 100%
    height auto
    overflow hidden
    .upload-title
      height 38px
      float left
      label
        padding 0 10px
        float left
        height 38px
        line-height 38px
        font-size 14px
      .download-box
        width 60px
        height 32px
        float right
        margin-top 6px
        position relative
        &:hover
          .submit
            background #ff3333
            &.disabled
              background #ccc
              cursor not-allowed
        .submit
          border 0
          width 100%
          height 24px
          line-height 24px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #ff6666
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
    .logTip
      max-width 400px
      height 38px
      line-height 38px
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      color #d4d5d9
      float left
      font-size 12px
      margin 0 10px
</style>
