<template>
  <div class="tarupload">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>YTDT 预估供应
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateReplmt"
                  @updateTimeChange="updateReplmt1"
                  :sheetsName="'YTDT_预估供应'"
                  :logTableName="'YTDT_预估供应'"
                  :logObj="'gridReplmt'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTDT_预估供应'"
                :tableName="'YTDT_Replenishment_Limit'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_预估供应'"
                ref="gridReplmt">
              </v-table>
            </div>
            <h2>YTDT DF 预估供应
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTDT_DF预估供应'"
                :tableName='"YTDT_Replenishment_Limit_DF"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_DF预估供应'"
                ref="griddfyggy">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>YTDT 上月剩余备货
              <div class="form-box">
                <upload
                  @on-success="updatesybh"
                  @updateTimeChange="updatesybh1"
                  :sheetsName="'YTDT_上月剩余备货'"
                  :logTableName='"YTDT_PO_LastMonth"'
                  :logObj="'gridsybh'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_上月剩余备货'"
                :tableName='"YTDT_PO_LastMonth"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_上月剩余备货'"
                ref="gridsybh">
              </v-table>
            </div>
          </div>
        </el-tab-pane> 
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>YTDT InvTime
              <div class="form-box">
                <upload
                  @on-success="updateinvtime"
                  @updateTimeChange="updateinvtime1"
                  :sheetsName="'YTDT_InvTime'"
                  :logTableName="'YTDT_InvTime'"
                  :logObj="'gridinvtime'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_InvTime'"
                :tableName="'YTDT_InvTime'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_InvTime'"
                ref="gridinvtime">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
            <h2>YTDT ROL Date
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :sheetsName="'YTDT_ROL_Date'"
                  :logTableName="'YTDT_ROL_Date'"
                  :logObj="'gridroldate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_ROL_Date'"
                :tableName="'YTDT_ROL_Date'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_ROL_Date'"
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
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtablePage251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['预估供应', '上月剩余备货', 'InvTime', 'ROL Date']
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
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_DF预估供应_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
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
    updateReplmt () { // 上传后自动刷新表格数据
      this.$refs.gridReplmt.updateTabFun()
      this.$refs.griddfyggy.updateTabFun()
    },
    updateReplmt1 () { // 上传后自动刷新表格数据
      this.$refs.gridReplmt.updateTimeChange()
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
        padding 0 20px
        margin-bottom 5px
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

