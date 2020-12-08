<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>YTDT 未清PO</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_未清PO'"
                :tableName='"YTDT_Open_PO"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_未清PO'"
                ref="gridcnbOpenPO">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>YTDT 库存明细
            </h2>
            <div class="addcnbSummarize">
              <v-table
                :sheetsName="'YTDT_库存明细'"
                :tableName='"YTDT_Summarize"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_库存明细'"
                ref="gridcnbSummarize">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>YTDT 欠单明细</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_欠单明细'"
                :tableName='"YTDT_Unconfirmed"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_欠单明细'"
                ref="gridcnbUnconfirmed">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>YTDT 工单明细</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_工单明细'"
                :tableName='"YTDT_Coois"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_工单明细'">
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
import VTable from '@/components/public/vtablePage251'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['未清PO', '库存明细', '欠单明细', '工单明细']
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
