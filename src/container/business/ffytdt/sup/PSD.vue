<template>
  <div class="sup-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane :label="menuArr[0]" class="supitem">
          <div class="block">
            <h2>YTDT PSD
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateytpsd"
                  :text='"IPS计算"'
                  :menuId="'402'"
                  :menuName="'PSD管理_PSD查询'"
                  :logTableName="'YTDT_IPS_Report'"
                  :proIndex="'101'" >
                </updata>
              </div> 
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'YTDT_PSD'"
                :tableName="'YTDT_PSD'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_PSD'"
                ref="gridytpsd">
              </v-table>
            </div>
            <h2>YTDT 后续可供
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTogosupply"
                  :menuId="'402'"
                  :menuName="'PSD管理_PSD查询'"
                  :logTableName="'YTDT_PSD_Update'"
                  :proIndex="'102'" >
                </updata>
              </div> 
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'YTDT_PSD_Update'"
                :tableName='"YTDT_PSD_Update"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_PSD_Update'"
                ref="gridTogosupply">
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
import Updata from '@/components/public/updata251'
import VTable from '@/components/public/vtablePage251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['PSD查询']
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
          DOWNLOAD_BAT_PATH: 'YTDT_PSD_Report_Download'
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
          SENDMAIL_BAT_PATH: 'YTDT_PSD_Report'
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
          DOWNLOAD_BAT_PATH: 'YTDT_后续可供_Download'
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
          SENDMAIL_BAT_PATH: 'YTDT_后续可供'
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
    updateytpsd () {
      this.$refs.gridytpsd.updateTabFun()
    },
    updateTogosupply () {
      this.$refs.gridTogosupply.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sup-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height 100%
    .supitem
      width 100%
      height 100%
      .el-form-item
        margin-bottom 0 !important
      .el-date-editor .el-range__close-icon // 清除符号
        display none !important
      .el-date-editor--daterange.el-input__inner
        width 193px
      .el-range-editor--mini .el-range__close-icon
        display none !important
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
          padding-left 20px
          margin-bottom 10px
          background #fafafa
          padding 0 20px
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
            width 70px
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

