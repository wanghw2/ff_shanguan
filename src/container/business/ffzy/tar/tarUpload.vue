<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ZY 目标
              <div class="form-box">
                <upload
                  @on-success="updatetarget"
                  @updateTimeChange="updatetarget1"
                  :sheetsName="'ZY_目标'"
                  :logTableName="'ZY_Target'"
                  :logObj="'gridtarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_目标'"
                :tableName="'ZY_Target'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_目标'"
                ref="gridtarget">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ZY Report Para
              <div class="form-box">
                <upload
                  @on-success="updatereppara"
                  @updateTimeChange="updatereppara1"
                  :sheetsName="'ZY_Report_Para'"
                  :logTableName="'ZY_Report_Para'"
                  :logObj="'gridreppara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_Report_Para'"
                :tableName="'ZY_Report_Para'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_Report_Para'"
                ref="gridreppara">
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
      menuArr: ['目标', 'Report Para']
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
    updatetarget () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTabFun()
    },
    updatetarget1 () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTimeChange()
    },
    updatereppara () { // 上传后自动刷新表格数据
      this.$refs.gridreppara.updateTabFun()
    },
    updatereppara1 () { // 上传后自动刷新表格数据
      this.$refs.gridreppara.updateTimeChange()
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
