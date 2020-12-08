<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>Tablet 目标
              <div class="form-box">
                <upload
                  @on-success="TabletMkttgt"
                  @updateTimeChange="TabletMkttgt1"
                  :sheetsName="'Tablet_目标'"
                  :logTableName="'Tablet_Target'"
                  :logObj="'TabletMkttgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Tablet_目标'"
                :tableName="'Tablet_Target'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Tablet_目标'"
                ref="TabletMkttgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>Tablet 财务目标
              <div class="form-box">
                <upload
                  @on-success="TabletFintgt"
                  @updateTimeChange="TabletFintgt1"
                  :sheetsName="'Tablet_财务目标'"
                  :logTableName="'Tablet_Financial_Target'"
                  :logObj="'TabletFintgt'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Tablet_财务目标'"
                :tableName="'Tablet_Financial_Target'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Tablet_财务目标'"
                ref="TabletFintgt">
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
      menuArr: ['目标', '财务目标']
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
    TabletMkttgt () { // 上传后自动刷新表格数据
      this.$refs.TabletMkttgt.updateTabFun()
    },
    TabletMkttgt1 () { // 上传后自动刷新表格数据
      this.$refs.TabletMkttgt.updateTimeChange()
    },
    TabletFintgt () { // 上传后自动刷新表格数据
      this.$refs.TabletFintgt.updateTabFun()
    },
    TabletFintgt1 () { // 上传后自动刷新表格数据
      this.$refs.TabletFintgt.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
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
