<template>
<div class="inv-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="invitem">
        <div class="block">
          <h2>远期库存清单
            <div class="form-box">
              <upload
                :sheetsName="'Think_远期库存清单'"
                @on-success="updateFutureFGI"
                @updateTimeChange="updateFutureFGI1"
                :logTableName="'Think_Future_FGI'"
                :logObj="'thinkFutureFGI'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'Think_远期库存清单'"
              :tableName="'Think_Future_FGI'"
              :source="'FF_IDSS_Data_Think'"
              :fileName="'Think_远期库存清单'"
              ref="gridFutureFGI">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="invitem">
        <div class="block">
          <h2>超期库存消耗计划
            <div class="form-box">
              <upload
                :sheetsName="'Think_超期库存消耗计划'"
                @on-success="updateConsumePlan"
                @updateTimeChange="updateConsumePlan1"
                :logTableName="'Think_Aging_Consume_Plan'"
                :logObj="'thinkConsumePlan'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'Think_超期库存消耗计划'"
              :tableName="'Think_Aging_Consume_Plan'"
              :source="'FF_IDSS_Data_Think'"
              :fileName="'Think_超期库存消耗计划'"
              ref="gridConsumePlan">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="invitem">
        <div class="block">
          <h2>PI超期消耗计划
            <div class="form-box">
              <upload
                :sheetsName="'Think_PI超期消耗计划'"
                @on-success="updatePIAging"
                @updateTimeChange="updatePIAging1"
                :logTableName="'Think_PI_Aging_Consume_Plan'"
                :logObj="'thinkPIAging'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'Think_PI超期消耗计划'"
              :tableName="'Think_PI_Aging_Consume_Plan'"
              :source="'FF_IDSS_Data_Think'"
              :fileName="'Think_PI超期消耗计划'"
              ref="gridPIAging">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[3]" class="invitem">
        <div class="block">
          <h2>水位预警
            <div class="form-box">
              <upload
                :sheetsName="'Think_水位预警'"
                @on-success="updateAlert"
                @updateTimeChange="updateAlert1"
                :logTableName="'Think_Stock_Alert'"
                :logObj="'thinkAlert'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'Think_水位预警'"
              :tableName="'Think_Stock_Alert'"
              :source="'FF_IDSS_Data_Think'"
              :fileName="'Think_水位预警'"
              ref="gridAlert">
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
      menuArr: ['远期库存清单', '超期库存消耗计划', 'PI超期消耗计划', '水位预警']
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
    updateFutureFGI () { // 上传后自动刷新表格数据
      this.$refs.gridFutureFGI.updateTabFun()
    },
    updateFutureFGI1 () { // 上传后自动刷新表格数据
      this.$refs.gridFutureFGI.updateTimeChange()
    },
    updateConsumePlan () { // 上传后自动刷新表格数据
      this.$refs.gridConsumePlan.updateTabFun()
    },
    updateConsumePlan1 () { // 上传后自动刷新表格数据
      this.$refs.gridConsumePlan.updateTimeChange()
    },
    updatePIAging () { // 上传后自动刷新表格数据
      this.$refs.gridPIAging.updateTabFun()
    },
    updatePIAging1 () { // 上传后自动刷新表格数据
      this.$refs.gridPIAging.updateTimeChange()
    },
    updateAlert () { // 上传后自动刷新表格数据
      this.$refs.gridAlert.updateTabFun()
    },
    updateAlert1 () { // 上传后自动刷新表格数据
      this.$refs.gridAlert.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .invitem
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
</style>
