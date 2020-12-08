<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>ConNB 促销Schedule
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatePromoteSchedule"
                  @updateTimeChange="updatePromoteSchedule1"
                  :sheetsName="'ConNB_促销Schedule'"
                  :logTableName='"ConNB_Product_Promote_Schedule"'
                  :logObj="'gridPromoteSchedule'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConNB_促销Schedule'"
                :tableName='"ConNB_Product_Promote_Schedule"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销Schedule'"
                ref="gridPromoteSchedule">
              </v-table>
            </div>
            <h2>ConNB 促销需求 上传
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatePromoteupload"
                  @updateTimeChange="updatePromoteupload1"
                  :sheetsName="'ConNB_促销需求_上传'"
                  :logTableName='"ConNB_Product_Promote_Demand_Upload"'
                  :logObj="'gridPromoteupload'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_促销需求_上传'"
                :tableName='"ConNB_Product_Promote_Demand_Upload"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销需求_上传'"
                ref="gridPromoteupload">
              </v-table>
            </div>
            <h2>ConNB 促销需求
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_促销需求'"
                :tableName='"ConNB_Product_Promote_Demand"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销需求'"
                ref="gridPromote">
              </v-table>
            </div>
            <h2>ConNB 促销需求 汇总
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConNB_促销需求_汇总'"
                :tableName='"ConNB_Product_Promote_Demand_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销需求_汇总'"
                ref="gridPromotettl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiItem">
          <div class="block">
            <h2>ConNB 促销Commit
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateCommitProfrom"
                  :text='"读取"'
                  :menuId="'368'"
                  :menuName="'关键节点_促销Commit'"
                  :logTableName="'ConNB_Commit_Promote'"
                  :proIndex="'1'" >
                </updata>
              </div>
              <div class="form-box">
                <upload-new
                  @on-success="updateCommitPro"
                  @updateTimeChange="updateCommitPro1"
                  :sheetsName="'ConNB_Commit_Promote'"
                  :dbName="'FF_IDSS_Data_CON'"
                  :url="'/uploadCommitTransfer'"
                  :tableName='"ConNB_Commit_Promote"'
                  :logTableName='"ConNB_Commit_Promote"'
                  :logObj="'gridCommitPro'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConNB_促销Commit'"
                :tableName='"ConNB_Commit_Promote"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销Commit'"
                ref="gridCommitPro">
              </v-table>
            </div>
            <h2>ConNB 促销Commit 汇总
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConNB_促销Commit_汇总'"
                :tableName='"ConNB_Commit_Promote_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销Commit_汇总'"
                ref="gridCommitProttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>ConNB 促销预估供应
              <div class="form-box">
                <upload
                  @on-success="updatesupplyol"
                  @updateTimeChange="updatesupplyol1"
                  :sheetsName="'ConNB_促销预估供应'"
                  :logTableName='"ConNB_Product_Promote_Supply_OL"'
                  :logObj="'gridsupplyol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_促销预估供应'"
                :tableName='"ConNB_Product_Promote_Supply_OL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销预估供应'"
                ref="gridsupplyol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>ConNB 促销供应分配
              <div class="form-box">
                <upload
                  @on-success="updatesupplyalloc"
                  @updateTimeChange="updatesupplyalloc1"
                  :sheetsName="'ConNB_促销供应分配'"
                  :logTableName='"ConNB_Product_Promote_Supply_Alloc"'
                  :logObj="'gridsupplyalloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_促销供应分配'"
                :tableName='"ConNB_Product_Promote_Supply_Alloc"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销供应分配'"
                ref="gridsupplyalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="npiItem">
          <div class="block">
            <h2>ConNB 促销监控
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatePromotedb"
                  :menuId="'368'"
                  :menuName="'关键节点_促销监控'"
                  :logTableName="'ConNB_Product_Promote_Dashboard'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_促销监控'"
                :tableName='"ConNB_Product_Promote_Dashboard"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_促销监控'"
                ref="gridPromotedb">
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
import UploadNew from '@/components/public/upload5'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      tabPosition: 'left',
      menuArr: ['促销需求', '促销Commit', '促销预估供应', '促销供应分配', '促销监控']
    }
  },
  components: {
    Upload,
    VTable,
    Updata,
    UploadNew
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
    }, 3000)
  },
  created () {
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
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    download () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_促销监控_Download'
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
    sendemail () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'ConNB_促销监控'
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
    updateCommitProfrom () {
      this.$refs.gridCommitPro.updateTabFun()
      this.$refs.gridCommitProttl.updateTabFun()
    },
    updateCommitPro () {
      this.$refs.gridCommitPro.updateTabFun()
      this.$refs.gridCommitProttl.updateTabFun()
    },
    updateCommitPro1 () {
      this.$refs.gridCommitPro.updateTimeChange()
    },
    updatePromoteupload () {
      this.$refs.gridPromoteupload.updateTabFun()
      this.$refs.gridPromote.updateTabFun()
      this.$refs.gridPromotettl.updateTabFun()
    },
    updatePromoteupload1 () {
      this.$refs.gridPromote.updateTimeChange()
    },
    updatePromotedb () {
      this.$refs.gridPromotedb.updateTabFun()
    },
    updatesupplyol () {
      this.$refs.gridsupplyol.updateTabFun()
    },
    updatesupplyol1 () {
      this.$refs.gridsupplyol.updateTimeChange()
    },
    updatesupplyalloc () {
      this.$refs.gridsupplyalloc.updateTabFun()
    },
    updatesupplyalloc1 () {
      this.$refs.gridsupplyalloc.updateTimeChange()
    },
    updatePromoteSchedule () {
      this.$refs.gridPromoteSchedule.updateTabFun()
    },
    updatePromoteSchedule1 () {
      this.$refs.gridPromoteSchedule.updateTimeChange()
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
