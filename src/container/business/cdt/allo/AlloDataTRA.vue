<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConDT 11 比例类型
              <div class="form-box">
                <Upload
                  :sheetsName="'ConDT_比例类型_11'"
                  @on-success="updatefhlx11"
                  @updateTimeChange="updatefhlx111"
                  :logTableName="'ConDT_Alloc_RateType_11'"
                  :logObj="'cdtfhlx11'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_比例类型_11'"
                :tableName="'ConDT_Alloc_RateType_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_比例类型_11'"
                ref="cdtfhlx11">
              </v-table>
            </div>
          </div>  
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">             
            <h2>ConDT 11 分货占比
              <div class="form-box">
                <Upload
                  :sheetsName="'ConDT_分货占比_11'"
                  @on-success="updatefhzb11"
                  @updateTimeChange="updatefhzb111"
                  :logTableName="'ConDT_Alloc_RegionRate_11'"
                  :logObj="'cdtfhzb11'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConDT_分货占比_11'"
                :tableName="'ConDT_Alloc_RegionRate_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_分货占比_11'"
                ref="cdtfhzb11">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block"> 
            <h2>ConDT 11 参数校验
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">邮件通知</a>
              <div class="form-box">
                <updata
                  @on-success="updatecdtsubmit11"
                  :text='"提交"'
                  :menuId="'223'"
                  :menuName="'分货参数_参数校验11'"
                  :logTableName="'ConDT_Alloc_Para_Check_11'"
                  :proIndex="'2'" >
                </updata>
              </div>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecdtcheck11"
                  :text='"校验"'
                  :menuId="'223'"
                  :menuName="'分货参数_参数校验11'"
                  :logTableName="'ConDT_Alloc_Para_Check_11'"
                  :proIndex="'1'" >
                </updata>
              </div>             
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConDT_参数校验_11'"
                :tableName="'ConDT_Alloc_Para_Check_11'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_参数校验_11'"
                ref="cdtcheck11">
              </v-table>
            </div>                         
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="alloItem">
          <div class="block">
            <h2>ConDT 61 比例类型
              <div class="form-box">
                <Upload
                  :sheetsName="'ConDT_比例类型_61'"
                  @on-success="updatefhlx61"
                  @updateTimeChange="updatefhlx611"
                  :logTableName="'ConDT_Alloc_RateType_61'"
                  :logObj="'cdtfhlx61'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConDT_比例类型_61'"
                :tableName="'ConDT_Alloc_RateType_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_比例类型_61'"
                ref="cdtfhlx61">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="alloItem">
          <div class="block">
            <h2>ConDT 61 分货占比
              <div class="form-box">
                <Upload
                  :sheetsName="'ConDT_分货占比_61'"
                  @on-success="updatefhzb61"
                  @updateTimeChange="updatefhzb611"
                  :logTableName="'ConDT_Alloc_RegionRate_61'"
                  :logObj="'cdtfhzb61'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConDT_分货占比_61'"
                :tableName="'ConDT_Alloc_RegionRate_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_分货占比_61'"
                ref="cdtfhzb61">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="alloItem">
          <div class="block">
            <h2>ConDT 61 参数校验
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">邮件通知</a>
              <div class="form-box">
                <updata
                  @on-success="updatecdtsubmit61"
                  :text='"提交"'
                  :menuId="'223'"
                  :menuName="'分货参数_参数校验61'"
                  :logTableName="'ConDT_Alloc_Para_Check_61'"
                  :proIndex="'2'" >
                </updata>
              </div>       
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecdtcheck61"
                  :text='"校验"'
                  :menuId="'223'"
                  :menuName="'分货参数_参数校验61'"
                  :logTableName="'ConDT_Alloc_Para_Check_61'"
                  :proIndex="'1'" >
                </updata>
              </div>                          
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConDT_参数校验_61'"
                :tableName="'ConDT_Alloc_Para_Check_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_参数校验_61'"
                ref="cdtcheck61">
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
      menuArr: ['11 比例类型', '11 分货占比', '11 参数校验', '61 比例类型', '61 分货占比', '61 参数校验']
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
          DOWNLOAD_BAT_PATH: 'ConDT_分货参数校验_11_Download'
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
          SENDMAIL_BAT_PATH: 'ConDT_分货参数校验_11'
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
    download2 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_分货参数校验_61_Download'
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
    sendemail2 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'ConDT_分货参数校验_61'
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
    updateFhlx11 () {
      this.$refs.cdtfhlx11.updateTabFun()
    },
    updatefhzb11 () {
      this.$refs.cdtfhzb11.updateTabFun()
    },
    updatecdtcheck11 () {
      this.$refs.cdtcheck11.updateTabFun()
    },
    updatecdtsubmit11 () {
      this.$refs.cdtcheck11.updateTabFun()
    },
    updateFhlx111 () {
      this.$refs.cdtfhlx11.updateTimeChange()
    },
    updatefhzb111 () {
      this.$refs.cdtfhzb11.updateTimeChange()
    },
    updateFhlx61 () {
      this.$refs.cdtfhlx61.updateTabFun()
    },
    updatefhzb61 () {
      this.$refs.cdtfhzb61.updateTabFun()
    },
    updatecdtcheck61 () {
      this.$refs.cdtcheck61.updateTabFun()
    },
    updatecdtsubmit61 () {
      this.$refs.cdtcheck61.updateTabFun()
    },
    updateFhlx611 () {
      this.$refs.cdtfhlx61.updateTimeChange()
    },
    updatefhzb611 () {
      this.$refs.cdtfhzb61.updateTimeChange()
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
          background #e1199e
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
