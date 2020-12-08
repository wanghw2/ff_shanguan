<template>
<div class="inv-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="invitem">
        <div class="block">
          <h2>FGI预估
            <div class="form-box">
              <upload
                :sheetsName="'ConNB_FGI预估'"
                @on-success="updatefgiol"
                @updateTimeChange="updatefgiol1"
                :logTableName="'ConNB_FGI_OL'"
                :logObj="'cnbfgiol'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_FGI预估'"
              :tableName="'ConNB_FGI_OL'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_FGI预估'"
              ref="gridfgiol">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="invitem">
        <div class="block">
          <h2>Write Off预估
            <div class="form-box">
              <upload
                :sheetsName="'ConNB_Write_Off预估'"
                @on-success="updateWriteOffOL"
                @updateTimeChange="updateWriteOffOL1"
                :logTableName="'ConNB_Write_Off_OL'"
                :logObj="'cnbWriteOffOL'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_Write_Off预估'"
              :tableName="'ConNB_Write_Off_OL'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_Write_Off预估'"
              ref="gridWriteOffOL">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="invitem">
        <div class="block">
          <h2>超期库存分配
            <div class="form-box">
              <upload
                :sheetsName="'ConNB_超期库存分配'"
                @on-success="updateAging"
                @updateTimeChange="updateAging1"
                :logTableName="'ConNB_Alloc_Aging'"
                :logObj="'cnbAging'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_超期库存分配'"
              :tableName="'ConNB_Alloc_Aging'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_超期库存分配'"
              ref="gridAging">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[3]" class="invitem">
        <div class="block">
          <h2>水位预警
            <div class="form-box">
              <upload
                :sheetsName="'ConNB_水位预警'"
                @on-success="updateAlert"
                @updateTimeChange="updateAlert1"
                :logTableName="'ConNB_Stock_Alert'"
                :logObj="'cnbAlert'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_水位预警'"
              :tableName="'ConNB_Stock_Alert'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_水位预警'"
              ref="gridAlert">
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
      menuArr: ['FGI预估', 'Write Off预估', '超期库存分配', '水位预警']
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
    updatefgiol () { // 上传后自动刷新表格数据
      this.$refs.gridfgiol.updateTabFun()
    },
    updatefgiol1 () { // 上传后自动刷新表格数据
      this.$refs.gridfgiol.updateTimeChange()
    },
    updateWriteOffOL () { // 上传后自动刷新表格数据
      this.$refs.gridWriteOffOL.updateTabFun()
    },
    updateWriteOffOL1 () { // 上传后自动刷新表格数据
      this.$refs.gridWriteOffOL.updateTimeChange()
    },
    updateAging () { // 上传后自动刷新表格数据
      this.$refs.gridupdateAging.updateTabFun()
    },
    updateAging1 () { // 上传后自动刷新表格数据
      this.$refs.gridupdateAging.updateTimeChange()
    },
    updateAlert () { // 上传后自动刷新表格数据
      this.$refs.gridAlert.updateTabFun()
    },
    updateAlert1 () { // 上传后自动刷新表格数据
      this.$refs.gridAlert.updateTimeChange()
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
</style>
