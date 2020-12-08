<template>
<div class="reg-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="regitem">
        <div class="block">
          <h2>CON YT 现金点
            <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            <div class="form-box">
              <upload
                :sheetsName="'CON_YT_现金点'"
                @on-success="updateconytcr"
                @updateTimeChange="updateconytcr1"
                :logTableName="'CON_YT_Credit_Refunds'"
                :logObj="'gridconytcr'">
              </upload>
            </div>
          </h2>
          <div class="addgrid addgrid1">
            <v-table
              :sheetsName="'CON_YT_现金点'"
              :tableName="'CON_YT_Credit_Refunds'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_YT_现金点'"
              ref="gridconytcr">
            </v-table>
          </div>
          <h2>CON 现金点
            <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid2">
            <v-table
              :sheetsName="'CON_现金点'"
              :tableName="'CON_Credit_Refunds'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_现金点'"
              ref="gridconcr">
            </v-table>
          </div>
          <h2>YT 现金点
            <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid3">
            <v-table-251
              :sheetsName="'YT_现金点'"
              :tableName="'YT_Credit_Refunds'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YT_现金点'"
              ref="gridytcr">
            </v-table-251>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="regitem">
        <div class="block">
          <h2>CON YT 可用信用额度
            <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            <div class="form-box">
              <upload
                :sheetsName="'CON_YT_可用信用额度'"
                @on-success="updateconytcl"
                @updateTimeChange="updateconytcl1"
                :logTableName="'CON_YT_Credit_Limit'"
                :logObj="'gridconytcl'">
              </upload>
            </div>
          </h2>
          <div class="addgrid addgrid4">
            <v-table
              :sheetsName="'CON_YT_可用信用额度'"
              :tableName="'CON_YT_Credit_Limit'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_YT_可用信用额度'"
              ref="gridconytcl">
            </v-table>
          </div>
          <h2>CON 可用信用额度
            <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid5">
            <v-table
              :sheetsName="'CON_可用信用额度'"
              :tableName="'CON_Credit_Limit'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_可用信用额度'"
              ref="gridconcl">
            </v-table>
          </div>
          <h2>YT 可用信用额度
            <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid6">
            <v-table-251
              :sheetsName="'YT_可用信用额度'"
              :tableName="'YT_Credit_Limit'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YT_可用信用额度'"
              ref="gridytcl">
            </v-table-251>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="regitem">
        <div class="block">
          <h2>CON YT 应收账款逾期
            <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
            <div class="form-box">
              <upload
                :sheetsName="'CON_YT_应收账款逾期'"
                @on-success="updateconytaro"
                @updateTimeChange="updateconytaro1"
                :logTableName="'CON_YT_AR_Overdue'"
                :logObj="'gridconytaro'">
              </upload>
            </div>
          </h2>
          <div class="addgrid addgrid7">
            <v-table
              :sheetsName="'CON_YT_应收账款逾期'"
              :tableName="'CON_YT_AR_Overdue'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_YT_应收账款逾期'"
              ref="gridconytaro">
            </v-table>
          </div>
          <h2>CON 应收账款逾期
            <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid8">
            <v-table
              :sheetsName="'CON_应收账款逾期'"
              :tableName="'CON_AR_Overdue'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_应收账款逾期'"
              ref="gridconaro">
            </v-table>
          </div>
          <h2>YT 应收账款逾期
            <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid9">
            <v-table-251
              :sheetsName="'YT_应收账款逾期'"
              :tableName="'YT_AR_Overdue'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YT_应收账款逾期'"
              ref="gridytaro">
            </v-table-251>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[3]" class="regitem">
        <div class="block">
          <h2>CON 渠道目标 （渠道编号前需补0）
            <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
            <div class="form-box">
              <upload
                :sheetsName="'CON_渠道目标'"
                @on-success="updateconbptarget"
                @updateTimeChange="updateconbptarget1"
                :logTableName="'CON_Target_BP'"
                :logObj="'gridconbptarget'">
              </upload>
            </div>
          </h2>
          <div class="addgrid addgrid10">
            <v-table
              :sheetsName="'CON_渠道目标'"
              :tableName="'CON_Target_BP'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_渠道目标'"
              ref="gridconbptarget">
            </v-table>
          </div>
          <h2>YT 渠道目标 （渠道编号前需补0）
            <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
            <div class="form-box">
              <upload
                :sheetsName="'YT_渠道目标'"
                @on-success="updateytbptarget"
                @updateTimeChange="updateytbptarget1"
                :logTableName="'YT_Target_BP'"
                :logObj="'gridytbptarget'">
              </upload>
            </div>
          </h2>
          <div class="addgrid addgrid11">
            <v-table-251
              :sheetsName="'YT_渠道目标'"
              :tableName="'YT_Target_BP'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YT_渠道目标'"
              ref="gridytbptarget">
            </v-table-251>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[4]" class="regitem">
        <div class="block">
          <h2>ConNB 战区目标
            <a href="javascript:;" class="fold" @click="toggleList12" v-text="toggle12 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid12">
            <v-table
              :sheetsName="'ConNB_战区目标'"
              :tableName="'ConNB_Target_11'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_战区目标'">
            </v-table>
          </div>
          <h2>ConDT 战区目标
            <a href="javascript:;" class="fold" @click="toggleList13" v-text="toggle13 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid13">
            <v-table
              :sheetsName="'ConDT_战区目标'"
              :tableName="'ConDT_Target_11'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConDT_战区目标'">
            </v-table>
          </div>
          <h2>YTNB 战区目标
            <a href="javascript:;" class="fold" @click="toggleList14" v-text="toggle14 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid14">
            <v-table-251
              :sheetsName="'YTNB_战区目标'"
              :tableName="'YTNB_Target_11'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YTNB_战区目标'">
            </v-table-251>
          </div>
          <h2>YTDT 战区目标
            <a href="javascript:;" class="fold" @click="toggleList15" v-text="toggle15 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid15">
            <v-table-251
              :sheetsName="'YTDT_战区目标'"
              :tableName="'YTDT_Target_11'"
              :source="'FF_IDSS_Data_YT'"
              :fileName="'YTDT_战区目标'">
            </v-table-251>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[5]" class="regitem">
        <div class="block">
          <h2>提货计划
            <div class="form-box">
              <upload
                :sheetsName="'CON_提货计划'"
                @on-success="updateDemandPlan"
                @updateTimeChange="updateDemandPlan1"
                :logTableName="'CON_Demand_Plan'"
                :logObj="'cnbfgiol'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'CON_提货计划'"
              :tableName="'CON_Demand_Plan'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'CON_提货计划'"
              ref="gridDemandPlan">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtablePage'
