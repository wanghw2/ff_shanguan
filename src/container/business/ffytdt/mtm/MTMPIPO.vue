<template>
  <div class="allpipo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pIpo">
          <div class="block">
            <h2>YTDT 分货类型
              <div class="form-box">
                <Upload
                  @on-success="updatealloc"
                  @updateTimeChange="updatealloc1"
                  :sheetsName="'YTDT_分货类型'"
                  :logTableName="'YTDT_Alloc_Type'"
                  :logObj="'gridalloc'"
                  :uploadFileName="'YTDT_分货类型'">
                </Upload>
              </div>
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'YTDT_分货类型'"
                :tableName="'YTDT_Alloc_Type'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_分货类型'"
                ref="gridalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pIpo">
          <div class="block">
            <h2>YTDT 暗送关系
              <div class="form-box">
                <Upload
                  @on-success="updatepro"
                  @updateTimeChange="updatepro1"
                  :sheetsName="'YTDT_暗送关系'"
                  :logTableName="'YTDT_Products'"
                  :logObj="'gridpro'"
                  :uploadFileName="'YTDT_暗送关系'">
                </Upload>
              </div>
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'YTDT_暗送关系'"
                :tableName="'YTDT_Products'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_暗送关系'"
                ref="gridpro">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pIpo">
          <div class="block">
            <h2>YTDT 暗送关系 显示器
              <div class="form-box">
                <Upload
                  :sheetsName="'YTDT_暗送关系_显示器'"
                  @on-success="updateprolcd"
                  @updateTimeChange="updateprolcd1"
                  :logTableName="'YTDT_Products_LCD'"
                  :logObj="'gridprolcd'"
                  :uploadFileName="'YTDT_暗送关系_显示器'">
                </Upload>
              </div>
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'YTDT_暗送关系_显示器'"
                :tableName="'YTDT_Products_LCD'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_暗送关系_显示器'"
                ref="gridprolcd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pIpo">
          <div class="block">
            <h2>YTDT 显示器 特殊关系
              <div class="form-box">
                <Upload
                  :sheetsName="'YTDT_显示器_特殊关系'"
                  @on-success="updateprolcdspec"
                  @updateTimeChange="updateprolcdspec1"
                  :logTableName="'YTDT_Products_LCD_Special'"
                  :logObj="'gridprolcdspec'"
                  :uploadFileName="'YTDT_显示器_特殊关系'">
                </Upload>
              </div>
            </h2>
            <div class="addpIpo">
              <v-table
                :sheetsName="'YTDT_显示器_特殊关系'"
                :tableName="'YTDT_Products_LCD_Special'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_显示器_特殊关系'"
                ref="gridprolcdspec">
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
      menuArr: ['分货类型', '暗送关系', '暗送关系 显示器', '显示器 特殊关系'],
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
    updatealloc () {
      this.$refs.gridalloc.updateTabFun()
    },
    updatealloc1 () {
      this.$refs.gridalloc.updateTimeChange()
    },
    updatepro () {
      this.$refs.gridpro.updateTabFun()
    },
    updatepro1 () {
      this.$refs.gridpro.updateTimeChange()
    },
    updateprolcd () {
      this.$refs.gridprolcd.updateTabFun()
    },
    updateprolcd1 () {
      this.$refs.gridprolcd.updateTimeChange()
    },
    updateprolcdspec () {
      this.$refs.gridprolcdspec.updateTabFun()
    },
    updateprolcdspec1 () {
      this.$refs.gridprolcdspec.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allpipo
  width 100%
  height 100%
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
      .addpIpo
        width 100%
        min-height 10px
        overflow hidden
</style>
