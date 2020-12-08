<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>财务目标Q1
              <div class="form-box">
                <upload
                  :sheetsName="'财务目标Q1'"
                  @on-success="updateFinTgtQ1"
                  @updateTimeChange="updateFinTgtQ11"
                  :logTableName='"FF_Financial_Target_Q1"'
                  :logObj="'gridFinTgtQ1'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'财务目标Q1'"
                :fileName="'财务目标Q1'"
                :tableName='"FF_Financial_Target_Q1"'
                ref="gridFinTgtQ1"
                :source="'FF_IDSS_Data_FF'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>财务目标Q2
              <div class="form-box">
                <upload
                  :sheetsName="'财务目标Q2'"
                  @on-success="updateFinTgtQ2"
                  @updateTimeChange="updateFinTgtQ21"
                  :logTableName="'FF_Financial_Target_Q2'"
                  :logObj="'gridFinTgtQ2'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'财务目标Q2'"
                :tableName="'FF_Financial_Target_Q2'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'财务目标Q2'"
                ref="gridFinTgtQ2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>财务目标Q3
              <div class="form-box">
                <upload
                  :sheetsName="'财务目标Q3'"
                  @on-success="updateFinTgtQ3"
                  @updateTimeChange="updateFinTgtQ31"
                  :logTableName='"FF_Financial_Target_Q3"'
                  :logObj="'gridFinTgtQ3'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'财务目标Q3'"
                :tableName='"FF_Financial_Target_Q3"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'财务目标Q3'"
                ref="gridFinTgtQ3">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>财务目标Q4
              <div class="form-box">
                <upload
                  :sheetsName="'财务目标Q4'"
                  @on-success="updateFinTgtQ4"
                  @updateTimeChange="updateFinTgtQ41"
                  :logTableName='"FF_Financial_Target_Q4"'
                  :logObj="'gridFinTgtQ4'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'财务目标Q4'"
                :tableName='"FF_Financial_Target_Q4"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'财务目标Q4'"
                ref="gridFinTgtQ4">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="tarItem">
          <div class="block">
            <h2>运营目标Q1
              <div class="form-box">
                <upload
                  :sheetsName="'运营目标Q1'"
                  @on-success="updateOperTgtQ1"
                  @updateTimeChange="updateOperTgtQ11"
                  :logTableName='"FF_Operation_Target_Q1"'
                  :logObj="'gridOperTgtQ1'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运营目标Q1'"
                :tableName='"FF_Operation_Target_Q1"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运营目标Q1'"
                ref="gridOperTgtQ1">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="tarItem">
          <div class="block">
            <h2>运营目标Q2
              <div class="form-box">
                <upload
                  :sheetsName="'运营目标Q2'"
                  @on-success="updateOperTgtQ2"
                  @updateTimeChange="updateOperTgtQ21"
                  :logTableName='"FF_Operation_Target_Q2"'
                  :logObj="'gridOperTgtQ2'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运营目标Q2'"
                :tableName="'FF_Operation_Target_Q2'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运营目标Q2'"
                ref="gridOperTgtQ2" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="tarItem">
          <div class="block">
            <h2>运营目标Q3
              <div class="form-box">
                <upload
                  @on-success="updateOperTgtQ3"
                  @updateTimeChange="updateOperTgtQ31"
                  :logTableName='"FF_Operation_Target_Q3"'
                  :sheetsName="'运营目标Q3'"
                  :logObj="'gridOperTgtQ3'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运营目标Q3'"
                :tableName='"FF_Operation_Target_Q3"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运营目标Q3'"
                ref="gridOperTgtQ3" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="tarItem">
          <div class="block">
            <h2>运营目标Q4
              <div class="form-box">
                <upload
                  @on-success="updateOperTgtQ4"
                  @updateTimeChange="updateOperTgtQ41"
                  :sheetsName="'运营目标Q4'"
                  :logTableName="'FF_Operation_Target_Q4'"
                  :logObj="'gridOperTgtQ4'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'运营目标Q4'"
                :tableName="'FF_Operation_Target_Q4'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'运营目标Q4'"
                ref="gridOperTgtQ4">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="tarItem">
          <div class="block">
            <h2>年度财务目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'年度财务目标'"
                :fileName="'年度财务目标'"
                :tableName='"FF_Financial_Target"'
                ref="gridFinTgt"
                :source="'FF_IDSS_Data_FF'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="tarItem">
          <div class="block">
            <h2>历年财务目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'历年财务目标'"
                :tableName='"FF_Financial_Target_TTL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'历年财务目标'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="tarItem">
          <div class="block">
            <h2>年度运营目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'年度运营目标'"
                :tableName="'FF_Operation_Target'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'年度运营目标'"
                ref="gridOperTgt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[11]" class="tarItem">
          <div class="block">
            <h2>历年运营目标
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'历年运营目标'"
                :tableName="'FF_Operation_Target_TTL'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'历年运营目标'"
                ref="gridOperTgtTTL">
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
      menuArr: ['财务目标Q1', '财务目标Q2', '财务目标Q3', '财务目标Q4', '运营目标Q1', '运营目标Q2', '运营目标Q3', '运营目标Q4', '年度财务目标', '历年财务目标', '年度运营目标', '历年运营目标']
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
    updateFinTgtQ1 () { // 上传后自动刷新表格数据
      this.$refs.gridFinTgtQ1.updateTabFun()
      this.$refs.gridFinTgt.updateTabFun()
    },
    updateFinTgtQ2 () { // 上传后自动刷新表格数据
      this.$refs.gridFinTgtQ2.updateTabFun()
      this.$refs.gridFinTgt.updateTabFun()
    },
    updateFinTgtQ3 () {
      this.$refs.gridFinTgtQ3.updateTabFun()
      this.$refs.gridFinTgt.updateTabFun()
    },
    updateFinTgtQ4 () {
      this.$refs.gridFinTgtQ4.updateTabFun()
      this.$refs.gridFinTgt.updateTabFun()
    },
    updateOperTgtQ1 () {
      this.$refs.gridOperTgtQ1.updateTabFun()
      this.$refs.gridOperTgt.updateTabFun()
    },
    updateOperTgtQ2 () {
      this.$refs.gridOperTgtQ2.updateTabFun()
      this.$refs.gridOperTgt.updateTabFun()
    },
    updateOperTgtQ3 () {
      this.$refs.gridOperTgtQ3.updateTabFun()
      this.$refs.gridOperTgt.updateTabFun()
    },
    updateOperTgtQ4 () {
      this.$refs.gridOperTgtQ4.updateTabFun()
      this.$refs.gridOperTgt.updateTabFun()
    },
    updateFinTgtQ11 () { // 上传后自动刷新表格数据
      this.$refs.gridFinTgtQ1.updateTimeChange()
    },
    updateOperTgtQ21 () {
      this.$refs.gridOperTgtQ2.updateTimeChange()
    },
    updateFinTgtQ31 () {
      this.$refs.gridFinTgtQ3.updateTimeChange()
    },
    updateFinTgtQ41 () {
      this.$refs.gridFinTgtQ4.updateTimeChange()
    },
    updateOperTgtQ11 () {
      this.$refs.gridOperTgtQ1.updateTimeChange()
    },
    updateFinTgtQ21 () { // 上传后自动刷新表格数据
      this.$refs.gridFinTgtQ2.updateTimeChange()
    },
    updateOperTgtQ31 () {
      this.$refs.gridOperTgtQ3.updateTimeChange()
    },
    updateOperTgtQ41 () {
      this.$refs.gridOperTgtQ4.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tar-box
  width 100%
  height 100%
  padding 10px
  .tarItem
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
        box-shadow 0 2px 8px #ccc
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
