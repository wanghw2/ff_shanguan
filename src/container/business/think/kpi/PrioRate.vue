<template>
  <div class="npi-box">
    <div class="Thinktent">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>Think 预留库存
              <div class="form-box">
                <upload
                  @on-success="updateThinkInv"
                  @updateTimeChange="updateThinkInv1"
                  :sheetsName="'Think_预留库存'"
                  :logTableName='"Think_INV_Block"'
                  :logObj="'ThinkInv'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_INV_Block'"
                :tableName='"Think_INV_Block"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_INV_Block'"
                ref="gridThinkInv">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>Think NPI计划
              <div class="form-box">
                <upload
                  @on-success="updatanpi"
                  @updateTimeChange="updatanpi1"
                  :sheetsName="'Think_NPI计划'"
                  :logTableName='"Think_NPI_Schedule"'
                  :logObj="'npi'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_NPI计划'"
                :tableName='"Think_NPI_Schedule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_NPI计划'"
                ref="gridnpi">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="npiItem">
          <div class="block">
            <h2>Think NPI看板
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_NPI看板'"
                :tableName='"Think_NPI_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_NPI看板'"
                ref="griddashboard">
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
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['预留库存', 'NPI计划', 'NPI看板']
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
  created () {
  },
  methods: {
    updateThinkInv () {
      this.$refs.gridThinkInv.updateTabFun()
    },
    updatanpi () {
      this.$refs.gridnpi.updateTabFun()
    },
    updateThinkInv1 () {
      this.$refs.gridThinkInv.updateTimeChange()
    },
    updatanpi1 () {
      this.$refs.gridnpi.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
  .Thinktent
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
        margin-bottom 10px
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
