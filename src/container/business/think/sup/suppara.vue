<template>
  <div class="tarupload">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">        
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>Think 上月剩余备货
              <div class="form-box">
                <upload
                  @on-success="updatesybh"
                  @updateTimeChange="updatesybh1"
                  :sheetsName="'Think_上月剩余备货'"
                  :logTableName='"Think_PO_LastMonth"'
                  :logObj="'upsybh'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_上月剩余备货'"
                :tableName='"Think_PO_LastMonth"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_上月剩余备货'"
                ref="gridsybh">
              </v-table>
            </div>
          </div>
        </el-tab-pane>        
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>Think T TP 预估供应
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatettpyggy"
                  @updateTimeChange="updatettpyggy1"
                  :sheetsName="'Think_T_TP_预估供应'"
                  :logTableName='"Think_T_TP_Replenishment_Limit"'
                  :logObj="'gridttpyggy'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_T_TP_预估供应'"
                :tableName='"Think_T_TP_Replenishment_Limit"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TP_预估供应'"
                ref="gridttpyggy">
              </v-table>
            </div>
            <h2>Think T DT 预估供应
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatetdtyggy"
                  @updateTimeChange="updatetdtyggy1"
                  :sheetsName="'Think_T_DT_预估供应'"
                  :logTableName='"Think_T_DT_Replenishment_Limit"'
                  :logObj="'gridtdtyggy'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_T_DT_预估供应'"
                :tableName='"Think_T_DT_Replenishment_Limit"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_DT_预估供应'"
                ref="gridtdtyggy">
              </v-table>
            </div>
            <h2>Think T TB 预估供应
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatettbyggy"
                  @updateTimeChange="updatettbyggy1"
                  :sheetsName="'Think_T_TB_预估供应'"
                  :logTableName='"Think_T_TB_Replenishment_Limit"'
                  :logObj="'gridttbyggy'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Think_T_TB_预估供应'"
                :tableName='"Think_T_TB_Replenishment_Limit"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_TB_预估供应'"
                ref="gridttbyggy">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>Think InvTime
              <div class="form-box">
                <upload
                  @on-success="updateinvtime"
                  @updateTimeChange="updateinvtime1"
                  :sheetsName="'Think_InvTime'"
                  :logTableName="'Think_InvTime'"
                  :logObj="'gridinvtime'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_InvTime'"
                :tableName="'Think_InvTime'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_InvTime'"
                ref="gridinvtime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>Think ROL date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'Think_ROL_date'"
                  :logTableName="'Think_ROL_date'"
                  :logObj="'gridroldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_ROL_date'"
                :tableName="'Think_ROL_date'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_ROL_date'"
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
import VTable from '@/components/public/vtablePage'
// const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      tabPosition: 'left',
      menuArr: ['上月剩余备货', '预估供应', 'InvTime', 'ROL date']
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
    updateinvtime () { // 上传后自动刷新表格数据
      this.$refs.gridinvtime.updateTabFun()
    },
    updateinvtime1 () { // 上传后自动刷新表格数据
      this.$refs.gridinvtime.updateTimeChange()
    },
    updateroldate () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () { // 上传后自动刷新表格数据
      this.$refs.gridroldate.updateTimeChange()
    },
    updatesybh () {
      this.$refs.gridsybh.updateTabFun()
    },
    updatesybh1 () {
      this.$refs.gridsybh.updateTimeChange()
    },
    updatettpyggy () {
      this.$refs.gridttpyggy.updateTabFun()
    },
    updatettpyggy1 () {
      this.$refs.gridttpyggy.updateTimeChange()
    },
    updatetdtyggy () {
      this.$refs.gridtdtyggy.updateTabFun()
    },
    updatetdtyggy1 () {
      this.$refs.gridtdtyggy.updateTimeChange()
    },
    updatettbyggy () {
      this.$refs.gridttbyggy.updateTabFun()
    },
    updatettbyggy1 () {
      this.$refs.gridttbyggy.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tarupload
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

