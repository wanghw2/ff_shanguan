<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>ConNB 渠道类型
              <div class="form-box">
                <upload
                  @on-success="updatecnbqdlx"
                  @updateTimeChange="updatecnbqdlx"
                  :logTableName='"ConNB_BP_Type_11"'
                  :sheetsName="'ConNB_渠道类型'"
                  :logObj="'ConNBqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_渠道类型'"
                :tableName='"ConNB_BP_Type_11"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_渠道类型'"
                ref="gridcnbqdlx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>ConDT 渠道类型
              <div class="form-box">
                <upload
                  @on-success="updatecdtqdlx"
                  @updateTimeChange="updatecdtqdlx"
                  :sheetsName="'ConDT_渠道类型'"
                  :logTableName='"ConDT_BP_Type_11"'
                  :logObj="'Condtqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_渠道类型'"
                :tableName='"ConDT_BP_Type_11"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_渠道类型'"
                ref="gridcdtqdlx" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>ConNB 渠道类型更新
              <div class="form-box">
                <upload
                  @on-success="updatechbcon1"
                  @updateTimeChange="updatechbcon1s"
                  :sheetsName="'ConNB_渠道类型更新'"
                  :logTableName='"ConNB_BP_Type_Adjust_11"'
                  :logObj="'Condtqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_渠道类型更新'"
                :tableName='"ConNB_BP_Type_Adjust_11"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_渠道类型更新'"
                ref="gridchbcon1" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>ConDT 渠道类型更新
              <div class="form-box">
                <upload
                  @on-success="updatechbcon2"
                  @updateTimeChange="updatechbcon2s"
                  :sheetsName="'ConDT_渠道类型更新'"
                  :logTableName='"ConDT_BP_Type_Adjust_11"'
                  :logObj="'Condtqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_渠道类型更新'"
                :tableName='"ConDT_BP_Type_Adjust_11"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_渠道类型更新'"
                ref="gridchbcon2" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>CON 区县锁定关系
              <div class="form-box">
                <upload
                  @on-success="updatechbcon3"
                  @updateTimeChange="updatechbcon3s"
                  :sheetsName="'CON_区县锁定关系'"
                  :logTableName='"CON_BP_County_Mapping"'
                  :logObj="'Condtqdlx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_区县锁定关系'"
                :tableName='"CON_BP_County_Mapping"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_区县锁定关系'"
                ref="gridchbcon3" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbItem">
          <div class="block">
            <h2>NB 国代机型
              <div class="form-box">
                <upload
                  @on-success="updatenbpngd"
                  @updateTimeChange="updatenbpngds"
                  :sheetsName="'ConNB_国代机型'"
                  :logTableName='"ConNB_PN_GD"'
                  :logObj="'nbpngd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_国代机型'"
                :tableName='"ConNB_PN_GD"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_国代机型'"
                ref="gridnbpngd" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="dbItem">
          <div class="block">
            <h2>DT 国代机型
              <div class="form-box">
                <upload
                  @on-success="updatedtpngd"
                  @updateTimeChange="updatedtpngds"
                  :sheetsName="'ConDT_国代机型'"
                  :logTableName='"ConDT_PN_GD"'
                  :logObj="'dtpngd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_国代机型'"
                :tableName='"ConDT_PN_GD"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_国代机型'"
                ref="griddtpngd" >
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
      menuArr: ['NB 渠道类型', 'DT 渠道类型', 'NB渠道类型更新', 'DT渠道类型更新', '区县锁定关系', 'NB 国代机型', 'DT 国代机型']
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
    updatecnbqdlx () {
      this.$refs.gridcnbqdlx.updateTabFun()
    },
    updatecnbqdlx1 () {
      this.$refs.gridcnbqdlx.updateTimeChange()
    },
    updatecdtqdlx () {
      this.$refs.gridcdtqdlx.updateTabFun()
    },
    updatecdtqdlx1 () {
      this.$refs.gridcdtqdlx.updateTimeChange()
    },
    updatechbcon1 () {
      this.$refs.gridchbcon1.updateTabFun()
    },
    updatechbcon1s () {
      this.$refs.gridchbcon1.updateTimeChange()
    },
    updatechbcon2 () {
      this.$refs.gridchbcon2.updateTabFun()
    },
    updatechbcon2s () {
      this.$refs.gridchbcon2.updateTimeChange()
    },
    updatechbcon3 () {
      this.$refs.gridchbcon3.updateTabFun()
    },
    updatechbcon3s () {
      this.$refs.gridchbcon3.updateTimeChange()
    },
    updatenbpngd () {
      this.$refs.gridnbpngd.updateTabFun()
    },
    updatenbpngds () {
      this.$refs.gridnbpngd.updateTimeChange()
    },
    updatedtpngd () {
      this.$refs.griddtpngd.updateTabFun()
    },
    updatedtpngds () {
      this.$refs.griddtpngd.updateTimeChange()
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
