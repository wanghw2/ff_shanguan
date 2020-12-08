<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="poItem">
          <div class="block">
            <h2>Think 新品SS清单
              <div class="form-box">
                <upload
                  @on-success="updatenpiSS"
                  @updateTimeChange="updatenpiSS1"
                  :sheetsName="'Think_新品SS清单'"
                  :logTableName="'Think_NPI_SS'"
                  :logObj="'tpgnpi'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_新品SS清单'"
                :tableName="'Think_NPI_SS'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_新品SS清单'"
                ref="tpgODMnpi">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="poItem">
          <div class="block">
            <h2 class="h2">Think 新品MTM看板
              <div class="form-box">
                <updata
                  @on-success="updateNPIMYM"
                  :menuId="'256'"
                  :logTableName="'Think_NPI_MTM'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_新品MTM看板'"
                :tableName="'Think_NPI_MTM'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_新品MTM看板'"
                ref="tpgAccuracyReport" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="poItem">
          <div class="block">
            <h2>Think 新品Family看板
              <div class="form-box">
                <updata
                  @on-success="thinknpiFamily"
                  :menuId="'256'"
                  :logTableName="'Think_NPI_Family'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_新品Family看板'"
                :tableName='"Think_NPI_Family"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_新品Family看板'"
                ref="gridNPIFamily">
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
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['新品SS清单', '新品MTM看板', '新品Family看板']
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
    thinknpiFamily () {
      this.$refs.gridNPIFamily.updateTabFun()
    },
    updatenpiSS () {
      this.$refs.tpgODMnpi.updateTabFun()
    },
    updateNPIMYM () { // 调用自动更新新数据的方法
      this.$refs.tpgAccuracyReport.updateTabFun()
    },
    updatenpiSS1 () {
      this.$refs.tpgODMnpi.updateTimeChange()
    },
    updateNPIMYM1 () {
      this.$refs.tpgAccuracyReport.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
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
