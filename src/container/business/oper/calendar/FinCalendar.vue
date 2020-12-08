<template>
  <div class="callendar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="callendarItem">
          <div class="block">
            <h2>财务日历
              <div class="form-box">
                <upload
                  @on-success="updateFinCal"
                  @updateTimeChange="updateFinCal1"
                  :sheetsName="'财务日历'"
                  :logTableName="'FF_Financial_Calendar'"
                  :logObj="'gridFinCal'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'财务日历'"
                :tableName="'FF_Financial_Calendar'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'财务日历'"
                ref="gridFinCal">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="callendarItem">
          <div class="block">
            <h2>跨年日历
              <div class="form-box">
                <upload
                  @on-success="updateCalAdjust"
                  @updateTimeChange="updateCalAdjust1"
                  :sheetsName="'跨年日历'"
                  :logTableName="'FF_Calendar_Adjust'"
                  :logObj="'gridCalAdjust'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'跨年日历'"
                :tableName="'FF_Calendar_Adjust'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'跨年日历'"
                ref="gridCalAdjust">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="callendarItem">
          <div class="block">
            <h2>工作日
              <div class="form-box">
                <upload
                  @on-success="updateWorkday"
                  @updateTimeChange="updateWorkday1"
                  :sheetsName="'工作日'"
                  :logTableName="'FF_Workdays'"
                  :logObj="'gridWorkday'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'工作日'"
                :tableName="'FF_Workdays'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'工作日'"
                ref="gridWorkday">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="callendarItem">
          <div class="block">
            <h2>预测日历
              <div class="form-box">
                <upload
                  ref="gridFCSCal"
                  @on-success="updateFCSCal"
                  @updateTimeChange="updateFCSCal1"
                  :sheetsName="'预测日历'"
                  :logTableName="'FF_FCST_Calendar'"
                  :logObj="'gridFCSCal'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'预测日历'"
                :tableName='"FF_FCST_Calendar"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'预测日历'"
                ref="gridFCSCal">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="callendarItem">
          <div class="block">
            <h2>日历
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'日历'"
                :tableName="'FF_Calendar'"
                :source="'FF_IDSS_Calendar'"
                :fileName="'日历'"
                ref="gridFFCal">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="callendarItem">
          <div class="block">
            <h2>FF 节奏
              <div class="form-box">
                <upload
                  @on-success="updateffratio"
                  @updateTimeChange="updateffratio1"
                  :logTableName="'FF_WeekRatio'"
                  :sheetsName="'FF_节奏'"
                  :logObj="'gridffratio'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_节奏'"
                :tableName="'FF_WeekRatio'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_节奏'"
                ref="gridffratio">
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
import VTable from '@/components/public/vtablePage'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['财务日历', '跨年日历', '工作日', '预测日历', '日历', 'FF节奏']
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
    updateFinCal () { // 上传后自动刷新表格数据
      this.$refs.gridFinCal.updateTabFun()
    },
    updateWorkday () { // 上传后自动刷新表格数据
      this.$refs.gridWorkday.updateTabFun()
    },
    updateFCSCal () {
      this.$refs.gridFCSCal.updateTabFun()
    },
    updateCDTCal () {
      this.$refs.gridCDTCal.updateTabFun()
    },
    updateFinCal1 () { // 上传后自动刷新表格数据
      this.$refs.gridFinCal.updateTimeChange()
    },
    updateWorkday1 () { // 上传后自动刷新表格数据
      this.$refs.gridWorkday.updateTimeChange()
    },
    updateFCSCal1 () {
      this.$refs.gridFCSCal.updateTimeChange()
    },
    updateCDTCal1 () {
      this.$refs.gridCDTCal.updateTimeChange()
    },
    updateffratio () { // 上传后自动刷新表格数据
      this.$refs.gridffratio.updateTabFun()
    },
    updateffratio1 () { // 上传后自动刷新表格数据
      this.$refs.gridffratio.updateTimeChange()
    },
    updateCalAdjust () { // 上传后自动刷新表格数据
      this.$refs.gridCalAdjust.updateTabFun()
    },
    updateCalAdjust1 () { // 上传后自动刷新表格数据
      this.$refs.gridCalAdjust.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.callendar-box
  width 100%
  height 100%
  padding 10px
  .callendarItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
