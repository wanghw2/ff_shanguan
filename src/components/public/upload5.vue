<template>
  <div class="upload-box">
    <form class="upload">
      <p class="logTip" :title="showhislog">{{showhislog}}</p>
      <div class="upload-title">
        <div class="download-box">
          <input type="file" name="file" class="input" @change="uploadFile" :disabled="disabled"/>
          <span class="submit" :class="{'disabled': disabled}">上传</span>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    tableName: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    type: {
      type: Number,
      required: false
    },
    dbName: {
      type: String,
      required: true
    },
    onSuccess: {
      type: Function,
      default: function () {}
    },
    logTableName: {
      type: String,
      required: true
    },
    logObj: {
      type: String,
      required: false
    },
    updateTimeChange: {
      type: Function,
      default: function () {}
    },
    sheetNames: {
      type: String,
      required: false
    },
    analysisCName: {
      type: String,
      required: false
    },
    analysisCValue: {
      type: String,
      required: false
    },
    analysisCName2: {
      type: String,
      required: false
    },
    analysisCValue2: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      disabled: false,
      showhislog: '',
      updateTime: '' // 存储日志每次的更新时间
    }
  },
  created () {
    this.hislog()
    this.timerId = setInterval(() => { // 每半分钟执行一次获取日志的方法，来判断前后两次的时间是否一致
      this.hislog()
    }, 30000)
  },
  beforeDestroy () { // 清除定时器
    clearInterval(this.timerId)
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
    hislog () { // 获取日志信息
      let vm = this
      vm.$ajax({
        url: '/showHisLog',
        method: 'get',
        params: {
          tableName: vm.logTableName,
          time: new Date().getTime()
        },
        done (data) {
          vm.showhislog = data.updateTime + '，' + data.userName + '，' + data.message + '!'
          if (data.updateTime !== vm.updateTime) { // 比较两次的时间是否相同，如果不相同，则更新表格的数据
            // 数据更新了
            vm.$emit('updateTimeChange')
            vm.updateTime = data.updateTime
          } else {
          }
        },
        fail (msg) {
          console.log(msg)
        }
      })
    },
    uploadFile (e) {
      if (this.disabled) {
        return
      }
      this.disabled = true
      this.showhislog = '正在处理中。。。'
      let file = e.target.files[0]
      e.target.value = ''
      if (!file) {
        this.disabled = false
        return
      }
      let fullNameArr = file.name.split('.')
      let postfix = fullNameArr[fullNameArr.length - 1].toLowerCase()
      // console.log(fullNameArr)
      // 校验上传的文件的格式是否正确
      if (postfix !== 'xlsx' && postfix !== 'xls' && postfix !== 'xlsm' && postfix !== 'xltx' && postfix !== 'xltm' && postfix !== 'xlsb' && postfix !== 'xlam') {
        this.showhislog = this.getDate() + '，' + this.$store.state.token.name + '，' + '文件类型错误!'
        this.disabled = false
        return
      }
      let data = new FormData()
      let Token = JSON.parse(window.sessionStorage.getItem('token'))
      data.append('file', file)
      data.append('dbName', this.dbName)
      data.append('tableName', this.tableName)
      data.append('sheetNames', this.sheetNames)
      data.append('isVersion', 'Version')
      data.append('type', this.type)
      data.append('analysisCName', this.analysisCName)
      data.append('analysisCValue', this.analysisCValue)
      data.append('analysisCName2', this.analysisCName2)
      data.append('analysisCValue2', this.analysisCValue2)
      let vm = this
      this.$ajax({
        url: vm.url,
        headers: {
          'Content-type': 'multipart/form-data',
          'token': Token ? Token.sessionId : ''
        },
        data: data,
        done (data) {
          vm.showhislog = data
          vm.disabled = false
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
            background #00b000
            &.disabled
              background #ccc
              cursor not-allowed
        .input
          width 100%
          height 24px
          line-height 24px
          display block
          opacity 0
          position absolute
          left 0
          top 0
          z-index 99
          cursor pointer
        .submit
          width 100%
          height 24px
          line-height 24px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #76d467
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
    // .downBtn
    //   width 60px
    //   height 24px
    //   float left
    //   margin 6px 10px
    //   .download-btn // a标签
    //     color #fff
    //     display block
    //     background #fdbc40
    //     width 60px
    //     height 24px
    //     line-height 24px
    //     border-radius 6px
    //     float right
    //     font-size 12px
    //     text-align center
    //     &:hover
    //       background #ffa700
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
