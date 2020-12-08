<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>Think T客户看板 
              <div class="form-box">
                <updata
                  @on-success="updategridTDashboard"
                  :menuId="'280'"
                  :menuName="每日看板_T客户看板"
                  :logTableName="'TPG_T_Dashboard'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_T客户看板'"
                :tableName='"TPG_T_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T客户看板'"
                ref="gridTDashboard">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>Think 传统客户看板
              <div class="form-box">
                <updata
                  @on-success="updategridTraditional"
                  :menuId="'280'"
                  :menuName="每日看板_传统客户看板"
                  :logTableName="'TPG_Traditional_Dashboard'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_传统客户看板'"
                :tableName='"TPG_Traditional_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_传统客户看板'"
                ref="gridTraditional">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>Think RKA看板
              <div class="form-box">
                <updata
                  @on-success="updategridthinkrka"
                  :menuId="'280'"
                  :menuName="每日看板_RKA看板"
                  :logTableName="'TPG_RKA_Dashboard'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_RKA看板'"
                :tableName='"TPG_RKA_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_RKA看板'"
                ref="gridthinkrka" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>Think FA看板
              <div class="form-box">
                <updata
                  @on-success="updategridfa"
                  :menuId="'280'"
                  :menuName="每日看板_FA看板"
                  :logTableName="'TPG_FA_Dashboard'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_FA看板'"
                :tableName='"TPG_FA_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_FA看板'"
                ref="gridfa" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>Think BTB看板
              <div class="form-box">
                <updata
                  @on-success="updategridBTB"
                  :menuId="'280'"
                  :menuName="每日看板_BTB看板"
                  :logTableName="'TPG_BTB_Dashboard'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BTB看板'"
                :fileName="'Think_BTB看板'"
                :tableName='"TPG_BTB_Dashboard"'
                ref="gridBTB"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbItem" >
          <div class="block">
            <h2>Think BTC看板
              <div class="form-box">
                <updata
                  @on-success="updategridBtc"
                  :menuId="'280'"
                  :menuName="每日看板_BTC看板"
                  :logTableName="'TPG_BTC_Dashboard'"
                  :proIndex="'5'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_BTC看板'"
                :fileName="'Think_BTC看板'"
                :tableName='"TPG_BTC_Dashboard"'
                ref="gridBtc"
                :source="'FF_IDSS_Data_Think'" >
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
import updata from '@/components/public/updata'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['T客户看板', '传统客户看板', 'RKA看板', 'FA看板', 'BTB看板', 'BTC看板']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updategridTDashboard () {
      this.$refs.gridTDashboard.updateTabFun()
    },
    updategridTraditional () {
      this.$refs.gridTraditional.updateTabFun()
    },
    updategridthinkrka () {
      this.$refs.gridthinkrka.updateTabFun()
    },
    updategridBTB () {
      this.$refs.gridBTB.updateTabFun()
    },
    updategridBtc () {
      this.$refs.gridBtc.updateTabFun()
    },
    updategridfa () {
      this.$refs.gridfa.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .dbItem
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
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>