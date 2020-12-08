<template>
  <div class="allo-customer">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>T模式分货              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">BP邮件</a>              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">FF邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTpoalloc"
                  :menuId="'218'"
                  :menuName="'分货详情_T模式PO分货'"
                  :logTableName="'Think_T_Alloc_PO_Overview'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T模式_PO分货'"
                :tableName='"Think_T_Alloc_PO_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T模式_PO分货'"
                ref="thinkTpoalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>R模式分货              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail4" href="#">客户邮件</a>              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail3" href="#">FF邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateRsoalloc"
                  :menuId="'218'"
                  :menuName="'分货详情_R模式分货'"
                  :logTableName="'Think_R_Alloc_SO_Detail'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R模式_PO分货'"
                :tableName='"Think_R_Alloc_SO_Detail"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R模式_PO分货'"
                ref="thinkRsoalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block">
            <h2>分货FIS清单              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail8" href="#">客户邮件</a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail5" href="#">FF邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateallocfis"
                  :menuId="'218'"
                  :menuName="'分货详情_分货FIS清单'"
                  :logTableName="'Think_Alloc_Fis'"
                  :proIndex="'3'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_分货FIS清单'"
                :tableName='"Think_Alloc_Fis"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_分货FIS清单'"
                ref="thinkallocfis">
              </v-table>
            </div>
          </div>
        </el-tab-pane>       
        <el-tab-pane :label="menuArr[3]" class="alloItem">
          <div class="block">
            <h2>T模式后续可供              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail7" href="#">BP邮件</a>              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail6" href="#">FF邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTtogosupply"
                  :menuId="'218'"
                  :menuName="'分货详情_T模式后续可供'"
                  :logTableName="'Think_AI_Question_Answer_BP'"
                  :proIndex="'4'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T模式后续可供'"
                :tableName='"Think_AI_Question_Answer_BP"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T模式后续可供'"
                ref="thinkTtogosupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="alloItem">
          <div class="block">
            <h2>Think R模式后续可供
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R模式后续可供'"
                :tableName='"Think_TD_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R模式后续可供'"
                ref="thinktdpsd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="alloItem">
          <div class="block">
            <h2>T 周节奏看板              
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail9" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTweekratio"
                  :menuId="'218'"
                  :menuName="'分货详情_周节奏看板'"
                  :logTableName="'Think_T_DailyReport_WeekRatio_Biz'"
                  :proIndex="'5'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_DailyReport_WeekRatio_Biz'"
                :tableName='"Think_T_DailyReport_WeekRatio_Biz "'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_周节奏_业务线'"
                ref="gridTweekratio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="alloItem">
          <div class="block">
            <h2>GAB 21分货             
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail10" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download6" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateRgab"
                  :menuId="'218'"
                  :menuName="'分货详情_GAB21分货'"
                  :logTableName="'Think_R_GAB_Shipment'"
                  :proIndex="'6'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R_GAB_Shipment'"
                :tableName='"Think_R_GAB_Shipment"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_GAB_21分货表'"
                ref="gridRgaballoc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="alloItem">
          <div class="block">
            <h2>GAB 季度通报             
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail11" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download7" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R_GAB_DailyReport_Overview'"
                :tableName='"Think_R_GAB_DailyReport_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R_GAB_季度总览'"
                ref="gridRgabdaily">
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
import Updata from '@/components/public/updata'
import VTable from '@/components/public/vtablePage'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['T模式分货', 'R模式分货', '分货FIS清单', 'T模式后续可供', 'R模式后续可供', 'T 周节奏看板', 'GAB 21分货', 'GAB 季度通报']
    }
  },
  components: {
    // Upload,
    Updata,
    VTable
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
          DOWNLOAD_BAT_PATH: 'Think_T_PO分货结果_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_R_SO分货_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_分货_FIS_Download'
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
    download4 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_T_后续可供_Download'
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
    download5 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_T_周节奏看板_Download'
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
    download6 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_GAB_21分货表_Download'
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
    download7 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_R_GAB季度通报_Download'
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
          SENDMAIL_BAT_PATH: 'Think_T_PO分货结果'
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
    sendemail2 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_PO分货结果_BP'
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
    sendemail3 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_R_SO分货'
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
    sendemail4 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_R_SO分货_客户'
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
    sendemail5 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_分货_FIS'
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
    sendemail6 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_后续可供'
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
    sendemail7 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_后续可供_BP'
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
    sendemail8 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_分货_FIS_客户'
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
    sendemail9 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_T_周节奏看板'
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
    sendemail10 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_GAB_21分货表'
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
    sendemail11 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_R_GAB季度通报'
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
    updateTpoalloc () {
      this.$refs.thinkTpoalloc.updateTabFun()
    },
    updateTtogosupply () {
      this.$refs.thinkTtogosupply.updateTabFun()
    },
    updateRsoalloc () {
      this.$refs.thinkRsoalloc.updateTabFun()
    },
    updateallocfis () {
      this.$refs.thinkallocfis.updateTabFun()
    },
    updateTweekratio () {
      this.$refs.gridTweekratio.updateTabFun()
    },
    updateRgab () {
      this.$refs.gridRgaballoc.updateTabFun()
      this.$refs.gridRgabdaily.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allo-customer
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .alloItem
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
