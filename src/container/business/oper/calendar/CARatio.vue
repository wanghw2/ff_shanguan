<template>
  <div class="calendar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="calendarItem">
          <div class="block">
            <h2>节奏参数
              <div class="form-box">
                <upload
                  @on-success="FF_RatioPara"
                  @updateTimeChange="FF_RatioPara1"
                  :sheetsName="'节奏参数'"
                  :logTableName="'FF_RatioPara'"
                  :logObj="'FFRatio'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'节奏参数'"
                :tableName="'FF_RatioPara'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'节奏参数'"
                ref="gridFFRatio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="calendarItem">
          <div class="block">
            <h2>到天节奏
              <div class="form-box">
                <upload
                  @on-success="updatedayrio"
                  @updateTimeChange="updatedayrio1"
                  :sheetsName="'FF_DayRatio'"
                  :logTableName="'FF_DayRatio'"
                  :logObj="'griddayrio'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_DayRatio'"
                :tableName="'FF_DayRatio'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_DayRatio'"
                ref="griddayrio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="calendarItem">
          <div class="block">
            <h2>节奏汇总
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'节奏汇总'"
                :tableName='"FF_DayRatio_TTL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'节奏汇总'">
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
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['节奏参数', '到天节奏', '节奏汇总']
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
    updatedayrio () {
      this.$refs.griddayrio.updateTabFun()
    },
    updatedayrio1 () {
      this.$refs.griddayrio.updateTimeChange()
    },
    FF_RatioPara () { // 上传后自动刷新表格数据
      this.$refs.gridFFRatio.updateTabFun()
    },
    FF_RatioPara1 () { // 上传后自动刷新表格数据
      this.$refs.gridFFRatio.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.calendar-box
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
  .calendarItem
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
