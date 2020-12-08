<template>
  <div class="miix-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>MIIX ROL Date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'MIIX_ROL_Date'"
                  :logTableName="'MIIX_ROL_Date'"
                  :logObj="'gridroldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'MIIX_ROL_Date'"
                :tableName="'MIIX_ROL_Date'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_ROL_Date'"
                ref="gridroldate">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>MIIX InvTime
              <div class="form-box">
                <upload
                  @on-success="updateinvtime"
                  @updateTimeChange="updateinvtime1"
                  :sheetsName="'MIIX_InvTime'"
                  :logTableName="'MIIX_invtime'"
                  :logObj="'gridinvtime'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'MIIX_InvTime'"
                :tableName="'MIIX_invtime'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_InvTime'"
                ref="gridinvtime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['ROL Date', 'InvTime']
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
    updateroldate () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTimeChange()
    },
    updateinvtime () { // 上传后自动刷新表格数据
      this.$refs.gridinvtime.updateTabFun()
    },
    updateinvtime1 () { // 上传后自动刷新表格数据
      this.$refs.gridinvtime.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.miix-box
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
