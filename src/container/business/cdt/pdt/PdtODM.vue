<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;"> 
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>备货进度
             <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatereplen"
                  :menuId="'303'"
                  :menuName="'投产管理_备货进度'"
                  :logTableName="'ConDT_Replenishment_Report_Overview'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'备货进度'"
                :tableName="'ConDT_Replenishment_Report_Overview'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'备货进度'"
                ref="gridreplen">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>ConDT 实际PO
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepoact"
                  @updateTimeChange="updatepoact1"
                  :logTableName="'ConDT_PO_Actual'"
                  :sheetsName="'ConDT_实际PO'"
                  :logObj="'uppoact'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_实际PO'"
                :tableName="'ConDT_PO_Actual'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_实际PO'"
                ref="gridpoact">
              </v-table>
            </div>
            <h2>ConDT PO下达
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateporel"
                  @updateTimeChange="updateporel1"
                  :logTableName="'ConDT_PO_Release'"
                  :sheetsName="'ConDT_PO下达'"
                  :logObj="'upporel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConDT_PO下达'"
                :tableName="'ConDT_PO_Release'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO下达'"
                ref="gridporel">
              </v-table>
            </div>
            <h2>ConDT PO模板 上海
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConDT_PO模板_上海'"
                :tableName="'ConDT_PO_Result_EDI_SH'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO模板_上海'"
                ref="gridpoedish">
              </v-table>
            </div>
            <h2>ConDT PO模板 Compal
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConDT_PO模板_Compal'"
                :tableName="'ConDT_PO_Result_NOEDI_Compal'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO模板_Compal'"
                ref="gridponoedicpl">
              </v-table>
            </div>            
            <h2>ConDT PO模板 Wistron
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConDT_PO模板_Wistron'"
                :tableName="'ConDT_PO_Result_NOEDI_Wistron'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO模板_Wistron'"
                ref="gridponoediwst">
              </v-table>
            </div>            
            <h2>ConDT PO模板 ECS
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConDT_PO模板_ECS'"
                :tableName="'ConDT_PO_Result_NOEDI_ECS'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO模板_ECS'"
                ref="gridponoediecs">
              </v-table>
            </div>
            <h2>ConDT 实际PO 汇总
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'ConDT_实际PO_汇总'"
                :tableName="'ConDT_PO_Actual_TTL'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_实际PO_汇总'"
                ref="gridpoactttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>ConDT 上月剩余备货
              <div class="form-box">
                <upload
                  @on-success="updatesybh"
                  @updateTimeChange="updatesybh1"
                  :sheetsName="'ConDT_上月剩余备货'"
                  :logTableName='"ConDT_PO_LastMonth"'
                  :logObj="'upsybh'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_上月剩余备货'"
                :tableName='"ConDT_PO_LastMonth"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_上月剩余备货'"
                ref="gridsybh">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>ConDT 预生产清单
              <div class="form-box">
                <upload
                  @on-success="updatePdtba"
                  @updateTimeChange="updatePdtba1"
                  :sheetsName="'ConDT_预生产清单'"
                  :logTableName='"ConDT_Prebuild_list"'
                  :logObj="'upPdtba'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_预生产清单'"
                :tableName='"ConDT_Prebuild_list"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_预生产清单'"
                ref="gridPdtba">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <div class="block">
            <h2>ConDT 下单参数
              <div class="form-box">
                <upload
                  @on-success="updaterelpara"
                  @updateTimeChange="updaterelpara1"
                  :logTableName="'ConDT_PO_Release_Para'"
                  :sheetsName="'ConDT_下单参数'"
                  :logObj="'uprelpara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_下单参数'"
                :tableName="'ConDT_PO_Release_Para'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_下单参数'"
                ref="gridrelpara">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>ConDT PO Plan
              <a class="small">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepolan"
                  @updateTimeChange="updatepolan1"
                  :logTableName="'ConDT_PO_Plan'"
                  :sheetsName="'ConDT_PO_Plan'"
                  :logObj="'uppolan'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_PO_Plan'"
                :tableName="'ConDT_PO_Plan'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO_Plan'"
                ref="gridpolan">
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
import Updata from '@/components/public/updata'
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
      toggle7: true,
      tabPosition: 'left',
      menuArr: ['备货进度', 'PO下达', '上月剩余备货', '预生产清单', '下单参数', 'PO Plan上传']
    }
  },
  components: {
    Upload,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
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
          DOWNLOAD_BAT_PATH: 'ConDT_备货进度表_Download'
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
          SENDMAIL_BAT_PATH: 'ConDT_备货进度表'
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
          DOWNLOAD_BAT_PATH: 'ConDT_实际PO_Download'
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
          DOWNLOAD_BAT_PATH: 'ConDT_PO模板_Compal_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          // $a.attr('download', '.txt')
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
          DOWNLOAD_BAT_PATH: 'ConDT_PO模板_Wistron_Download'
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
          DOWNLOAD_BAT_PATH: 'ConDT_PO模板_ECS_Download'
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
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle7 = !this.toggle7
    },
    updatereplen () {
      this.$refs.gridreplen.updateTabFun()
    },
    updatereplen1 () {
      this.$refs.gridreplen.updateTimeChange()
    },
    updatepolan () {
      this.$refs.gridpolan.updateTabFun()
    },
    updatepolan1 () {
      this.$refs.gridpolan.updateTimeChange()
    },
    updatesybh () {
      this.$refs.gridsybh.updateTabFun()
    },
    updatesybh1 () {
      this.$refs.gridsybh.updateTimeChange()
    },
    updatePdtba () {
      this.$refs.gridPdtba.updateTabFun()
    },
    updatePdtba1 () {
      this.$refs.gridPdtba.updateTimeChange()
    },
    updaterelpara () {
      this.$refs.gridrelpara.updateTabFun()
    },
    updaterelpara1 () {
      this.$refs.gridrelpara.updateTimeChange()
    },
    updatepoact () {
      this.$refs.gridpoact.updateTabFun()
      this.$refs.gridpoactttl.updateTabFun()
    },
    updatepoact1 () {
      this.$refs.gridpoact.updateTimeChange()
    },
    updateporel () {
      this.$refs.gridporel.updateTabFun()
      this.$refs.gridpoedish.updateTabFun()
      this.$refs.gridpononedi.updateTabFun()
      this.$refs.gridpoact.updateTabFun()
      this.$refs.gridpoactttl.updateTabFun()
      this.$refs.gridponoedicpl.updateTabFun()
      this.$refs.gridponoediwst.updateTabFun()
      this.$refs.gridponoediecs.updateTabFun()
    },
    updateporel1 () {
      this.$refs.gridporel.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtpara
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




