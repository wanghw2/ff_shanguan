<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>Think 产销存
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateThinkcxc"
                  :menuId="'280'"
                  :menuName="'每日看板_产销存'"
                  :logTableName="'Think_DailyReport_Overview'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_产销存'"
                :tableName='"Think_DailyReport_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_产销存'"
                ref="gridThinkcxc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>Think 产销存 CPU
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download6" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_产销存_CPU'"
                :tableName='"Think_DailyReport_Overview_CPU"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_产销存_CPU'"
                ref="gridThinkcxccpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>Think 后续可供
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>           
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_PSD_Update'"
                :tableName='"Think_PSD_Update"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_PSD_Update'"
                ref="gridTogosupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>Think T ONS
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatethinkTons"
                  :menuId="'280'"
                  :menuName="'每日看板_T_ONS'"
                  :logTableName="'Think_T_ONS_Overview'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_ONS'"
                :tableName='"Think_T_ONS_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_ONS'"
                ref="gridthinkTons">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>Think 欠单分析 GSC
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_欠单分析_GSC'"
                :tableName="'Think_Backlog_Analysis_GSC_Family'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_欠单分析_GSC'"
                ref="gridBackloggsc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbItem">
          <div class="block">
            <h2>Think 简报
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateDailyReportMonth"
                  :menuId="'280'"
                  :menuName="'每日看板_T客户看板'"
                  :logTableName="'TPG_DailyReport_Month'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T客户看板'"
                :tableName='"TPG_DailyReport_Month"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T客户看板'"
                ref="gridDailyReportMonth">
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
      menuArr: ['产销存', '产销存 CPU', '后续可供', 'T ONS', 'GSC 欠单分析', '简报']
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
          DOWNLOAD_BAT_PATH: 'Think_产销存_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_后续可供_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_T_ONS_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_欠单分析_GSC_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_简报_Download'
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
          DOWNLOAD_BAT_PATH: 'Think_产销存_CPU_Download'
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
    updateThinkcxc () {
      this.$refs.gridThinkcxc.updateTabFun()
      this.$refs.gridThinkcxccpu.updateTabFun()
    },
    updatethinkTons () {
      this.$refs.gridthinkTons.updateTabFun()
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
  .dbItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>