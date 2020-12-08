<template>
  <div class="PendingPO">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="poItem">
          <div class="block">
            <h2>Think BS PendingPO
              <div class="form-box">
                <updata
                  @on-success="thinkpo"
                  :menuId="'69'"
                  :logTableName="'Think_BS_PendingPO'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_PendingPO'"
                :tableName='"Think_BS_PendingPO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_PendingPO'"
                ref="gridPendingPO" >
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
      menuArr: ['BS PendingPO']
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
    thinkpo () {
      this.$refs.gridPendingPO.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.PendingPO
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .poItem
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
