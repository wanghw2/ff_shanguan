<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>CON 客户达成
              <div class="form-box">
                <upload
                  @on-success="updateconkh"
                  @updateTimeChange="updateconkh"
                  :sheetsName="'CON_客户达成'"
                  :logTableName='"CON_Customer_Actual_51"'
                  :logObj="'Concus'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_客户达成'"
                :tableName='"CON_Customer_Actual_51"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_客户达成'"
                ref="gridconcus">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>CON 网站访问量
              <div class="form-box">
                <upload
                  @on-success="updateconnet"
                  @updateTimeChange="updateconnet1"
                  :sheetsName="'CON_网站访问量'"
                  :logTableName='"CON_UV_Actual_61"'
                  :logObj="'Connet'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_网站访问量'"
                :tableName='"CON_UV_Actual_61"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_网站访问量'"
                ref="gridconnet">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>CON STI客户细分
              <div class="form-box">
                <upload
                  @on-success="updateconSTI"
                  @updateTimeChange="updateconSTI1"
                  :sheetsName="'CON_STI客户细分'"
                  :logTableName='"CON_Customer_Type_STI"'
                  :logObj="'ConSTI'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_STI客户细分'"
                :tableName='"CON_Customer_Type_STI"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_STI客户细分'"
                ref="gridSTI" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>        
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>CON 渠道对应关系
              <div class="form-box">
                <upload
                  @on-success="updateconbppara"
                  @updateTimeChange="updateconbppara1"
                  :sheetsName="'CON_渠道对应关系'"
                  :logTableName='"CON_BP_Para"'
                  :logObj="'Conbppara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_渠道对应关系'"
                :tableName='"CON_BP_Para"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_渠道对应关系'"
                ref="gridConbppara" >
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
      menuArr: ['客户达成', '网站访问量', 'STI客户细分', '渠道对应关系']
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
    updateconkh () {
      this.$refs.gridconcus.updateTabFun()
    },
    updateconkh1 () {
      this.$refs.gridconcus.updateTimeChange()
    },
    updateconnet () {
      this.$refs.gridconnet.updateTabFun()
    },
    updateconnet1 () {
      this.$refs.gridconnet.updateTimeChange()
    },
    updateconSTI () {
      this.$refs.gridSTI.updateTabFun()
    },
    updateconSTI1 () {
      this.$refs.gridSTI.updateTimeChange()
    },
    updateconbppara () {
      this.$refs.gridConbppara.updateTabFun()
    },
    updateconbppara1 () {
      this.$refs.gridConbppara.updateTimeChange()
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
