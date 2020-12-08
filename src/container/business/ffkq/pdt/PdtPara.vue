<template>
  <div class="tarupload">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>KQ 预估供应
              <div class="form-box">
                <upload
                  @on-success="updateReplmt"
                  @updateTimeChange="updateReplmt1"
                  :sheetsName="'KQ_预估供应'"
                  :logTableName="'KQ_预估供应'"
                  :logObj="'gridReplmt'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_预估供应'"
                :tableName="'KQ_Replenishment_Limit'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_预估供应'"
                ref="gridReplmt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>KQ InvTime
              <div class="form-box">
                <upload
                  @on-success="updatinvtime"
                  @updateTimeChange="updatinvtime1"
                  :sheetsName="'KQ_InvTime'"
                  :logTableName="'KQ_InvTime'"
                  :logObj="'KQinvtime'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_InvTime'"
                :tableName="'KQ_InvTime'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_InvTime'"
                ref="KQinvtime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>KQ ROL date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'KQ_ROL_date'"
                  :logTableName="'KQ_ROL_date'"
                  :logObj="'gridroldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_ROL_date'"
                :tableName="'KQ_ROL_date'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_ROL_date'"
                ref="gridroldate">
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
import VTable from '@/components/public/vtablePage251'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['预估供应', 'InvTime', 'ROL Date']
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
    updateReplmt () { // 上传后自动刷新表格数据
      this.$refs.gridReplmt.updateTabFun()
    },
    updateReplmt1 () { // 上传后自动刷新表格数据
      this.$refs.gridReplmt.updateTimeChange()
    },
    updatinvtime () { // 上传后自动刷新表格数据
      this.$refs.KQinvtime.updateTabFun()
    },
    updatinvtime1 () { // 上传后自动刷新表格数据
      this.$refs.KQinvtime.updateTimeChange()
    },
    updateroldate () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTimeChange()
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

