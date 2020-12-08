<template>
  <div class="pdt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>ConNB 备货上限
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateBhsx"
                  @updateTimeChange="updateBhsx1"
                  :sheetsName="'ConNB_备货上限'"
                  :logTableName='"ConNB_Replenishment_Limit"'
                  :logObj="'upbhsx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'ConNB_备货上限'"
                :tableName='"ConNB_Replenishment_Limit"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货上限'"
                ref="gridbhsx">
              </v-table>
            </div>
            <h2>ConNB DF预估供应
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid10">
              <v-table
                :sheetsName="'ConNB_DF预估供应'"
                :tableName='"ConNB_Replenishment_Limit_DF"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_DF预估供应'"
                ref="griddfyggy">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>ConNB 实际PO
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepoact"
                  @updateTimeChange="updatepoact1"
                  :logTableName="'ConNB_PO_Actual'"
                  :sheetsName="'ConNB_实际PO'"
                  :logObj="'uppoact'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_实际PO'"
                :tableName="'ConNB_PO_Actual'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_实际PO'"
                ref="gridpoact">
              </v-table>
            </div>
            <h2>ConNB PO下达
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateporel"
                  @updateTimeChange="updateporel1"
                  :logTableName="'ConNB_PO_Release'"
                  :sheetsName="'ConNB_PO下达'"
                  :logObj="'upporel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_PO下达'"
                :tableName="'ConNB_PO_Release'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PO下达'"
                ref="gridporel">
              </v-table>
            </div>
            <h2>ConNB PO模板 上海
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConNB_PO模板_上海'"
                :tableName="'ConNB_PO_Result_EDI_SH'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PO模板_上海'"
                ref="gridpoedish">
              </v-table>
            </div>
            <h2>ConNB PO模板 合肥
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConNB_PO模板_合肥'"
                :tableName="'ConNB_PO_Result_EDI_JV'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PO模板_合肥'"
                ref="gridpoedijv">
              </v-table>
            </div>
            <h2>ConNB 实际PO 汇总
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'ConNB_实际PO_汇总'"
                :tableName="'ConNB_PO_Actual_TTL'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_实际PO_汇总'"
                ref="gridpoactttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>ConNB 上月剩余备货
              <div class="form-box">
                <upload
                  @on-success="updatesybh"
                  @updateTimeChange="updatesybh1"
                  :sheetsName="'ConNB_上月剩余备货'"
                  :logTableName='"ConNB_PO_LastMonth"'
                  :logObj="'upsybh'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_上月剩余备货'"
                :tableName='"ConNB_PO_LastMonth"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_上月剩余备货'"
                ref="gridsybh">
              </v-table>
            </div>
          </div>
        </el-tab-pane>     
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>ConNB 备货暗送关系
              <div class="form-box">
                <upload
                  @on-success="updatepopipo"
                  @updateTimeChange="updatepopipo1"
                  :sheetsName="'ConNB_备货暗送关系'"
                  :logTableName='"ConNB_PO_PIPO"'
                  :logObj="'uppopipo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_备货暗送关系'"
                :tableName='"ConNB_PO_PIPO"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货暗送关系'"
                ref="gridpopipo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <div class="block">
            <h2>ConNB 备货节奏
              <div class="form-box">
                <upload
                  @on-success="updatebhjz"
                  @updateTimeChange="updatebhjz1"
                  :sheetsName="'ConNB_备货节奏'"
                  :logTableName='"ConNB_PO_WeekRatio"'
                  :logObj="'upbhjz'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_备货节奏'"
                :tableName='"ConNB_PO_WeekRatio"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货节奏'"
                ref="gridbhjz">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>ConNB 物料状态
              <div class="form-box">
                <upload
                  @on-success="updatewlzt"
                  @updateTimeChange="updatewlzt1"
                  :sheetsName="'ConNB_物料状态'"
                  :logTableName='"ConNB_MFG_status"'
                  :logObj="'upwlzt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_物料状态'"
                :tableName='"ConNB_MFG_status"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_物料状态'"
                ref="gridwlzt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="pdtItem">
          <div class="block">
            <h2>ConNB PO 拆分规则
              <div class="form-box">
                <upload
                  @on-success="updateposplit"
                  @updateTimeChange="updateposplit1"
                  :sheetsName="'ConNB_PO_拆分规则'"
                  :logTableName='"ConNB_PO_Split_Rule"'
                  :logObj="'upposplit'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_PO_拆分规则'"
                :tableName='"ConNB_PO_Split_Rule"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PO_拆分规则'"
                ref="gridposplit">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="pdtItem">
          <div class="block">
            <h2>ConNB 预生产清单
              <div class="form-box">
                <upload
                  @on-success="updatePdtba"
                  @updateTimeChange="updatePdtba1"
                  :sheetsName="'ConNB_预生产清单'"
                  :logTableName='"ConNB_Prebuild_list"'
                  :logObj="'upPdtba'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_预生产清单'"
                :tableName='"ConNB_Prebuild_list"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_预生产清单'"
                ref="gridPdtba">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="pdtItem">
          <div class="block">
            <h2>ConNB DOI标准
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <a class="small">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepodoi"
                  @updateTimeChange="updatepodoi1"
                  :logTableName="'ConNB_PO_DOI'"
                  :sheetsName="'ConNB_DOI标准'"
                  :logObj="'uppodoi'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConNB_DOI标准'"
                :tableName="'ConNB_PO_DOI'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_DOI标准'"
                ref="gridpodoi">
              </v-table>
            </div>
            <h2>ConNB 策略定义
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <a class="small">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepostr"
                  @updateTimeChange="updatepostr1"
                  :logTableName="'ConNB_PO_Strategy'"
                  :sheetsName="'ConNB_策略定义'"
                  :logObj="'uppostr'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConNB_策略定义'"
                :tableName="'ConNB_PO_Strategy'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_策略定义'"
                ref="gridpostr">
              </v-table>
            </div>
            <h2>ConNB 策略因子
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <a class="small">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepofact"
                  @updateTimeChange="updatepofact1"
                  :logTableName="'ConNB_PO_Factor'"
                  :sheetsName="'ConNB_策略因子'"
                  :logObj="'uppofact'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'ConNB_策略因子'"
                :tableName="'ConNB_PO_Factor'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_策略因子'"
                ref="gridpofact">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="pdtItem">
          <div class="block">
            <h2>ConNB EOL计划
              <div class="form-box">
                <upload
                  @on-success="updateeol"
                  @updateTimeChange="updateeol1"
                  :sheetsName="'ConNB_EOL计划'"
                  :logTableName='"ConNB_EOL_List"'
                  :logObj="'grideol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_EOL计划'"
                :tableName='"ConNB_EOL_List"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_EOL计划'"
                ref="grideol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="pdtItem">
          <div class="block">
            <h2>ConNB InvTime
              <div class="form-box">
                <upload
                  @on-success="updateInvTime"
                  @updateTimeChange="updateInvTime1"
                  :sheetsName="'ConNB_InvTime'"
                  :logTableName='"ConNB_InvTime"'
                  :logObj="'upInvTime'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_InvTime'"
                :tableName='"ConNB_InvTime"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_InvTime'"
                ref="gridInvTime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[11]" class="pdtItem">
          <div class="block">
            <h2>ConNB ROL Date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'ConNB_ROL_Date'"
                  :logTableName='"ConNB_ROL_Date"'
                  :logObj="'uproldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_ROL_Date'"
                :tableName='"ConNB_ROL_Date"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_ROL_Date'"
                ref="gridroldate">
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
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      toggle8: true,
      toggle9: true,
      toggle10: true,
      tabPosition: 'left',
      menuArr: ['备货上限', 'PO下达', '上月剩余备货', '备货暗送关系', '备货节奏', '物料状态', '拆分规则', '预生产清单', '投产策略', 'EOL计划', 'InvTime', 'ROL Date']
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
      this.toggleList8()
      this.toggleList9()
      this.toggleList10()
    }, 3000)
  },
  created () {
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
          DOWNLOAD_BAT_PATH: 'ConNB_DF预估供应_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_实际PO_Download'
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
    toggleList8 () {
      let addgrid = document.getElementsByClassName('addgrid8')[0]
      if (this.toggle8) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle8 = !this.toggle8
    },
    toggleList9 () {
      let addgrid = document.getElementsByClassName('addgrid9')[0]
      if (this.toggle9) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle9 = !this.toggle9
    },
    toggleList10 () {
      let addgrid = document.getElementsByClassName('addgrid10')[0]
      if (this.toggle10) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle10 = !this.toggle10
    },
    updateBhsx () {
      this.$refs.gridbhsx.updateTabFun()
      this.$refs.griddfyggy.updateTabFun()
    },
    updateBhsx1 () {
      this.$refs.gridbhsx.updateTimeChange()
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
      this.$refs.gridpoedijv.updateTabFun()
      this.$refs.gridpoact.updateTabFun()
      this.$refs.gridpoactttl.updateTabFun()
    },
    updateporel1 () {
      this.$refs.gridporel.updateTimeChange()
    },
    updatesybh () {
      this.$refs.gridsybh.updateTabFun()
    },
    updatesybh1 () {
      this.$refs.gridsybh.updateTimeChange()
    },
    updatepopipo () {
      this.$refs.gridpopipo.updateTabFun()
    },
    updatepopipo1 () {
      this.$refs.gridpopipo.updateTimeChange()
    },
    updatebhjz () {
      this.$refs.gridbhjz.updateTabFun()
    },
    updatebhjz1 () {
      this.$refs.gridbhjz.updateTimeChange()
    },
    updatewlzt () {
      this.$refs.gridwlzt.updateTabFun()
    },
    updatewlzt1 () {
      this.$refs.gridwlzt.updateTimeChange()
    },
    updatePdtba () {
      this.$refs.gridPdtba.updateTabFun()
    },
    updatePdtba1 () {
      this.$refs.gridPdtba.updateTimeChange()
    },
    updatepodoi () {
      this.$refs.gridpodoi.updateTabFun()
    },
    updatepodoi1 () {
      this.$refs.gridpodoi.updateTimeChange()
    },
    updatepostr () {
      this.$refs.gridpostr.updateTabFun()
    },
    updatepostr1 () {
      this.$refs.gridpostr.updateTimeChange()
    },
    updatepofact () {
      this.$refs.gridpofact.updateTabFun()
    },
    updatepofact1 () {
      this.$refs.gridpofact.updateTimeChange()
    },
    updateInvTime () {
      this.$refs.gridInvTime.updateTabFun()
    },
    updateInvTime1 () {
      this.$refs.gridInvTime.updateTimeChange()
    },
    updateroldate () {
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () {
      this.$refs.gridroldate.updateTimeChange()
    },
    updateposplit () {
      this.$refs.gridposplit.updateTabFun()
    },
    updateposplit1 () {
      this.$refs.gridposplit.updateTimeChange()
    },
    updateeol () {
      this.$refs.grideol.updateTabFun()
    },
    updateeol1 () {
      this.$refs.grideol.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdt-box
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
