<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2 class="h2">物料 SBB
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_MTM_SBB_Trans'"
                :tableName="'ConNB_MTM_SBB_Trans'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_MTM_SBB_Trans'"
                ref="gridmtmsbb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>ConNB CPU标签
              <div class="form-box">
                <upload
                  ref="cpu"
                  @on-success="updateLabelCpu"
                  @updateTimeChange="updateLabelCpu1"
                  :sheetsName="'ConNB_CPU标签'"
                  :logTableName='"ConNB_SBB_Label_CPU"'
                  :logObj="'cpu'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_CPU标签'"
                :tableName='"ConNB_SBB_Label_CPU"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CPU标签'"
                ref="gridcpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2>ConNB 显卡标签
              <div class="form-box">
                <upload
                  ref="gfx"
                  @on-success="updateLabelGfx"
                  @updateTimeChange="updateLabelGfx1"
                  :sheetsName="'ConNB_显卡标签'"
                  :logTableName='"ConNB_SBB_Label_GFX"'
                  :logObj="'gfx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_显卡标签'"
                :tableName='"ConNB_SBB_Label_GFX"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_显卡标签'"
                ref="gridgfx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="mtmItem">
          <div class="block">
            <h2>ConNB 硬盘标签
              <div class="form-box">
                <upload
                  ref="hdd"
                  @on-success="updateLabelHDD"
                  @updateTimeChange="updateLabelHDD1"
                  :sheetsName="'ConNB_硬盘标签'"
                  :logTableName='"ConNB_SBB_Label_HDD"'
                  :logObj="'hdd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_硬盘标签'"
                :tableName='"ConNB_SBB_Label_HDD"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_硬盘标签'"
                ref="gridhdd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="mtmItem">
          <div class="block">
            <h2>ConNB 内存标签
              <div class="form-box">
                <upload
                  ref="mem"
                  @on-success="updateLabelMem"
                  @updateTimeChange="updateLabelMem1"
                  :sheetsName="'ConNB_内存标签'"
                  :logTableName='"ConNB_SBB_Label_MEM"'
                  :logObj="'mem'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_内存标签'"
                :tableName='"ConNB_SBB_Label_MEM"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_内存标签'"
                ref="gridmem" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="mtmItem">
          <div class="block">
            <h2>ConNB 屏幕标签
              <div class="form-box">
                <upload
                  ref="panel"
                  @on-success="updateLabelPanel"
                  @updateTimeChange="updateLabelPanel1"
                  :sheetsName="'ConNB_屏幕标签'"
                  :logTableName='"ConNB_SBB_Label_Panel"'
                  :logObj="'panel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_屏幕标签'"
                :fileName="'ConNB_屏幕标签'"
                :tableName='"ConNB_SBB_Label_Panel"'
                :source="'FF_IDSS_Data_CON'"
                ref="gridpanel" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="mtmItem">
          <div class="block">
            <h2>ConNB 颜色标签
              <div class="form-box">
                <upload
                  ref="Color"
                  @on-success="updateLabelColor"
                  @updateTimeChange="updateLabelColor1"
                  :sheetsName="'ConNB_颜色标签'"
                  :logTableName='"ConNB_SBB_Label_Color"'
                  :logObj="'Color'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_颜色标签'"
                :fileName="'ConNB_颜色标签'"
                :tableName='"ConNB_SBB_Label_Color"'
                :source="'FF_IDSS_Data_CON'"
                ref="gridColor" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="mtmItem">
          <div class="block">
            <h2>ConNB OS标签
              <div class="form-box">
                <upload
                  ref="OS"
                  @on-success="updateLabelOS"
                  @updateTimeChange="updateLabelOS1"
                  :sheetsName="'ConNB_OS标签'"
                  :logTableName='"ConNB_SBB_Label_OS"'
                  :logObj="'OS'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_OS标签'"
                :tableName='"ConNB_SBB_Label_OS"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_OS标签'"
                ref="gridOS" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="mtmItem">
          <div class="block">
            <h2>ConNB Office标签
              <div class="form-box">
                <upload
                  @on-success="updateOffice"
                  @updateTimeChange="updateOffice1"
                  :sheetsName="'ConNB_Office标签'"
                  :logTableName='"ConNB_SBB_Label_Office"'
                  :logObj="'Office'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Office标签'"
                :tableName='"ConNB_SBB_Label_Office"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Office标签'"
                ref="gridOffice" >
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
import VTable from '@/components/public/vtablePage'
import Updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['物料 SBB', 'CPU标签', '显卡标签', '硬盘标签', '内存标签', '屏幕标签', '颜色标签', 'OS标签', 'Office标签']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
  },
  mounted () {
    this.$nextTick(() => {
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
          DOWNLOAD_BAT_PATH: 'ConNB_MTM_SBB_Download'
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
    updateLabelColor () { // 上传后自动刷新表格数据
      this.$refs.gridColor.updateTabFun()
    },
    updateLabelCpu () {
      this.$refs.gridcpu.updateTabFun()
    },
    updateLabelGfx () {
      this.$refs.gridgfx.updateTabFun()
    },
    updateLabelHDD () {
      this.$refs.gridhdd.updateTabFun()
    },
    updateLabelMem () {
      this.$refs.gridmem.updateTabFun()
    },
    updateLabelPanel () {
      this.$refs.gridpanel.updateTabFun()
    },
    updateLabelMb () {
      this.$refs.gridmb.updateTabFun()
    },
    updateLabelColor1 () { // 上传后自动刷新表格数据
      this.$refs.gridColor.updateTimeChange()
    },
    updateLabelCpu1 () {
      this.$refs.gridcpu.updateTimeChange()
    },
    updateLabelGfx1 () {
      this.$refs.gridgfx.updateTimeChange()
    },
    updateLabelHDD1 () {
      this.$refs.gridhdd.updateTimeChange()
    },
    updateLabelMem1 () {
      this.$refs.gridmem.updateTimeChange()
    },
    updateLabelPanel1 () {
      this.$refs.gridlabelpanel.updateTimeChange()
    },
    updateLabelMb1 () {
      this.$refs.gridmb.updateTimeChange()
    },
    updateOffice () {
      this.$refs.gridOffice.updateTabFun()
    },
    updateOffice1 () {
      this.$refs.gridOffice.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
  width 100%
  height 100%
  padding 10px
  .mtmItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 13px
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
