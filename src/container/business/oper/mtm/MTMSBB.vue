<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>NB CPU标签
              <div class="form-box">
                <upload
                  ref="gridLabelcpuNB"
                  @on-success="updateLabelcpuNB"
                  @updateTimeChange="updateLabelcpuNB1"
                  :sheetsName="'FF_CPU标签_NB'"
                  :logTableName='"FF_SBB_Label_CPU_NB"'
                  :logObj="'gridLabelcpuNB'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_CPU标签_NB'"
                :tableName='"FF_SBB_Label_CPU_NB"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_CPU标签_NB'"
                ref="gridLabelcpuNB">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>DT CPU标签
              <div class="form-box">
                <upload
                  ref="gridcpuDT"
                  @on-success="updateLabelcpuDT"
                  @updateTimeChange="updateLabelcpuDT1"
                  :sheetsName="'FF_CPU标签_DT'"
                  :logTableName='"FF_SBB_Label_CPU_DT"'
                  :logObj="'gridLabelcpuDT'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_CPU标签_DT'"
                :tableName='"FF_SBB_Label_CPU_DT"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_CPU标签_DT'"
                ref="gridLabelcpuDT">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2>Think CPU标签
              <div class="form-box">
                <upload
                  @on-success="updateLabelcpuThink"
                  @updateTimeChange="updateLabelcpuThink1"
                  :sheetsName="'FF_CPU标签_Think'"
                  :logTableName='"FF_SBB_Label_CPU_Think"'
                  :logObj="'gridcpuThink'"
                  ref="gridLabelcpuThink">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_CPU标签_Think'"
                :tableName='"FF_SBB_Label_CPU_Think"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_CPU标签_Think'"
                ref="gridLabelcpuThink">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="mtmItem">
          <div class="block">
            <h2>FF CPU标签</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_CPU标签'"
                :tableName='"FF_SBB_Label_CPU"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_CPU标签'"
                ref="gridLabelcpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="mtmItem">
          <div class="block">
            <h2>FF CPU平台
              <div class="form-box">
                <upload
                  @on-success="updatecpuplatform"
                  @updateTimeChange="updatecpuplatform1"
                  :sheetsName="'FF_CPU平台'"
                  :logTableName='"FF_CPU_Platform"'
                  :logObj="'gridcpuplatform'"
                  ref="gridcpuplatform">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_CPU平台'"
                :tableName='"FF_CPU_Platform"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_CPU平台'"
                ref="gridcpuplatform">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
import Updata from '@/components/public/updata'
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['NB CPU标签', 'DT CPU标签', 'Think CPU标签', 'FF CPU标签', 'FF CPU平台']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateLabelcpuNB () {
      this.$refs.gridLabelcpuNB.updateTabFun()
      this.$refs.gridLabelcpu.updateTabFun()
    },
    updateLabelcpuNB1 () {
      this.$refs.gridLabelcpuNB.updateTimeChange()
    },
    updateLabelcpuDT () {
      this.$refs.gridLabelcpuDT.updateTabFun()
      this.$refs.gridLabelcpu.updateTabFun()
    },
    updateLabelcpuDT1 () {
      this.$refs.gridLabelcpuDT.updateTimeChange()
    },
    updateLabelcpuThink () {
      this.$refs.gridLabelcpuThink.updateTabFun()
      this.$refs.gridLabelcpu.updateTabFun()
    },
    updateLabelcpuThink1 () {
      this.$refs.gridLabelcpuThink.updateTimeChange()
    },
    updatecpuplatform () {
      this.$refs.gridcpuplatform.updateTabFun()
    },
    updatecpuplatform1 () {
      this.$refs.gridcpuplatform.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
  width 100%
  height 100%
  padding 10px
  .mtmItem
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
        font-size 13px
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
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
        .emailBtn
          background #e6199e
          &:hover
            background #ca3997
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
