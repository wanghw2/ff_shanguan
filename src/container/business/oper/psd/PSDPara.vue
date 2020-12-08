<template>
  <div class="callendar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="callendarItem">
          <div class="block">
            <h2>PSD原因归类
              <div class="form-box">
                <upload
                  @on-success="updataReasonCd"
                  @updateTimeChange="updataReasonCd1"
                  :sheetsName="'PSD原因归类'"
                  :logTableName="'FF_PSD_ReasonCode'"
                  :logObj="'gridReasonCd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'PSD原因归类'"
                :tableName="'FF_PSD_ReasonCode'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'PSD原因归类'"
                ref="gridReasonCd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="callendarItem">
          <div class="block">
            <h2>OTS参数
              <div class="form-box">
                <upload
                  @on-success="updateOTSPara"
                  @updateTimeChange="updateOTSPara1"
                  :logTableName="'FF_OTS_Para'"
                  :sheetsName="'OTS参数'"
                  :logObj="'gridOTSPara'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'OTS参数'"
                :tableName="'FF_OTS_Para'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'OTS参数'"
                ref="gridOTSPara" >
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
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['PSD原因归类', 'OTS参数']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      // this.optTab()
    }, 3000)
  },
  methods: {
    updataReasonCd () { // 上传后自动刷新表格数据
      this.$refs.gridReasonCd.updateTabFun()
    },
    updateOTSPara () { // 上传后自动刷新表格数据
      this.$refs.gridOTSPara.updateTabFun()
    },
    updataReasonCd1 () { // 上传后自动刷新表格数据
      this.$refs.gridReasonCd.updateTimeChange()
    },
    updateOTSPara1 () { // 上传后自动刷新表格数据
      this.$refs.gridOTSPara.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.callendar-box
  width 100%
  height 100%
  padding 10px
  .callendarItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
