<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>ConNB MIIX 目标
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'ConNB_MIIX_目标'"
                  @on-success="updatecnbmiixtar"
                  @updateTimeChange="updatecnbmiixtar1"
                  :logTableName="'ConNB_Target'"
                  :logObj="'gridcnbmiixtar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_MIIX_目标'"
                :tableName="'ConNB_MIIX_Target'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_MIIX_目标'"
                ref="gridcnbmiixtar">
              </v-table>
            </div>
            <h2>ConNB 目标
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_目标'"
                :tableName="'ConNB_Target'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_目标'"
                ref="gridcnbtar">
              </v-table>
            </div>
            <h2>MIIX 目标
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'MIIX_目标'"
                :tableName="'MIIX_Target'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'MIIX_目标'"
                ref="gridmiixtar">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>ConNB 5S节奏
              <div class="form-box">
                <upload
                  @on-success="cnbCAweekRatio"
                  @updateTimeChange="cnbCAweekRatio1"
                  :sheetsName="'ConNB_5S节奏'"
                  :logTableName="'ConNB_CA_WeekRatio'"
                  :logObj="'cnbweekRatio'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_5S节奏'"
                :tableName="'ConNB_CA_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_5S节奏'"
                ref="cnbweekRatio">
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
      toggle1: true,
      toggle2: true,
      toggle3: true,
      tabPosition: 'left',
      menuArr: ['目标', '5S节奏']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    updatecnbmiixtar () { // 上传后自动刷新表格数据
      this.$refs.gridcnbmiixtar.updateTabFun()
      this.$refs.gridcnbtar.updateTabFun()
      this.$refs.gridmiixtar.updateTabFun()
    },
    updatecnbmiixtar1 () { // 上传后自动刷新表格数据
      this.$refs.gridcnbmiixtar.updateTimeChange()
    },
    cnbCAweekRatio () { // 上传后自动刷新表格数据
      this.$refs.cnbweekRatio.updateTabFun()
    },
    cnbCAweekRatio1 () { // 上传后自动刷新表格数据
      this.$refs.cnbweekRatio.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-uploadTarget
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
      .fold
        width 60px
        height 24px
        line-height 24px
        margin-top 6px
        margin-left 20px
        border-radius 6px
        text-align center
        float right
        color #fff
        border-radius 6px
        background #ff9933
        font-size 12px
        box-sizing border-box
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
