<template>
  <div class="allpipo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pIpo">
          <div class="block">
            <h2>KQ 暗送关系
              <div class="form-box">
                <Upload
                  @on-success="updateproduct"
                  @updateTimeChange="updatebcc1"
                  :sheetsName="'KQ_暗送关系'"
                  :logTableName="'KQ_Products'"
                  :logObj="'gridproduct'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_暗送关系'"
                :tableName="'KQ_Products'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_暗送关系'"
                ref="gridproduct">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pIpo">
          <div class="block">
            <h2>KQ 暗送关系 显示器
              <div class="form-box">
                <Upload
                  :sheetsName="'KQ_暗送关系_显示器'"
                  @on-success="updatedisplay"
                  @updateTimeChange="updatedisplay1"
                  :logTableName="'KQ_Products_LCD'"
                  :logObj="'display'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_暗送关系_显示器'"
                :tableName="'KQ_Products_LCD'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_暗送关系_显示器'"
                ref="griddisplay">
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
import VTable from '@/components/public/vtablePage251'
export default {
  data () {
    return {
      menuArr: ['暗送关系', '暗送关系 显示器'],
      tabPosition: 'left'
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
    updatedisplay () {
      this.$refs.griddisplay.updateTabFun()
    },
    updatedisplay1 () {
      this.$refs.griddisplay.updateTimeChange()
    },
    updateproduct () {
      this.$refs.gridproduct.updateTabFun()
    },
    updateproduct1 () {
      this.$refs.gridproduct.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allpipo
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pIpo
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
        padding-left 20px
        margin-bottom 5px
        background #fafafa
        padding 0 20px
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
