<template>
  <div class="ytdt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>YTDT 目标
              <div class="form-box">
                <upload
                  @on-success="updateTgt"
                  @updateTimeChange="updateTgt1"
                  :sheetsName="'YTDT_目标'"
                  :logTableName="'YTDT_Target'"
                  :logObj="'gridTgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_目标'"
                :tableName="'YTDT_Target'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_目标'"
                ref="gridTgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>YTDT 系列目标 Q1
              <div class="form-box">
                <upload
                  @on-success="updateQ1Tgt"
                  @updateTimeChange="updateQ1Tgt1"
                  :sheetsName="'YTDT_系列目标_Q1'"
                  :logTableName="'YTDT_Target_Series_Q1'"
                  :logObj="'gridQ1Tgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_系列目标_Q1'"
                :tableName="'YTDT_Target_Series_Q1'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_系列目标_Q1'"
                ref="gridQ1Tgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>YTDT 系列目标 Q2
              <div class="form-box">
                <upload
                  @on-success="updateQ2Tgt"
                  @updateTimeChange="updateQ2Tgt1"
                  :sheetsName="'YTDT_系列目标_Q2'"
                  :logTableName="'YTDT_Target_Series_Q2'"
                  :logObj="'gridQ2Tgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_系列目标_Q2'"
                :tableName="'YTDT_Target_Series_Q2'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_系列目标_Q2'"
                ref="gridQ2Tgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>YTDT 系列目标 Q3
              <div class="form-box">
                <upload
                  @on-success="updateQ3Tgt"
                  @updateTimeChange="updateQ3Tgt1"
                  :sheetsName="'YTDT_系列目标_Q3'"
                  :logTableName="'YTDT_Target_Series_Q3'"
                  :logObj="'gridQ3Tgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_系列目标_Q3'"
                :tableName="'YTDT_Target_Series_Q3'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_系列目标_Q3'"
                ref="gridQ3Tgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="tarItem">
          <div class="block">
            <h2>YTDT 系列目标 Q4
              <div class="form-box">
                <upload
                  @on-success="updateQ4Tgt"
                  @updateTimeChange="updateQ4Tgt1"
                  :sheetsName="'YTDT_系列目标_Q4'"
                  :logTableName="'YTDT_Target_Series_Q4'"
                  :logObj="'gridQ4Tgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_系列目标_Q4'"
                :tableName="'YTDT_Target_Series_Q4'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_系列目标_Q4'"
                ref="gridQ4Tgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="tarItem">
          <div class="block">
            <h2>YTDT 系列目标 年度</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_系列目标_年度'"
                :tableName="'YTDT_Target_Series_Tran'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_系列目标_年度'"
                ref="gridTgttran">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="tarItem">
          <div class="block">
            <h2>YTDT 四厂比例
              <div class="form-box">
                <upload
                  @on-success="updatefacrate"
                  @updateTimeChange="updatefacrate1"
                  :sheetsName="'YTDT_四厂比例'"
                  :logTableName="'YTDT_BOX_Factory_Rate'"
                  :logObj="'gridfacrate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_四厂比例'"
                :tableName="'YTDT_BOX_Factory_Rate'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_四厂比例'"
                ref="gridfacrate">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="tarItem">
          <div class="block">
            <h2>YTDT 预测编码
              <div class="form-box">
                <upload
                  @on-success="updatefcstpn"
                  @updateTimeChange="updatefcstpn1"
                  :sheetsName="'YTDT_预测编码'"
                  :logTableName="'YTDT_FCST_Order_PN'"
                  :logObj="'gridfcstpn'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_预测编码'"
                :tableName="'YTDT_FCST_Order_PN'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_预测编码'"
                ref="gridfcstpn">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="tarItem">
          <div class="block">
            <h2>YTDT 渠道对应关系
              <div class="form-box">
                <upload
                  @on-success="updatebppara"
                  @updateTimeChange="updatebppara1"
                  :sheetsName="'YTDT_渠道对应关系'"
                  :logTableName="'YTDT_BP_Para'"
                  :logObj="'gridbppara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_渠道对应关系'"
                :tableName="'YTDT_BP_Para'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_渠道对应关系'"
                ref="gridbppara">
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
      menuArr: ['目标', '系列目标Q1', '系列目标Q2', '系列目标Q3', '系列目标Q4', '系列目标年度', '四厂比例', '预测编码', '渠道对应关系']
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
    updateTgt () { // 上传后自动刷新表格数据
      this.$refs.gridTgt.updateTabFun()
    },
    updateTgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridTgt.updateTimeChange()
    },
    updateQ1Tgt () { // 上传后自动刷新表格数据
      this.$refs.gridQ1Tgt.updateTabFun()
      this.$refs.gridTgttran.updateTabFun()
    },
    updateQ1Tgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridQ1Tgt.updateTimeChange()
    },
    updateQ2Tgt () { // 上传后自动刷新表格数据
      this.$refs.gridQ2Tgt.updateTabFun()
      this.$refs.gridTgttran.updateTabFun()
    },
    updateQ2Tgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridQ2Tgt.updateTimeChange()
    },
    updateQ3Tgt () { // 上传后自动刷新表格数据
      this.$refs.gridQ3Tgt.updateTabFun()
      this.$refs.gridTgttran.updateTabFun()
    },
    updateQ3Tgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridQ3Tgt.updateTimeChange()
    },
    updateQ4Tgt () { // 上传后自动刷新表格数据
      this.$refs.gridQ4Tgt.updateTabFun()
      this.$refs.gridTgttran.updateTabFun()
    },
    updateQ4Tgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridQ4Tgt.updateTimeChange()
    },
    updatefacrate () { // 上传后自动刷新表格数据
      this.$refs.gridfacrate.updateTabFun()
    },
    updatefacrate1 () { // 上传后自动刷新表格数据
      this.$refs.gridfacrate.updateTimeChange()
    },
    updatefcstpn () { // 上传后自动刷新表格数据
      this.$refs.gridfcstpn.updateTabFun()
    },
    updatefcstpn1 () { // 上传后自动刷新表格数据
      this.$refs.gridfcstpn.updateTimeChange()
    },
    updatebppara () { // 上传后自动刷新表格数据
      this.$refs.gridbppara.updateTabFun()
    },
    updatebppara1 () { // 上传后自动刷新表格数据
      this.$refs.gridbppara.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ytdt-box
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
