<template>
  <div class="inv-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="invItem">
          <div class="block">
            <h2>COGS目标Q1
              <div class="form-box">
                <upload
                  @on-success="updateTarQ1"
                  @updateTimeChange="updateTarQ11"
                  :sheetsName="'COGS目标Q1'"
                  :logTableName="'FF_COGS_Target_Q1'"
                  :logObj="'gridTarQ1'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'COGS目标Q1'"
                :tableName="'FF_COGS_Target_Q1'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'COGS目标Q1'"
                ref="gridTarQ1">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="invItem">
          <div class="block">
            <h2>COGS目标Q2
              <div class="form-box">
                <upload
                  @on-success="updateTarQ2"
                  @updateTimeChange="updateTarQ21"
                  :sheetsName="'COGS目标Q2'"
                  :logTableName='"FF_COGS_Target_Q2"'
                  :logObj="'sbbuplod'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'COGS目标Q2'"
                :fileName="'COGS目标Q2'"
                :tableName='"FF_COGS_Target_Q2"'
                ref="gridTarQ2"
                :source="'FF_IDSS_Data_FF'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="invItem">
          <div class="block">
            <h2>COGS目标Q3
              <div class="form-box">
                <upload
                  @on-success="updateTarQ3"
                  @updateTimeChange="updateTarQ31"
                  :sheetsName="'COGS目标Q3'"
                  :logTableName='"FF_COGS_Target_Q3"'
                  :logObj="'TarQ3'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'COGS目标Q3'"
                :tableName='"FF_COGS_Target_Q3"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'COGS目标Q3'"
                ref="gridTarQ3">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="invItem">
          <div class="block">
            <h2>COGS目标Q4
              <div class="form-box">
                <upload
                  @on-success="updateTarQ4"
                  @updateTimeChange="updateTarQ41"
                  :sheetsName="'COGS目标Q4'"
                  :logTableName='"FF_COGS_Target_Q4"'
                  :logObj="'TarQ4'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'COGS目标Q4'"
                :tableName='"FF_COGS_Target_Q4"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'COGS目标Q4'"
                ref="gridTarQ4">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="invItem">
          <div class="block">
            <h2>DOI参数
              <div class="form-box">
                <upload
                  ref="TarPara"
                  @on-success="updateTarPara"
                  @updateTimeChange="updateTarPara1"
                  :logTableName='"FF_DOI_Target_Para"'
                  :logObj="'TarPara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'DOI参数'"
                :tableName='"FF_DOI_Target_Para"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'DOI参数'"
                ref="gridTarPara">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="invItem">
          <div class="block">
            <h2>DOI目标
              <div class="form-box">
                <upload
                  ref="dOITar"
                  @on-success="updateDOITar"
                  @updateTimeChange="updateDOITar1"
                  :logTableName='"FF_DOI_Target"'
                  :logObj="'dOITar'">
                </upload>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updateDOITar"
                  :menuId="'451'"
                  :logTableName="'FF_DOI_Target'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'DOI目标'"
                :tableName='"FF_DOI_Target"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'DOI目标'"
                ref="griddOITar" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="invItem">
          <div class="block">
            <h2>年度COGS目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'年度COGS目标'"
                :fileName="'年度COGS目标'"
                :tableName='"FF_COGS_Target"'
                ref="gridCOGTar"
                :source="'FF_IDSS_Data_FF'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="invItem">
          <div class="block">
            <h2>历年COGS目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'历年COGS目标'"
                :tableName='"FF_COGS_Target_TTL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'历年COGS目标'"
                ref="gridCOGTTL">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="invItem">
          <div class="block">
            <h2>年度DOI
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'年度DOI'"
                :tableName='"FF_DOI"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'年度DOI'">
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
import updata from '@/components/public/updata'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['COGS目标Q1', 'COGS目标Q2', 'COGS目标Q3', 'COGS目标Q4', 'DOI参数', 'DOI目标', '年度COGS目标', '历年COGS目标', '年度DOI']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateTarQ2 () { // 上传后自动刷新表格数据
      this.$refs.gridTarQ2.updateTabFun()
    },
    updateTarQ3 () {
      this.$refs.gridTarQ3.updateTabFun()
    },
    updateTarQ4 () {
      this.$refs.gridTarQ4.updateTabFun()
    },
    updateTarPara () {
      this.$refs.gridTarPara.updateTabFun()
    },
    updateDOITar () {
      this.$refs.griddOITar.updateTabFun()
    },
    updateTarQ1 () { // 上传后自动刷新表格数据
      this.$refs.gridTarQ1.updateTabFun()
    },
    updateTarQ21 () { // 上传后自动刷新表格数据
      this.$refs.gridTarQ2.updateTimeChange()
    },
    updateTarQ31 () {
      this.$refs.gridTarQ3.updateTimeChange()
    },
    updateTarQ41 () {
      this.$refs.gridTarQ4.updateTimeChange()
    },
    updateTarPara1 () {
      this.$refs.gridTarPara.updateTimeChange()
    },
    updateDOITar1 () {
      this.$refs.griddOITar.updateTimeChange()
    },
    updateTarQ11 () { // 上传后自动刷新表格数据
      this.$refs.gridTarQ1.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  .lpath
    position relative
    .btn
      height 30px
      width 139px
      position absolute
      right 22px
      top 6px
      .download-box
        width 139px
        height 30px
        position relative
        .el-icon-upload2
          margin-left 10px
        &:hover
          .submit
            background #00b000
            &.disabled
              background #ccc
              cursor not-allowed
        .input
          width 100%
          height 30px
          line-height 24px
          display block
          opacity 0
          position absolute
          left 0
          top 0
          z-index 99
          cursor pointer
        .submit
          z-index 1
          width 100%
          height 30px
          line-height 29px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #76d467
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
  .invItem
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
      .left,.right
        width 42%
        position relative
        border-radius 6px
        .small
          border-radius 6px
          height 24px
          width 60px
          line-height 24px
          text-align center
          position absolute
          border 0
          top 6px
          right 20px
          font-size 12px
          background #6ab7fc
          color #fff
          &:hover
            background #4691e4
      .left
        float left
        margin-right 1%
      .right
        float left
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
