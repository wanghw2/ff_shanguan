<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConNB 备货计划&emsp;&emsp;单位：k
              <div class="form-box">
                <upload
                  :sheetsName="'ConNB_备货计划'"
                  @on-success="updatePOtarget"
                  @updateTimeChange="updatePOtarget1"
                  :logTableName='"ConNB_PO_Target_Plan"'
                  :logObj="'gridPOtarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_备货计划'"
                :tableName='"ConNB_PO_Target_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货计划'"
                ref="gridPOtarget" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ConNB Supply Cadence
             <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatespcadence"
                  :menuId="'393'"
                  :menuName="'KPI管理_SPCadence'"
                  :logTableName="'ConNB_Supply_Cadence_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Supply_Cadence'"
                :tableName='"ConNB_Supply_Cadence_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Supply_Cadence'"
                ref="gridspcadence">
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
      menuArr: ['备货计划', 'SP Cadence']
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
          DOWNLOAD_BAT_PATH: 'ConNB_Supply_Cadence_Download'
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
          SENDMAIL_BAT_PATH: 'ConNB_Supply_Cadence'
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
    updatePOtarget () {
      this.$refs.gridPOtarget.updateTabFun()
    },
    updatePOtarget1 () {
      this.$refs.gridPOtarget.updateTimeChange()
    },
    updatespcadence () {
      this.$refs.gridspcadence.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tar-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .tarItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
