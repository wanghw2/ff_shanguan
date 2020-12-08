<template>
<div class="inv-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="invitem">
        <div class="block">
          <h2>运力需求_系统
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'运力需求_系统'"
              :tableName="'ZY_Logstic_FCST_System'"
              :source="'FF_IDSS_Data_REL'"
              :fileName="'运力需求_系统'">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="invitem">
        <div class="block">
          <h2>ZY_运力需求_调整
            <div class="form-box">
              <upload-new
                @on-success="updatecommit"
                @updateTimeChange="updatecommit1"
                :dbName="'FF_IDSS_Data_REL'"
                :url="'/uploadAllFcstAdjust'"
                :sheetsName="'ZY_运力需求_调整'"
                :tableName='"ZY_Logstic_FCST_Adjust"'
                :logTableName='"ZY_运力需求_调整"'
                :logObj="'cdtcommit'">
              </upload-new>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ZY_运力需求_调整'"
              :tableName="'ZY_Logstic_FCST_Adjust'"
              :source="'FF_IDSS_Data_REL'"
              :fileName="'ZY_运力需求_调整'"
              ref="gridcommit">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="invitem">
        <div class="block">
          <h2>运力需求
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'运力需求'"
              :tableName="'ZY_Logstic_FCST'"
              :source="'FF_IDSS_Data_REL'"
              :fileName="'运力需求'">
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
import UploadNew from '@/components/public/upload5'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['运力需求_系统', '运力需求_调整', '运力需求']
    }
  },
  components: {
    UploadNew,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatecommit () {
      this.$refs.gridcommit.updateTabFun()
    },
    updatecommit1 () {
      this.$refs.gridcommit.updateTimeChange()
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
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
