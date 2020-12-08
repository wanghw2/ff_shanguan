<template>
  <div class="allo-customer">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>Think R GAB 客户名称
              <div class="form-box">
                <upload
                  @on-success="updatethinkrgabcus"
                  @updateTimeChange="updatethinkrgabcus1"
                  :logTableName="'Think_R_GAB_Customer'"
                  :sheetsName="'Think_R_GAB_客户名称'"
                  :logObj="'thinkrgabcus'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R_GAB_客户名称'"
                :tableName='"Think_R_GAB_Customer"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R_GAB_客户名称'"
                ref="thinkrgabcus">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>Think R GAB 物料
              <div class="form-box">
                <upload
                  @on-success="updatethinkrgabpn"
                  @updateTimeChange="updatethinkrgabpn1"
                  :logTableName="'Think_R_GAB_PN'"
                  :sheetsName="'Think_R_GAB_物料'"
                  :logObj="'thinkrgabpn'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_R_GAB_物料'"
                :tableName='"Think_R_GAB_PN"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_R_GAB_物料'"
                ref="thinkrgabpn">
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
import VTable from '@/components/public/vtablePage'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['GAB 客户名称', 'GAB 物料']
    }
  },
  components: {
    Upload,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatethinkrgabcus () {
      this.$refs.thinkrgabcus.updateTabFun()
    },
    updatethinkrgabcus1 () {
      this.$refs.thinkrgabcus.updateTimeChange()
    },
    updatethinkrgabpn () {
      this.$refs.thinkrgabpn.updateTabFun()
    },
    updatethinkrgabpn1 () {
      this.$refs.thinkrgabpn.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allo-customer
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
        .fold
          width 60px
          height 24px
          line-height 24px
          margin-top 6px
          margin-left 20px
          border-radius 6px
          text-align center
          float right
          color #fff
          border-radius 6px
          background #ff9933
          font-size 12px
          box-sizing border-box
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
