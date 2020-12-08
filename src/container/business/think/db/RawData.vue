<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>Think LC INV</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_LC_INV'"
                :tableName='"Think_LC_INV"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LC_INV'"
                ref="gridthinkLCINV">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>Think LIPC INV</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_LIPC_INV'"
                :tableName='"Think_LIPC_INV"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC_INV'"
                ref="gridthinkLIPC">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>Think Open PO
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Open_PO'"
                :tableName='"Think_Open_PO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Open_PO'"
                :allPages="false"
                ref="gridthinkpo" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>Think Unconfirmed</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Unconfirmed'"
                :tableName='"Think_Unconfirmed"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Unconfirmed'"
                ref="gridUnconfirmed" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>Think Summarize</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Summarize'"
                :fileName="'Think_Summarize'"
                :tableName='"Think_Summarize"'
                ref="gridlabelthinkSummarize"
                :source="'FF_IDSS_Data_Think'" >
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
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['LC INV', 'LIPC INV', 'Open PO', 'Unconfirmed', 'Summarize']
    }
  },
  components: {
    Upload,
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
          DOWNLOAD_BAT_PATH: 'Think_Open_PO_Download'
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