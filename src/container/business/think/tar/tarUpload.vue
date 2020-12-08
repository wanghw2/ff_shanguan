<template>
  <div class="tarupload">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>目标
              <div class="form-box">
                <upload
                  @on-success="thinktgt"
                  @updateTimeChange="thinktgt1"
                  :sheetsName="'Think_目标'"
                  :logTableName="'Think_Target'"
                  :logObj="'gridthinktgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_目标'"
                :tableName="'Think_Target'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_目标'"
                ref="gridthinktgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>R 营销目标
              <div class="form-box">
                <upload
                  @on-success="thinkRmkttgt"
                  @updateTimeChange="thinkRmkttgt1"
                  :sheetsName="'Think_R_营销目标'"
                  :logTableName="'Think_R_Mkt_Target'"
                  :logObj="'gridthinkRmkttgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R_营销目标'"
                :tableName="'Think_R_Mkt_Target'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R_营销目标'"
                ref="gridthinkRmkttgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>T CA Outlook
              <div class="form-box">
                <upload
                  @on-success="updataCAOutlook"
                  @updateTimeChange="updataCAOutlook1"
                  :sheetsName="'Think_T_CA_Outlook'"
                  :logTableName="'Think_T_CA_Outlook'"
                  :logObj="'thinkOutlook'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_CA_Outlook'"
                :tableName="'Think_T_CA_Outlook'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_CA_Outlook'"
                ref="thinkOutlook">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>T DT 营销目标
              <div class="form-box">
                <upload
                  :sheetsName="'Think_T_DT_营销目标'"
                  @on-success="updateDTMkttgtmo"
                  @updateTimeChange="updateDTMkttgtmo1"
                  :logTableName='"Think_T_DT_Target_MO"'
                  :logObj="'thinkDTMkttgtmo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_DT_营销目标'"
                :tableName='"Think_T_DT_Target_MO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_DT_营销目标'"
                ref="gridthinkDTMkttgtmo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="tarItem">
          <div class="block">
            <h2>T NB 营销目标
              <div class="form-box">
                <upload
                  @on-success="updateNBMkttgtmo"
                  @updateTimeChange="updateNBMkttgtmo1"
                  :sheetsName="'Think_T_NB_营销目标'"
                  :logTableName='"Think_T_NB_Target_MO"'
                  :logObj="'thinkNBMkttgtmo'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_NB_营销目标'"
                :tableName='"Think_T_NB_Target_MO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_NB_营销目标'"
                ref="gridthinkNBMkttgtmo" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="tarItem">
          <div class="block">
            <h2>T 营销 Family
              <div class="form-box">
                <upload
                  @on-success="updatethinktmofamily"
                  @updateTimeChange="updatethinktmofamily1"
                  :sheetsName="'Think_T_营销_Family'"
                  :logTableName='"Think_T_NB_Target_MO"'
                  :logObj="'thinktmofamily'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_营销_Family'"
                :tableName='"Think_T_Family_Mapping_MO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_营销_Family'"
                ref="gridthinktmofamily" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="tarItem">
          <div class="block">
            <h2>目标汇总
              <div class="form-box">
                <updata
                  @on-success="thinktarol"
                  :menuId="'57'"
                  :logTableName="'Think_Target_OL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Target_OL'"
                :tableName='"Think_Target_OL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Target_OL'"
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
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtablePage'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['目标', 'R 营销目标', 'T CA Outlook', 'T DT 营销目标', 'T NB 营销目标', 'T 营销Family', '目标汇总']
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
    thinktgt () { // 上传后自动刷新表格数据
      this.$refs.gridthinktgt.updateTabFun()
    },
    thinktgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridthinktgt.updateTimeChange()
    },
    thinkRmkttgt () { // 上传后自动刷新表格数据
      this.$refs.gridthinkRmkttgt.updateTabFun()
    },
    updataCAOutlook () { // 上传后自动刷新表格数据
      this.$refs.thinkOutlook.updateTabFun()
    },
    updateDTMkttgtmo () {
      this.$refs.gridthinkDTMkttgtmo.updateTabFun()
    },
    updateNBMkttgtmo () {
      this.$refs.gridthinkNBMkttgtmo.updateTabFun()
    },
    thinkRmkttgt1 () { // 上传后自动刷新表格数据
      this.$refs.gridthinkRmkttgt.updateTimeChange()
    },
    updataCAOutlook1 () { // 上传后自动刷新表格数据
      this.$refs.thinkOutlook.updateTimeChange()
    },
    updateDTMkttgtmo1 () {
      this.$refs.gridthinkDTMkttgtmo.updateTimeChange()
    },
    updateNBMkttgtmo1 () {
      this.$refs.gridthinkNBMkttgtmo.updateTimeChange()
    },
    updatethinktmofamily () {
      this.$refs.gridthinktmofamily.updateTabFun()
    },
    updatethinktmofamily1 () {
      this.$refs.gridthinktmofamily.updateTimeChange()
    },
    thinktarol () {
      this.$refs.gridmtm.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tarupload
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

