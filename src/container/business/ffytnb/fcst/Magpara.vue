<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiitem">
          <div class="block">
            <h2>YTNB 管理看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <div class="form-box">
                <updata
                  @on-success="updatemanagerpt"
                  :menuId="'206'"
                  :menuName="'预测管理_管理看板'"
                  :logTableName="'YTNB_Manage_Report_FCST_Calendar'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_管理看板'"
                :tableName="'YTNB_Manage_Report_FCST_Calendar'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_管理看板'"
                ref="gridmanagerpt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>YTNB 长期预测 上传
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatefcstlongup"
                  @updateTimeChange="updatefcstlongup1"
                  :sheetsName="'YTNB_长期预测_上传'"
                  :logTableName='"YTNB_FCST_Longterm_Upload"'
                  :logObj="'gridfcstlongup'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTNB_长期预测_上传'"
                :tableName='"YTNB_FCST_Longterm_Upload"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_长期预测_上传'"
                ref="gridfcstlongup">
              </v-table>
            </div>
            <h2>YTNB 长期预测
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTNB_长期预测'"
                :tableName='"YTNB_FCST_Longterm"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_长期预测'"
                ref="gridfcstlong">
              </v-table>
            </div>
            <h2>YTNB 长期预测 汇总
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'YTNB_长期预测_汇总'"
                :tableName='"YTNB_FCST_Longterm_TTL"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_长期预测_汇总'"
                ref="gridfcstlongttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="npiItem">
          <div class="block">
            <h2>YTNB CPU分货
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatecpualloc"
                  @updateTimeChange="updatecpualloc1"
                  :sheetsName="'YTNB_CPU分货'"
                  :logTableName='"YTNB_CPU_Allocation"'
                  :logObj="'gridcpualloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'YTNB_CPU分货'"
                :tableName='"YTNB_CPU_Allocation"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_CPU分货'"
                ref="gridcpualloc">
              </v-table>
            </div>
            <h2>YTNB CPU分货 汇总
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'YTNB_CPU分货_汇总'"
                :tableName='"YTNB_CPU_Allocation_TTL"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_CPU分货_汇总'"
                ref="gridcpuallocttl">
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
import VTable from '@/components/public/vtablePage251'
import Updata from '@/components/public/updata251'
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      tabPosition: 'left',
      menuArr: ['管理看板', '长期预测', 'CPU分货']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
    }, 3000)
  },
  created () {
  },
  methods: {
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'YTNB_管理看板'
        },
        done (data) {
          alert(data)
          vm.disabledemail = false
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
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    updatemanagerpt () {
      this.$refs.gridmanagerpt.updateTabFun()
    },
    updatefcstlongup () {
      this.$refs.gridfcstlongup.updateTabFun()
      this.$refs.gridfcstlong.updateTabFun()
      this.$refs.gridfcstlongttl.updateTabFun()
    },
    updatefcstlongup1 () {
      this.$refs.gridfcstlongup.updateTimeChange()
    },
    updatecpualloc () {
      this.$refs.gridcpualloc.updateTabFun()
      this.$refs.gridcpuallocttl.updateTabFun()
    },
    updatecpualloc1 () {
      this.$refs.gridcpualloc.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
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
