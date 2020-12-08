<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>ConDT 客户岗反馈
              <div class="form-box">
                <upload
                  @on-success="updatekeypnup"
                  @updateTimeChange="updatekeypnup1"
                  :sheetsName="'ConDT_客户岗反馈'"
                  :logTableName='"ConDT_Customer_Key_PN"'
                  :logObj="'gridkeypnup'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_客户岗反馈'"
                :tableName='"ConDT_Customer_Key_PN"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_客户岗反馈'"
                ref="gridkeypnup">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>ConDT 客户重点机型监控
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecustomerkeypn"
                  :menuId="'321'"
                  :menuName="'客户重点机型_监控'"
                  :logTableName="'ConDT_Customer_Key_PN_Report'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_促销监控'"
                :tableName='"ConDT_Customer_Key_PN_Report"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_促销监控'"
                ref="gridcustomerkeypn">
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
      menuArr: ['客户岗反馈', '客户重点机型监控']
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
    download () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_客户重点机型监控_Download'
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
    sendemail () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'ConDT_客户重点机型监控'
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
    updatekeypnup () {
      this.$refs.gridkeypnup.updateTabFun()
    },
    updatekeypnup1 () {
      this.$refs.gridkeypnup.updateTimeChange()
    },
    updatecustomerkeypn () {
      this.$refs.gridcustomerkeypn.updateTabFun()
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
