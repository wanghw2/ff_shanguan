<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>TS 目标
              <div class="form-box">
                <upload
                  @on-success="updateTSTgt"
                  @updateTimeChange="updateTSTgt1"
                  :sheetsName="'TS_目标'"
                  :logTableName="'TS_Target'"
                  :logObj="'TSTgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TS_目标'"
                :tableName="'TS_Target'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TS_目标'"
                ref="TSTgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>TS 分区任务
              <div class="form-box">
                <upload
                  @on-success="updateTSregTgt"
                  @updateTimeChange="updateTSregTgt1"
                  :sheetsName="'TS_分区任务'"
                  :logTableName="'TS_Target_Region'"
                  :logObj="'TSregTgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TS_分区任务'"
                :tableName="'TS_Target_Region'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TS_分区任务'"
                ref="TSregTgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>TS 分区行业参数
              <div class="form-box">
                <upload
                  @on-success="updateTSparareg"
                  @updateTimeChange="updateTSparareg1"
                  :sheetsName="'TS_分区行业参数'"
                  :logTableName="'TS_Para_Region_Industry'"
                  :logObj="'TSparareg'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TS_分区行业参数'"
                :tableName="'TS_Para_Region_Industry'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TS_分区行业参数'"
                ref="TSparareg">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>TS 暗送关系 显示器
              <div class="form-box">
                <upload
                  @on-success="updateTSprolcd"
                  @updateTimeChange="updateTSprolcd1"
                  :sheetsName="'TS_暗送关系_显示器'"
                  :logTableName="'TS_Products_LCD'"
                  :logObj="'TSprolcd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TS_暗送关系_显示器'"
                :tableName="'TS_Products_LCD'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TS_暗送关系_显示器'"
                ref="TSprolcd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="tarItem">
          <div class="block">
            <h2>TCR PN Para
              <div class="form-box">
                <upload
                  @on-success="updatetcrpnpara"
                  @updateTimeChange="updatetcrpnpara1"
                  :sheetsName="'TCR_PN_Para'"
                  :logTableName="'TCR_PN_Para'"
                  :logObj="'gridtcrpnpara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TCR_PN_Para'"
                :tableName="'TCR_PN_Para'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TCR_PN_Para'"
                ref="gridtcrpnpara">
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
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['目标', '分区任务', '分区行业参数', '暗送关系 显示器', 'TCR PN Para']
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
    updateTSTgt () { // 上传后自动刷新表格数据
      this.$refs.TSTgt.updateTabFun()
    },
    updateTSTgt1 () { // 上传后自动刷新表格数据
      this.$refs.TSTgt.updateTimeChange()
    },
    updateTSregTgt () { // 上传后自动刷新表格数据
      this.$refs.TSregTgt.updateTabFun()
    },
    updateTSregTgt1 () { // 上传后自动刷新表格数据
      this.$refs.TSregTgt.updateTimeChange()
    },
    updateTSprolcd () { // 上传后自动刷新表格数据
      this.$refs.TSprolcd.updateTabFun()
    },
    updateTSprolcd1 () { // 上传后自动刷新表格数据
      this.$refs.TSprolcd.updateTimeChange()
    },
    updateTSparareg () { // 上传后自动刷新表格数据
      this.$refs.TSparareg.updateTabFun()
    },
    updateTSparareg1 () { // 上传后自动刷新表格数据
      this.$refs.TSparareg.updateTimeChange()
    },
    updatetcrpnpara () { // 上传后自动刷新表格数据
      this.$refs.gridtcrpnpara.updateTabFun()
    },
    updatetcrpnpara1 () { // 上传后自动刷新表格数据
      this.$refs.gridtcrpnpara.updateTimeChange()
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
