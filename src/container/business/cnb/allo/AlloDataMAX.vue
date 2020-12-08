<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConNB 比例类型                  
              <div class="form-box">
                <updata
                  @on-success="updatecnbffread"
                  :text='"同步"'
                  :menuId="'231'"
                  :menuName="'分货管理_分货参数_MAX'"
                  :logTableName="'ConNB_Alloc_RateType_Maximize'"
                  :proIndex="'2'" >
                </updata>
              </div>          
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_比例类型'"
                  @on-success="updateFhlx"
                  @updateTimeChange="updateFhlx1"
                  :logTableName="'ConNB_Alloc_RateType_Maximize'"
                  :logObj="'cnbfhlx'">
                </Upload>
              </div>              
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_比例类型'"
                :tableName="'ConNB_Alloc_RateType_Maximize'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_比例类型'"
                ref="cnbfhlx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货占比              
              <div class="form-box">
                <updata
                  @on-success="updatecnbffread"
                  :text='"同步"'
                  :menuId="'231'"
                  :menuName="'分货管理_分货参数_MAX'"
                  :logTableName="'ConNB_Alloc_RateType_Maximize'"
                  :proIndex="'2'" >
                </updata>
              </div>              
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货占比'"
                  @on-success="updateQdzb"
                  @updateTimeChange="updateQdzb1"
                  :logTableName="'ConNB_Alloc_RegionRate_Maximize'"
                  :logObj="'cnbqdzb'">
                </Upload>
              </div>              
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货占比'"
                :tableName="'ConNB_Alloc_RegionRate_Maximize'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货占比'"
                ref="cnbqdzb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货最大化
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbmax"
                  :menuId="'231'"
                  :menuName="'分货管理_分货参数_MAX'"
                  :logTableName="'ConNB_Alloc_Target_Maximize_BP'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货最大化'"
                :tableName="'ConNB_Alloc_Target_Maximize_BP'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货最大化'"
                ref="gridcnbmax">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="alloItem">
          <div class="block">
            <h2>ConNB 最大化参数
              <div class="form-box">
                <updata
                  @on-success="updatecnbdelpara"
                  :text='"清空"'
                  :menuId="'231'"
                  :menuName="'分货管理_分货参数_MAX'"
                  :logTableName="'ConNB_Alloc_Target_Maximize_Para'"
                  :proIndex="'3'" >
                </updata>
              </div>                 
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_最大化参数'"
                  @on-success="updatecnbmaxpara"
                  @updateTimeChange="updatecnbmaxpara1"
                  :logTableName="'ConNB_Alloc_Target_Maximize_Para'"
                  :logObj="'cnbmaxpara'">
                </Upload>
              </div>              
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_最大化参数'"
                :tableName="'ConNB_Alloc_Target_Maximize_Para'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_最大化参数'"
                ref="cnbmaxpara">
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
import updata from '@/components/public/updata'
const $ = window.$
export default {
  components: {
    Upload,
    VTable,
    updata
  },
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      disabledemail: false,
      disableddownload: false,
      menuArr: ['比例类型', '分货占比', '分货最大化', '最大化参数']
    }
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
          DOWNLOAD_BAT_PATH: 'ConNB_分货最大化_Download'
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
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'ConNB_分货最大化'
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
    updateFhlx () {
      this.$refs.cnbfhlx.updateTabFun()
    },
    updateQdzb () {
      this.$refs.cnbqdzb.updateTabFun()
    },
    updateFhlx1 () {
      this.$refs.cnbfhlx.updateTimeChange()
      this.$refs.cnbdffhlx.updateTimeChange()
    },
    updateQdzb1 () {
      this.$refs.cnbqdzb.updateTimeChange()
      this.$refs.cnbdfqdzb.updateTimeChange()
    },
    updatecnbmax () {
      this.$refs.gridcnbmax.updateTabFun()
    },
    updatecnbffread () {
      this.$refs.cnbqdzb.updateTabFun()
      this.$refs.cnbfhlx.updateTabFun()
    },
    updatecnbmaxpara () {
      this.$refs.cnbmaxpara.updateTabFun()
    },
    updatecnbmaxpara1 () {
      this.$refs.cnbmaxpara.updateTimeChange()
    },
    updatecnbdelpara () {
      this.$refs.cnbmaxpara.updateTabFun()
    }
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allodatachannel
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .alloItem
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
      .addCommit1
        width 100%
        height 400px
</style>
