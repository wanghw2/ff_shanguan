<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConNB 客户目标
              <div class="form-box">
                <upload
                  @on-success="uploadkhmb"
                  @updateTimeChange="uploadkhmb1"
                  :sheetsName="'ConNB_客户目标'"
                  :logTableName="'ConNB_Customer_Target'"
                  :logObj="'Connbtarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_客户目标'"
                :tableName="'ConNB_Customer_Target'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_客户目标'"
                ref="gridtarget" >
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
      menuArr: ['客户目标']
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
    uploadkhmb () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTabFun()
    },
    uploadkhmb1 () { // 上传后自动刷新表格数据
      this.$refs.gridtarget.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-uploadTarget
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
