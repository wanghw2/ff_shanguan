<template>
  <div class="thinkModify">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="modify">
          <div class="block">
            <h2>Think BS 修改
              <div class="form-box">
                <upload
                  @on-success="updateTpgbsModify"
                  @updateTimeChange="updateTpgbsModify1"
                  :logTableName="'Think_BS_Modify'"
                  :sheetsName="'Think_BS_修改'"
                  :logObj="'modify'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_修改'"
                :tableName="'Think_BS_Modify'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_修改'"
                ref="thinkmodify">
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
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['BS 修改']
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
    updateTpgbsModify () { // 调用自动更新新数据的方法
      this.$refs.thinkmodify.updateTabFun()
    },
    updateTpgbsModify1 () {
      this.$refs.thinkmodify.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.thinkModify
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .modify
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
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
          height auto
          float right
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
