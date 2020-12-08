<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbitem">
          <div class="block">
            <h2>ConNB 产销存
              <div class="form-box">
                <updata
                  @on-success="updateConsumer"
                  :menuId="'390'"
                  :logTableName="'ConNB_Consumer'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_产销存'"
                :tableName="'ConNB_Consumer'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_产销存'"
                ref="gridConsumer" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbitem">
          <div class="block">
            <h2>ConNB 实时统计
              <div class="form-box">
                <updata
                  @on-success="updateRealInventory"
                  :menuId="'390'"
                  :logTableName="'ConNB_RealTime_Inventory'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_实时统计'"
                :tableName="'ConNB_RealTime_Inventory'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_实时统计'"
                ref="gridRealInventory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbitem">
          <div class="block">
            <h2>ConNB 后续可供
              <div class="form-box">
                <updata
                  @on-success="updateToGoSupply"
                  :menuId="'390'"
                  :logTableName="'ConNB_ToGo_Supply'"
                  :proIndex="'3'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_后续可供'"
                :tableName='"ConNB_ToGo_Supply"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_后续可供'"
                ref="gridToGoSupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbitem">
          <div class="block">
            <h2>ConNB 欠单分析
              <div class="form-box">
                <updata
                  @on-success="updateBSummary"
                  :menuId="'390'"
                  :logTableName="'ConNB_Backlog_Analysis_Summary'"
                  :proIndex="'4'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB 欠单分析'"
                :tableName='"ConNB_Backlog_Analysis_Summary"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB 欠单分析'"
                ref="gridBSummary" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbitem">
          <div class="block">
            <h2>CON 欠单分析
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_欠单分析'"
                :tableName='"CON_Backlog_Analysis_Summary"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_欠单分析'"
                ref="gridCSSummary" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbitem">
          <div class="block">
            <h2>ConNB 月结监控
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_月结监控'"
                :tableName='"ConNB_ROL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_月结监控'"
                ref="gridROL">
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
import updata from '@/components/public/updata'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['产销存', '实时统计', '后续可供', '欠单分析', 'CON 欠单分析', '月结监控']
    }
  },
  components: {
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateConsumer () { // 上传后自动刷新表格数据
      this.$refs.gridConsumer.updateTabFun()
    },
    updateRealInventory () { // 上传后自动刷新表格数据
      this.$refs.gridRealInventory.updateTabFun()
    },
    updateToGoSupply () {
      this.$refs.gridToGoSupply.updateTabFun()
    },
    updateBSummary () {
      this.$refs.gridBSummary.updateTabFun()
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
  .dbitem
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
