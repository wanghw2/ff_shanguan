<template>
  <div class="opt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="optItem">
          <div class="block">
            <h2>Think 选件汇总表
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateOptsoinv"
                  :menuId="'73'"
                  :logTableName="'Think_OPT_SO_INV'"
                  :menuName="'排产需求_选件汇总表'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <!-- <message-box></message-box> -->
              <v-table
                :sheetsName="'Think_选件汇总表'"
                :tableName='"Think_OPT_SO_INV"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_选件汇总表'"
                ref="gridOptsoinv">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="optItem">
          <div class="block">
            <h2>Think 下单issue清单
            </h2>
            <div class="addgrid">
              <!-- <message-box></message-box> -->
              <v-table
                :sheetsName="'Think_下单issue清单'"
                :tableName='"Think_OPT_PO_Issue"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_下单issue清单'"
                ref="gridOptpoissue">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="optItem">
          <div class="block">
            <h2>Think 返工计划
              <div class="form-box">
                <updata
                  @on-success="updateOptwarr"
                  :menuId="'73'"
                  :menuName="'排产需求_返工计划'"
                  :logTableName="'Think_OPT_Warranty'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <!-- <message-box></message-box> -->
              <v-table
                :sheetsName="'Think_返工计划'"
                :tableName='"Think_OPT_Warranty"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_返工计划'"
                ref="gridOptwarr">
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
// import messageBox from '@/components/public/messageBox'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      // disabled: false,
      tabPosition: 'left',
      menuArr: ['选件汇总表', '下单issue清单', '返工计划']
    }
  },
  components: {
    VTable,
    Upload,
    // messageBox,
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
          DOWNLOAD_BAT_PATH: 'Think_选件汇总表_Download'
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
          SENDMAIL_BAT_PATH: 'Think_选件汇总表'
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
    updateOptsoinv () {
      this.$refs.gridOptsoinv.updateTabFun()
    },
    updateOptpoissue () {
      this.$refs.gridOptpoissue.updateTabFun()
    },
    updateOptpoint () {
      this.$refs.gridOptpoint.updateTabFun()
    },
    updateOptwarr () {
      this.$refs.gridOptwarr.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.opt-box
  overflow hidden
  padding 10px
  width 100%
  height 100%
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
