<template>
  <div class="po-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="poItem">
          <div class="block">
            <h2>Think TP BTS新增需求
              <div class="form-box">
                <upload
                  @on-success="thinkBTSnewpoFun"
                  @updateTimeChange="thinkBTSnewpoFun1"
                  :logTableName="'Think_TP_BTS_NewPO'"
                  :sheetsName="'Think_TP_BTS新增需求'"
                  :logObj="'thinkBTSnewpo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_TP_BTS新增需求'"
                :tableName="'Think_TP_BTS_NewPO'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TP_BTS新增需求'"
                ref="thinkBTSnewpo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="poItem">
          <div class="block">
            <h2>Think TC T新增需求
              <div class="form-box">
                <upload
                  @on-success="thinktcNewPO"
                  @updateTimeChange="thinktcNewPO1"
                  :sheetsName="'Think_TC_T新增需求'"
                  :logTableName="'Think_TC_T_NewPO'"
                  :logObj="'thinktcPO'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_TC_T新增需求'"
                :tableName="'Think_TC_T_NewPO'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TC_T新增需求'"
                ref="thinktcPO">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="poItem">
          <div class="block">
            <h2>Think TC&TS GAB新增需求
              <div class="form-box">
                <upload
                  :sheetsName="'Think_TC&TS_GAB新增需求'"
                  @on-success="updatethinkGABNewPO"
                  @updateTimeChange="updatethinkGABNewPO1"
                  :logTableName='"Think_TC_TS_GAB_NewPO"'
                  :logObj="'tsGabNewPO'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_TC&TS_GAB新增需求'"
                :tableName='"Think_TC_TS_GAB_NewPO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TC&TS_GAB新增需求'"
                ref="gridtsGabNewPO" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="poItem">
          <div class="block">
            <h2>Think TS新增需求
              <div class="form-box">
                <upload
                  :sheetsName="'Think_TS新增需求'"
                  @on-success="updatethinkNewpo"
                  @updateTimeChange="updatethinkNewpo1"
                  :logTableName='"Think_TS_NewPO"'
                  :logObj="'thinktspo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_TS新增需求'"
                :tableName='"Think_TS_NewPO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_TS新增需求'"
                ref="gridthinktspo" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="poItem">
          <div class="block">
            <h2>Think 当日需求
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_当日需求'"
                :tableName='"Think_BS_Intraday"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_当日需求'"
                ref="gridbs" >
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
      menuArr: ['TP BTS新增需求', 'TC T新增需求', 'TC&TS GAB新增需求', 'TS新增需求', '当日需求']
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
    thinkBTSnewpoFun () { // 上传后自动刷新表格数据
      this.$refs.thinkBTSnewpo.updateTabFun()
    },
    thinktcNewPO () { // 上传后自动刷新表格数据
      this.$refs.thinktcPO.updateTabFun()
    },
    updatethinkGABNewPO () {
      this.$refs.gridtsGabNewPO.updateTabFun()
    },
    updatethinkNewpo () {
      this.$refs.gridthinktspo.updateTabFun()
    },
    thinkBTSnewpoFun1 () { // 上传后自动刷新表格数据
      this.$refs.thinkBTSnewpo.updateTimeChange()
    },
    thinktcNewPO1 () { // 上传后自动刷新表格数据
      this.$refs.thinktcPO.updateTimeChange()
    },
    updatethinkGABNewPO1 () {
      this.$refs.gridtsGabNewPO.updateTimeChange()
    },
    updatethinkNewpo1 () {
      this.$refs.gridthinktspo.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.po-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .poItem
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
