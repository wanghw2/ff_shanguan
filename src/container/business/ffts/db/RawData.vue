<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>ConNB 未清PO
              <div class="form-box">
                <upload
                  ref="ConNBLCINV"
                  @on-success="updatecnbOpenPO"
                  @updateTimeChange="updatecnbOpenPO1"
                  :uploadFileName="'ConNB_未清PO_'"
                  :logTableName='"ConNB_Open_PO"'
                  :logObj="'ConNBLCINV'">
                </upload>
              </div>
            </h2>
            <div class="addcnbOpenPO">
              <v-table
                :sheetsName="'ConNB_未清PO'"
                :tableName='"ConNB_Open_PO"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_未清PO'"
                ref="gridcnbOpenPO">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>ConNB 库存明细
            </h2>
            <div class="addcnbSummarize">
              <v-table
                :sheetsName="'ConNB_库存明细'"
                :tableName='"ConNB_Summarize"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_库存明细'"
                ref="gridcnbSummarize">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>ConNB 欠单明细
            </h2>
            <div class="addcnbUnconfirmed">
              <v-table
                :sheetsName="'ConNB_欠单明细'"
                :tableName='"ConNB_Unconfirmed"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_欠单明细'"
                ref="gridcnbUnconfirmed">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>CON 客户细分
              <div class="form-box">
                <upload
                  @on-success="updateCustomerType"
                  @updateTimeChange="updateCustomerType1"
                  :logTableName="'CON_CustomerType'"
                  :logObj="'gridCustomerType'"
                  :uploadFileName="'CON_客户细分_'">
                </upload>
              </div>
            </h2>
            <div class="addCustomerType">
              <v-table
                :sheetsName="'CON_客户细分'"
                :tableName="'CON_CustomerType'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_客户细分'"
                ref="gridCustomerType">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>ConNB 欠单分析参数
              <div class="form-box">
                <upload
                  @on-success="updateBacklogPara"
                  @updateTimeChange="updateBacklogPara1"
                  :uploadFileName="'ConNB_欠单分析参数_'"
                  :logTableName="'ConNB_Backlog_Analysis_Para'"
                  :logObj="'gridBacklogPara'" >
                </upload>
              </div>
            </h2>
            <div class="addBacklogPara">
              <v-table
                :sheetsName="'ConNB_欠单分析参数'"
                :tableName="'ConNB_Backlog_Analysis_Para'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_欠单分析参数'"
                ref="gridBacklogPara">
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
      menuArr: ['未清PO', '库存明细', '欠单明细', '客户细分', '欠单分析参数']
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
    updatecnbOpenPO () {
      this.$refs.gridcnbOpenPO.updateTabFun()
    },
    updatecnbOpenPO1 () {
      this.$refs.gridcnbOpenPO.updateTimeChange()
    },
    updateCustomerType () { // 上传后自动刷新表格数据
      this.$refs.gridCustomerType.updateTabFun()
    },
    updateBacklogPara () { // 上传后自动刷新表格数据
      this.$refs.gridBacklogPara.updateTabFun()
    },
    updateCustomerType1 () { // 上传后自动刷新表格数据
      this.$refs.gridCustomerType.updateTimeChange()
    },
    updateBacklogPara1 () { // 上传后自动刷新表格数据
      this.$refs.gridBacklogPara.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .dbItem
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
      .addcnbOpenPO,.addcnbSummarize,.addcnbUnconfirmed,.addCustomerType,.addBacklogPara
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
        box-shadow: 0 2px 8px #ccc
</style>
