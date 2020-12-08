<template>
  <div class="opt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="optItem">
          <div class="block">
            <h2>Think 选件硬捆绑需求
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>             
              <div class="form-box">
                <updata
                  @on-success="updateopt"
                  :menuId="'75'"
                  :menuName="'硬捆绑管理_选件硬捆绑需求'"
                  :logTableName="'Think_Bundle_OPT_SUM'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_选件硬捆绑汇总'"
                :tableName='"Think_Bundle_OPT_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_选件硬捆绑汇总'"
                ref="gridoptsum">
              </v-table>
            </div>
            <h2>Think 选件硬捆绑详细
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_选件硬捆绑详细'"
                :tableName='"Think_Bundle_OPT_Detail"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_选件硬捆绑详细'"
                ref="gridoptdetail">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane :label="menuArr[1]" class="optItem">
          <div class="block">
            <h2>Think硬捆绑准确率监控
              <div class="form-box">
                <updata
                  @on-success="cnbmtm"
                  :menuId="'75'"
                  :menuName="'硬捆绑管理_Think硬捆绑准确率监控'"
                  :logTableName="'Think_Bundle_Accuracy'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <message-box></message-box>
              <v-table
                :sheetsName="'Think硬捆绑准确率监控'"
                :tableName='"Think_Bundle_Accuracy"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think硬捆绑准确率监控'"
                ref="gridmtm">
              </v-table>
            </div>
          </div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import VTable from '@/components/public/vtablePage'
import updata from '@/components/public/updata'
// import messageBox from '@/components/public/messageBox'
// import vtableEdit from '@/components/public/vtableEdit'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: false,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['选件硬捆绑需求']
      // alertData: [
      //   {type: 'error', message: 'Think选件运作低风险'},
      //   {type: 'info', message: 'Think选件运作低风险'},
      //   {type: 'success', message: 'Think选件运作低风险'},
      //   {type: 'warning', message: 'Think选件运作低风险'}
      // ]
    }
  },
  components: {
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
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
          DOWNLOAD_BAT_PATH: 'Think_选件硬捆绑需求_Download'
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
          SENDMAIL_BAT_PATH: 'Think_选件硬捆绑需求'
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
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    updateopt () {
      this.$refs.gridoptsum.updateTabFun()
      this.$refs.gridoptdetail.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.opt-box
  width 100%
  height 100%
  padding 10px
  .optItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
