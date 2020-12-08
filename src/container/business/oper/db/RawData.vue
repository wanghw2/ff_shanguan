<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>工厂参数
              <div class="form-box">
                <upload
                  @on-success="updateFPlant"
                  @updateTimeChange="updateFPlant1"
                  :logTableName="'FF_Plant'"
                  :sheetsName="'工厂参数'"
                  :logObj="'gridFPlant'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'工厂参数'"
                :tableName="'FF_Plant'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'工厂参数'"
                ref="gridFPlant">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>省份工厂关系
              <div class="form-box">
                <upload
                  @on-success="updateproplant"
                  @updateTimeChange="updateproplant1"
                  :logTableName="'FF_Province_Plant_Mapping'"
                  :sheetsName="'省份工厂关系'"
                  :logObj="'gridproplant'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'省份工厂关系'"
                :tableName="'FF_Province_Plant_Mapping'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'省份工厂关系'"
                ref="gridproplant">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>NB业务线划分
              <div class="form-box">
                <upload
                  @on-success="updatenbbuspara"
                  @updateTimeChange="updatenbbuspara1"
                  :logTableName="'NB_BusinessLine_Split_Para'"
                  :sheetsName="'NB业务线划分'"
                  :logObj="'gridnbbuspara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'NB业务线划分'"
                :tableName="'NB_BusinessLine_Split_Para'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'NB业务线划分'"
                ref="gridnbbuspara">
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
import VTable from '@/components/public/vtablePage'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['工厂参数', '省份工厂关系', 'NB业务线划分']
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
    updateFPlant () { // 上传后自动刷新表格数据
      this.$refs.gridFPlant.updateTabFun()
    },
    updateFPlant1 () { // 上传后自动刷新表格数据
      this.$refs.gridFPlant.updateTimeChange()
    },
    updatenbbuspara () { // 上传后自动刷新表格数据
      this.$refs.gridnbbuspara.updateTabFun()
    },
    updatenbbuspara1 () { // 上传后自动刷新表格数据
      this.$refs.gridnbbuspara.updateTimeChange()
    },
    updateproplant () { // 上传后自动刷新表格数据
      this.$refs.gridproplant.updateTabFun()
    },
    updateproplant1 () { // 上传后自动刷新表格数据
      this.$refs.gridproplant.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  .dbItem
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
          min-width 0px
          height auto
          float right
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
