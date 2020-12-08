<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConDT 目标
              <div class="form-box">
                <upload
                  ref="markete"
                  @on-success="updateTarget"
                  @updateTimeChange="updateTarget1"
                  :sheetsName="'ConDT_目标'"
                  :logTableName='"ConDT_Target"'
                  :logObj="'markete'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_目标'"
                :tableName='"ConDT_Target"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_目标'"
                ref="gridTarget" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ConDT 5S节奏
              <div class="form-box">
                <upload
                  @on-success="cdtCAweekRatio"
                  @updateTimeChange="cdtCAweekRatio1"
                  :sheetsName="'ConDT_5S节奏'"
                  :logTableName="'ConDT_CA_WeekRatio'"
                  :logObj="'cdtweekRatio'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_5S节奏'"
                :tableName="'ConDT_CA_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_5S节奏'"
                ref="cdtweekRatio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>ConDT 分货目标
              <div class="form-box">
                <Upload
                  @on-success="updatefhsx"
                  @updateTimeChange="updatefhsx1"
                  :sheetsName="'ConDT_分货目标'"
                  :logTableName="'ConDT_Alloc_Target'"
                  :logObj="'cnbfhsx'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_分货目标'"
                :tableName="'ConDT_Alloc_Target'"
                :fileName="'ConDT_分货目标'"
                :source="'FF_IDSS_Data_CON'"
                ref="cnbfhsx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>ConDT 分货节奏
              <div class="form-box">
                <Upload
                  @on-success="updatefhjz"
                  @updateTimeChange="updatefhjz1"
                  :sheetsName="'ConDT_分货节奏'"
                  :logTableName="'ConDT_Alloc_WeekRatio'"
                  :logObj="'cnbfhjz'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_分货节奏'"
                :tableName="'ConDT_Alloc_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_分货节奏'"
                ref="cnbfhjz" >
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
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['目标', '5S节奏', '分货目标', '分货节奏']
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
    updatefhsx () {
      this.$refs.cnbfhsx.updateTabFun()
    },
    updatefhjz () {
      this.$refs.cnbfhjz.updateTabFun()
    },
    updatefhsx1 () {
      this.$refs.cnbfhsx.updateTimeChange()
    },
    updatefhjz1 () {
      this.$refs.cnbfhjz.updateTimeChange()
    },
    cdtCAweekRatio () { // 上传后自动刷新表格数据
      this.$refs.cdtweekRatio.updateTabFun()
    },
    cdtCAweekRatio1 () { // 上传后自动刷新表格数据
      this.$refs.cdtweekRatio.updateTimeChange()
    },
    updateTarget () {
      this.$refs.gridTarget.updateTabFun()
    },
    updateTarget1 () {
      this.$refs.gridTarget.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tar-box
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
