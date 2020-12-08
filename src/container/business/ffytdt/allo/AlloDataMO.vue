<template>
  <div class="allodatamo">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="cargo">
          <div class="block">
            <h2>YTDT 分货目标 MO
              <div class="form-box">
                <Upload
                  @on-success="updatefhsxmo"
                  :sheetsName="'YTDT_分货目标_MO'"
                  @updateTimeChange="updatefhsxmo1"
                  :logTableName="'YTDT_Alloc_Target_MO'"
                  :logObj="'ytdtfhsxmo'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_分货目标_MO'"
                :tableName="'YTDT_Alloc_Target_MO'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_分货目标_MO'"
                ref="ytdtfhsxmo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="cargo">
          <div class="block">
            <h2>YTDT 分货节奏 MO
              <div class="form-box">
                <Upload
                  @on-success="updatefhjzmo"
                  :sheetsName="'YTDT_分货节奏_MO'"
                  @updateTimeChange="updatefhjzmo1"
                  :logTableName="'YTDT_Alloc_WeekRatio_MO'"
                  :logObj="'ytdtfhjzmo'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_分货节奏_MO'"
                :tableName="'YTDT_Alloc_WeekRatio_MO'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_分货节奏_MO'"
                ref="ytdtfhjzmo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="cargo">
          <div class="block">
            <h2>YTDT 比例类型 MO
              <div class="form-box">
                <Upload
                  @on-success="updatefhlxmo"
                  :sheetsName="'YTDT_比例类型_MO'"
                  @updateTimeChange="updatefhlxmo1"
                  :logTableName="'YTDT_Alloc_RateType_MO'"
                  :logObj="'ytdtfhlxmo'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_比例类型_MO'"
                :tableName="'YTDT_Alloc_RateType_MO'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_比例类型_MO'"
                ref="ytdtfhlxmo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="cargo">
          <div class="block">
            <h2>YTDT 分货占比 MO
              <div class="form-box">
                <Upload
                  @on-success="updatefhzbmo"
                  :sheetsName="'YTDT_分货占比_MO'"
                  @updateTimeChange="updatefhzbmo1"
                  :logTableName="'YTDT_Alloc_RegionRate_MO'"
                  :logObj="'ytdtfhzbmo'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_分货占比_MO'"
                :tableName="'YTDT_Alloc_RegionRate_MO'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_分货占比_MO'"
                ref="ytdtfhzbmo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="cargo">
          <div class="block">
            <h2>YTDT 参数校验 MO
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">提交</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateytdtmocheck"
                  :text='"校验"'
                  :menuId="'802'"
                  :menuName="'分货管理_分货参数_MO'"
                  :logTableName="'YTDT_Alloc_Para_Check_MO'"
                  :proIndex="'101'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTDT_参数校验_MO'"
                :tableName="'YTDT_Alloc_Para_Check_MO'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_参数校验_MO'"
                ref="gridytdtmocheck">
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
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      disabledemail: false,
      disableddownload: false,
      menuArr: ['MO 分货目标', 'MO 分货节奏', 'MO 比例类型', 'MO 分货占比', 'MO 参数校验']
    }
  },
  components: {
    Upload,
    VTable,
    updata
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
          DOWNLOAD_BAT_PATH: 'YTDT_分货参数校验_MO_Download'
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
          SENDMAIL_BAT_PATH: 'YTDT_分货参数校验_MO'
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
    updatefhsxmo () {
      this.$refs.ytdtfhjzmo.updateTabFun()
      this.$refs.ytdtfhsxmo.updateTabFun()
    },
    updatefhjzmo () {
      this.$refs.ytdtfhjzmo.updateTabFun()
      this.$refs.ytdtfhsxmo.updateTabFun()
    },
    updatefhlxmo () {
      this.$refs.ytdtfhlxmo.updateTabFun()
    },
    updatefhzbmo () {
      this.$refs.ytdtfhzbmo.updateTabFun()
    },
    updatefhsxmo1 () {
      this.$refs.ytdtfhjzmo.updateTimeChange()
      this.$refs.ytdtfhsxmo.updateTimeChange()
    },
    updatefhjzmo1 () {
      this.$refs.ytdtfhjzmo.updateTimeChange()
      this.$refs.ytdtfhsxmo.updateTimeChange()
    },
    updatefhlxmo1 () {
      this.$refs.ytdtfhlxmo.updateTimeChange()
    },
    updatefhzbmo1 () {
      this.$refs.ytdtfhzbmo.updateTimeChange()
    },
    updateytdtmocheck () {
      this.$refs.gridytdtmocheck.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allodatamo
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .cargo
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
        padding-left 20px
        margin-bottom 5px
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .addRhythm1
        width 100%
        height 400px
</style>
