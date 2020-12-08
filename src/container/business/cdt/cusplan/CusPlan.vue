<template>
  <div class="cus-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="cusItem">
          <div class="block">
            <h2>ConDT 提货计划 MTM
              <div class="form-box">
                <upload
                  @on-success="updateShipPlanMTM"
                  @updateTimeChange="updateShipPlanMTM1"
                  :sheetsName="'ConDT_提货计划_MTM'"
                  :logTableName="'ConDT_ShipPlan_MTM'"
                  :logObj="'gridShipPlanMTM'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_提货计划_MTM'"
                :tableName="'ConDT_ShipPlan_MTM'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_提货计划_MTM'"
                ref="gridShipPlanMTM">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="cusItem">
          <div class="block">
            <h2>ConDT 提货计划 BP
              <div class="form-box">
                <upload
                  @on-success="updateShipPlanBP"
                  @updateTimeChange="updateShipPlanBP1"
                  :logTableName="'ConDT_ShipPlan_BP'"
                  :sheetsName="'ConDT_提货计划_BP'"
                  :logObj="'gridShipPlanBP'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_提货计划_BP'"
                :tableName="'ConDT_ShipPlan_BP'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_提货计划_BP'"
                ref="gridShipPlanBP">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="cusItem">
          <div class="block">
            <h2>ConDT 来单计划
              <div class="form-box">
                <upload
                  ref="tsGabNewPO"
                  @on-success="updateSaleOrderPlan"
                  @updateTimeChange="updateSaleOrderPlan1"
                  :logTableName='"ConDT_SaleOrder_Plan"'
                  :sheetsName="'ConDT_来单计划'"
                  :logObj="'tsGabNewPO'">
                </upload>
              </div>
            </h2>
            <div class="addSaleOrderPlan">
              <v-table
                :sheetsName="'ConDT_来单计划'"
                :tableName='"ConDT_SaleOrder_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_来单计划 '"
                ref="gridSaleOrderPlan">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="cusItem">
          <div class="block">
            <h2>ConDT 提货计划看板 BP
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_提货计划看板_BP'"
                :tableName='"ConDT_ShipPlan_Dashboard_BP"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_提货计划看板_BP'"
                ref="gridDashboardBP" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="cusItem">
          <div class="block">
            <h2>ConDT 来单计划看板
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_来单计划看板'"
                :tableName='"ConDT_SaleOrder_Plan_Dashboard"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_来单计划看板'"
                ref="gridPlanDashboard" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['提货MTM', '提货BP', '来单计划', '计划看板MTM', '计划看板BP', '来单计划看板']
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
    updateShipPlanMTM () { // 上传后自动刷新表格数据
      this.$refs.gridShipPlanMTM.updateTabFun()
    },
    updateShipPlanBP () { // 上传后自动刷新表格数据
      this.$refs.gridShipPlanBP.updateTabFun()
    },
    updateSaleOrderPlan () {
      this.$refs.gridSaleOrderPlan.updateTabFun()
    },
    updateShipPlanMTM1 () { // 上传后自动刷新表格数据
      this.$refs.gridShipPlanMTM.updateTimeChange()
    },
    updateShipPlanBP1 () { // 上传后自动刷新表格数据
      this.$refs.gridShipPlanBP.updateTimeChange()
    },
    updateSaleOrderPlan1 () {
      this.$refs.gridSaleOrderPlan.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.cus-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .cusItem
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

