<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>ConNB Family</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family'"
                :tableName='"ConNB_MTM_Family"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>ConNB Family对应关系</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family对应关系'"
                :tableName="'ConNB_Family'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family对应关系'"
                ref="cnbfamily">
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
  methods: {
    cnbFamilyFun () {
      this.$refs.cnbfamily.updateTabFun()
    },
    cnbFamilyFun1 () {
      this.$refs.cnbfamily.updateTimeChange()
    },
    cnbMtmFun () {
      this.$refs.cnbmtm.updateTabFun()
    },
    cnbMtmFun1 () {
      this.$refs.cnbmtm.updateTimeChange()
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
      .familyGraph
        width 100%
        // height 400px
        height auto
        overflow hidden
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
