<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>ConNB CRAD默认天数
             <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatenbcradday"
                  @updateTimeChange="updatenbcradday1"
                  :logTableName="'ConNB_CRAD_Default_Day'"
                  :sheetsName="'ConNB_CRAD默认天数'"
                  :logObj="'gridnbcradday'">
                </upload>
              </div>              
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'ConNB_CRAD默认天数'"
                :tableName="'ConNB_CRAD_Default_Day'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CRAD默认天数'"
                ref="gridnbcradday">
              </v-table>
            </div>
            <h2>ConDT CRAD默认天数
             <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatedtcradday"
                  @updateTimeChange="updatedtcradday1"
                  :logTableName="'ConDT_CRAD_Default_Day'"
                  :sheetsName="'ConDT_CRAD默认天数'"
                  :logObj="'griddtcradday'">
                </upload>
              </div>              
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConDT_CRAD默认天数'"
                :tableName="'ConDT_CRAD_Default_Day'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_CRAD默认天数'"
                ref="griddtcradday">
              </v-table>
            </div>
          </div>
        </el-tab-pane>        
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>CON 月结日期
              <div class="form-box">
                <upload
                  @on-success="updateroldate"
                  @updateTimeChange="updateroldate1"
                  :logTableName="'CON_ROL_Calendar'"
                  :sheetsName="'CON_月结日期'"
                  :logObj="'uppoact'">
                </upload>
              </div>              
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_月结日期'"
                :tableName="'CON_ROL_Calendar'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'CON_月结日期'"
                ref="gridroldate">
              </v-table>
            </div>
          </div>
        </el-tab-pane>        
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>ConDT FPSD手工订单
             <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'ConDT_FPSD手工订单'"
                  @on-success="updatefpsdsg"
                  @updateTimeChange="updatefpsdsg1"
                  :logTableName='"ConDT_FPSD_Manage"'
                  :logObj="'gridfpsdsg'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_FPSD手工订单'"
                :tableName="'ConDT_FPSD_Manage'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_FPSD手工订单'"
                ref="gridfpsdsg">
              </v-table>
            </div>
            <h2>ConDT FPSD手工订单 汇总
             <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConDT_FPSD手工订单_汇总'"
                :tableName="'ConDT_FPSD_Manage_TTL'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_FPSD手工订单_汇总'"
                ref="gridfpsdsgttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>  
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <!-- <el-form :inline="true"  ref="form" class="formBoxContent" :model="form" label-width="80px" size="mini">        
            <el-form-item label='财年' prop='fiscalyear' class='item11' >
              <el-select v-model='form.fiscalyear' clearable placeholder='请选择'>
                <el-option
                v-for='item in fiscalyear.children'
                :key='item.value'
                :label='item.name'
                :value='item.value'>
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='财月' prop='fiscalmonth' class='item11' >
              <el-select v-model='form.fiscalmonth' clearable placeholder='请选择'>
                <el-option
                  v-for='item in fiscalmonth.children'
                  :key='item.value'
                  :label='item.name'
                  :value='item.value'>
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>     -->
          <div class="block">
            <h2>ConDT FPSD分析
             <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
             <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">数量下载</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">张数下载</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download6" href="#">订单明细</a>
              <div class="form-box">
                <updata
                  @on-success="updatefpsd"
                  :text="'日常计算'"
                  :menuId="'344'"
                  :menuName="'KPI管理_SOPSD'"
                  :logTableName="'ConDT_KPI_CRAD_FPSD_SO_Detail'"
                  :proIndex="'2'">
                </updata>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updatekpi"
                  :text="'ROL计算'"
                  :menuId="'344'"
                  :menuName="'KPI管理_SOPSD'"
                  :logTableName="'ConDT_KPI_CRAD_FPSD_SO_Detail'"
                  :querydate = 'querydate1'
                  :proIndex="'1'">
                </updata>
              </div>           
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'FPSD分析'"
                :tableName="'ConDT_KPI_CRAD_FPSD_SO_Detail'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'FPSD分析'"
                ref="gridkpi">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="pdtItem">
          <!-- <el-form :inline="true"  ref="form1" class="formBoxContent" :model="form" label-width="80px" size="mini">        
            <el-form-item label='财年' prop='fiscalyear' class='item11' >
              <el-select v-model='form1.fiscalyear' clearable placeholder='请选择'>
                <el-option
                v-for='item in fiscalyear.children'
                :key='item.value'
                :label='item.name'
                :value='item.value'>
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='财月' prop='fiscalmonth' class='item11' >
              <el-select v-model='form1.fiscalmonth' clearable placeholder='请选择'>
                <el-option
                  v-for='item in fiscalmonth.children'
                  :key='item.value'
                  :label='item.name'
                  :value='item.value'>
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>     -->
          <div class="block">
            <h2>ConDT CRAD分析
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download4" href="#">数量下载</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">张数下载</a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'CRAD分析'"
                :tableName="'ConDT_KPI_CRAD_FPSD_SO_Detail'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CRAD分析'"
                ref="gridkpi">
              </v-table>
            </div>      
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="pdtItem">
          <div class="block">
            <h2>CON CRAD分布
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail5" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download5" href="#">下载</a>
            </h2>    
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
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: true,
      toggle6: true,
      tabPosition: 'left',
      menuArr: ['CRAD默认天数', '月结日期', 'FPSD手工订单', 'FPSD分析', 'CRAD分析', 'CRAD分布'],
      form: {
        fiscalyear: '',
        fiscalmonth: ''
      },
      form1: {
        fiscalyear: '',
        fiscalmonth: ''
      },
      fiscalyear: [],
      fiscalmonth: []
    }
  },
  created () {
    this.getQuerydata()
  },
  computed: {
    querydate1: function () {
      return this.form.fiscalyear + '年' + this.form.fiscalmonth
    },
    querydate2: function () {
      return this.form1.fiscalyear + '年' + this.form1.fiscalmonth
    }
  },
  components: {
    Upload,
    Updata,
    VTable
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
          DOWNLOAD_BAT_PATH: 'ConDT_FPSD分析_张数_Download'
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
          SENDMAIL_BAT_PATH: 'ConDT_FPSD分析'
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
          DOWNLOAD_BAT_PATH: 'ConDT_FPSD分析_数量_Download'
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
          SENDMAIL_BAT_PATH: 'ConDT_CRAD分析'
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
    download3 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_CRAD分析_张数_Download'
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
    download4 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_CRAD分析_数量_Download'
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
    download5 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'CON_CRAD_分周分布表_Download'
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
    sendemail5 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'CON_CRAD_分周分布表'
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
    download6 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConDT_CRAD_FPSD_订单明细_Download'
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
    updatefpsdsg () {
      this.$refs.gridfpsdsg.updateTabFun()
      this.$refs.gridfpsdsgttl.updateTabFun()
    },
    updatefpsdsg1 () {
      this.$refs.gridfpsdsg.updateTimeChange()
    },
    updatekpi () {
      this.$refs.gridkpi.updateTabFun()
    },
    updateroldate () {
      this.$refs.gridroldate.updateTabFun()
    },
    updateroldate1 () {
      this.$refs.gridroldate.updateTimeChange()
    },
    updatenbcradday () {
      this.$refs.gridnbcradday.updateTabFun()
    },
    updatenbcradday1 () {
      this.$refs.gridnbcradday.updateTimeChange()
    },
    updatedtcradday () {
      this.$refs.griddtcradday.updateTabFun()
    },
    updatedtcradday1 () {
      this.$refs.griddtcradday.updateTimeChange()
    },
    getQuerydata () { // 获取查询条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': 'KPI财年_0001,财月_0001'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === 'KPI财年_0001') {
              vm.fiscalyear = data[i]
            }
            if (data[i].value === '财月_0001') {
              vm.fiscalmonth = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pdtItem
    width 100%
    height 100%
    .formBoxContent
      margin-top 10px
      width 100%
      height 50px
      overflow hidden
    .block
      width 100%
      height auto
      overflow hidden
      // display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        margin-bottom 5px
        padding 0 20px
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