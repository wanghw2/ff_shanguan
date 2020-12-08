<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbitem">
          <div class="block">
            <h2>YTDT 实时统计
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_实时统计'"
                :tableName="'YTDT_RealTime_Inventory'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_实时统计'"
                ref="gridRealInventory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbitem">
          <div class="block">
            <h2>YTDT 后续可供
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_PSD_Update'"
                :tableName='"YTDT_PSD_Update"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_PSD_Update'"
                ref="gridToGoSupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbitem">
          <div class="block">
            <h2>YTDT MTM看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail5" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatemtmdb"
                  :menuId="'292'"
                  :menuName="'每日看板_业务监控表'"
                  :logTableName="'YTDT_DailyReport_Family'"
                  :proIndex="'101'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_MTM看板'"
                :tableName='"YTDT_DailyReport_Family"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_MTM看板'"
                ref="gridmtmdb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbitem">
          <div class="block">
            <h2>YTDT 业务监控表
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail6" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download6" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateywjk"
                  :menuId="'292'"
                  :menuName="'每日看板_业务监控表'"
                  :logTableName="'YTDT_DailyReport_Family'"
                  :proIndex="'101'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_业务监控表'"
                :tableName='"YTDT_DailyReport_Q"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_业务监控表'"
                ref="gridywjk">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbitem">
          <div class="block">
            <h2>YTDT 税控看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail7" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download7" href="#">下载</a>       
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_税控汇总'"
                :tableName='"YTDT_DailyReport_CustomerType_Shuikong"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_税控汇总'"
                ref="gridskkb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbitem">
          <div class="block">
            <h2>YTDT 线上看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail8" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download8" href="#">下载</a>       
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_线上汇总'"
                :tableName='"YTDT_DailyReport_CustomerType_Online"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_线上汇总'"
                ref="gridxskb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="dbitem">
          <div class="block">
            <h2>YTDT 欠单分析 GSC
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_欠单分析_GSC'"
                :tableName='"YTDT_Backlog_Analysis_GSC_Family"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_欠单分析_GSC'"
                ref="gridBackloggsc" >
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
import VTable from '@/components/public/vtablePage251'
import updata from '@/components/public/updata251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['实时统计', '后续可供', 'MTM看板', '业务监控表', '税控看板', '线上看板', 'GSC 欠单分析']
    }
  },
  components: {
    VTable,
    updata,
    Upload
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
          DOWNLOAD_BAT_PATH: 'YTDT_实时统计_Download'
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
          DOWNLOAD_BAT_PATH: 'YTDT_后续可供_Download'
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
          DOWNLOAD_BAT_PATH: 'YTDT_欠单分析_GSC_Download'
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
          DOWNLOAD_BAT_PATH: 'YTDT_MTM看板_Download'
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
    sendemail5 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'YTDT_MTM看板'
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
    download6 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'YTDT_业务监控表_Download'
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
    sendemail6 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'YTDT_业务监控表'
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
    download7 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'YTDT_税控看板_Download'
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
    sendemail7 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'YTDT_税控看板'
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
    download8 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'YTDT_线上看板_Download'
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
    sendemail8 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'YTDT_线上看板'
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
    updatemtmdb () {
      this.$refs.gridmtmdb.updateTabFun()
      this.$refs.gridywjk.updateTabFun()
      this.$refs.gridskkb.updateTabFun()
      this.$refs.gridxskb.updateTabFun()
    },
    updateywjk () {
      this.$refs.gridmtmdb.updateTabFun()
      this.$refs.gridywjk.updateTabFun()
      this.$refs.gridskkb.updateTabFun()
      this.$refs.gridxskb.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .dbitem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      .block-box
        width 100%
        height auto
        overflow hidden
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
        margin-bottom 5px
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
