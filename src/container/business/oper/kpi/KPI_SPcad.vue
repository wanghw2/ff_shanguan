<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConNB 备货计划
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'ConNB_备货计划'"
                  @on-success="updateConnbpotar"
                  @updateTimeChange="updateConnbpotar1"
                  :logTableName='"ConNB_PO_Target_Plan"'
                  :logObj="'gridConnbpotar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_备货计划'"
                :tableName='"ConNB_PO_Target_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货计划'"
                ref="gridConnbpotar" >
              </v-table>
            </div>
            <h2>ConDT 备货计划
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'ConDT_备货计划'"
                  @on-success="updateCondtpotar"
                  @updateTimeChange="updateCondtpotar1"
                  :logTableName='"ConDT_PO_Target_Plan"'
                  :logObj="'gridCondtpotar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConDT_备货计划'"
                :tableName='"ConDT_PO_Target_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_备货计划'"
                ref="gridCondtpotar" >
              </v-table>
            </div>
            <h2>YTNB 备货计划
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'YTNB_备货计划'"
                  @on-success="updateYtnbpotar"
                  @updateTimeChange="updateYtnbpotar1"
                  :logTableName='"YTNB_PO_Target_Plan"'
                  :logObj="'gridYtnbpotar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table251
                :sheetsName="'YTNB_备货计划'"
                :tableName='"YTNB_PO_Target_Plan"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_备货计划'"
                ref="gridYtnbpotar" >
              </v-table251>
            </div>
            <h2>YTDT 备货计划
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'YTDT_备货计划'"
                  @on-success="updateYtdtpotar"
                  @updateTimeChange="updateYtdtpotar1"
                  :logTableName='"YTDT_PO_Target_Plan"'
                  :logObj="'gridYtdtpotar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table251
                :sheetsName="'YTDT_备货计划'"
                :tableName='"YTDT_PO_Target_Plan"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_备货计划'"
                ref="gridYtdtpotar" >
              </v-table251>
            </div>
            <h2>Think T TP 备货计划
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
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
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'Think_T_TP_备货计划'"
                :tableName='"Think_T_TP_PO_Target_Plan"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_备货计划'"
                ref="gridTtpPOtar" >
              </v-table>
            </div>
            <h2>Think T TC 备货计划
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
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
            <div class="addgrid addgrid6">
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
            <h2>Supply Cadence
             <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>             
              <div class="form-box">
                <updata
                  @on-success="updateffSpcad"
                  :menuId="'460'"
                  :menuName="'KPI管理_SPCadence'"
                  :logTableName="'FF_Supply_Cadence_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_Supply_Cadence_TTL'"
                :tableName='"FF_Supply_Cadence_TTL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Supply_Cadence_TTL'"
                ref="gridffSpcad">
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
import updata from '@/components/public/updata'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
import VTable251 from '@/components/public/vtablePage251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      tabPosition: 'left',
      menuArr: ['备货计划', 'SP Cadence']
    }
  },
  components: {
    Upload,
    VTable251,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
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
          DOWNLOAD_BAT_PATH: 'FF_Supply_Cadence_Download'
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
          SENDMAIL_BAT_PATH: 'FF_Supply_Cadence'
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
    updateffSpcad () {
      this.$refs.gridffSpcad.updateTabFun()
    },
    updateConnbpotar () {
      this.$refs.gridConnbpotar.updateTabFun()
    },
    updateConnbpotar1 () {
      this.$refs.gridConnbpotar.updateTimeChange()
    },
    updateCondtpotar () {
      this.$refs.gridCondtpotar.updateTabFun()
    },
    updateCondtpotar1 () {
      this.$refs.gridCondtpotar.updateTimeChange()
    },
    updateYtnbpotar () {
      this.$refs.gridYtnbpotar.updateTabFun()
    },
    updateYtnbpotar1 () {
      this.$refs.gridYtnbpotar.updateTimeChange()
    },
    updateYtdtpotar () {
      this.$refs.gridYtdtpotar.updateTabFun()
    },
    updateYtdtpotar1 () {
      this.$refs.gridYtdtpotar.updateTimeChange()
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
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
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
