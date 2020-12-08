<template>
  <div class="upload-box">
    <form class="upload">
      <div class="upload-title">
        <label for="file">{{uploadName}}</label>
        <div class="download-box">
          <input type="file" name="file" class="input" @change="uploadFile" :disabled="disabled"/>
          <span class="submit" :class="{'disabled': disabled}">上传</span>
        </div>
      </div>
     <p class="downBtn" ><a :href="downloadUrl" class="download-btn">模板下载</a></p>
      <div class="info">
        <p class="logTip" :title="showlog">{{showlog}}</p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    uploadName: {
      type: String
    },
    downloadUrl: {
      type: String,
      default: '#'
    },
    sheetName: {
      type: String
    },
    onSuccess: {
      type: Function,
      default: function () {}
    },
    showlog: {
      type: String,
      default: '您尚未上传文件'
    }
  },
  data () {
    return {
      disabled: false
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
      var time = year + '-' + addZero(month) + '-' + ' ' + addZero(day) + ':' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second)
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      return time
    },
    uploadFile (e) {
      if (this.disabled) {
        return
      }
      this.disabled = true
      let file = e.target.files[0]
      e.target.value = ''
      if (!file) {
        this.disabled = false
        return
      }
      let fullNameArr = file.name.split('.')
      let postfix = fullNameArr[fullNameArr.length - 1]
      if (postfix !== 'xlsx' && postfix !== 'xls' && postfix !== 'xlsm' && postfix !== 'xltx' && postfix !== 'xltm' && postfix !== 'xlsb' && postfix !== 'xlam') {
        this.showlog = this.getDate() + '，' + this.$store.state.token.name + '，' + '文件类型错误!'
        this.disabled = false
        return
      }
      let data = new FormData()
      let Token = JSON.parse(window.sessionStorage.getItem('token'))
      data.append('file', file)
      let vm = this
      this.$ajax({
        url: '/uploadExcel',
        headers: {
          'Content-type': 'multipart/form-data',
          'token': Token ? Token.sessionId : ''
        },
        data: data,
        done (data) {
          vm.showlog = data
          vm.disabled = false
          vm.$emit('on-success')
        },
        fail (msg) {
          vm.showlog = msg
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
  height 135px
  padding 10px 5px
  border-radius 6px
  background #fff
  box-sizing border-box
  overflow hidden
  box-shadow 3px 3px 10px rgba(0,0,0,.1)
  .upload
    width 100%
    height auto
    overflow hidden
    .upload-title
      width 100%
      height 26px
      min-width 255px
      label
        padding 0 10px
        float left
        height 26px
        line-height 26px
        font-size 12px
      .download-box
        width 60px
        height 26px
        float right
        position relative
        &:hover
          .submit
            background #00b000
            &.disabled
              background #ccc
              cursor not-allowed
        .input
          width 100%
          height 26px
          display block
          opacity 0
          position absolute
          left 0
          top 0
          z-index 99
          cursor pointer
        .submit
          width 100%
          height 26px
          line-height 26px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #51c97a
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
    .downBtn
      width 100%
      margin-top 5px
      height 28px
      .download-btn // a标签
        color #666
        display block
        background #ddd
        width 60px
        height 26px
        line-height 26px
        border-radius 6px
        float right
        font-size 12px
        text-align center
        &:hover
          background #ccc
    .info
      width 100%
      padding 0 10px
      p
        width 100%
        line-height 28px
        color #666
</style>
