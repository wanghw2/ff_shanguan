<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>运力修正
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运力修正'"
                :tableName="'FF_Logstic_FCST_Status'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运力修正'"
                ref="gridpdtpara1">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>运力Commit
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara2"
                  @updateTimeChange="updatepdtpara2s"
                  :logTableName="'FF_Logstic_Capacity_Commit'"
                  :sheetsName="'运力Commit'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运力Commit'"
                :tableName="'FF_Logstic_Capacity_Commit'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运力Commit'"
                ref="gridpdtpara2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>运力监控
              <div class="form-box">
                <updata
                  @on-success="updatepdtpara3"
                  :menuId="'1'"
                  :menuName="''"
                  :logTableName="'FF_Logstic_Capacity_Dashboard'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运力监控'"
                :tableName="'FF_Logstic_Capacity_Dashboard'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运力监控'"
                ref="gridpdtpara3">
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
import Updata from '@/components/public/updata'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['运力修正', '运力Commit', '运力监控']
    }
  },
  components: {
    Upload,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatepdtpara2 () {
      this.$refs.gridpdtpara2.updateTabFun()
    },
    updatepdtpara2s () {
      this.$refs.gridpdtpara2.updateTimeChange()
    },
    updatepdtpara3 () {
      this.$refs.gridpdtpara3.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pdtItem
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
        margin-bottom 5px
        padding 0 20px
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
      .fold
        width 60px
        height 24px
        line-height 24px
        margin-top 6px
        margin-left 20px
        border-radius 6px
        text-align center
        float right
        color #fff
        border-radius 6px
        background #ff9933
        font-size 12px
        box-sizing border-box
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>




