<template>
  <div class="pdt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>YTNB 备货上限
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateBhsx"
                  @updateTimeChange="updateBhsx1"
                  :sheetsName="'YTNB_备货上限'"
                  :logTableName='"YTNB_Replenishment_Limit"'
                  :logObj="'upbhsx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'YTNB_备货上限'"
                :tableName='"YTNB_Replenishment_Limit"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_备货上限'"
                ref="gridbhsx">
              </v-table>
            </div>
            <h2>YTNB DF 预估供应
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'YTNB_DF预估供应'"
                :tableName='"YTNB_Replenishment_Limit_DF"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_DF预估供应'"
                ref="griddfyggy">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>YTNB 实际PO
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <upload
                  @on-success="updatepoact"
                  @updateTimeChange="updatepoact1"
                  :logTableName="'YTNB_PO_Actual'"
                  :sheetsName="'YTNB_实际PO'"
                  :logObj="'uppoact'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTNB_实际PO'"
                :tableName="'YTNB_PO_Actual'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_实际PO'"
                ref="gridpoact">
              </v-table>
            </div>
            <h2>YTNB PO下达
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateporel"
                  @updateTimeChange="updateporel1"
                  :logTableName="'YTNB_PO_Release'"
                  :sheetsName="'YTNB_PO下达'"
                  :logObj="'upporel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTNB_PO下达'"
                :tableName="'YTNB_PO_Release'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_PO下达'"
                ref="gridporel">
              </v-table>
            </div>
            <h2>YTNB PO模板 上海
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'YTNB_PO模板_上海'"
                :tableName="'YTNB_PO_Result_EDI_SH'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_PO模板_上海'"
                ref="gridpoedish">
              </v-table>
            </div>
            <h2>YTNB PO模板 合肥
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'YTNB_PO模板_合肥'"
                :tableName="'YTNB_PO_Result_EDI_JV'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_PO模板_合肥'"
                ref="gridpoedijv">
              </v-table>
            </div>
            <h2>YTNB 实际PO 汇总
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'YTNB_实际PO_汇总'"
                :tableName="'YTNB_PO_Actual_TTL'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_实际PO_汇总'"
                ref="gridpoactttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>YTNB 上月剩余备货
              <div class="form-box">
                <upload
                  @on-success="updatesybh"
                  @updateTimeChange="updatesybh1"
                  :sheetsName="'YTNB_上月剩余备货'"
                  :logTableName='"YTNB_PO_LastMonth"'
                  :logObj="'upsybh'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_上月剩余备货'"
                :tableName='"YTNB_PO_LastMonth"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_上月剩余备货'"
                ref="gridsybh">
              </v-table>
            </div>
          </div>
        </el-tab-pane>     
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>YTNB 备货暗送关系
              <div class="form-box">
                <upload
                  @on-success="updatepopipo"
                  @updateTimeChange="updatepopipo1"
                  :sheetsName="'YTNB_备货暗送关系'"
                  :logTableName='"YTNB_PO_PIPO"'
                  :logObj="'uppopipo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_备货暗送关系'"
                :tableName='"YTNB_PO_PIPO"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_备货暗送关系'"
                ref="gridpopipo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <div class="block">
            <h2>YTNB PO 拆分规则
              <div class="form-box">
                <upload
                  @on-success="updateposplit"
                  @updateTimeChange="updateposplit1"
                  :sheetsName="'YTNB_PO_拆分规则'"
                  :logTableName='"YTNB_PO_Split_Rule"'
                  :logObj="'upposplit'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_PO_拆分规则'"
                :tableName='"YTNB_PO_Split_Rule"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_PO_拆分规则'"
                ref="gridposplit">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>YTNB InvTime
              <div class="form-box">
                <upload
                  @on-success="updateInvTime"
                  @updateTimeChange="updateInvTime1"
                  :sheetsName="'YTNB_InvTime'"
                  :logTableName='"YTNB_InvTime"'
                  :logObj="'upInvTime'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_InvTime'"
                :tableName='"YTNB_InvTime"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_InvTime'"
                ref="gridInvTime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="pdtItem">
          <div class="block">
            <h2>YTNB ROL Date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'YTNB_ROL_Date'"
                  :logTableName='"YTNB_ROL_Date"'
                  :logObj="'uproldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_ROL_Date'"
                :tableName='"YTNB_ROL_Date"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_ROL_Date'"
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
import VTable from '@/components/public/vtablePage251'
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
      menuArr: ['备货上限', 'PO下达', '上月剩余备货', '备货暗送关系', '拆分规则', 'InvTime', 'ROL Date']
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
          DOWNLOAD_BAT_PATH: 'YTNB_实际PO_Download'
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
          DOWNLOAD_BAT_PATH: 'YTNB_DF预估供应_Download'
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
