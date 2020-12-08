<template>
  <div class="psd-psd">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="psd">
          <div class="block">
            <h2>ConNB PSD考核范围
              <div class="form-box">
                <upload
                  @on-success="updateODMPSD"
                  @updateTimeChange="updateODMPSD1"
                  :logTableName="'ConNB_ODM_PSD'"
                  :logObj="'cnbPSD'">
                </upload>
              </div>
            </h2>
            <div class="addODMPSD">
              <v-table
                :sheetsName="'ConNB_PSD考核'"
                :tableName="'ConNB_ODM_PSD'"
                :source="'ConNB'"
                :fileName="'ConNB_PSD考核'"
                ref="cnbODMPSD">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="psd">
          <div class="block">
            <h2 class="h2">ConNB PSD准确率
              <div class="form-box">
                <updata
                  @on-success="updataAccuracyReport"
                  :menuId="'394'"
                  :logTableName="'ConNB_PSD_Accuracy_Report'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addPSDAccuracyReport">
              <v-table
                :sheetsName="'ConNB_PSD准确率'"
                :tableName="'ConNB_PSD_Accuracy_Report'"
                :source="'ConNB'"
                :fileName="'ConNB_PSD准确率'"
                ref="cnbAccuracyReport">
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
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      menuArr: ['PSD考核范围', 'PSD准确率'],
      tabPosition: 'left',
      serverUrl: domainUrl
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
    updateODMPSD () {
      this.$refs.cnbODMPSD.updateTabFun()
    },
    updataAccuracyReport () { // 调用自动更新新数据的方法
      this.$refs.cnbAccuracyReport.updateTabFun()
    },
    updateODMPSD1 () {
      this.$refs.cnbODMPSD.updateTimeChange()
    },
    updataAccuracyReport1 () {
      this.$refs.cnbAccuracyReport.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.psd-psd
  width 100%
  height 100%
  overflow hidden
  .psd
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
      .addODMPSD,.addPSDAccuracyReport
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
        box-shadow 0 2px 8px #ccc
</style>
