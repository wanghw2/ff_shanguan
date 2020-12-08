
<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>TC 急单上传
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_TC_急单上传'"
                  @on-success="updatecriticaltc"
                  @updateTimeChange="updatecriticaltc1"
                  :logTableName='"Think_T_TC_Critical_Upload"'
                  :logObj="'gridcriticaltc'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TC_急单上传'"
                :fileName="'Think_T_TC_急单上传'"
                :tableName='"Think_T_TC_Critical_Upload"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcriticaltc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>TC 急单监控
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetctracking"
                  :menuId="'268'"
                  :menuName="'急单管理_TC急单监控'"
                  :logTableName="'Think_T_TC_Critical_Report_SUM'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TC_急单监控'"
                :fileName="'Think_T_TC_急单监控'"
                :tableName='"Think_T_TC_Critical_Report_SUM"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridtctracking">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <h2>TB 急单上传
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_TB_急单上传'"
                  @on-success="updatecriticaltb"
                  @updateTimeChange="updatecriticaltb1"
                  :logTableName='"Think_T_TB_Critical_Upload"'
                  :logObj="'gridcriticaltb'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_急单上传'"
                :fileName="'Think_T_TB_急单上传'"
                :tableName='"Think_T_TB_Critical_Upload"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcriticaltb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="fcstItem">
          <div class="block">
            <h2>TB 急单监控
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetbtracking"
                  :menuId="'268'"
                  :menuName="'急单管理_TB急单监控'"
                  :logTableName="'Think_T_TB_Critical_Report_SUM'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_急单监控'"
                :fileName="'Think_T_TB_急单监控'"
                :tableName='"Think_T_TB_Critical_Report_SUM"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridtbtracking">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="fcstItem">
          <div class="block">
            <h2>TP 急单上传
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_TP_急单上传'"
                  @on-success="updatecriticaltp"
                  @updateTimeChange="updatecriticaltp1"
                  :logTableName='"Think_T_TP_Critical_Upload"'
                  :logObj="'gridcriticaltp'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_急单上传'"
                :fileName="'Think_T_TP_急单上传'"
                :tableName='"Think_T_TP_Critical_Upload"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcriticaltp">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="fcstItem">
          <div class="block">
            <h2>TP 急单监控
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetptracking"
                  :menuId="'268'"
                  :menuName="'急单管理_TP急单监控'"
                  :logTableName="'Think_T_TP_Critical_Report_SUM'"
                  :proIndex="'3'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_急单监控'"
                :fileName="'Think_T_TP_急单监控'"
                :tableName='"Think_T_TP_Critical_Report_SUM"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridtptracking">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
import updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['TC 急单上传', 'TC 急单监控', 'TB 急单上传', 'TB 急单监控', 'TP 急单上传', 'TP 急单监控']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_T_TC_急单监控_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_T_TB_急单监控_Download'
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
    download3 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_T_TP_急单监控_Download'
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
    updatecriticaltc () { // 上传后自动刷新表格数据
      this.$refs.gridcriticaltc.updateTabFun()
    },
    updatecriticaltc1 () {
      this.$refs.gridcriticaltc.updateTimeChange()
    },
    updatecriticaltb () { // 上传后自动刷新表格数据
      this.$refs.gridcriticaltb.updateTabFun()
    },
    updatecriticaltb1 () {
      this.$refs.gridcriticaltb.updateTimeChange()
    },
    updatecriticaltp () { // 上传后自动刷新表格数据
      this.$refs.gridcriticaltp.updateTabFun()
    },
    updatecriticaltp1 () {
      this.$refs.gridcriticaltp.updateTimeChange()
    },
    updatetctracking () { // 上传后自动刷新表格数据
      this.$refs.gridtctracking.updateTabFun()
    },
    updatetbtracking () { // 上传后自动刷新表格数据
      this.$refs.gridtbtracking.updateTabFun()
    },
    updatetptracking () { // 上传后自动刷新表格数据
      this.$refs.gridtptracking.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
  .content
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
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
        padding 0 20px
        margin-bottom 10px
        background #fafafa
        .form-box
          min-width 80px
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
        .emailBtn
          background #e6199e
          &:hover
            background #ca3997
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
      .fold
        width 60px
        height 24px
        line-height 24px
        margin-top 6px
        margin-left 20px
        border-radius 6px
        text-align center
        float right
        color #fff
        border-radius 6px
        background #ff9933
        font-size 12px
        box-sizing border-box
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>

