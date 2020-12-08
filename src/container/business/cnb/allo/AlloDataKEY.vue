<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConNB 31 分货参数
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>             
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货参数_31'"
                  @on-success="updatefhcs31"
                  @updateTimeChange="updatefhcs311"
                  :logTableName="'ConNB_Alloc_Target_31'"
                  :logObj="'cnbfhcs31'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_分货参数_31'"
                :tableName="'ConNB_Alloc_Target_31'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货参数_31'"
                ref="cnbfhcs31">
              </v-table>
            </div>
            <h2>ConNB 31 比例类型
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>             
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'ConNB_比例类型_31'"
                :tableName="'ConNB_Alloc_RateType_31'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_比例类型_31'"
                ref="cnbfhlx31">
              </v-table>
            </div>
            <h2>ConNB 31 分货占比
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>             
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_分货占比_31'"
                :tableName="'ConNB_Alloc_RegionRate_31'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货占比_31'"
                ref="cnbfhzb31">
              </v-table>
            </div>
            <h2>ConNB 31 参数校验
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">邮件通知</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbsubmit31"
                  :text='"提交"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验31'"
                  :logTableName="'ConNB_Alloc_Para_Check_31'"
                  :proIndex="'2'" >
                </updata>
              </div>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbcheck31"
                  :text='"校验"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验31'"
                  :logTableName="'ConNB_Alloc_Para_Check_31'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid addgrid10">
              <v-table
                :sheetsName="'ConNB_参数校验_31'"
                :tableName="'ConNB_Alloc_Para_Check_31'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_参数校验_31'"
                ref="cnbcheck31">
              </v-table>
            </div>                         
          </div>
        </el-tab-pane>  
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>ConNB 51 分货参数
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>             
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货参数_51'"
                  @on-success="updatefhcs51"
                  @updateTimeChange="updatefhcs511"
                  :logTableName="'ConNB_Alloc_Target_51'"
                  :logObj="'cnbfhcs51'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConNB_分货参数_51'"
                :tableName="'ConNB_Alloc_Target_51'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货参数_51'"
                ref="cnbfhcs51">
              </v-table>
            </div>
            <h2>ConNB 51 比例类型
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>             
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConNB_比例类型_51'"
                :tableName="'ConNB_Alloc_RateType_51'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_比例类型_51'"
                ref="cnbfhlx51">
              </v-table>
            </div>
            <h2>ConNB 51 分货占比
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>             
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConNB_分货占比_51'"
                :tableName="'ConNB_Alloc_RegionRate_51'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货占比_51'"
                ref="cnbfhzb51">
              </v-table>
            </div>
            <h2>ConNB 51 参数校验
              <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">邮件通知</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbsubmit51"
                  :text='"提交"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验51'"
                  :logTableName="'ConNB_Alloc_Para_Check_51'"
                  :proIndex="'2'" >
                </updata>
              </div>   
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbcheck51"
                  :text='"校验"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验51'"
                  :logTableName="'ConNB_Alloc_Para_Check_51'"
                  :proIndex="'1'" >
                </updata>
              </div>      
            </h2>
            <div class="addgrid addgrid11">
              <v-table
                :sheetsName="'ConNB_参数校验_51'"
                :tableName="'ConNB_Alloc_Para_Check_51'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_参数校验_51'"
                ref="cnbcheck51">
              </v-table>
            </div>                          
          </div>
        </el-tab-pane>  
        <!-- <el-tab-pane :label="menuArr[2]" class="alloItem">
          <div class="block">
            <h2>ConNB 61 比例类型
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>             
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_比例类型_61'"
                  @on-success="updatefhlx61"
                  @updateTimeChange="updatefhlx611"
                  :logTableName="'ConNB_Alloc_RateType_61'"
                  :logObj="'cnbfhlx61'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'ConNB_比例类型_61'"
                :tableName="'ConNB_Alloc_RateType_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_比例类型_61'"
                ref="cnbfhlx61">
              </v-table>
            </div>
            <h2>ConNB 61 分货占比
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>             
              <div class="form-box">
                <Upload
                  :sheetsName="'ConNB_分货占比_61'"
                  @on-success="updatefhzb61"
                  @updateTimeChange="updatefhzb611"
                  :logTableName="'ConNB_Alloc_RegionRate_61'"
                  :logObj="'cnbfhzb61'" >
                </Upload>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'ConNB_分货占比_61'"
                :tableName="'ConNB_Alloc_RegionRate_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_分货占比_61'"
                ref="cnbfhzb61">
              </v-table>
            </div>
            <h2>ConNB 61 参数校验
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbsubmit61"
                  :text='"提交"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验61'"
                  :logTableName="'ConNB_Alloc_Para_Check_61'"
                  :proIndex="'2'" >
                </updata>
              </div> 
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbcheck61"
                  :text='"校验"'
                  :menuId="'234'"
                  :menuName="'分货参数_参数校验61'"
                  :logTableName="'ConNB_Alloc_Para_Check_61'"
                  :proIndex="'1'" >
                </updata>
              </div>             
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'ConNB_参数校验_61'"
                :tableName="'ConNB_Alloc_Para_Check_61'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_参数校验_61'"
                ref="cnbcheck61">
              </v-table>
            </div>                         
          </div>
        </el-tab-pane> -->
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
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle10: true,
      toggle11: true,
      serverUrl: domainUrl,
      tabPosition: 'left',
      disabledemail: false,
      disableddownload: false,
      menuArr: ['31 分货参数', '51 分货参数', '61 分货参数']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList10()
      this.toggleList11()
    }, 3000)
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
    toggleList10 () {
      let addgrid = document.getElementsByClassName('addgrid10')[0]
      if (this.toggle10) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle10 = !this.toggle10
    },
    toggleList11 () {
      let addgrid = document.getElementsByClassName('addgrid11')[0]
      if (this.toggle11) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle11 = !this.toggle11
    },
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_分货参数校验_31_Download'
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
          SENDMAIL_BAT_PATH: 'ConNB_分货参数校验_31'
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
          DOWNLOAD_BAT_PATH: 'ConNB_分货参数校验_51_Download'
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
          SENDMAIL_BAT_PATH: 'ConNB_分货参数校验_51'
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
    updateFhlx61 () {
      this.$refs.cnbfhlx61.updateTabFun()
    },
    updatefhzb61 () {
      this.$refs.cnbfhzb61.updateTabFun()
    },
    updatefhcs31 () {
      this.$refs.cnbfhcs31.updateTabFun()
      this.$refs.cnbfhzb31.updateTabFun()
      this.$refs.cnbfhlx31.updateTabFun()
    },
    updatefhcs51 () {
      this.$refs.cnbfhcs51.updateTabFun()
      this.$refs.cnbfhzb51.updateTabFun()
      this.$refs.cnbfhlx51.updateTabFun()
    },
    updatecnbcheck31 () {
      this.$refs.cnbcheck31.updateTabFun()
    },
    updatecnbsubmit31 () {
      this.$refs.cnbcheck31.updateTabFun()
    },
    updatecnbcheck51 () {
      this.$refs.cnbcheck51.updateTabFun()
    },
    updatecnbsubmit51 () {
      this.$refs.cnbcheck51.updateTabFun()
    },
    updatecnbcheck61 () {
      this.$refs.cnbcheck61.updateTabFun()
    },
    updatecnbsubmit61 () {
      this.$refs.cnbcheck61.updateTabFun()
    },
    updateFhlx611 () {
      this.$refs.cnbfhlx61.updateTimeChange()
    },
    updatefhzb611 () {
      this.$refs.cnbfhzb61.updateTimeChange()
    },
    updatefhcs311 () {
      this.$refs.cnbfhcs31.updateTimeChange()
      this.$refs.cnbfhzb31.updateTimeChange()
      this.$refs.cnbfhlx31.updateTimeChange()
    },
    updatefhcs511 () {
      this.$refs.cnbfhcs51.updateTimeChange()
      this.$refs.cnbfhzb51.updateTimeChange()
      this.$refs.cnbfhlx51.updateTimeChange()
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
      .addAccounted1
        width 100%
        height 400px
</style>