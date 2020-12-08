<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ZY FCST Commit
              <div class="form-box">
                <upload
                  @on-success="updatefcst"
                  @updateTimeChange="updatefcst1"
                  :sheetsName="'ZY_FCST_Commit'"
                  :logTableName="'ZY_FCST_Commit'"
                  :logObj="'gridfcst'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_FCST_Commit'"
                :tableName="'ZY_FCST_Commit'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_FCST_Commit'"
                ref="gridfcst">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ZY FCST Opt
              <div class="form-box">
                <upload
                  @on-success="updatefcstopt"
                  @updateTimeChange="updatefcstopt1"
                  :sheetsName="'ZY_FCST_Opt'"
                  :logTableName="'ZY_FCST_Opt'"
                  :logObj="'gridfcstopt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_FCST_Opt'"
                :tableName="'ZY_FCST_Opt'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_FCST_Opt'"
                ref="gridfcstopt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtablePage251'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['预测Commit', '选件预测']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatefcst () { // 上传后自动刷新表格数据
      this.$refs.gridfcst.updateTabFun()
    },
    updatefcst1 () { // 上传后自动刷新表格数据
      this.$refs.gridfcst.updateTimeChange()
    },
    updatefcstopt () { // 上传后自动刷新表格数据
      this.$refs.gridfcstopt.updateTabFun()
    },
    updatefcstopt1 () { // 上传后自动刷新表格数据
      this.$refs.gridfcstopt.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-uploadTarget
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .tarItem
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
