<template>
  <div class="optHardbundle">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>Think选件后续可供
              <div class="form-box">
                <updata
                  @on-success="cnbmtm"
                  :menuId="'76'"
                  :logTableName="'Think_OPT_PSD'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think选件后续可供'"
                :tableName='"Think_OPT_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件后续可供'"
                ref="gridmtm" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable2'
import updata from '@/components/public/updata'
// const $ = window.$
export default {
  data () {
    return {
      disabled: false,
      tabPosition: 'left',
      menuArr: ['选件后续可供']
    }
  },
  components: {
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    cnbmtm () {
      this.$refs.gridmtm.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.optHardbundle
  width 100%
  height 100%
  padding 10px
  .mtmItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
