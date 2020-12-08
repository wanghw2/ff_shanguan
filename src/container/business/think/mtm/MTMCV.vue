<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="sbbuplod">
          <div class="block">
            <h2>Think 物料特征值</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_物料特征值'"
                :tableName="'Think_MTM_CV'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_物料特征值'"
                ref="cnbcharac">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="sbbuplod">
          <div class="block">
            <!-- <h2 class="left">Think 特征值无标签
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=Think_特征值无标签')" >下载</a>
            </h2>
            <h2 class="right">Think 物料无特征值
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=Think_物料无特征值')" >下载</a>
            </h2>
            <div class="lpath">
              <div class="btn">
                <form class="download-box">
                  <input type="file" name="file" class="input" @change="uploadFile" :disabled="disabled" />
                  <span class="submit" :class="{'disabled': disabled}" >一键上传<i class="el-icon-upload2"></i></span>
                </form>
              </div>
            </div> -->
            <h2>物料无CV值
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_物料无CV值'"
                :tableName='"Think_CV_MTM_Missing"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_物料无CV值'">
              </v-table>
            </div>
            <h2>物料手工CV值
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal2"
                  @updateTimeChange="updateFinalPSD2"
                  :logTableName="'Think_CV_MTM_Adjust'"
                  :sheetsName="'Think_物料手工CV值'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_物料手工CV值'"
                :tableName='"Think_CV_MTM_Adjust"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_物料手工CV值'"
                ref="thinkFinalPSD2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="sbbuplod">
          <div class="block">
            <h2>Think Base标签
              <div class="form-box">
                <upload
                  @on-success="updateBase"
                  @updateTimeChange="updateBase1"
                  :sheetsName="'Think_Base标签'"
                  :logTableName='"Think_CV_Label_Base"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Base标签'"
                :tableName='"Think_CV_Label_Base"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Base标签'"
                ref="gridBase" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="sbbuplod">
          <div class="block">
            <h2>Think CPU标签
              <div class="form-box">
                <upload
                  :sheetsName="'Think_CPU标签'"
                  @on-success="updateLabelCpu"
                  @updateTimeChange="updateLabelCpu1"
                  :logTableName='"Think_CV_Label_CPU"'
                  :logObj="'cpu'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_CPU标签'"
                :tableName='"Think_CV_Label_CPU"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_CPU标签'"
                ref="gridcpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="sbbuplod">
          <div class="block">
            <h2>Think 显卡标签
              <div class="form-box">
                <upload
                  :sheetsName="'Think_显卡标签'"
                  @on-success="updateLabelGfx"
                  @updateTimeChange="updateLabelGfx1"
                  :logTableName='"Think_CV_Label_GFX"'
                  :logObj="'gfx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_显卡标签'"
                :tableName='"Think_CV_Label_GFX"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_显卡标签'"
                ref="gridgfx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="sbbuplod">
          <div class="block">
            <h2>Think 硬盘标签
              <div class="form-box">
                <upload
                  :sheetsName="'Think_硬盘标签'"
                  @on-success="updateLabelHDD"
                  @updateTimeChange="updateLabelHDD1"
                  :logTableName='"Think_CV_Label_HDD"'
                  :logObj="'hdd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_硬盘标签'"
                :tableName='"Think_CV_Label_HDD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_硬盘标签'"
                ref="gridhdd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="sbbuplod">
          <div class="block">
            <h2>Think 内存标签
              <div class="form-box">
                <upload
                  :sheetsName="'Think_内存标签'"
                  @on-success="updateLabelMem"
                  @updateTimeChange="updateLabelMem1"
                  :logTableName='"Think_CV_Label_MEM"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_内存标签'"
                :tableName='"Think_CV_Label_MEM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_内存标签'"
                ref="gridmem" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="sbbuplod">
          <div class="block">
            <h2>Think 屏幕标签
              <div class="form-box">
                <upload
                  :sheetsName="'Think_屏幕标签'"
                  @on-success="updateLabelPanel"
                  @updateTimeChange="updateLabelPanel1"
                  :logTableName='"Think_CV_Label_Panel"'
                  :logObj="'labelpanel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_屏幕标签'"
                :fileName="'Think_屏幕标签'"
                :tableName='"Think_CV_Label_Panel"'
                ref="gridlabelpanel"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="sbbuplod">
          <div class="block">
            <h2>Think 颜色标签
              <div class="form-box">
                <upload
                  ref="colormark"
                  @on-success="updateLabelColor"
                  @updateTimeChange="updateLabelColor1"
                  :sheetsName="'Think_颜色标签'"
                  :logTableName='"Think_CV_Label_Color"'
                  :logObj="'colormark'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_颜色标签'"
                :fileName="'Think_颜色标签'"
                :tableName='"Think_CV_Label_Color"'
                ref="gridsbbuplod"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="sbbuplod">
          <div class="block">
            <h2>Think OS标签
              <div class="form-box">
                <upload
                  ref="mb"
                  @on-success="updateLabelMb"
                  @updateTimeChange="updateLabelMb1"
                  :sheetsName="'Think_OS标签'"
                  :logTableName='"Think_CV_Label_OS"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_OS标签'"
                :tableName='"Think_CV_Label_OS"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_OS标签'"
                ref="gridmb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="sbbuplod">
          <div class="block">
            <h2>Think Office标签
              <div class="form-box">
                <upload
                  @on-success="updateOffice"
                  @updateTimeChange="updateOffice1"
                  :sheetsName="'Think_Office标签'"
                  :logTableName='"Think_CV_Label_Office"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Office标签'"
                :tableName='"Think_CV_Label_Office"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Office标签'"
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
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      serverUrl: domainUrl,
      disabled: false,
      tabPosition: 'left',
      menuArr: ['物料特征值', 'CV值缺失', 'Base标签', 'CPU标签', '显卡标签', '硬盘标签', '内存标签', '屏幕标签', '颜色标签', 'OS标签', 'Office标签']
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
    }, 3000)
  },
  methods: {
    getupdata0 () {
      this.$refs.cpu.hislog()
    },
    getupdata1 () {
      this.$refs.gfx.hislog()
    },
    getupdata2 () {
      this.$refs.hdd.hislog()
    },
    getupdata3 () {
      this.$refs.mem.hislog()
    },
    getupdata4 () {
      this.$refs.mb.hislog()
    },
    getupdata5 () {
      this.$refs.panel.hislog()
    },
    getupdata6 () {
      this.$refs.colormark.hislog()
    },
    getupdata7 () {
      this.$refs.charactt.hislog()
    },
    updateLabelColor () { // 上传后自动刷新表格数据
      this.$refs.gridsbbuplod.updateTabFun()
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
      this.$refs.gridlabelpanel.updateTabFun()
    },
    updateLabelMb () {
      this.$refs.gridmb.updateTabFun()
    },
    updateLabelColor1 () { // 上传后自动刷新表格数据
      this.$refs.gridsbbuplod.updateTimeChange()
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
    updateFinal2 () {
      this.$refs.thinkFinalPSD2.updateTabFun()
    },
    updateFinalPSD2 () {
      this.$refs.thinkFinalPSD2.updateTimeChange()
    },
    updateOffice () {
      this.$refs.gridOffice.updateTabFun()
    },
    updateOffice1 () {
      this.$refs.gridOffice.updateTimeChange()
    },
    updateBase () {
      this.$refs.gridBase.updateTabFun()
    },
    updateBase1 () {
      this.$refs.gridBase.updateTimeChange()
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
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
  width 100%
  height 100%
  padding 10px
  .lpath
    position relative
    .btn
      height 30px
      width 100px
      position absolute
      right 0px
      top 6px
      .download-box
        width 100px
        height 24px
        position relative
        .el-icon-upload2
          margin-left 10px
        &:hover
          .submit
            background #00b000
            &.disabled
              background #ccc
              cursor not-allowed
        .input
          width 100%
          height 24px
          line-height 24px
          display block
          opacity 0
          position absolute
          left 0
          top 0
          z-index 99
          cursor pointer
        .submit
          z-index 1
          width 100%
          height 24px
          line-height 24px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #76d467
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
  .sbbuplod
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
        .small
          border-radius 6px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          display block
          margin 6px 0px 0px 20px
          &:hover
            background #4691e4
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
