<template>
  <div class="allpipo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pIpo">
          <div class="block">
            <h2>ConNB 备货进度
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'ConNB_备货进度'"
                :tableName="'ConNB_Replenishment_Report'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_备货进度'"
                ref="griddisplay">
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
import VTable from '@/components/public/vtablePage251'
export default {
  data () {
    return {
      menuArr: ['ConNB 备货进度'],
      tabPosition: 'left'
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
.allpipo
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pIpo
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
      .addpIpo
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
        box-shadow: 0 2px 8px #ccc
</style>
