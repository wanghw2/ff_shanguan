<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>ConNB SOVP
              <div class="form-box">
                <upload
                  @on-success="updateConNBSOVP"
                  @updateTimeChange="updateConNBSOVP1"
                  :uploadFileName="'ConNB_SOVP_'"
                  :logTableName='"ConNB_SOVP"'
                  :logObj="'resovpp'">
                </upload>
              </div>
            </h2>
            <div class="addsovpp">
              <v-table
                :sheetsName="'ConNB_SOVP'"
                :tableName='"ConNB_SOVP"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_SOVP'"
                ref="gridsovpp">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>ConNB NPI计划
              <div class="form-box">
                <upload
                  @on-success="updatanpi"
                  @updateTimeChange="updatanpi1"
                  :uploadFileName="'ConNB_NPI计划_'"
                  :logTableName='"ConNB_NPI_Schedule"'
                  :logObj="'npi'">
                </upload>
              </div>
            </h2>
            <div class="addnpi">
              <v-table
                :sheetsName="'ConNB_NPI计划'"
                :tableName='"ConNB_NPI_Schedule"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_NPI计划'"
                ref="gridnpi">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="npiItem">
          <div class="block">
            <h2>ConNB NPI看板
            </h2>
            <div class="npiDashboard">
              <v-table
                :sheetsName="'ConNB_NPI看板'"
                :tableName='"ConNB_NPI_Dashboard"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_NPI看板'"
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
      menuArr: ['SOVP', 'NPI计划', 'NPI看板']
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
    updateConNBSOVP () {
      this.$refs.gridsovpp.updateTabFun()
    },
    updatanpi () {
      this.$refs.gridnpi.updateTabFun()
    },
    updateConNBSOVP1 () {
      this.$refs.gridsovpp.updateTimeChange()
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
  .npiItem
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
      .labelcolor,.replenishment,.addsovpp,.npiDashboard,.addMem,.addLabelPanel,.addLabelMb
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
        box-shadow: 0 2px 8px #ccc
</style>
