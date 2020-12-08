<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>FF WW LBG NB ATS
              <div class="form-box">
                <upload
                  @on-success="updateffwwlbgnbats"
                  @updateTimeChange="updateffwwlbgnbats1"
                  :sheetsName="'FF_WW_LBG_NB_ATS'"
                  :logTableName='"FF_WW_LBG_NB_ATS"'
                  :logObj="'gridffwwlbgnbats'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_WW_LBG_NB_ATS'"
                :tableName='"FF_WW_LBG_NB_ATS"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_LBG_NB_ATS'"
                ref="gridffwwlbgnbats">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>FF WW ATS SCI
              <div class="form-box">
                <upload
                  @on-success="updateffwwatssci"
                  @updateTimeChange="updateffwwatssci1"
                  :sheetsName="'FF_WW_ATS_SCI'"
                  :logTableName='"FF_WW_ATS_SCI"'
                  :logObj="'gridffwwatssci'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_WW_ATS_SCI'"
                :tableName='"FF_WW_ATS_SCI"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_ATS_SCI'"
                ref="gridffwwatssci">
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
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['LBG NB ATS', 'WW ATS SCI']
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
  created () {
  },
  methods: {
    updateffwwlbgnbats () {
      this.$refs.gridffwwlbgnbats.updateTabFun()
    },
    updateffwwlbgnbats1 () {
      this.$refs.gridffwwlbgnbats.updateTimeChange()
    },
    updateffwwatssci () {
      this.$refs.gridffwwatssci.updateTabFun()
    },
    updateffwwatssci1 () {
      this.$refs.gridffwwatssci.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
  .content
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
        margin-bottom 10px
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
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
