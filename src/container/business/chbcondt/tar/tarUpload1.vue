<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConDT 战区目标
              <div class="form-box">
                <upload
                  @on-success="uploadkhmb"
                  @updateTimeChange="uploadkhmb1"
                  :sheetsName="'ConDT_战区目标'"
                  :logTableName="'ConDT_Target_11'"
                  :logObj="'ConDTtarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_战区目标'"
                :tableName="'ConDT_Target_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_战区目标'"
                ref="gridtarget">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ConDT 年度目标
              <div class="form-box">
                <upload
                  @on-success="uploadcus"
                  @updateTimeChange="uploadcus1"
                  :sheetsName="'ConDT_年度目标'"
                  :logTableName="'ConDT_Target_Year_11'"
                  :logObj="'ConDTcus'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_年度目标'"
                :tableName="'ConDT_Target_Year_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_年度目标'"
                ref="gridcustar">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>ConDT 渠道目标
              <div class="form-box">
                <upload
                  @on-success="uploadqdmb"
                  @updateTimeChange="uploadqdmb1"
                  :sheetsName="'ConDT_渠道目标'"
                  :logTableName="'ConDT_Target_BP_11'"
                  :logObj="'gridqdmb'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_渠道目标'"
                :tableName="'ConDT_Target_BP_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_渠道目标'"
                ref="gridqdmb" >
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
      menuArr: ['战区目标', '年度目标', '渠道目标']
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
    uploadkhmb () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTabFun()
    },
    uploadkhmb1 () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTimeChange()
    },
    uploadcus () { // 上传后自动刷新表格数据
      this.$refs.gridcustar.updateTabFun()
    },
    uploadcus1 () { // 上传后自动刷新表格数据
      this.$refs.gridcustar.updateTimeChange()
    },
    uploadqdmb () { // 上传后自动刷新表格数据
      this.$refs.gridqdmb.updateTabFun()
    },
    uploadqdmb1 () { // 上传后自动刷新表格数据
      this.$refs.gridqdmb.updateTimeChange()
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
