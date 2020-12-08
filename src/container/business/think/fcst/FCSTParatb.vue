
<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>TB 预测Commit
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Think_TB_预测Commit'"
                  @on-success="updateFcstcommit"
                  @updateTimeChange="updateFcstcommit1"
                  :logTableName='"Think_TB_FCST_Commit"'
                  :logObj="'gridFcstcommit'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_TB_预测Commit'"
                :fileName="'Think_TB_预测Commit'"
                :tableName='"Think_TB_FCST_Commit"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridFcstcommit">
              </v-table>
            </div>
            <h2>TB Commit Gap
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Think_TB_Commit_Gap'"
                  @on-success="updatecommitgap"
                  @updateTimeChange="updatecommitgap1"
                  :logTableName='"Think_TB_Commit_Gap"'
                  :logObj="'gridcommitgap'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'Think_TB_Commit_Gap'"
                :fileName="'Think_TB_Commit_Gap'"
                :tableName='"Think_TB_Commit_Gap"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcommitgap">
              </v-table>
            </div>
            <h2>TB 预测
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_TB_预测'"
                :fileName="'Think_TB_预测'"
                :tableName='"Think_TB_FCST"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridFcst">
              </v-table>
            </div>
            <h2>TB Commit
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Think_TB_Commit'"
                :fileName="'Think_TB_Commit'"
                :tableName='"Think_TB_Commit"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcommit">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>TB 预测Commit 汇总
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'Think_TB_预测Commit_汇总'"
                :fileName="'Think_TB_预测Commit_汇总'"
                :tableName='"Think_TB_FCST_Commit_TTL"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridFcstcommitttl">
              </v-table>
            </div>
            <h2>TB 预测 汇总
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'Think_TB_预测_汇总'"
                :fileName="'Think_TB_预测_汇总'"
                :tableName='"Think_TB_FCST_TTL"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridFcstttl">
              </v-table>
            </div>
            <h2>TB Commit 汇总
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'Think_TB_Commit_汇总'"
                :fileName="'Think_TB_Commit_汇总'"
                :tableName='"Think_TB_Commit_TTL"'
                :source="'FF_IDSS_Data_Think'" 
                ref="gridcommitttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <h2>TB CPU分货
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatecpualloc"
                  @updateTimeChange="updatecpualloc1"
                  :sheetsName="'Think_TB_CPU分货'"
                  :logTableName='"Think_TB_CPU_Allocation"'
                  :logObj="'gridcpualloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'Think_TB_CPU分货'"
                :tableName='"Think_TB_CPU_Allocation"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TB_CPU分货'"
                ref="gridcpualloc">
              </v-table>
            </div>
            <h2>TB CPU分货 汇总
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'Think_TB_CPU分货_汇总'"
                :tableName='"Think_TB_CPU_Allocation_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TB_CPU分货_汇总'"
                ref="gridcpuallocttl">
              </v-table> 
            </div>  
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
// const $ = window.$
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
      tabPosition: 'left',
      menuArr: ['TB 预测Commit', 'TB 预测Commit 汇总', 'TB CPU分货']
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
      this.toggleList6()
      this.toggleList7()
      this.toggleList8()
      this.toggleList9()
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
    updateFcstcommit () { // 上传后自动刷新表格数据
      this.$refs.gridFcstcommit.updateTabFun()
      this.$refs.gridFcst.updateTabFun()
      this.$refs.gridFcstttl.updateTabFun()
      this.$refs.gridcommit.updateTabFun()
      this.$refs.gridcommitttl.updateTabFun()
      this.$refs.gridFcstcommitttl.updateTabFun()
    },
    updateFcstcommit1 () {
      this.$refs.gridFcstcommit.updateTimeChange()
    },
    updatecommitgap () {
      this.$refs.gridcommitgap.updateTabFun()
    },
    updatecommitgap1 () {
      this.$refs.gridcommitgap.updateTimeChange()
    },
    updatecpualloc () {
      this.$refs.gridcpualloc.updateTabFun()
      this.$refs.gridcpuallocttl.updateTabFun()
    },
    updatecpualloc1 () {
      this.$refs.gridcpualloc.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
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

