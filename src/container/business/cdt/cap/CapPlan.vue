
<template>
  <div class="cap-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="cap-item">
          <div class="block">
            <h2>产能规划
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=产能规划')" >模板下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatePlan"
                  :menuId="'334'"
                  :logTableName="'FF_Inhouse_Capacity_Plan'"
                  :proIndex="'1'">
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'产能规划'"
                :tableName='"FF_Inhouse_Capacity_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'产能规划'"
                ref="gridPlan">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['产能规划']
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
    updatePlan () {
      this.$refs.gridPlan.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.cap-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .cap-item
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
