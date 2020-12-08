<template>
  <div class="po-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="poItem">
          <div class="block">
            <h2>BS MO NB
              <div class="form-box">
                <upload
                  @on-success="updateBSmonb"
                  @updateTimeChange="updateBSmonb1"
                  :sheetsName="'Think_Build_Signal_MO_NB'"
                  :logTableName="'Think_Build_Signal_MO_NB'"
                  :logObj="'gridBSmonb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Build_Signal_MO_NB'"
                :tableName="'Think_Build_Signal_MO_NB'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Build_Signal_MO_NB'"
                ref="gridBSmonb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="poItem">
          <div class="block">
            <h2>BS MO DT
              <div class="form-box">
                <upload
                  @on-success="updateBSmodt"
                  @updateTimeChange="updateBSmodt1"
                  :sheetsName="'Think_Build_Signal_MO_DT'"
                  :logTableName="'Think_Build_Signal_MO_DT'"
                  :logObj="'gridBSmodt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Build_Signal_MO_DT'"
                :tableName="'Think_Build_Signal_MO_DT'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Build_Signal_MO_DT'"
                ref="gridBSmodt" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>        
        <el-tab-pane :label="menuArr[2]" class="poItem">
          <div class="block">
            <h2>Build Signal
              <div class="form-box">
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              </div>
              <div class="form-box">
                <upload
                  @on-success="updateBuildSignal"
                  @updateTimeChange="updateBuildSignal1"
                  :sheetsName="'Think_Build_Signal'"
                  :logTableName="'Think_Build_Signal'"
                  :logObj="'build'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Build_Signal'"
                :tableName="'Think_Build_Signal'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Build_Signal'"
                ref="gridBuild" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane :label="menuArr[1]" class="poItem">
          <div class="block">
            <h2>Think 新增
              <div class="form-box">
                <upload-new
                  @on-success="updataBSIntraday"
                  :tableName='"Think_BS_Intraday"'
                  :sheetsName="'Think_BS_新增'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelThinkBSIntraday'"
                  :logTableName='"Think_BS_Intraday"'
                  :logObj="'FCSTt'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_新增'"
                :tableName="'Think_BS_Intraday'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_新增'"
                ref="thinkBSIntraday">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="poItem">
          <div class="block">
            <h2>Think 修改
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=Think_修改')" >模板下载</a>
              <div class="form-box">
                <upload
                  @on-success="updateTpgbsModify"
                  @updateTimeChange="updateTpgbsModify1"
                  :logTableName="'Think_BS_Modify'"
                  :sheetsName="'Think_BS_修改'"
                  :logObj="'modify'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_修改'"
                :tableName="'Think_BS_Modify'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_修改'"
                ref="thinkmodify">
              </v-table>
            </div>
          </div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
import UploadNew from '@/components/public/upload5'
import {domainUrl} from '@/config/config.js'
const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      serverUrl: domainUrl,
      menuArr: ['BS MO NB', 'BS MO DT', 'Build Signal']
    }
  },
  components: {
    Upload,
    VTable,
    UploadNew,
    updata
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.setTimeout()
    }, 3000)
  },
  methods: {
    // tinmecountdown () {
    //   var maxtime = 60 * 60
    //   var fun = function CountDown () {
    //     if (maxtime >= 0) {
    //       var minutes = Math.floor(maxtime / 60)
    //       var seconds = Math.floor(maxtime % 60)
    //       var msg = '距离结束还有' + minutes + '分' + seconds + '秒'
    //       document.all['timer'].innerHTML = msg
    //       if (maxtime === 1 * 60) {
    //         alert('还剩1分钟')
    //         --maxtime
    //       }
    //     } else {
    //       clearInterval(timer)
    //       alert('时间到，已禁止上传!')
    //     }
    //   }
    //   var timer = setInterval('fun', 1000)
    // },
    countTime () {
      // 获取当前时间
      var date = new Date()
      var now = date.getTime()
      // 设置截止时间
      var str = '2018/6/20 11:50:00'
      var endDate = new Date(str)
      var end = endDate.getTime()
        // 时间差
      var leftTime = end - now
        // 定义变量 d,h,m,s保存倒计时的时间
      var d = null
      var h = null
      var m = null
      var s = null
      if (leftTime >= 60) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
        m = Math.floor(leftTime / 1000 / 60 % 60)
        s = Math.floor(leftTime / 1000 % 60)
        // 将倒计时赋值到div中
        var strTime = d + '天' + h + '时' + m + '分' + s + '秒'
        document.getElementsByClassName('time')[0].innerText = strTime
      } else if (leftTime >= 0) {
        // document.getElementsByClassName('time')[0].innerHTML = '倒计时小于1分钟时，禁止任何更改操作'
        // alert('时间到，已禁止上传!')
        clearInterval(this.setInterval)
      }
    },
    setTimeout () {
      setTimeout(this.countTime, 1000)
    },
    setInterval () {
      setInterval(this.countTime, 1000)
    },
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_Build_Signal_MO_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    download2 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_Build_Signal_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    updateBuildSignal () { // 调用自动更新新数据的方法
      this.$refs.gridBuild.updateTabFun()
    },
    updateBuildSignal1 () {
      this.$refs.gridBuild.updateTimeChange()
    },
    updateBSmonb () { // 调用自动更新新数据的方法
      this.$refs.gridBSmonb.updateTabFun()
      this.$refs.gridBuild.updateTabFun()
    },
    updateBSmonb1 () {
      this.$refs.gridBSmonb.updateTimeChange()
    },
    updateBSmodt () { // 调用自动更新新数据的方法
      this.$refs.gridBSmodt.updateTabFun()
      this.$refs.gridBuild.updateTabFun()
    },
    updateBSmodt1 () {
      this.$refs.gridBSmodt.updateTimeChange()
    },
    updateTpgbsModify () { // 调用自动更新新数据的方法
      this.$refs.thinkmodify.updateTabFun()
    },
    updateTpgbsModify1 () {
      this.$refs.thinkmodify.updateTimeChange()
    },
    updataBSIntraday () {
      this.$refs.thinkBSIntraday.updateTimeChange()
    },
    updatethinkNewpo () {
      this.$refs.gridthinktspo.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.po-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .poItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      .time
        width 100%
        height 30px
        margin 10px 0
        // span
        //   display inline-block
        //   padding 0 5px
        //   min-width 30px
        //   height 30px
        //   float left
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
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
