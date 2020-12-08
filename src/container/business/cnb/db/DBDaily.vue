<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbitem">
          <div class="block">
            <h2>ConNB 实时统计
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_实时统计'"
                :tableName="'ConNB_RealTime_Inventory'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_实时统计'"
                ref="gridRealInventory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbitem">
          <div class="block">
            <h2>ConNB 后续可供
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_PSD_Update'"
                :tableName='"ConNB_PSD_Update"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PSD_Update'"
                ref="gridToGoSupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbitem">
          <div class="block">
            <h2>ConNB 产销存
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_产销存'"
                :tableName="'ConNB_DailyReport_Channel_Summary'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_产销存'"
                ref="gridChannelSummary" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbitem">
          <div class="block">
            <h2>ConNB 欠单分析
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_欠单分析'"
                :tableName='"ConNB_Backlog_Analysis_Overview"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_欠单分析'"
                ref="gridBSummary" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbitem" >
          <div class="block">
            <h2>ConNB SO PSD
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_SO_PSD'"
                :tableName='"ConNB_Backlog_Analysis_PN"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_SO_PSD'"
                ref="gridsopsd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbitem">
          <div class="block">
            <h2>ConNB 还可来单
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download6" href="#">下载</a>              
              <div class="form-box">
                <updata
                  @on-success="updatetogoso"
                  :menuId="'390'"
                  :menuName="'看板管理_每日看板'"
                  :logTableName="'ConNB_Togo_SO_Overview'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_还可来单'"
                :tableName='"ConNB_Togo_SO_Overview"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_还可来单'"
                ref="gridtogoso">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="dbitem">
          <div class="block">
            <h2>ConNB 月结监控
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download7" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_月结监控'"
                :tableName='"CON_ROL_Dashboard"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_月结监控'"
                ref="gridrol">
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
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['实时统计', '后续可供', '产销存', '欠单分析', 'SO PSD', '还可来单', '月结监控']
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
          DOWNLOAD_BAT_PATH: 'ConNB_实时统计_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_后续可供_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_产销存_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_欠单分析_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_SO_PSD_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_还可来单_Download'
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
          DOWNLOAD_BAT_PATH: 'CON_月结监控_Download'
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
    updatetogoso () {
      this.$refs.gridtogoso.updateTabFun()
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
