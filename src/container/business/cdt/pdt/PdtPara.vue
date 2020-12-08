<template>
  <div class="pdt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>ConDT 备货上限
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateBhsx"
                  @updateTimeChange="updateBhsx1"
                  :logTableName="'ConDT_Replenishment_Limit'"
                  :sheetsName="'ConDT_备货上限'"
                  :logObj="'upbhsx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConDT_备货上限'"
                :tableName="'ConDT_Replenishment_Limit'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_备货上限'"
                ref="gridbhsx">
              </v-table>
            </div>
            <h2>ConDT DF预估供应
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConDT_DF预估供应'"
                :tableName='"ConDT_Replenishment_Limit_DF"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_DF预估供应'"
                ref="griddfyggy">
              </v-table>
            </div>
          </div>
        </el-tab-pane>    
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>ConDT 备货暗送关系
              <div class="form-box">
                <upload
                  @on-success="updatepopipo"
                  @updateTimeChange="updatepopipo1"
                  :sheetsName="'ConDT_备货暗送关系'"
                  :logTableName='"ConDT_PO_PIPO"'
                  :logObj="'uppopipo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_备货暗送关系'"
                :tableName='"ConDT_PO_PIPO"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_备货暗送关系'"
                ref="gridpopipo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>ConDT 备货节奏
              <div class="form-box">
                <upload
                  @on-success="updatebhjz"
                  @updateTimeChange="updatebhjz1"
                  :sheetsName="'ConDT_备货节奏'"
                  :logTableName='"ConDT_PO_WeekRatio"'
                  :logObj="'upbhjz'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_备货节奏'"
                :tableName='"ConDT_PO_WeekRatio"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_备货节奏'"
                ref="gridbhjz">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>ConDT PO 拆分规则
              <div class="form-box">
                <upload
                  @on-success="updatePOsplit"
                  @updateTimeChange="updatePOsplit1"
                  :sheetsName="'ConDT_PO_拆分规则'"
                  :logTableName='"ConDT_PO_Split_Rule"'
                  :logObj="'upPOsplit'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_PO_拆分规则'"
                :tableName='"ConDT_PO_Split_Rule"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PO_拆分规则'"
                ref="gridPOsplit">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <div class="block">
            <h2>ConDT 物料状态
              <div class="form-box">
                <upload
                  @on-success="updatewlzt"
                  @updateTimeChange="updatewlzt1"
                  :sheetsName="'ConDT_物料状态'"
                  :logTableName='"ConDT_MFG_status"'
                  :logObj="'upwlzt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_物料状态'"
                :tableName='"ConDT_MFG_status"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_物料状态'"
                ref="gridwlzt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>  
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>ConDT NPI计划
              <div class="form-box">
                <upload
                  @on-success="updateNpisch"
                  @updateTimeChange="updateNpisch1"
                  :logTableName="'ConDT_NPI_Schedule'"
                  :sheetsName="'ConDT_NPI计划'"
                  :logObj="'upNpisch'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_NPI计划'"
                :tableName="'ConDT_NPI_Schedule'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_NPI计划'"
                ref="gridNpisch">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="pdtItem">
          <div class="block">
            <h2>ConDT EOL计划
              <div class="form-box">
                <upload
                  @on-success="updateeol"
                  @updateTimeChange="updateeol1"
                  :logTableName="'ConDT_EOL_List'"
                  :sheetsName="'ConDT_EOL计划'"
                  :logObj="'upeol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_EOL计划'"
                :tableName="'ConDT_EOL_List'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_EOL计划'"
                ref="grideol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="pdtItem">
          <div class="block">
            <h2>ConDT DOI标准
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepodoi"
                  @updateTimeChange="updatepodoi1"
                  :logTableName="'ConDT_PO_DOI'"
                  :sheetsName="'ConDT_DOI标准'"
                  :logObj="'uppodoi'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_DOI标准'"
                :tableName="'ConDT_PO_DOI'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_DOI标准'"
                ref="gridpodoi">
              </v-table>
            </div>
            <h2>ConDT 策略定义
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepostr"
                  @updateTimeChange="updatepostr1"
                  :logTableName="'ConDT_PO_Strategy'"
                  :sheetsName="'ConDT_策略定义'"
                  :logObj="'uppostr'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConDT_策略定义'"
                :tableName="'ConDT_PO_Strategy'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_策略定义'"
                ref="gridpostr">
              </v-table>
            </div>
            <h2>ConDT 策略因子
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepofact"
                  @updateTimeChange="updatepofact1"
                  :logTableName="'ConDT_PO_Factor'"
                  :sheetsName="'ConDT_策略因子'"
                  :logObj="'uppofact'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConDT_策略因子'"
                :tableName="'ConDT_PO_Factor'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_策略因子'"
                ref="gridpofact">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="pdtItem">
          <div class="block">
            <h2>ConDT InvTime
              <div class="form-box">
                <upload
                  @on-success="updateInvTime"
                  @updateTimeChange="updateInvTime1"
                  :logTableName="'ConDT_InvTime'"
                  :sheetsName="'ConDT_InvTime'"
                  :logObj="'upInvTime'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_InvTime'"
                :tableName="'ConDT_InvTime'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_InvTime'"
                ref="gridInvTime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="pdtItem">
          <div class="block">
            <h2>ConDT ROL date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :logTableName="'ConDT_ROL_date'"
                  :sheetsName="'ConDT_ROL_date'"
                  :logObj="'uproldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_ROL_date'"
                :tableName="'ConDT_ROL_date'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_ROL_date'"
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
import VTable from '@/components/public/vtable1'
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
      tabPosition: 'left',
      menuArr: ['备货上限', '备货暗送关系', '备货节奏', '拆分规则', '物料状态', 'NPI计划', 'EOL计划', '投产策略', 'InvTime', 'ROL Date']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
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
          DOWNLOAD_BAT_PATH: 'ConDT_DF预估供应_Download'
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
    updateBhsx () {
      this.$refs.gridbhsx.updateTabFun()
      this.$refs.griddfyggy.updateTabFun()
    },
    updateBhsx1 () {
      this.$refs.gridbhsx.updateTimeChange()
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
    updatePOsplit () {
      this.$refs.gridPOsplit.updateTabFun()
    },
    updatePOsplit1 () {
      this.$refs.gridPOsplit.updateTimeChange()
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
    updateNpisch () {
      this.$refs.gridNpisch.updateTabFun()
    },
    updateNpisch1 () {
      this.$refs.gridNpisch.updateTimeChange()
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




