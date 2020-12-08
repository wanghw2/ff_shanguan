<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货目标
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货目标'"
                  @on-success="updatefhsx"
                  @updateTimeChange="updatefhsx1"
                  :logTableName="'ConNB_Alloc_Target'"
                  :logObj="'cnbfhsx'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货目标'"
                :tableName="'ConNB_Alloc_Target'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货目标'"
                ref="cnbfhsx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货节奏
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货节奏'"
                  @on-success="updatefhjz"
                  @updateTimeChange="updatefhjz1"
                  :logTableName="'ConNB_Alloc_WeekRatio'"
                  :logObj="'cnbfhjz'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货节奏'"
                :tableName="'ConNB_Alloc_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货节奏'"
                ref="cnbfhjz">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block">
            <h2>ConNB 比例类型
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_比例类型'"
                  @on-success="updateFhlx"
                  @updateTimeChange="updateFhlx1"
                  :logTableName="'ConNB_Alloc_RateType'"
                  :logObj="'cnbfhlx'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_比例类型'"
                :tableName="'ConNB_Alloc_RateType'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_比例类型'"
                ref="cnbfhlx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="alloItem">
          <div class="block">
            <h2>ConNB 分货占比
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货占比'"
                  @on-success="updateQdzb"
                  @updateTimeChange="updateQdzb1"
                  :logTableName="'ConNB_Alloc_RegionRate'"
                  :logObj="'cnbqdzb'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_分货占比'"
                :tableName="'ConNB_Alloc_RegionRate'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货占比'"
                ref="cnbqdzb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="alloItem">
          <div class="block">
            <h2>ConNB FF参数校验
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbffread"
                  :text='"读取"'
                  :menuId="'235'"
                  :menuName="'分货管理_分货参数_FF'"
                  :logTableName="'ConNB_Alloc_Para_Check'"
                  :proIndex="'2'" >
                </updata>
              </div>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbffcheck"
                  :text='"校验"'
                  :menuId="'235'"
                  :menuName="'分货管理_分货参数_FF'"
                  :logTableName="'ConNB_Alloc_Para_Check'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_参数校验_FF'"
                :tableName="'ConNB_Alloc_Para_Check'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_参数校验_FF'"
                ref="gridcnbffcheck">
              </v-table>
            </div>
            <h2>ConNB 渠道分货目标
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_渠道分货目标'"
                :tableName='"ConNB_Alloc_Target_BP"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_渠道分货目标'"
                ref="gridallocbp">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="alloItem">
          <div class="block">
            <h2>ConNB 参数校验 MO
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbmocheck"
                  :text='"校验"'
                  :menuId="'233'"
                  :menuName="'分货管理_分货参数_MO'"
                  :logTableName="'ConNB_Alloc_Para_Check_MO'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_参数校验_MO'"
                :tableName="'ConNB_Alloc_Para_Check_MO'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_参数校验_MO'"
                ref="gridcnbmocheck">
              </v-table>
            </div>
          </div>
        </el-tab-pane>     
        <el-tab-pane :label="menuArr[6]" class="alloItem">
          <div class="block">
            <h2>ConNB DF分货目标</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF分货目标'"
                :tableName="'ConNB_Alloc_Target_DF'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'MST_UI_ALLO_MATNR_UPPER'"
                ref="cnbdffhsx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="alloItem">
          <div class="block">
            <h2>ConNB DF分货节奏</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF分货节奏'"
                :tableName="'ConNB_Alloc_WeekRatio_DF'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'MST_UI_ALLO_WEEK_RATIO'"
                ref="cnbdffhjz">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="alloItem">
          <div class="block">
            <h2>ConNB DF比例类型</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF比例类型'"
                :tableName="'ConNB_Alloc_RateType_DF'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'MST_UI_ALLO_MATNR_TYPE'"
                ref="cnbdffhlx">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="alloItem">
          <div class="block">
            <h2>ConNB DF分货占比</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF分货占比'"
                :tableName="'ConNB_Alloc_RegionRate_DF'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'MST_UI_ALLO_CHANNEL_RATIO'"
                ref="cnbdfqdzb">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="alloItem">
          <div class="block">
            <h2>ConNB DF FF参数检验
              <div class="form-box">
                <updata
                  @on-success="updatecnbdfffcheck"
                  :menuId="'235'"
                  :menuName="'分货管理_分货参数_FF'"
                  :logTableName="'ConNB_Alloc_Target_BP_DF_FF_Check'"
                  :proIndex="'3'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF_FF参数检验'"
                :tableName="'ConNB_Alloc_Target_BP_DF_FF_Check'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_DF_FF参数检验'"
                ref="cnbdfffcheck">
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
      toggle1: false,
      toggle2: true,
      serverUrl: domainUrl,
      tabPosition: 'left',
      disabledemail: false,
      disableddownload: false,
      menuArr: ['分货目标', '分货节奏', '比例类型', '分货占比', 'FF 参数校验', 'MO 参数校验', 'DF 分货目标', 'DF 分货节奏', 'DF 比例类型', 'DF 分货占比', 'DF FF参数检验']
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
          DOWNLOAD_BAT_PATH: 'ConNB_分货参数校验_Download'
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
    download2 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_分货参数校验_MO_Download'
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
    updateFhlx () {
      this.$refs.cnbfhlx.updateTabFun()
      this.$refs.cnbdffhlx.updateTabFun()
      this.$refs.gridallocbp.updateTabFun()
    },
    updateQdzb () {
      this.$refs.cnbqdzb.updateTabFun()
      this.$refs.cnbdfqdzb.updateTabFun()
      this.$refs.gridallocbp.updateTabFun()
    },
    updatefhsx () {
      this.$refs.cnbfhsx.updateTabFun()
      this.$refs.cnbdffhsx.updateTabFun()
      this.$refs.gridallocbp.updateTabFun()
    },
    updatefhjz () {
      this.$refs.cnbfhjz.updateTabFun()
      this.$refs.cnbdffhjz.updateTabFun()
      this.$refs.gridallocbp.updateTabFun()
    },
    updatefhsx1 () {
      this.$refs.cnbfhsx.updateTimeChange()
      this.$refs.cnbdffhsx.updateTimeChange()
    },
    updatefhjz1 () {
      this.$refs.cnbfhjz.updateTimeChange()
      this.$refs.cnbdffhjz.updateTimeChange()
    },
    updateFhlx1 () {
      this.$refs.cnbfhlx.updateTimeChange()
      this.$refs.cnbdffhlx.updateTimeChange()
    },
    updateQdzb1 () {
      this.$refs.cnbqdzb.updateTimeChange()
      this.$refs.cnbdfqdzb.updateTimeChange()
    },
    updatecnbffcheck () {
      this.$refs.gridcnbffcheck.updateTabFun()
    },
    updatecnbffread () {
      this.$refs.gridcnbffcheck.updateTabFun()
      this.$refs.cnbfhlx.updateTabFun()
      this.$refs.cnbdffhlx.updateTabFun()
      this.$refs.cnbqdzb.updateTabFun()
      this.$refs.cnbdfqdzb.updateTabFun()
      this.$refs.cnbfhsx.updateTabFun()
      this.$refs.cnbdffhsx.updateTabFun()
      this.$refs.cnbfhjz.updateTabFun()
      this.$refs.cnbdffhjz.updateTabFun()
    },
    updatecnbmocheck () {
      this.$refs.gridcnbmocheck.updateTabFun()
    },
    updatecnbdfffcheck () {
      this.$refs.cnbdfffcheck.updateTabFun()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
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
