<template>
  <div class="allpipo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pIpo">
          <div class="block">
            <h2>ConNB 暗送关系
              <div class="form-box">
                <Upload
                  @on-success="updatepipo"
                  @updateTimeChange="updatepipo1"
                  :sheetsName="'ConNB_暗送关系'"
                  :logTableName="'ConNB_PIPO'"
                  :logObj="'cnbpipo'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_暗送关系'"
                :tableName="'ConNB_PIPO'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_暗送关系'"
                ref="cnbpipo">
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
      menuArr: ['暗送关系'],
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
    updatepipo () {
      this.$refs.cnbpipo.updateTabFun()
    },
    updatepipo1 () {
      this.$refs.cnbpipo.updateTimeChange()
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
      .addRhythm1
        width 100%
        height 400px
</style>
