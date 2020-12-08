<template>
  <div class="mtm-BOH">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="BOH">
          <div class="block">
            <h2>BS Backlog Issue 清单
              <div class="form-box">
                <upload
                  @on-success="updataBSBOHIssue"
                  @updateTimeChange="updataBSBOHIssue1"
                  :logTableName="'Think_BS_BOH_Issue'"
                  :sheetsName="'Think_BS_BOH_Issue清单'"
                  :logObj="'BOH'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_BOH_Issue清单'"
                :tableName="'Think_BS_BOH_Issue'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_BOH_Issue清单'"
                ref="thinkBOH">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="BOH">
          <div class="block">
            <h2 class="h2">Think BS BOH
              <div class="form-box">
                <updata
                  @on-success="updateBOH"
                  :menuId="'71'"
                  :logTableName="'Think_BS_BOH'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BS_BOH'"
                :tableName="'Think_BS_BOH'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BS_BOH'"
                ref="gridBoh">
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
import Updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['BS Backlog Issue 清单', 'Think BS BOH']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateBOH () {
      this.$refs.gridBoh.updateTabFun()
    },
    updataBSBOHIssue () { // 调用自动更新新数据的方法
      this.$refs.thinkBOH.updateTabFun()
    },
    updataBSBOHIssue1 () {
      this.$refs.thinkBOH.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-BOH
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .BOH
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
