<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>TB 促销Schedule
              <div class="form-box">
                <upload
                  @on-success="updatetbSchedule"
                  @updateTimeChange="updatetbSchedule1"
                  :sheetsName="'Think_T_TB_促销Schedule'"
                  :logTableName='"Think_T_TB_Product_Promote_Schedule"'
                  :logObj="'gridtbSchedule'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_促销Schedule'"
                :tableName='"Think_T_TB_Product_Promote_Schedule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TB_促销Schedule'"
                ref="gridtbSchedule">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>TB 促销预估供应
              <div class="form-box">
                <upload
                  @on-success="updatetbsupplyol"
                  @updateTimeChange="updatetbsupplyol1"
                  :sheetsName="'Think_T_TB_促销预估供应'"
                  :logTableName='"Think_T_TB_Product_Promote_Supply_OL"'
                  :logObj="'gridtbsupplyol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_促销预估供应'"
                :tableName='"Think_T_TB_Product_Promote_Supply_OL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TB_促销预估供应'"
                ref="gridtbsupplyol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>TB 促销供应分配
              <div class="form-box">
                <upload
                  @on-success="updatetbsupplyalloc"
                  @updateTimeChange="updatetbsupplyalloc1"
                  :sheetsName="'Think_T_TB_促销供应分配'"
                  :logTableName='"Think_T_TB_Product_Promote_Supply_Alloc"'
                  :logObj="'gridtbsupplyalloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_促销供应分配'"
                :tableName='"Think_T_TB_Product_Promote_Supply_Alloc"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TB_促销供应分配'"
                ref="gridtbsupplyalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="npiItem">
          <div class="block">
            <h2>TB 促销监控
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetbpromotedb"
                  :menuId="'263'"
                  :menuName="'关键节点_促销监控'"
                  :logTableName="'Think_T_TB_Product_Promote_Dasboard_Overview'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TB_促销监控'"
                :tableName='"Think_T_TB_Product_Promote_Dasboard_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TB_促销监控'"
                ref="gridtbpromotedb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <div class="block">
            <h2>TP 促销Schedule
              <div class="form-box">
                <upload
                  @on-success="updatetpSchedule"
                  @updateTimeChange="updatetpSchedule1"
                  :sheetsName="'Think_T_TP_促销Schedule'"
                  :logTableName='"Think_T_TP_Product_Promote_Schedule"'
                  :logObj="'gridtpSchedule'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_促销Schedule'"
                :tableName='"Think_T_TP_Product_Promote_Schedule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_促销Schedule'"
                ref="gridtpSchedule">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>TP 促销预估供应
              <div class="form-box">
                <upload
                  @on-success="updatetpsupplyol"
                  @updateTimeChange="updatetpsupplyol1"
                  :sheetsName="'Think_T_TP_促销预估供应'"
                  :logTableName='"Think_T_TP_Product_Promote_Supply_OL"'
                  :logObj="'gridtpsupplyol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_促销预估供应'"
                :tableName='"Think_T_TP_Product_Promote_Supply_OL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_促销预估供应'"
                ref="gridtpsupplyol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="pdtItem">
          <div class="block">
            <h2>TP 促销供应分配
              <div class="form-box">
                <upload
                  @on-success="updatetpsupplyalloc"
                  @updateTimeChange="updatetpsupplyalloc1"
                  :sheetsName="'Think_T_TP_促销供应分配'"
                  :logTableName='"Think_T_TP_Product_Promote_Supply_Alloc"'
                  :logObj="'gridtpsupplyalloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_促销供应分配'"
                :tableName='"Think_T_TP_Product_Promote_Supply_Alloc"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_促销供应分配'"
                ref="gridtpsupplyalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="npiItem">
          <div class="block">
            <h2>TP 促销监控
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetppromotedb"
                  :menuId="'263'"
                  :menuName="'关键节点_促销监控'"
                  :logTableName="'Think_T_TP_Product_Promote_Dasboard_Overview'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_TP_促销监控'"
                :tableName='"Think_T_TP_Product_Promote_PN"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_促销监控'"
                ref="gridtppromotedb">
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
import Updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['TB促销Schedule', 'TB促销预估供应', 'TB促销供应分配', 'TB促销监控', 'TP促销Schedule', 'TP促销预估供应', 'TP促销供应分配', 'TP促销监控']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  created () {
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
          DOWNLOAD_BAT_PATH: 'Think_T_TB_促销监控_Download'
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
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_TB_促销监控'
        },
        done (data) {
          alert(data)
          vm.disabledemail = false
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
          DOWNLOAD_BAT_PATH: 'Think_T_TP_促销监控_Download'
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
    sendemail2 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_TP_促销监控'
        },
        done (data) {
          alert(data)
          vm.disabledemail = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    updatetbpromotedb () {
      this.$refs.gridtbpromotedb.updateTabFun()
    },
    updatetbsupplyol () {
      this.$refs.gridtbsupplyol.updateTabFun()
    },
    updatetbsupplyol1 () {
      this.$refs.gridtbsupplyol.updateTimeChange()
    },
    updatetbsupplyalloc () {
      this.$refs.gridtbsupplyalloc.updateTabFun()
    },
    updatetbsupplyalloc1 () {
      this.$refs.gridtbsupplyalloc.updateTimeChange()
    },
    updatetppromotedb () {
      this.$refs.gridtppromotedb.updateTabFun()
    },
    updatetpsupplyol () {
      this.$refs.gridtpsupplyol.updateTabFun()
    },
    updatetpsupplyol1 () {
      this.$refs.gridtpsupplyol.updateTimeChange()
    },
    updatetpsupplyalloc () {
      this.$refs.gridtpsupplyalloc.updateTabFun()
    },
    updatetpsupplyalloc1 () {
      this.$refs.gridtpsupplyalloc.updateTimeChange()
    },
    updatetbSchedule () {
      this.$refs.gridtbSchedule.updateTabFun()
    },
    updatetbSchedule1 () {
      this.$refs.gridtbSchedule.updateTimeChange()
    },
    updatetpSchedule () {
      this.$refs.gridtpSchedule.updateTabFun()
    },
    updatetpSchedule1 () {
      this.$refs.gridtpSchedule.updateTimeChange()
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
