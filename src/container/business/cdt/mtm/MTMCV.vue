<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 物料特征值
              <div class="form-box">
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_物料特征值'"
                :tableName="'ConDT_MTM_CV'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_物料特征值'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="sbbuplod">
          <div class="block">
            <!-- <h2 class="left">ConDT 特征值无标签
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=ConDT_特征值无标签')" >下载</a>
            </h2>
            <h2 class="right">ConDT 物料无特征值
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=ConDT_物料无特征值')" >下载</a>
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
                :sheetsName="'ConDT_物料无CV值'"
                :tableName='"ConDT_CV_MTM_Missing"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_物料无CV值'">
              </v-table>
            </div>
            <h2>物料手工CV值
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal2"
                  @updateTimeChange="updateFinalPSD2"
                  :logTableName="'ConDT_CV_MTM_Adjust'"
                  :sheetsName="'ConDT_物料手工CV值'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_物料手工CV值'"
                :tableName='"ConDT_CV_MTM_Adjust"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_物料手工CV值'"
                ref="thinkFinalPSD2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="sbbuplod">
          <div class="block">
            <h2>ConDT CPU标签
              <div class="form-box">
                <upload
                  ref="cpu"
                  @on-success="updateLabelCpu"
                  @updateTimeChange="updateLabelCpu1"
                  :sheetsName="'ConDT_CPU标签'"
                  :logTableName='"ConDT_CV_Label_CPU"'
                  :logObj="'cpu'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_CPU标签'"
                :tableName='"ConDT_CV_Label_CPU"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_CPU标签'"
                ref="gridcpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 显卡标签
              <div class="form-box">
                <upload
                  ref="gfx"
                  @on-success="updateLabelGfx"
                  @updateTimeChange="updateLabelGfx1"
                  :sheetsName="'ConDT_显卡标签'"
                  :logTableName='"ConDT_CV_Label_GFX"'
                  :logObj="'gfx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_显卡标签'"
                :tableName='"ConDT_CV_Label_GFX"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_显卡标签'"
                ref="gridgfx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 硬盘标签
              <div class="form-box">
                <upload
                  ref="hdd"
                  @on-success="updateLabelHDD"
                  @updateTimeChange="updateLabelHDD1"
                  :sheetsName="'ConDT_硬盘标签'"
                  :logTableName='"ConDT_CV_Label_HDD"'
                  :logObj="'hdd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_硬盘标签'"
                :tableName='"ConDT_CV_Label_HDD"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_硬盘标签'"
                ref="gridhdd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 内存标签
              <div class="form-box">
                <upload
                  ref="mem"
                  @on-success="updateLabelMem"
                  @updateTimeChange="updateLabelMem1"
                  :sheetsName="'ConDT_内存标签'"
                  :logTableName='"ConDT_CV_Label_MEM"'
                  :logObj="'mem'">
                </upload>
              </div>
            </h2>
            <div class="addMem">
              <v-table
                :sheetsName="'ConDT_内存标签'"
                :tableName='"ConDT_CV_Label_MEM"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_内存标签'"
                ref="gridmem" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 主板标签
              <div class="form-box">
                <upload
                  ref="mb"
                  @on-success="updateLabelMb"
                  @updateTimeChange="updateLabelMb1"
                  :logTableName='"ConDT_CV_Label_MB"'
                  :sheetsName="'ConDT_主板标签'"
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_主板标签'"
                :tableName='"ConDT_CV_Label_MB"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_主板标签'"
                ref="gridmb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 屏幕标签
              <div class="form-box">
                <upload
                  ref="panel"
                  @on-success="updateLabelPanel"
                  @updateTimeChange="updateLabelPanel1"
                  :logTableName='"ConDT_CV_Label_Panel"'
                  :sheetsName="'ConDT_屏幕标签'"
                  :logObj="'labelpanel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_屏幕标签'"
                :fileName="'ConDT_屏幕标签'"
                :tableName='"ConDT_CV_Label_Panel"'
                ref="gridlabelpanel"
                :source="'FF_IDSS_Data_CON'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="sbbuplod">
          <div class="block">
            <h2>ConDT 机箱标签
              <div class="form-box">
                <upload
                  ref="colorMark"
                  @on-success="updateLabelColor"
                  @updateTimeChange="updateLabelColor1"
                  :sheetsName="'ConDT_机箱标签'"
                  :logTableName='"ConDT_CV_Label_MC"'
                  :logObj="'colorMark'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_机箱标签'"
                :fileName="'ConDT_机箱标签'"
                :tableName='"ConDT_CV_Label_MC"'
                ref="gridsbbuplod"
                :source="'FF_IDSS_Data_CON'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="sbbuplod">
          <div class="block">
            <h2>ConDT OS标签
              <div class="form-box">
                <upload
                  ref="mb"
                  @on-success="updateLabelMb"
                  @updateTimeChange="updateLabelMb1"
                  :sheetsName="'ConDT_OS标签'"
                  :logTableName='"ConDT_CV_Label_OS"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_OS标签'"
                :tableName='"ConDT_CV_Label_OS"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_OS标签'"
                ref="gridmb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="sbbuplod">
          <div class="block">
            <h2>ConDT Office标签
              <div class="form-box">
                <upload
                  @on-success="updateOffice"
                  @updateTimeChange="updateOffice1"
                  :sheetsName="'ConDT_Office标签'"
                  :logTableName='"ConDT_CV_Label_Office"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_Office标签'"
                :tableName='"ConDT_CV_Label_Office"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_Office标签'"
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
      menuArr: ['物料特征值', 'CV值缺失', ' CPU标签', '显卡标签', '硬盘标签', '内存标签', '主板标签', '屏幕标签', '机箱标签', 'OS标签', 'Office标签']
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
    uploadFile (e) {
      if (this.disabled) {
        return
      }
      this.disabled = true
      let file = e.target.files[0]
      e.target.value = ''
      if (!file) {
        this.disabled = false
        return
      }
      let data = new FormData()
      data.append('file', file)
      data.append('sheetNames', 'ConDT_CPU标签,ConDT_显卡标签,ConDT_硬盘标签,ConDT_内存标签,ConDT_主板标签,ConDT_屏幕标签,ConDT_颜色标签,ConDT_物料特征值')
      let vm = this
      this.$ajax({
        url: '/uploadBatchExcel',
        data: data,
        done (data) {
          // console.log(data)
          let s = data
          let ss = s.split(',')
          for (let i = 0; i < ss.length; i++) {
            // console.log(ss[i])
            switch (true) {
              case ss[i] === '0':
                vm.getupdata0()
                break
              case ss[i] === '1':
                vm.getupdata1()
                break
              case ss[i] === '2':
                vm.getupdata2()
                break
              case ss[i] === '3':
                vm.getupdata3()
                break
              case ss[i] === '4':
                vm.getupdata4()
                break
              case ss[i] === '5':
                vm.getupdata5()
                break
              case ss[i] === '6':
                vm.getupdata6()
                break
              case ss[i] === '7':
                vm.getupdata7()
                break
            }
          }
          vm.disabled = false
        },
        fail (msg) {
          vm.disabled = false
        }
      })
    },
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
      this.$refs.colorMark.hislog()
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
