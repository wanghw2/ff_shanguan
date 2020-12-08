<template>
  <div class="allodatamo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="cargo">
          <div class="block">
            <h2>ConNB 分货上限
              <div class="form-box">
                <Upload
                  @on-success="updatefhsx"
                  @updateTimeChange="updatefhsx1"
                  :logTableName="'ConNB_PO'"
                  :sheetsName="'ConNB_分货上限'"
                  :logObj="'cnbfhsx'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货上限'"
                :tableName="'ConNB_PO'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货上限'"
                ref="cnbfhsx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="cargo">
          <div class="block">
            <h2>ConNB分货节奏
              <div class="form-box">
                <Upload
                  @on-success="updatefhjz"
                  @updateTimeChange="updatefhjz1"
                  :sheetsName="'ConNB_分货节奏'"
                  :logTableName="'ConNB_Alloc_WeekRatio'"
                  :logObj="'cnbfhjz'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货节奏'"
                :tableName="'ConNB_Alloc_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货节奏'"
                ref="cnbfhjz">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="cargo">
          <div class="block">
            <h2>ConNB产品切换
              <div class="form-box">
                <Upload
                  @on-success="updatecpqh"
                  @updateTimeChange="updatecpqh1"
                  :sheetsName="'ConNB_产品切换'"
                  :logTableName="'ConNB_Product_Trans'"
                  :logObj="'cnbcpqh'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_产品切换'"
                :tableName="'ConNB_Product_Trans'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_产品切换'"
                ref="cnbcpqh" >
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
      menuArr: ['分货上限', '分货节奏', '产品切换'],
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
    updatefhsx () {
      this.$refs.cnbfhsx.updateTabFun()
    },
    updatefhjz () {
      this.$refs.cnbfhjz.updateTabFun()
    },
    updatecpqh () {
      this.$refs.cnbcpqh.updateTabFun()
    },
    updatefhsx1 () {
      this.$refs.cnbfhsx.updateTimeChange()
    },
    updatefhjz1 () {
      this.$refs.cnbfhjz.updateTimeChange()
    },
    updatecpqh1 () {
      this.$refs.cnbcpqh.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allodatamo
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .cargo
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
