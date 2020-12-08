<template>
  <div class="eol-eol">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="eol">
          <div class="block">
            <h2>ConNB LTS
              <div class="form-box">
                <upload
                  @on-success="updataLTS"
                  @updateTimeChange="updataLTS1"
                  :uploadFileName="'ConNB_LTS_'"
                  :logTableName="'ConNB_LTS_List'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addLTS">
              <v-table
                :sheetsName="'ConNB_LTS'"
                :tableName="'ConNB_LTS_List'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_LTS'"
                ref="cnblis">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="eol">
          <div class="block">
            <h2 class="h2">ConNB EOL
              <div class="form-box">
                <upload
                  @on-success="updataEol"
                  @updateTimeChange="updataEol1"
                  :uploadFileName="'ConNB_EOL_'"
                  :logTableName="'ConNB_EOL_List'"
                  :logObj="'eol'">
                </upload>
              </div>
            </h2>
            <div class="addEOL">
              <v-table
                :sheetsName="'ConNB_EOL'"
                :tableName="'ConNB_EOL_List'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_EOL'"
                ref="cnbeol">
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
import VTable from '@/components/public/vtablePage251'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['LTS', 'EOL'],
      serverUrl: domainUrl
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
    updataLTS () {
      this.$refs.cnblis.updateTabFun()
    },
    updataEol () { // 调用自动更新新数据的方法
      this.$refs.cnbeol.updateTabFun()
    },
    updataLTS1 () {
      this.$refs.cnblis.updateTimeChange()
    },
    updataEol1 () {
      this.$refs.cnbeol.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.eol-eol
  width 100%
  height 100%
  overflow hidden
  .eol
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
        margin-bottom 10px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
          height auto
          float right
      .addLTS,.addEOL
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
        box-shadow 0 2px 8px #ccc
</style>
