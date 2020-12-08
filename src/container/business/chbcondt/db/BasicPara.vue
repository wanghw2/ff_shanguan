<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>ConDT 渠道类型
              <div class="form-box">
                <upload
                  @on-success="updatecnbqdlx"
                  @updateTimeChange="updatecnbqdlx"
                  :sheetsName="'ConDT_渠道类型'"
                  :logTableName='"ConDT_BP_Type_11"'
                  :logObj="'ConNBqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_渠道类型'"
                :tableName='"ConDT_BP_Type_11"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_渠道类型'"
                ref="gridcnbqdlx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>CON 客户达成情况
              <div class="form-box">
                <upload
                  @on-success="updatekh"
                  @updateTimeChange="updatekh1"
                  :sheetsName="'CON_客户达成情况'"
                  :logTableName='"CON_Customer_Actual_51"'
                  :logObj="'khdcqk'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_客户达成情况'"
                :tableName='"CON_Customer_Actual_51"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_客户达成情况'"
                ref="gridkh" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>CON 网站访问量
              <div class="form-box">
                <upload
                  @on-success="updatenet"
                  @updateTimeChange="updatenet1"
                  :sheetsName="'CON_网站访问量'"
                  :logTableName='"CON_UV_Actual_61"'
                  :logObj="'net'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_网站访问量'"
                :tableName='"CON_UV_Actual_61"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_网站访问量'"
                ref="gridnet">
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
      menuArr: ['渠道类型', '客户达成情况', '网站访问量']
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
    updatecnbqdlx () {
      this.$refs.gridcnbqdlx.updateTabFun()
    },
    updatecnbqdlx1 () {
      this.$refs.gridcnbqdlx.updateTimeChange()
    },
    updatekh () { // 上传后自动刷新表格数据
      this.$refs.gridkh.updateTabFun()
    },
    updatekh1 () { // 上传后自动刷新表格数据
      this.$refs.gridkh.updateTabFun()
    },
    updatenet () { // 上传后自动刷新表格数据
      this.$refs.gridnet.updateTimeChange()
    },
    updatenet1 () { // 上传后自动刷新表格数据
      this.$refs.gridnet.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .dbItem
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
