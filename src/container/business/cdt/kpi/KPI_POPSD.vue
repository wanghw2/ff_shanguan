<template>
  <div class="kpi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="kpiItem">
          <div class="block">
            <h2>ConDT PSD考核范围
              <div class="form-box">
                <upload
                  @on-success="updateODMPSD"
                  @updateTimeChange="updateODMPSD1"
                  :sheetsName="'ConDT_PSD考核范围'"
                  :logTableName="'ConDT_ODM_PSD'"
                  :logObj="'cnbPSD'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_PSD考核范围'"
                :tableName="'ConDT_ODM_PSD'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PSD考核范围'"
                ref="cnbODMPSD">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="kpiItem">
          <div class="block">
            <h2 class="h2">ConDT PSD准确率
              <div class="form-box">
                <updata
                  @on-success="updataAccuracyReport"
                  :menuId="'394'"
                  :logTableName="'ConDT_PSD_Accuracy_Report'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_PSD准确率'"
                :tableName="'ConDT_PSD_Accuracy_Report'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PSD准确率'"
                ref="cnbAccuracyReport">
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
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['PSD考核范围', 'PSD准确率']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.optTab()
    }, 3000)
  },
  methods: {
    updateODMPSD () {
      this.$refs.cnbODMPSD.updateTabFun()
    },
    updateODMPSD1 () {
      this.$refs.cnbODMPSD.updateTimeChange()
    },
    updataAccuracyReport () { // 调用自动更新新数据的方法
      this.$refs.cnbAccuracyReport.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.kpi-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .kpiItem
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
