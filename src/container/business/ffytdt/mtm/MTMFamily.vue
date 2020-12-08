<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>YTDT Family</h2>
            <div class="addTarget">
              <v-table
                :sheetsName="'YTDT_Family'"
                :tableName="'YTDT_MTM_Family'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_Family'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>YTDT Family对应关系
              <div class="form-box">
                <upload
                  @on-success="updateFamilyMap"
                  @updateTimeChange="updateFamilyMap1"
                  :sheetsName="'YTDT_Family对应关系'"
                  :logTableName="'YTDT_Family'"
                  :uploadFileName="'YTDT_Family对应关系'"
                  :logObj="'gridFamilyMap'">
                </upload>
              </div>
            </h2>
            <div class="addfamily">
              <v-table
                :sheetsName="'YTDT_Family对应关系'"
                :tableName="'YTDT_Family'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_Family对应关系'"
                ref="gridFamilyMap">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="family">
          <div class="block">
            <h2>YTDT Family更新
              <div class="form-box">
                <upload
                  @on-success="updatePnfamily"
                  @updateTimeChange="updatePnfamily1"
                  :sheetsName="'YTDT_Family更新'"
                  :logTableName="'YTDT_Family_Update'"
                  :uploadFileName="'YTDT_Family更新'"
                  :logObj="'gridPnfamily'">
                </upload>
              </div>
            </h2>
            <div class="addfamily">
              <v-table
                :sheetsName="'YTDT_Family更新'"
                :tableName="'YTDT_Family_Update'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_Family更新'"
                ref="gridPnfamily">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="family">
          <div class="block">
            <h2>YTDT Family工厂
              <div class="form-box">
                <upload
                  @on-success="updatePlant"
                  @updateTimeChange="updatePlant1"
                  :sheetsName="'YTDT_Family工厂'"
                  :logTableName="'YTDT_Family_Plant'"
                  :uploadFileName="'YTDT_Family工厂'"
                  :logObj="'gridPlant'">
                </upload>
              </div>
            </h2>
            <div class="addfamily">
              <v-table
                :sheetsName="'YTDT_Family工厂'"
                :tableName="'YTDT_Family_Plant'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_Family工厂'"
                ref="gridPlant">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="family">
          <div class="block">
            <h2>YTDT SO Plant
              <div class="form-box">
                <upload
                  @on-success="updateSOPlant"
                  @updateTimeChange="updateSOPlant1"
                  :sheetsName="'YTDT_SO_Plant'"
                  :logTableName="'YTDT_SO_Plant'"
                  :uploadFileName="'YTDT_SO_Plant'"
                  :logObj="'gridSOPlant'">
                </upload>
              </div>
            </h2>
            <div class="addfamily">
              <v-table
                :sheetsName="'YTDT_SO_Plant'"
                :tableName="'YTDT_SO_Plant'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_SO_Plant'"
                ref="gridSOPlant">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtablePage251'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['Family', 'Family对应关系', 'Family更新', 'Family工厂', 'SO 工厂']
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
    updatePnfamily () { // 上传后自动刷新表格数据
      this.$refs.gridPnfamily.updateTabFun()
    },
    updatePnfamily1 () { // 上传后自动刷新表格数据
      this.$refs.gridPnfamily.updateTimeChange()
    },
    updateFamilyMap () { // 上传后自动刷新表格数据
      this.$refs.gridFamilyMap.updateTabFun()
    },
    updateFamilyMap1 () { // 上传后自动刷新表格数据
      this.$refs.gridFamilyMap.updateTimeChange()
    },
    updatePlant () { // 上传后自动刷新表格数据
      this.$refs.gridPlant.updateTabFun()
    },
    updatePlant1 () { // 上传后自动刷新表格数据
      this.$refs.gridPlant.updateTimeChange()
    },
    updateSOPlant () { // 上传后自动刷新表格数据
      this.$refs.gridSOPlant.updateTabFun()
    },
    updateSOPlant1 () { // 上传后自动刷新表格数据
      this.$refs.gridSOPlant.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-family
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .family
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
        box-shadow 0 2px 8px #ccc
        font-size 14px
        padding 0 20px
        margin-bottom 5px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
      .addfamily
        width 100%
        min-height 10px
        overflow hidden
</style>
