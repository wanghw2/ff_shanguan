<template>
<div class="inv-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="invitem">
        <div class="block">
          <h2>Togo产能
            <div class="form-box">
              <upload
                @on-success="updatetogo"
                @updateTimeChange="updatetogo1"
                :sheetsName="'Togo产能'"
                :logTableName="'FF_Inhouse_Capacity_Togo'"
                :logObj="'cdttogo'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'Togo产能'"
              :tableName="'FF_Inhouse_Capacity_Togo'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'Togo产能'"
              ref="gridtogo">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="invitem">
        <div class="block">
          <h2>产出需求
            <div class="form-box">
              <upload
                @on-success="updaterequire"
                @updateTimeChange="updaterequire1"
                :sheetsName="'产出需求'"
                :logTableName="'FF_Inhouse_Capacity_FCST'"
                :logObj="'cdtrequire'" >
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'产出需求'"
              :tableName="'FF_Inhouse_Capacity_FCST'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'产出需求'"
              ref="gridrequire">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="invitem">
        <div class="block">
          <h2>产能Commit
            <div class="form-box">
              <upload
                @on-success="updateCommit"
                @updateTimeChange="updateCommit1"
                :sheetsName="'产能Commit'"
                :logTableName="'FF_Inhouse_Capacity_Commit'"
                :logObj="'cdtCommit'" >
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'产能Commit'"
              :tableName="'FF_Inhouse_Capacity_Commit'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'产能Commit'"
              ref="gridCommit">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['Togo产能', '产出需求', '产能Commit']
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
  methods: {
    updatetogo () {
      this.$refs.gridtogo.updateTabFun()
    },
    updatetogo1 () {
      this.$refs.gridtogo.updateTimeChange()
    },
    updaterequire () {
      this.$refs.gridrequire.updateTabFun()
    },
    updaterequire1 () {
      this.$refs.gridrequire.updateTimeChange()
    },
    updateCommit () {
      this.$refs.gridCommit.updateTabFun()
    },
    updateCommit1 () {
      this.$refs.gridCommit.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .invitem
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
