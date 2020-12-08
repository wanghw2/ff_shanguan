<template>
  <div class="allo-customer">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>Think 总代需求
              <div class="form-box">
                <updata
                  @on-success="updateBpdmd"
                  :menuId="'217'"
                  :menuName="'分货参数_总代需求'"
                  :logTableName="'Think_BP_Demand'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BP_Demand'"
                :tableName='"Think_BP_Demand"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BP_Demand'"
                ref="thinkBpdmd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>Think 预留库存
              <div class="form-box">
                <upload
                  @on-success="updateinventory"
                  @updateTimeChange="updateinventory1"
                  :logTableName="'Think_INV_Block'"
                  :sheetsName="'Think_预留库存'"
                  :logObj="'thinkinventory'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_预留库存'"
                :tableName='"Think_INV_Block"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_预留库存'"
                ref="thinkinventory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block">
            <h2> Think 报关清单
              <div class="form-box">
                <upload
                  @on-success="updatelist"
                  @updateTimeChange="updatelist1"
                  :logTableName="'Think_ImportList'"
                  :sheetsName="'Think_报关清单'"
                  :logObj="'thinklist'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_报关清单'"
                :tableName='"Think_ImportList"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_报关清单'"
                ref="thinklist">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="alloItem">
          <div class="block">
            <h2>Think LC内部领用
              <div class="form-box">
                <updata
                  @on-success="updateLCint"
                  :menuId="'217'"
                  :menuName="'分货参数_内部领用'"
                  :logTableName="'Think_LC_Internal'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_LC_Internal'"
                :tableName='"Think_LC_Internal"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LC_Internal'"
                ref="thinkLCint">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="alloItem">
          <div class="block">
            <h2>Think T MO 优先级
              <div class="form-box">
                <upload
                  @on-success="updatetmopriority"
                  @updateTimeChange="updatetmopriority1"
                  :logTableName="'Think_T_Alloc_Priority_MO'"
                  :sheetsName="'Think_T_MO_优先级'"
                  :logObj="'thinktmopriority'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_MO_优先级'"
                :tableName='"Think_T_Alloc_Priority_MO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_MO_优先级'"
                ref="thinktmopriority">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="alloItem">
          <div class="block">
            <h2>Think T 分货优先级
              <div class="form-box">
                <upload
                  @on-success="updatetpriority"
                  @updateTimeChange="updatetpriority1"
                  :logTableName="'Think_T_Alloc_Priority'"
                  :sheetsName="'Think_T_分货优先级'"
                  :logObj="'thinktpriority'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_分货优先级'"
                :tableName='"Think_T_Alloc_Priority"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_分货优先级'"
                ref="thinktpriority">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="alloItem">
          <div class="block">
            <h2>Think T 客户优先级
              <div class="form-box">
                <upload
                  @on-success="updatethinktpriocus"
                  @updateTimeChange="updatethinktpriocus1"
                  :logTableName="'Think_T_Alloc_Priority_CUS'"
                  :sheetsName="'Think_T_客户优先级'"
                  :logObj="'thinktpriocus'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T_客户优先级'"
                :tableName='"Think_T_Alloc_Priority_CUS"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_客户优先级'"
                ref="thinktpriocus">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="alloItem">
          <div class="block">
            <h2>Think Bidding BTS物料
              <div class="form-box">
                <upload
                  @on-success="updatebiddingbtspn"
                  @updateTimeChange="updatebiddingbtspn1"
                  :logTableName="'Think_Bidding_BTS_MTM'"
                  :sheetsName="'Think_Bidding_BTS物料'"
                  :logObj="'gridbiddingbtspn'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Bidding_BTS物料'"
                :tableName='"Think_Bidding_BTS_MTM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Bidding_BTS物料'"
                ref="gridbiddingbtspn">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="alloItem">
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
        <el-tab-pane :label="menuArr[9]" class="alloItem">
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
import vtableEdit from '@/components/public/vtableEdit'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['总代需求', '预留库存', '报关清单', 'LC内部领用', 'T MO优先级', 'T 分货优先级', 'T 客户优先级', 'Bidding BTS物料', 'GAB 客户名称', 'GAB 物料']
    }
  },
  components: {
    Upload,
    vtableEdit,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateBpdmd () {
      this.$refs.thinkBpdmd.updateTabFun()
    },
    updateinventory () {
      this.$refs.thinkinventory.updateTabFun()
    },
    updateinventory1 () {
      this.$refs.thinkinventory.updateTimeChange()
    },
    updatelist () {
      this.$refs.thinklist.updateTabFun()
    },
    updatelist1 () {
      this.$refs.thinklist.updateTimeChange()
    },
    updateLCint () {
      this.$refs.thinkLCint.updateTabFun()
    },
    updatetpriority () {
      this.$refs.thinktpriority.updateTabFun()
    },
    updatetpriority1 () {
      this.$refs.thinktpriority.updateTimeChange()
    },
    updatethinktpriocus () {
      this.$refs.thinktpriocus.updateTabFun()
    },
    updatethinktpriocus1 () {
      this.$refs.thinktpriocus.updateTimeChange()
    },
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
    },
    updatebiddingbtspn () {
      this.$refs.gridbiddingbtspn.updateTabFun()
    },
    updatebiddingbtspn1 () {
      this.$refs.gridbiddingbtspn.updateTimeChange()
    },
    updatetmopriority () {
      this.$refs.thinktmopriority.updateTabFun()
    },
    updatetmopriority1 () {
      this.$refs.thinktmopriority.updateTimeChange()
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
