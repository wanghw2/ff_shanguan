<template>
  <div class="tarupload">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>Think T Rev 渠道
              <div class="form-box">
                <upload
                  @on-success="updateRevbp"
                  @updateTimeChange="updateRevbp1"
                  :sheetsName="'Think_T_Rev_渠道'"
                  :logTableName="'Think_T_Rev_BP'"
                  :logObj="'gridRevbp'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_Rev_渠道'"
                :tableName="'Think_T_Rev_BP'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_Rev_渠道'"
                ref="gridRevbp">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>Think T Rev 订单分类
              <div class="form-box">
                <upload
                  @on-success="updateRevtype"
                  @updateTimeChange="updateRevtype1"
                  :sheetsName="'Think_T_Rev_订单分类'"
                  :logTableName="'Think_T_Rev_Type'"
                  :logObj="'gridRevtype'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_Rev_订单分类'"
                :tableName="'Think_T_Rev_Type'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_Rev_订单分类'"
                ref="gridRevtype">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>T Rev Report   
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTrev"
                  :menuId="'144'"
                  :menuName="'订单履约_Rev_Report'"
                  :logTableName="'Think_T_Rev_Report_Type'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_Rev_Report_Type'"
                :tableName='"Think_T_Rev_Report_Type"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_Rev_Report_Type'"
                ref="gridTrev">
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
      menuArr: ['Rev 渠道', 'Rev 订单分类', 'T Rev Report']
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
          DOWNLOAD_BAT_PATH: 'Think_T_Rev_Report_Download'
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
          SENDMAIL_BAT_PATH: 'Think_T_Rev_Report'
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
    updateRevbp () { // 上传后自动刷新表格数据
      this.$refs.gridRevbp.updateTabFun()
    },
    updateRevbp1 () { // 上传后自动刷新表格数据
      this.$refs.gridRevbp.updateTimeChange()
    },
    updateRevtype () { // 上传后自动刷新表格数据
      this.$refs.gridRevtype.updateTabFun()
    },
    updateRevtype1 () { // 上传后自动刷新表格数据
      this.$refs.gridRevtype.updateTimeChange()
    },
    updateTrev () { // 上传后自动刷新表格数据
      this.$refs.gridTrev.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tarupload
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>

