<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiitem">
          <div class="block">
            <h2>NB 管理看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatenbmanagerpt"
                  :menuId="'256'"
                  :menuName="'预测管理_管理看板'"
                  :logTableName="'Think_NB_Manage_Report_Product_Promote'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_NB_管理看板'"
                :tableName="'Think_NB_Manage_Report_Product_Promote'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_NB_管理看板'"
                ref="gridnbmanagerpt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiitem">
          <div class="block">
            <h2>DT 管理看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatedtmanagerpt"
                  :menuId="'256'"
                  :menuName="'预测管理_管理看板'"
                  :logTableName="'Think_DT_Manage_Report_Product_Promote'"
                  :proIndex="'2'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_DT_管理看板'"
                :tableName="'Think_DT_Manage_Report_Product_Promote'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_DT_管理看板'"
                ref="griddtmanagerpt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="npiitem">
          <div class="block">
            <h2>TB 管理看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail3" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatetbmanagerpt"
                  :menuId="'256'"
                  :menuName="'预测管理_管理看板'"
                  :logTableName="'Think_TB_Manage_Report_Product_Promote'"
                  :proIndex="'3'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_TB_管理看板'"
                :tableName="'Think_TB_Manage_Report_Product_Promote'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TB_管理看板'"
                ref="gridtbmanagerpt">
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
      menuArr: ['NB管理看板', 'DT管理看板', 'TB管理看板']
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
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_NB_管理看板'
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
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_NB_管理看板_Download'
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
          SENDMAIL_BAT_PATH: 'Think_DT_管理看板'
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
          DOWNLOAD_BAT_PATH: 'Think_DT_管理看板_Download'
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
    sendemail3 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'Think_TB_管理看板'
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
    download3 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_TB_管理看板_Download'
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
    updatenbmanagerpt () {
      this.$refs.gridnbmanagerpt.updateTabFun()
    },
    updatedtmanagerpt () {
      this.$refs.griddtmanagerpt.updateTabFun()
    },
    updatetbmanagerpt () {
      this.$refs.gridtbmanagerpt.updateTabFun()
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
