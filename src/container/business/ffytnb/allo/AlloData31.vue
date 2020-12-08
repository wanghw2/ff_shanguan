<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>YTNB 31 比例类型
              <div class="form-box">
                <Upload
                  :sheetsName="'YTNB_比例类型_31'"
                  @on-success="updatefhlx31"
                  @updateTimeChange="updatefhlx311"
                  :logTableName="'YTNB_Alloc_RateType_31'"
                  :logObj="'ytnbfhlx31'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTNB_比例类型_31'"
                :tableName="'YTNB_Alloc_RateType_31'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_比例类型_31'"
                ref="ytnbfhlx31">
              </v-table>
            </div>
          </div>  
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">             
            <h2>YTNB 31 分货占比
              <div class="form-box">
                <Upload
                  :sheetsName="'YTNB_分货占比_31'"
                  @on-success="updatefhzb31"
                  @updateTimeChange="updatefhzb311"
                  :logTableName="'YTNB_Alloc_RegionRate_31'"
                  :logObj="'ytnbfhzb31'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTNB_分货占比_31'"
                :tableName="'YTNB_Alloc_RegionRate_31'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_分货占比_31'"
                ref="ytnbfhzb31">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block"> 
            <h2>YTNB 31 参数校验
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">邮件通知</a>
              <div class="form-box">
                <updata
                  @on-success="updateytnbsubmit31"
                  :text='"提交"'
                  :menuId="'804'"
                  :menuName="'分货参数_参数校验31'"
                  :logTableName="'YTNB_Alloc_Para_Check_31'"
                  :proIndex="'202'" >
                </updata>
              </div>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateytnbcheck31"
                  :text='"校验"'
                  :menuId="'804'"
                  :menuName="'分货参数_参数校验31'"
                  :logTableName="'YTNB_Alloc_Para_Check_31'"
                  :proIndex="'201'" >
                </updata>
              </div>             
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'YTNB_参数校验_31'"
                :tableName="'YTNB_Alloc_Para_Check_31'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_参数校验_31'"
                ref="ytnbcheck31">
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
import updata from '@/components/public/updata251'
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
      menuArr: ['31 比例类型', '31 分货占比', '31 参数校验']
    }
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
          DOWNLOAD_BAT_PATH: 'YTNB_分货参数校验_31_Download'
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
          SENDMAIL_BAT_PATH: 'YTNB_分货参数校验_31'
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
    updateFhlx31 () {
      this.$refs.ytnbfhlx31.updateTabFun()
    },
    updatefhzb31 () {
      this.$refs.ytnbfhzb31.updateTabFun()
    },
    updateytnbcheck31 () {
      this.$refs.ytnbcheck31.updateTabFun()
    },
    updateytnbsubmit31 () {
      this.$refs.ytnbcheck31.updateTabFun()
    },
    updateFhlx311 () {
      this.$refs.ytnbfhlx31.updateTimeChange()
    },
    updatefhzb311 () {
      this.$refs.ytnbfhzb31.updateTimeChange()
    }
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
    width 100%
    height 100%
    flex 1
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
          background #e3199e
          &:hover
            background #ca3997
      .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .addAccounted1
        width 100%
        height 400px
</style>
