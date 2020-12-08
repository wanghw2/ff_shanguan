<template>
  <div class="allo-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货结果
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货结果'"
                :tableName="'ConNB_Alloc_Analysis'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货结果'"
                ref="cnbAllocAnalysis">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货欠单明细
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货欠单明细'"
                :tableName="'ConNB_Alloc_Openbacklog'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货欠单明细'"
                ref="cnbAllo" >
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
      menuArr: ['分货结果', '分货欠单明细']
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
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allo-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .alloItem
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
        padding-left 20px
        margin-bottom 5px
        background #fafafa
        padding 0 20px
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
