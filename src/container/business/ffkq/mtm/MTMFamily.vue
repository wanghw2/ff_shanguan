<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>KQ Family</h2>
            <div class="addTarget">
              <v-table
                :sheetsName="'KQ_Family'"
                :tableName="'KQ_MTM_Family'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_Family'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>KQ Family对应关系
              <div class="form-box">
                <upload
                  :sheetsName="'KQ_Family对应关系'"
                  @on-success="updateFamily"
                  @updateTimeChange="updateFamily1"
                  :logTableName='"KQ_Family"'
                  :logObj="'kqFamily'">
                </upload>
              </div>
            </h2>
            <div class="addTarget">
              <v-table
                :sheetsName="'KQ_Family对应关系'"
                :tableName="'KQ_Family'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_Family对应关系'"
                ref="kqFamily">
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
      menuArr: ['Family', 'Family对应关系']
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
    updateFamily () { // 上传后自动刷新表格数据
      this.$refs.kqFamily.updateTabFun()
    },
    updateFamily1 () { // 上传后自动刷新表格数据
      this.$refs.kqFamily.updateTimeChange()
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
      .addTarget
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
