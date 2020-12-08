<template>
  <div class="optPara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="optItem">
          <div class="block">
            <h2>Think 硬捆绑选件备注
              <div class="form-box">
                <upload
                  @on-success="updateBundleopt"
                  @updateTimeChange="updateBundleopt1"
                  :sheetsName="'Think硬捆绑选件备注'"
                  :logTableName='"Think_Bundle_OPT_Remark"'
                  :logObj="'gridBundleopt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'Think硬捆绑选件备注'"
                :tableName='"Think_Bundle_OPT_Remark"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think硬捆绑选件备注'"
                ref="gridBundleopt">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="optItem">
          <div class="block">
            <h2>Think 选件备货清单
              <div class="form-box">
                <upload
                  :sheetsName="'Think选件备货清单'"
                  @on-success="updateoptinv"
                  @updateTimeChange="updateoptinv1"
                  :logTableName="'Think_OPT_Prebuild_INV'"
                  :logObj="'gridoptinv'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think选件备货清单'"
                :tableName="'Think_OPT_Prebuild_INV'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件备货清单'"
                ref="gridoptinv">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="optItem">
          <div class="block">
            <h2>Think 选件报关清单
              <div class="form-box">
                <upload
                  ref="gridoptimport"
                  :sheetsName="'Think选件报关清单'"
                  @on-success="updateoptimport"
                  @updateTimeChange="updateoptimport1"
                  :logTableName='"Think_OPT_Import"'
                  :logObj="'gridoptimport'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think选件报关清单'"
                :tableName='"Think_OPT_Import"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件报关清单'"
                ref="gridoptimport" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="optItem">
          <div class="block">
            <h2>Think 选件备注
              <div class="form-box">
                <upload
                  @on-success="updateoptremark"
                  @updateTimeChange="updateoptremark1"
                  :sheetsName="'Think选件备注'"
                  :logTableName="'Think_OPT_Remark'"
                  :logObj="'gridoptremark'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'Think选件备注'"
                :tableName="'Think_OPT_Remark'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件备注'"
                ref="gridoptremark">
              </vtable-edit>
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
import vtableEdit from '@/components/public/vtableEdit'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['硬捆绑选件备注', '选件备货清单', '选件报关清单', '选件备注']
    }
  },
  components: {
    Upload,
    VTable,
    vtableEdit
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateoptinv () { // 上传后自动刷新表格数据
      this.$refs.gridoptinv.updateTabFun()
    },
    updateoptremark () { // 上传后自动刷新表格数据
      this.$refs.gridoptremark.updateTabFun()
    },
    updateBundleopt () {
      this.$refs.gridBundleopt.updateTabFun()
    },
    updateoptimport () {
      this.$refs.gridoptimport.updateTabFun()
    },
    updateoptinv1 () { // 上传后自动刷新表格数据
      this.$refs.gridoptinv.updateTimeChange()
    },
    updateoptremark1 () { // 上传后自动刷新表格数据
      this.$refs.gridoptremark.updateTimeChange()
    },
    updateBundleopt1 () {
      this.$refs.gridBundleopt.updateTimeChange()
    },
    updateoptimport1 () {
      this.$refs.gridoptimport.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.optPara
  width 100%
  height 100%
  padding 10px
  overflow hidden
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
        padding 0 20px
        margin-bottom 5px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>

