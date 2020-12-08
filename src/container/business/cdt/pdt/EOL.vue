<template>
  <div class="eolbox">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>EOL 计划
              <div class="form-box">
                <upload
                  @on-success="updateEol1"
                  @updateTimeChange="updateEol1s"
                  :logTableName="'ConDT_ODM_EOL'"
                  :sheetsName="'EOL_计划'"
                  :logObj="'eol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'EOL_计划'"
                :tableName="'ConDT_ODM_EOL'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'EOL_计划'"
                ref="gridEol1">
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
      menuArr: ['EOL计划']
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
    updateEol1 () { // 调用自动更新新数据的方法
      this.$refs.gridEol1.updateTabFun()
    },
    updateEol1s () {
      this.$refs.gridEol1.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.eolbox
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pdtItem
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

