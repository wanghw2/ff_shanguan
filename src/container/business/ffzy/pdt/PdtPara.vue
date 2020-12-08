<template>
  <div class="pdt-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>ZY PO下达
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateporel"
                  @updateTimeChange="updateporel1"
                  :logTableName="'ZY_PO_Release'"
                  :sheetsName="'ZY_PO下达'"
                  :logObj="'upporel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ZY_PO下达'"
                :tableName="'ZY_PO_Release'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_PO下达'"
                ref="gridporel">
              </v-table>
            </div>
            <h2>ZY PO模板 上海
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ZY_PO模板_上海'"
                :tableName="'ZY_PO_Result_EDI_SH'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_PO模板_上海'"
                ref="gridpoedish">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>ZY PO 拆分规则
              <div class="form-box">
                <upload
                  @on-success="updateposplit"
                  @updateTimeChange="updateposplit1"
                  :sheetsName="'ZY_PO_拆分规则'"
                  :logTableName='"ZY_PO_Split_Rule"'
                  :logObj="'upposplit'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_PO_拆分规则'"
                :tableName='"ZY_PO_Split_Rule"'
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_PO_拆分规则'"
                ref="gridposplit">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>ZY InvTime
              <div class="form-box">
                <upload
                  @on-success="updatinvtime"
                  @updateTimeChange="updatinvtime1"
                  :sheetsName="'ZY_InvTime'"
                  :logTableName="'ZY_InvTime'"
                  :logObj="'ZYinvtime'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_InvTime'"
                :tableName="'ZY_InvTime'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_InvTime'"
                ref="ZYinvtime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>ZY ROL date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'ZY_ROL_date'"
                  :logTableName="'ZY_ROL_date'"
                  :logObj="'gridroldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ZY_ROL_date'"
                :tableName="'ZY_ROL_date'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'ZY_ROL_date'"
                ref="gridroldate">
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
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtablePage251'
// const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['PO下达', '拆分规则', 'InvTime', 'ROL date']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
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
    updateporel () {
      this.$refs.gridporel.updateTabFun()
      this.$refs.gridpoedish.updateTabFun()
    },
    updateporel1 () {
      this.$refs.gridporel.updateTimeChange()
    },
    updateposplit () {
      this.$refs.gridposplit.updateTabFun()
    },
    updateposplit1 () {
      this.$refs.gridposplit.updateTimeChange()
    },
    updatinvtime () { // 上传后自动刷新表格数据
      this.$refs.ZYinvtime.updateTabFun()
    },
    updatinvtime1 () { // 上传后自动刷新表格数据
      this.$refs.ZYinvtime.updateTimeChange()
    },
    updateroldate () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdt-box
  overflow hidden
  padding 10px
  width 100%
  height 100%
  .content
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
        margin-bottom 10px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
        .emailBtn
          background #e6199e
          &:hover
            background #ca3997
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
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