import Upload from '@/components/public/upload1'
import VTable251 from '@/components/public/vtablePage251'
export default {
  data () {
    return {
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
      toggle11: true,
      toggle12: true,
      toggle13: true,
      toggle14: true,
      toggle15: true,
      tabPosition: 'left',
      menuArr: ['现金点', '可用信用额度', '应收账款逾期', '渠道目标', '战区目标', '提货计划']
    }
  },
  components: {
    Upload,
    VTable,
    VTable251
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
      this.toggleList11()
      this.toggleList12()
      this.toggleList13()
      this.toggleList14()
      this.toggleList15()
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
    toggleList11 () {
      let addgrid = document.getElementsByClassName('addgrid11')[0]
      if (this.toggle11) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle11 = !this.toggle11
    },
    toggleList12 () {
      let addgrid = document.getElementsByClassName('addgrid12')[0]
      if (this.toggle12) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle12 = !this.toggle12
    },
    toggleList13 () {
      let addgrid = document.getElementsByClassName('addgrid13')[0]
      if (this.toggle13) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle13 = !this.toggle13
    },
    toggleList14 () {
      let addgrid = document.getElementsByClassName('addgrid14')[0]
      if (this.toggle14) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle14 = !this.toggle14
    },
    toggleList15 () {
      let addgrid = document.getElementsByClassName('addgrid15')[0]
      if (this.toggle15) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle15 = !this.toggle15
    },
    updateconytcr () {
      this.$refs.gridconytcr.updateTabFun()
      this.$refs.gridconcr.updateTabFun()
      this.$refs.gridytcr.updateTabFun()
    },
    updateconytcr1 () {
      this.$refs.gridconytcr.updateTimeChange()
    },
    updateconytcl () {
      this.$refs.gridconytcl.updateTabFun()
      this.$refs.gridconcl.updateTabFun()
      this.$refs.gridytcl.updateTabFun()
    },
    updateconytcl1 () {
      this.$refs.gridconytcl.updateTimeChange()
    },
    updateconytaro () {
      this.$refs.gridconytaro.updateTabFun()
      this.$refs.gridconaro.updateTabFun()
      this.$refs.gridytaro.updateTabFun()
    },
    updateconytaro1 () {
      this.$refs.gridconytaro.updateTimeChange()
    },
    updateconbptarget () {
      this.$refs.gridconbptarget.updateTabFun()
    },
    updateconbptarget1 () {
      this.$refs.gridconbptarget.updateTimeChange()
    },
    updateytbptarget () {
      this.$refs.gridytbptarget.updateTabFun()
    },
    updateytbptarget1 () {
      this.$refs.gridytbptarget.updateTimeChange()
    },
    updateDemandPlan () {
      this.$refs.gridDemandPlan.updateTabFun()
    },
    updateDemandPlan1 () {
      this.$refs.gridDemandPlan.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
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
