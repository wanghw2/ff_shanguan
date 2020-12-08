<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2 class="h2">PSD准确率
              <div class="form-box">
                <div class="upload-box">
                  <form class="upload">
                    <p class="logTip" :title="showhislog">{{showhislog}}</p>
                    <div class="upload-title">
                      <div class="download-box">
                        <button class="submit" :disabled="disabled" :class="{'disabled': disabled}"  @click.prevent="updata">ODM计算</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="form-box">
                <div class="upload-box">
                  <form class="upload">
                    <p class="logTip" :title="showhislog">{{showhislog}}</p>
                    <div class="upload-title">
                      <div class="download-box">
                        <button class="submit" :disabled="disabled" :class="{'disabled': disabled}"  @click.prevent="updata1">Inhouse计算</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'PSD准确率'"
                :tableName="'FF_PSD_Accuracy_Report'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'PSD准确率'"
                ref="cnbAccuracyReport">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      disabled: false,
      showhislog: '',
      tabPosition: 'left',
      menuArr: ['PSD准确率']
    }
  },
  components: {
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  created () {
    this.hislog()
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
          tableName: 'FF_PSD_Accuracy_Report'
        },
        done (data) {
          vm.showhislog = data.updateTime + '，' + data.userName + '，' + data.message + '!'
          // console.log(data)
        },
        fail (msg) {
          // alert(msg)
          // vm.familyLog = msg
        }
      })
    },
    updata () {
      if (this.disabled) {
        return
      }
      this.disabled = true
      let vm = this
      vm.$ajax({
        url: '/doCalculation',
        method: 'get',
        params: {
          menuId: '455',
          proIndex: '1'
        },
        done (data) {
          vm.showhislog = data
          vm.disabled = false
        },
        fail (msg) {
          vm.showhislog = msg
          vm.disabled = false
        }
      })
    },
    updata1 () {
      if (this.disabled) {
        return
      }
      this.disabled = true
      let vm = this
      vm.$ajax({
        url: '/doCalculation',
        method: 'get',
        params: {
          menuId: '455',
          proIndex: '2'
        },
        done (data) {
          vm.showhislog = data
          vm.disabled = false
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
.db-box
  width 100%
  height 100%
  padding 10px
  .dbItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
          height auto
          float right
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
.upload-box
  width auto
  height 38px
  overflow hidden
  .upload
    width auto
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
        width 90px
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
