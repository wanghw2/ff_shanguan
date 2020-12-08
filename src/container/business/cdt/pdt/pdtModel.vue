<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>算法总览
              <div class="form-box">
                <updata
                  @on-success="updatepdtpara0"
                  :menuId="'308'"
                  :menuName="'投产建模_算法总览'"
                  :logTableName="'ConDT_Product_Model_SS_Overview'"
                  :proIndex="'1'">
                </updata>
              </div>                           
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'算法总览'"
                :tableName="'ConDT_Product_Model_SS_Overview'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'算法总览'"
                ref="gridpdtpara0">
              </v-table>
            </div>
          </div>
        </el-tab-pane>       
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>建模投产表                         
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'建模投产表'"
                :tableName="'ConDT_Product_Model_SS_PO_Plan'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'建模投产表'"
                ref="gridpdtpara1">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>方差算法表
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'方差算法表'"
                :tableName="'ConDT_Product_Model_Variance_SS'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'方差算法表'"
                ref="gridpdtpara2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>因子算法表
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'因子算法表'"
                :tableName="'ConDT_Product_Model_Factor_SS'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'因子算法表'"
                ref="gridpdtpara3">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import Updata from '@/components/public/updata'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['算法总览', '建模投产表', '方差算法表', '因子算法表']
    }
  },
  components: {
    // Upload,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updatepdtpara0 () {
      this.$refs.gridpdtpara0.updateTabFun()
      this.$refs.gridpdtpara1.updateTabFun()
      this.$refs.gridpdtpara2.updateTabFun()
      this.$refs.gridpdtpara3.updateTabFun()
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
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
