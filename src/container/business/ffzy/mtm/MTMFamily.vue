<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>ZY Family</h2>
            <div class="addTarget">
              <v-table
                :sheetsName="'ZY_Family'"
                :tableName="'ZY_MTM_Family'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_Family'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>ZY Family对应关系
              <div class="form-box">
                <upload
                  @on-success="zyfamily"
                  @updateTimeChange="zyfamily1"
                  :logTableName="'ZY_Family'"
                  :sheetsName="'ZY_Family对应关系'"
                  :logObj="'zyfamily'">
                </upload>
              </div>
            </h2>
            <div class="addfamily">
              <v-table
                :sheetsName="'ZY_Family对应关系'"
                :tableName="'ZY_Family'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_Family对应关系'"
                ref="gridfamily">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="family">
          <div class="block">
            <h2>ZY PN Para
              <div class="form-box">
                <upload
                  @on-success="updateZYpnpara"
                  @updateTimeChange="updateZYpnpara1"
                  :sheetsName="'ZY_PN_Para'"
                  :logTableName="'ZY_PN_Para'"
                  :logObj="'gridZYpnpara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_PN_Para'"
                :tableName="'ZY_PN_Para'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_PN_Para'"
                ref="gridZYpnpara">
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
      menuArr: ['Family', 'Family对应关系', 'PN Para']
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
    zyfamily () { // 上传后自动刷新表格数据
      this.$refs.gridfamily.updateTabFun()
    },
    zyfamily1 () { // 上传后自动刷新表格数据
      this.$refs.gridfamily.updateTimeChange()
    },
    updateZYpnpara () { // 上传后自动刷新表格数据
      this.$refs.gridZYpnpara.updateTabFun()
    },
    updateZYpnpara1 () { // 上传后自动刷新表格数据
      this.$refs.gridZYpnpara.updateTimeChange()
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
        margin-bottom 10px
</style>
