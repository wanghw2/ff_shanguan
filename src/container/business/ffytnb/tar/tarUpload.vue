<template>
  <div class="tar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>YTNB 目标
              <div class="form-box">
                <upload
                  :sheetsName="'YTNB_目标'"
                  @on-success="updatetarget"
                  @updateTimeChange="updatetarget1"
                  :logTableName='"YTNB_Target"'
                  :logObj="'gridtarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_目标'"
                :tableName='"YTNB_Target"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_目标'"
                ref="gridtarget" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>YTNB 渠道对应关系
              <div class="form-box">
                <upload
                  @on-success="updatebppara"
                  @updateTimeChange="updatebppara1"
                  :sheetsName="'YTNB_渠道对应关系'"
                  :logTableName="'YTNB_BP_Para'"
                  :logObj="'gridbppara'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_渠道对应关系'"
                :tableName="'YTNB_BP_Para'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_渠道对应关系'"
                ref="gridbppara">
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
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['目标', '渠道对应关系']
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
    updatetarget () {
      this.$refs.gridtarget.updateTabFun()
    },
    updatetarget1 () {
      this.$refs.gridtarget.updateTimeChange()
    },
    updatebppara () {
      this.$refs.gridbppara.updateTabFun()
    },
    updatebppara1 () {
      this.$refs.gridbppara.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tar-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .tarItem
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
