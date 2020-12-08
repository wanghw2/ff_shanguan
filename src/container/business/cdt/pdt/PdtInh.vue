<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>ConDT 投产进度
              <a class="small">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatepdtpara1"
                  :menuId="'307'"
                  :menuName="''"
                  :logTableName="'ConDT_Replenishment_Overview_Inhouse'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_投产进度'"
                :tableName="'ConDT_Replenishment_Overview_Inhouse'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_投产进度'"
                ref="gridpdtpara1">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>ConDT 工单监控
              <a class="small">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatepdtpara2"
                  :menuId="'307'"
                  :menuName="''"
                  :logTableName="'ConDT_MO_Dashboard'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_工单监控'"
                :tableName="'ConDT_MO_Dashboard'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_工单监控'"
                ref="gridpdtpara2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['投产进度', '工单监控']
    }
  },
  components: {
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatepdtpara1 () {
      this.$refs.gridpdtpara1.updateTabFun()
    },
    updatepdtpara2 () {
      this.$refs.gridpdtpara2.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtpara
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
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>




