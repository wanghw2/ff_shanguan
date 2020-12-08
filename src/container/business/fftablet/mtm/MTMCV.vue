<template>
  <div class="cpu-sbbuplod">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="sbbuplod">
          <div class="block">
            <h2 class="left">ConNB 特征值无标签
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=ConNB_特征值无标签')" >下载</a>
            </h2>
            <h2 class="right">ConNB 物料无特征值
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=ConNB_物料无特征值')" >下载</a>
            </h2>
            <div class="lpath">
              <div class="btn">
                <form class="download-box">
                  <input type="file" name="file" class="input" @change="uploadFile" :disabled="disabled" />
                  <span class="submit" :class="{'disabled': disabled}" >一键上传<i class="el-icon-upload2"></i></span>
                </form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 物料特征值
              <div class="form-box">
                <upload
                  ref="charactt"
                  @on-success="cnbcharacter"
                  @updateTimeChange="cnbcharacter1"
                  :logTableName="'ConNB_CHARACTE_MTM_Adjust'"
                  :logObj="'cnbcharac'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_物料特征值'"
                :tableName="'ConNB_CHARACTE_MTM_Adjust'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_物料特征值'"
                ref="cnbcharac">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="sbbuplod">
          <div class="block">
            <h2>ConNB CPU标签
              <div class="form-box">
                <upload
                  ref="cpu"
                  @on-success="updateLabelCpu"
                  @updateTimeChange="updateLabelCpu1"
                  :logTableName='"ConNB_CHARACTE_Label_CPU"'
                  :logObj="'cpu'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_CPU标签'"
                :tableName='"ConNB_CHARACTE_Label_CPU"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CPU标签'"
                ref="gridcpu">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 显卡标签
              <div class="form-box">
                <upload
                  ref="gfx"
                  @on-success="updateLabelGfx"
                  @updateTimeChange="updateLabelGfx1"
                  :logTableName='"ConNB_CHARACTE_Label_GFX"'
                  :logObj="'gfx'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_显卡标签'"
                :tableName='"ConNB_CHARACTE_Label_GFX"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_显卡标签'"
                ref="gridgfx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 硬盘标签
              <div class="form-box">
                <upload
                  ref="hdd"
                  @on-success="updateLabelHDD"
                  @updateTimeChange="updateLabelHDD1"
                  :logTableName='"ConNB_CHARACTE_Label_HDD"'
                  :logObj="'hdd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_硬盘标签'"
                :tableName='"ConNB_CHARACTE_Label_HDD"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_硬盘标签'"
                ref="gridhdd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 内存标签
              <div class="form-box">
                <upload
                  ref="mem"
                  @on-success="updateLabelMem"
                  @updateTimeChange="updateLabelMem1"
                  :logTableName='"ConNB_CHARACTE_Label_MEM"'
                  :logObj="'mem'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_内存标签'"
                :tableName='"ConNB_CHARACTE_Label_MEM"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_内存标签'"
                ref="gridmem" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 主板标签
              <div class="form-box">
                <upload
                  ref="mb"
                  @on-success="updateLabelMb"
                  @updateTimeChange="updateLabelMb1"
                  :logTableName='"ConNB_CHARACTE_Label_MB"'
                  :logObj="'mb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_主板标签'"
                :tableName='"ConNB_CHARACTE_Label_MB"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_主板标签'"
                ref="gridmb" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 屏幕标签
              <div class="form-box">
                <upload
                  ref="panel"
                  @on-success="updateLabelPanel"
                  @updateTimeChange="updateLabelPanel1"
                  :logTableName='"ConNB_CHARACTE_Label_Panel"'
                  :logObj="'labelpanel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_屏幕标签'"
                :fileName="'ConNB_屏幕标签'"
                :tableName='"ConNB_CHARACTE_Label_Panel"'
                ref="gridlabelpanel"
                :source="'FF_IDSS_Data_CON'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 颜色标签
              <div class="form-box">
                <upload
                  ref="colorMark"
                  @on-success="updateLabelColor"
                  @updateTimeChange="updateLabelColor1"
                  :logTableName='"ConNB_CHARACTE_Label_Color"'
                  :logObj="'colorMark'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_颜色标签'"
                :fileName="'ConNB_颜色标签'"
                :tableName='"ConNB_CHARACTE_Label_Color"'
                ref="gridsbbuplod"
                :source="'FF_IDSS_Data_CON'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 特征标签
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="' ConNB_特征标签'"
                :tableName='"ConNB_CHARACTE_Type"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="' ConNB_特征标签'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="sbbuplod">
          <div class="block">
            <h2>ConNB Family对应关系
              <div class="form-box">
                <upload
                  @on-success="cnbFamilyFun"
                  @updateTimeChange="cnbFamilyFun1"
                  :logTableName="'ConNB_Family'"
                  :logObj="'cnbfamily'">
                </upload>
              </div>
            </h2>
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
        <el-tab-pane :label="menuArr[11]" class="sbbuplod">
          <div class="block">
            <h2>ConNB Family更新
              <div class="form-box">
                <upload
                  @on-success="cnbMtmFun"
                  @updateTimeChange="cnbMtmFun1"
                  :logTableName="'ConNB_Family_Update'"
                  :logObj="'cnbmtm'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family更新'"
                :tableName="'ConNB_Family_Update'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family更新'"
                ref="cnbmtm">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[12]" class="sbbuplod">
          <div class="block">
            <h2>ConNB 产品细分
              <div class="form-box">
                <upload
                  @on-success="cnbFamilyKey"
                  @updateTimeChange="cnbFamilyKey1"
                  :logTableName="'ConNB_Family_Key'"
                  :logObj="'cnbFamilyKey'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_产品细分'"
                :tableName="'ConNB_Family_Key'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_产品细分'"
                ref="cnbfamilyKey">
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
export default {
  data () {
    return {
      serverUrl: domainUrl,
      disabled: false,
      tabPosition: 'left',
      menuArr: ['特征值', '物料特征值', 'CPU标签', '显卡标签', '硬盘标签', '内存标签', '主板标签', '屏幕标签', '颜色标签', '特征标签', 'Family对应关系', 'Family更新', '产品细分']
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
    uploadFile (e) { // 上传文件
      if (this.disabled) {
        return
      }
      this.disabled = true // 按钮不可点击
      let file = e.target.files[0]
      e.target.value = ''
      if (!file) {
        this.disabled = false
        return
      }
      let data = new FormData()
      data.append('file', file)
      // 一键上传多个excel文件
      data.append('sheetNames', 'ConNB_CPU标签,ConNB_显卡标签,ConNB_硬盘标签,ConNB_内存标签,ConNB_主板标签,ConNB_屏幕标签,ConNB_颜色标签,ConNB_物料特征值')
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
    getupdata0 () { // 更新日志
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
    cnbcharacter () { // 上传后自动刷新表格数据
      this.$refs.cnbcharac.updateTabFun()
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
    cnbcharacter1 () {
      this.$refs.cnbcharac.updateTimeChange()
    },
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
    },
    cnbFamilyKey () {
      this.$refs.cnbfamilyKey.updateTabFun()
    },
    cnbFamilyKey1 () {
      this.$refs.cnbfamilyKey.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.cpu-sbbuplod
  width 100%
  height 100%
  padding 10px
  .lpath
    position relative
    .btn
      height 30px
      width 139px
      position absolute
      right 22px
      top 5px
      .download-box
        width 139px
        height 30px
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
          height 30px
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
          height 30px
          line-height 29px
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
        .form-box
          min-width 80px
          height auto
          float right
      .left,.right
        width 42%
        position relative
        border-radius 6px
        .small
          border-radius 6px
          height 24px
          width 60px
          line-height 24px
          text-align center
          position absolute
          border 0
          top 6px
          right 20px
          font-size 12px
          background #6ab7fc
          color #fff
          &:hover
            background #4691e4
      .left
        float left
        margin-right 1%
      .right
        float left
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
