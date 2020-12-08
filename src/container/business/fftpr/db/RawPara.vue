<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>TPR 目标
              <div class="form-box">
                <upload
                  @on-success="updateTprTgt"
                  @updateTimeChange="updateTprTgt1"
                  :sheetsName="'TPR_目标'"
                  :logTableName="'TPR_Target'"
                  :logObj="'gridTprTgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TPR_目标'"
                :tableName="'TPR_Target'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_目标'"
                ref="gridTprTgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>TPR PN Para
              <div class="form-box">
                <upload
                  @on-success="updateTprpnpara"
                  @updateTimeChange="updateTprpnpara1"
                  :sheetsName="'TPR_PN_Para'"
                  :logTableName="'TPR_PN_Para'"
                  :logObj="'gridTprpnpara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TPR_PN_Para'"
                :tableName="'TPR_PN_Para'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_PN_Para'"
                ref="gridTprpnpara">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>TPR TOP BP
              <div class="form-box">
                <upload
                  @on-success="updateTprtopbp"
                  @updateTimeChange="updateTprtopbp1"
                  :sheetsName="'TPR_TOP_BP'"
                  :logTableName="'TPR_TOP_BP'"
                  :logObj="'gridTprtopbp'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TPR_TOP_BP'"
                :tableName="'TPR_TOP_BP'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_TOP_BP'"
                ref="gridTprtopbp">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>TPR 暗送关系
              <div class="form-box">
                <Upload
                  @on-success="updatepipo"
                  @updateTimeChange="updatepipo1"
                  :sheetsName="'TPR_暗送关系'"
                  :logTableName="'TPR_PIPO'"
                  :logObj="'gridpipo'">
                </Upload>
              </div>
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'TPR_暗送关系'"
                :tableName="'TPR_PIPO'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_暗送关系'"
                ref="gridpipo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="tarItem">
          <div class="block">
            <h2>TPR Report Para
              <div class="form-box">
                <upload
                  @on-success="updatereppara"
                  @updateTimeChange="updatereppara1"
                  :sheetsName="'TPR_Report_Para'"
                  :logTableName="'TPR_Report_Para'"
                  :logObj="'gridreppara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TPR_Report_Para'"
                :tableName="'TPR_Report_Para'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_Report_Para'"
                ref="gridreppara">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="tarItem">
          <div class="block">
            <h2>TPR CF Ops 话术
              <div class="form-box">
                <upload
                  @on-success="updatecfops"
                  @updateTimeChange="updatecfops1"
                  :sheetsName="'TPR_CF_Ops_话术'"
                  :logTableName="'TPR_CF_Ops_Answer'"
                  :logObj="'gridcfops'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'TPR_CF_Ops_话术'"
                :tableName="'TPR_CF_Ops_Answer'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'TPR_CF_Ops_话术'"
                ref="gridcfops">
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
      menuArr: ['目标', 'PN Para', 'TOP BP', '暗送关系', 'Report Para', 'CF Ops 话术']
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
    updateTprTgt () { // 上传后自动刷新表格数据
      this.$refs.gridTprTgt.updateTabFun()
    },
    updateTprTgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridTprTgt.updateTimeChange()
    },
    updateTprpnpara () { // 上传后自动刷新表格数据
      this.$refs.gridTprpnpara.updateTabFun()
    },
    updateTprpnpara1 () { // 上传后自动刷新表格数据
      this.$refs.gridTprpnpara.updateTimeChange()
    },
    updateTprtopbp () { // 上传后自动刷新表格数据
      this.$refs.gridTprtopbp.updateTabFun()
    },
    updateTprtopbp1 () { // 上传后自动刷新表格数据
      this.$refs.gridTprtopbp.updateTimeChange()
    },
    updatepipo () { // 上传后自动刷新表格数据
      this.$refs.gridpipo.updateTabFun()
    },
    updatepipo1 () { // 上传后自动刷新表格数据
      this.$refs.gridpipo.updateTimeChange()
    },
    updatereppara () { // 上传后自动刷新表格数据
      this.$refs.gridreppara.updateTabFun()
    },
    updatereppara1 () { // 上传后自动刷新表格数据
      this.$refs.gridreppara.updateTimeChange()
    },
    updatecfops () { // 上传后自动刷新表格数据
      this.$refs.gridcfops.updateTabFun()
    },
    updatecfops1 () { // 上传后自动刷新表格数据
      this.$refs.gridcfops.updateTimeChange()
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
