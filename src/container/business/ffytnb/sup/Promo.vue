<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiItem">
          <div class="block">
            <h2>YTNB 促销Schedule
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatePromoteSchedule"
                  @updateTimeChange="updatePromoteSchedule1"
                  :sheetsName="'YTNB_促销Schedule'"
                  :logTableName='"YTNB_Product_Promote_Schedule"'
                  :logObj="'gridPromoteSchedule'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'YTNB_促销Schedule'"
                :tableName='"YTNB_Product_Promote_Schedule"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销Schedule'"
                ref="gridPromoteSchedule">
              </v-table>
            </div>
            <h2>YTNB 促销需求 上传
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatePromoteupload"
                  @updateTimeChange="updatePromote1"
                  :sheetsName="'YTNB_促销需求_上传'"
                  :logTableName='"YTNB_Product_Promote_Demand_Upload"'
                  :logObj="'gridPromoteupload'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTNB_促销需求_上传'"
                :tableName='"YTNB_Product_Promote_Demand_Upload"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销需求_上传'"
                ref="gridPromoteupload">
              </v-table>
            </div>
            <h2>YTNB 促销需求
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTNB_促销需求'"
                :tableName='"YTNB_Product_Promote_Demand"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销需求'"
                ref="gridPromote">
              </v-table>
            </div>
            <h2>YTNB 促销需求 汇总
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'YTNB_促销需求_汇总'"
                :tableName='"YTNB_Product_Promote_Demand_TTL"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销需求_汇总'"
                ref="gridPromotettl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>YTNB 促销预估供应
              <div class="form-box">
                <upload
                  @on-success="updatesupplyol"
                  @updateTimeChange="updatesupplyol1"
                  :sheetsName="'YTNB_促销预估供应'"
                  :logTableName='"YTNB_Product_Promote_Supply_OL"'
                  :logObj="'gridsupplyol'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_促销预估供应'"
                :tableName='"YTNB_Product_Promote_Supply_OL"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销预估供应'"
                ref="gridsupplyol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>YTNB 促销供应分配
              <div class="form-box">
                <upload
                  @on-success="updatesupplyalloc"
                  @updateTimeChange="updatesupplyalloc1"
                  :sheetsName="'YTNB_促销供应分配'"
                  :logTableName='"YTNB_Product_Promote_Supply_Alloc"'
                  :logObj="'gridsupplyalloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_促销供应分配'"
                :tableName='"YTNB_Product_Promote_Supply_Alloc"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销供应分配'"
                ref="gridsupplyalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="npiItem">
          <div class="block">
            <h2>YTNB 促销监控
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatePromotedb"
                  :menuId="'403'"
                  :menuName="'关键节点_促销监控'"
                  :logTableName="'YTNB_Product_Promote_PN_Detail'"
                  :proIndex="'201'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_促销监控'"
                :tableName='"YTNB_Product_Promote_PN_Detail"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_促销监控'"
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
import VTable from '@/components/public/vtablePage251'
import Updata from '@/components/public/updata251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      tabPosition: 'left',
      menuArr: ['促销需求', '促销预估供应', '促销供应分配', '促销监控']
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
    download () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'YTNB_促销监控_Download'
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
          SENDMAIL_BAT_PATH: 'YTNB_促销监控'
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
