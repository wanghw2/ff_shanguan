<template>
  <div class="sup-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
          <h2>ConDT 显示器监控看板            
            <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
            <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateconlcddb"
                  :menuId="'311'"
                  :menuName="'供应管理_显示器监控'"
                  :logTableName="'ConDT_LCD_Plant_Dashboard_Overview'"
                  :proIndex="'1'">
                </updata>
              </div>
          </h2>
            <div class="addgrid">
            <v-table
              :sheetsName="'ConDT_显示器监控'"
              :tableName="'ConDT_LCD_Plant_Dashboard_Overview'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConDT_显示器监控'"
              ref="gridconlcddb">
            </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
          <h2>YTDT 显示器监控看板           
            <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
            <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata251
                  @on-success="updateytlcddb"
                  :menuId="'311'"
                  :menuName="'供应管理_显示器监控'"
                  :logTableName="'YTDT_LCD_Plant_Dashboard_Detail_Inv'"
                  :proIndex="'2'">
                </updata251>
              </div>
          </h2>
            <div class="addgrid">
            <v-table-251
              :sheetsName="'YTDT_显示器监控'"
              :tableName="'YTDT_LCD_Plant_Dashboard_Detail_Inv'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YTDT_显示器监控'"
              ref="gridytlcddb">
            </v-table-251>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
          <h2>KQ 显示器监控看板           
            <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail3" href="#">发送邮件</a>
            <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata251
                  @on-success="updatekqlcddb"
                  :menuId="'311'"
                  :menuName="'供应管理_显示器监控'"
                  :logTableName="'KQ_LCD_Plant_Dashboard_Detail_Inv'"
                  :proIndex="'3'">
                </updata251>
              </div>
          </h2>
            <div class="addgrid">
            <v-table-251
              :sheetsName="'KQ_显示器监控'"
              :tableName="'KQ_LCD_Plant_Dashboard_Detail_Inv'"
              :source="'FF_IDSS_Data_REL'"
              :fileName="'KQ_显示器监控'"
              ref="gridkqlcddb">
            </v-table-251>
            </div>
          </div>
        </el-tab-pane>         
      </el-tabs>    
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import VTable from '@/components/public/vtablePage'
import Updata from '@/components/public/updata'
import VTable251 from '@/components/public/vtablePage251'
import Updata251 from '@/components/public/updata251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['ConDT 显示器监控', 'YTDT 显示器监控', 'KQ 显示器监控']
    }
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  components: {
    VTable,
    Updata,
    VTable251,
    Updata251
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
          DOWNLOAD_BAT_PATH: 'ConDT_显示器监控看板_Download'
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
          SENDMAIL_BAT_PATH: 'ConDT_显示器监控看板'
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
          DOWNLOAD_BAT_PATH: 'YTDT_显示器监控看板_Download'
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
          SENDMAIL_BAT_PATH: 'YTDT_显示器监控看板'
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
          DOWNLOAD_BAT_PATH: 'KQ_显示器监控看板_Download'
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
          SENDMAIL_BAT_PATH: 'KQ_显示器监控看板'
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
    updateconlcddb () {
      this.$refs.gridconlcddb.updateTabFun()
    },
    updateytlcddb () {
      this.$refs.gridytlcddb.updateTabFun()
    },
    updatekqlcddb () {
      this.$refs.gridkqlcddb.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sup-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pdtItem
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
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>