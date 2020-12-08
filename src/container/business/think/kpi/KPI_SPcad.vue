<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>Think T TP 备货计划&emsp;&emsp;单位：k
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_TP_备货计划'"
                  @on-success="updateTtpPOtar"
                  @updateTimeChange="updateTtpPOtar1"
                  :logTableName='"Think_T_TP_PO_Target_Plan"'
                  :logObj="'gridTtpPOtar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_T_TP_备货计划'"
                :tableName='"Think_T_TP_PO_Target_Plan"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_备货计划'"
                ref="gridTtpPOtar" >
              </v-table>
            </div>
            <h2>Think T TC 备货计划&emsp;&emsp;单位：k
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_TC_备货计划'"
                  @on-success="updateTtcPOtar"
                  @updateTimeChange="updateTtcPOtar1"
                  :logTableName='"Think_T_TC_PO_Target_Plan"'
                  :logObj="'gridTtcPOtar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_T_TC_备货计划'"
                :tableName='"Think_T_TC_PO_Target_Plan"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TC_备货计划'"
                ref="gridTtcPOtar" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>Think Supply Cadence
             <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatespcadence"
                  :menuId="'283'"
                  :menuName="'KPI管理_SPCadence'"
                  :logTableName="'Think_Supply_Cadence_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Supply_Cadence'"
                :tableName='"Think_Supply_Cadence_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Supply_Cadence'"
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
      toggle1: true,
      toggle2: true,
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
      this.toggleList1()
      this.toggleList2()
    }, 3000)
  },
  methods: {
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
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'Think_Supply_Cadence_Download'
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
          SENDMAIL_BAT_PATH: 'Think_Supply_Cadence'
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
    updateTtpPOtar () {
      this.$refs.gridTtpPOtar.updateTabFun()
    },
    updateTtpPOtar1 () {
      this.$refs.gridTtpPOtar.updateTimeChange()
    },
    updateTtcPOtar () {
      this.$refs.gridTtcPOtar.updateTabFun()
    },
    updateTtcPOtar1 () {
      this.$refs.gridTtcPOtar.updateTimeChange()
    },
    updatespcadence () {
      this.$refs.gridspcadence.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tar-box
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
