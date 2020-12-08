<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npiitem">
          <div class="block">
            <h2>ConNB 管理看板
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatemanagerpt"
                  :menuId="'361'"
                  :menuName="'预测管理_管理看板'"
                  :logTableName="'ConNB_Manage_Report_FCST_Calendar'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_管理看板'"
                :tableName="'ConNB_Manage_Report_FCST_Calendar'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_管理看板'"
                ref="gridmanagerpt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="npiitem">
          <div class="block">
            <h2>LBG NB ATS Tracking
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail3" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatelbgnbatstracking"
                  :menuId="'361'"
                  :menuName="'预测管理_LBGNBATS'"
                  :logTableName="'LBG_NB_Parts_ATS_Tracking'"
                  :proIndex="'2'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'LBG_NB_Parts_ATS_Tracking'"
                :tableName="'LBG_NB_Parts_ATS_Tracking'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'LBG_NB_Parts_ATS_Tracking'"
                ref="gridlbgnbatstracking">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="npiItem">
          <div class="block">
            <h2>ConNB 长期预测 上传
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatefcstlongup"
                  @updateTimeChange="updatefcstlongup1"
                  :sheetsName="'ConNB_长期预测_上传'"
                  :logTableName='"ConNB_FCST_Longterm_Upload"'
                  :logObj="'gridfcstlongup'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'ConNB_长期预测_上传'"
                :tableName='"ConNB_FCST_Longterm_Upload"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_上传'"
                ref="gridfcstlongup">
              </v-table>
            </div>
            <h2>ConNB 长期预测
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'ConNB_长期预测'"
                :tableName='"ConNB_FCST_Longterm"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测'"
                ref="gridfcstlong">
              </v-table>
            </div>
            <h2>ConNB 长期预测 汇总
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'ConNB_长期预测_汇总'"
                :tableName='"ConNB_FCST_Longterm_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_汇总'"
                ref="gridfcstlongttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="npiItem">
          <div class="block">
            <h2>ConNB 长期预测 备注
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatefcstremark"
                  @updateTimeChange="updatefcstremark1"
                  :sheetsName="'ConNB_长期预测_备注'"
                  :logTableName='"ConNB_FCST_Longterm_Remark"'
                  :logObj="'gridfcstremark'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid10">
              <v-table
                :sheetsName="'ConNB_长期预测_备注'"
                :tableName='"ConNB_FCST_Longterm_Remark"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_备注'"
                ref="gridfcstremark">
              </v-table>
            </div>
            <h2>ConNB 长期预测 备注 汇总
              <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid11">
              <v-table
                :sheetsName="'ConNB_长期预测_备注_汇总'"
                :tableName='"ConNB_FCST_Longterm_Remark_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_备注_汇总'"
                ref="gridfcstremarkttl">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="npiItem">
          <div class="block">
            <h2>ConNB 长期预测 Family
              <a href="javascript:;" class="fold" @click="toggleList12" v-text="toggle12 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatefcstfamily"
                  @updateTimeChange="updatefcstfamily1"
                  :sheetsName="'ConNB_长期预测_Family'"
                  :logTableName='"ConNB_FCST_Longterm_Family_Mapping"'
                  :logObj="'gridfcstfamily'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid12">
              <v-table
                :sheetsName="'ConNB_长期预测_Family'"
                :tableName='"ConNB_FCST_Longterm_Family_Mapping"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_Family'"
                ref="gridfcstfamily">
              </v-table>
            </div>
            <h2>ConNB 长期预测 Family New
              <a href="javascript:;" class="fold" @click="toggleList13" v-text="toggle13 ? '折叠' : '展开'"></a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid13">
              <v-table
                :sheetsName="'ConNB_长期预测_Family_New'"
                :tableName='"ConNB_FCST_Longterm_Family_Mapping_New"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_长期预测_Family_New'"
                ref="gridfcstfamilynew">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="npiItem">
          <div class="block">
            <h2>FF WW LBG NB ATS
              <a href="javascript:;" class="fold" @click="toggleList14" v-text="toggle14 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateffwwlbgnbats"
                  @updateTimeChange="updateffwwlbgnbats1"
                  :sheetsName="'FF_WW_LBG_NB_ATS'"
                  :logTableName='"FF_WW_LBG_NB_ATS"'
                  :logObj="'gridffwwlbgnbats'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid14">
              <v-table
                :sheetsName="'FF_WW_LBG_NB_ATS'"
                :tableName='"FF_WW_LBG_NB_ATS"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_LBG_NB_ATS'"
                ref="gridffwwlbgnbats">
              </v-table>
            </div>
            <h2>FF WW LBG NB Parts ATS
              <a href="javascript:;" class="fold" @click="toggleList15" v-text="toggle15 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatelbgnbpartats"
                  @updateTimeChange="updatelbgnbpartats1"
                  :sheetsName="'FF_WW_LBG_NB_Parts_ATS'"
                  :logTableName='"FF_WW_LBG_NB_Parts_ATS"'
                  :logObj="'gridlbgnbpartats'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid15">
              <v-table
                :sheetsName="'FF_WW_LBG_NB_Parts_ATS'"
                :tableName='"FF_WW_LBG_NB_Parts_ATS"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_LBG_NB_Parts_ATS'"
                ref="gridlbgnbpartats">
              </v-table>
            </div>
            <h2>FF WW LBG NB LCD Mapping
              <a href="javascript:;" class="fold" @click="toggleList16" v-text="toggle16 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatelbgnblcdmapping"
                  @updateTimeChange="updatelbgnblcdmapping1"
                  :sheetsName="'FF_WW_LBG_NB_LCD_Mapping'"
                  :logTableName='"FF_WW_LBG_NB_LCD_Mapping"'
                  :logObj="'gridlbgnblcdmapping'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid16">
              <v-table
                :sheetsName="'FF_WW_LBG_NB_LCD_Mapping'"
                :tableName='"FF_WW_LBG_NB_LCD_Mapping"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_LBG_NB_LCD_Mapping'"
                ref="gridlbgnblcdmapping">
              </v-table>
            </div>
            <h2>FF WW LBG NB POR Mapping
              <a href="javascript:;" class="fold" @click="toggleList17" v-text="toggle17 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatelbgnbpormapping"
                  @updateTimeChange="updatelbgnbpormapping1"
                  :sheetsName="'FF_WW_LBG_NB_POR_Mapping'"
                  :logTableName='"FF_WW_LBG_NB_POR_Mapping"'
                  :logObj="'gridlbgnbpormapping'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid17">
              <v-table
                :sheetsName="'FF_WW_LBG_NB_POR_Mapping'"
                :tableName='"FF_WW_LBG_NB_POR_Mapping"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_LBG_NB_POR_Mapping'"
                ref="gridlbgnbpormapping">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="npiItem">
          <div class="block">
            <h2>ConNB CPU分货
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatecpualloc"
                  @updateTimeChange="updatecpualloc1"
                  :sheetsName="'ConNB_CPU分货'"
                  :logTableName='"ConNB_CPU_Allocation"'
                  :logObj="'gridcpualloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_CPU分货'"
                :tableName='"ConNB_CPU_Allocation"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CPU分货'"
                ref="gridcpualloc">
              </v-table>
            </div>
            <h2>ConNB CPU分货 汇总
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'ConNB_CPU分货_汇总'"
                :tableName='"ConNB_CPU_Allocation_TTL"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CPU分货_汇总'"
                ref="gridcpuallocttl">
              </v-table> 
            </div>          
            <h2>FF NB CPU 下季度分货
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateffcpualloc"
                  @updateTimeChange="updateffcpualloc1"
                  :sheetsName="'FF_NB_CPU_下季度分货'"
                  :logTableName='"FF_NB_CPU_Allocation"'
                  :logObj="'gridffcpualloc'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'FF_NB_CPU_下季度分货'"
                :tableName='"FF_NB_CPU_Allocation"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_NB_CPU_下季度分货'"
                ref="gridffcpualloc">
              </v-table>
            </div>          
            <h2>FF NB CPU 下季度分货 汇总
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'FF_NB_CPU_下季度分货_汇总'"
                :tableName='"FF_NB_CPU_Allocation_TTL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_NB_CPU_下季度分货_汇总'"
                ref="gridffcpuallocttl">
              </v-table>
            </div>          
            <h2>FF WW NB CPU ATS 上传
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <!-- <upload-new
                  @on-success="updataFCSTt"
                  @updateTimeChange="updataFCSTt1"
                  :sheetsName="'FF_WW_NB_CPU_ATS_上传'"
                  :tableName='"FF_WW_NB_CPU_ATS_Upload_New"'
                  :dbName="'FF_IDSS_Data_FF'"
                  :url="'/uploadExcelCPUATS'"
                  :logTableName='"FF_WW_NB_CPU_ATS_Upload_New"'
                  :logObj="'gridffwwcpuatsup'">
                </upload-new> -->
                <upload
                  @on-success="updateffwwcpuatsup"
                  @updateTimeChange="updateffwwcpuatsup1"
                  :sheetsName="'FF_WW_NB_CPU_ATS_上传'"
                  :logTableName='"FF_WW_NB_CPU_ATS_Upload"'
                  :logObj="'gridffwwcpuatsup'">
                </upload>                
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'FF_WW_NB_CPU_ATS_上传'"
                :tableName='"FF_WW_NB_CPU_ATS_Upload"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_NB_CPU_ATS_上传'"
                ref="gridffwwcpuatsup">
              </v-table>          
            </div>          
            <h2>FF WW NB CPU ATS
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'FF_WW_NB_CPU_ATS'"
                :tableName='"FF_WW_NB_CPU_ATS"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_WW_NB_CPU_ATS'"
                ref="gridffwwcpuats">
              </v-table>
            </div>      
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="npiItem">
          <div class="block">
            <h2>ConNB 增供机会&emsp;&emsp;月机会点为预估供应外的增供机会
              <div class="form-box">
                <upload
                  @on-success="updatesupplyadd"
                  @updateTimeChange="updatesupplyadd1"
                  :sheetsName="'ConNB_增供机会'"
                  :logTableName='"ConNB_Supply_Additional"'
                  :logObj="'gridsupplyadd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_增供机会'"
                :tableName='"ConNB_Supply_Additional"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_增供机会'"
                ref="gridsupplyadd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[8]" class="npiItem">
          <div class="block">
            <h2>ConNB CPU 增供机会&emsp;&emsp;Allocation外的增供机会
              <div class="form-box">
                <upload
                  @on-success="updatecpusupplyadd"
                  @updateTimeChange="updatecpusupplyadd1"
                  :sheetsName="'ConNB_CPU_增供机会'"
                  :logTableName='"ConNB_CPU_Supply_Additional"'
                  :logObj="'gridcpusupplyadd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_CPU_增供机会'"
                :tableName='"ConNB_CPU_Supply_Additional"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_CPU_增供机会'"
                ref="gridcpusupplyadd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[9]" class="npiItem">
          <div class="block">
            <h2>ConNB NPI计划 &emsp;&emsp;SS时间及Tooling有更新时
              <div class="form-box">
                <upload
                  @on-success="updatenpi"
                  @updateTimeChange="updatenpi1"
                  :sheetsName="'ConNB_NPI计划'"
                  :logTableName='"ConNB_NPI_Schedule"'
                  :logObj="'gridnpi'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_NPI计划'"
                :tableName='"ConNB_NPI_Schedule"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_NPI计划'"
                ref="gridnpi">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[10]" class="npiItem">
          <div class="block">
            <h2>ConNB PSD Family WW
              <div class="form-box">
                <upload
                  @on-success="updatefamilyww"
                  @updateTimeChange="updatefamilyww1"
                  :sheetsName="'ConNB_PSD_Family_WW'"
                  :logTableName='"ConNB_PSD_Family_WW"'
                  :logObj="'upfamilyww'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_PSD_Family_WW'"
                :tableName='"ConNB_PSD_Family_WW"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PSD_Family_WW'"
                ref="gridfamilyww">
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
      toggle7: true,
      toggle8: true,
      toggle9: true,
      toggle10: true,
      toggle11: true,
      toggle12: true,
      toggle13: true,
      toggle14: true,
      toggle15: true,
      toggle16: true,
      toggle17: true,
      tabPosition: 'left',
      menuArr: ['管理看板', 'ATS Tracking', '长期预测', '长期预测备注', '长期预测Family', 'LBG NB ATS', 'CPU分货', '机型增供机会', 'CPU增供机会', 'NPI计划 Tooling', 'PSD Family WW']
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
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
      this.toggleList8()
      this.toggleList9()
      this.toggleList10()
      this.toggleList11()
      this.toggleList12()
      this.toggleList13()
      this.toggleList14()
      this.toggleList15()
      this.toggleList16()
      this.toggleList17()
    }, 3000)
  },
  created () {
  },
  methods: {
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'ConNB_管理看板'
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
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_管理看板_Download'
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
          DOWNLOAD_BAT_PATH: 'ConNB_长期预测_Family_Download'
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
    sendemail3 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'LBG_NB_Parts_ATS_Tracking'
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
          DOWNLOAD_BAT_PATH: 'LBG_NB_Parts_ATS_Tracking_Download'
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
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle7 = !this.toggle7
    },
    toggleList8 () {
      let addgrid = document.getElementsByClassName('addgrid8')[0]
      if (this.toggle8) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle8 = !this.toggle8
    },
    toggleList9 () {
      let addgrid = document.getElementsByClassName('addgrid9')[0]
      if (this.toggle9) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle9 = !this.toggle9
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
    toggleList12 () {
      let addgrid = document.getElementsByClassName('addgrid12')[0]
      if (this.toggle12) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle12 = !this.toggle12
    },
    toggleList13 () {
      let addgrid = document.getElementsByClassName('addgrid13')[0]
      if (this.toggle13) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle13 = !this.toggle13
    },
    toggleList14 () {
      let addgrid = document.getElementsByClassName('addgrid14')[0]
      if (this.toggle14) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle14 = !this.toggle14
    },
    toggleList15 () {
      let addgrid = document.getElementsByClassName('addgrid15')[0]
      if (this.toggle15) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle15 = !this.toggle15
    },
    toggleList16 () {
      let addgrid = document.getElementsByClassName('addgrid16')[0]
      if (this.toggle16) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle16 = !this.toggle16
    },
    toggleList17 () {
      let addgrid = document.getElementsByClassName('addgrid17')[0]
      if (this.toggle17) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle17 = !this.toggle17
    },
    updatemanagerpt () {
      this.$refs.gridmanagerpt.updateTabFun()
    },
    updatelbgnbatstracking () {
      this.$refs.gridlbgnbatstracking.updateTabFun()
    },
    updatefamilyww () {
      this.$refs.gridfamilyww.updateTabFun()
    },
    updatefamilyww1 () {
      this.$refs.gridfamilyww.updateTimeChange()
    },
    updatenpi () {
      this.$refs.gridnpi.updateTabFun()
    },
    updatenpi1 () {
      this.$refs.gridnpi.updateTimeChange()
    },
    updatesupplyadd () {
      this.$refs.gridsupplyadd.updateTabFun()
    },
    updatesupplyadd1 () {
      this.$refs.gridsupplyadd.updateTimeChange()
    },
    updatecpusupplyadd () {
      this.$refs.gridcpusupplyadd.updateTabFun()
    },
    updatecpusupplyadd1 () {
      this.$refs.gridcpusupplyadd.updateTimeChange()
    },
    updatecpualloc () {
      this.$refs.gridcpualloc.updateTabFun()
      this.$refs.gridcpuallocttl.updateTabFun()
    },
    updatecpualloc1 () {
      this.$refs.gridcpualloc.updateTimeChange()
    },
    updateffcpualloc () {
      this.$refs.gridffcpualloc.updateTabFun()
      this.$refs.gridffcpuallocttl.updateTabFun()
    },
    updateffcpualloc1 () {
      this.$refs.gridffcpualloc.updateTimeChange()
    },
    updateffwwcpuatsup () {
      this.$refs.gridffwwcpuatsup.updateTabFun()
      this.$refs.gridffwwcpuats.updateTabFun()
    },
    updateffwwcpuatsup1 () {
      this.$refs.gridffwwcpuatsup.updateTimeChange()
    },
    updatefcstlongup () {
      this.$refs.gridfcstlongup.updateTabFun()
      this.$refs.gridfcstlong.updateTabFun()
      this.$refs.gridfcstlongttl.updateTabFun()
    },
    updatefcstlongup1 () {
      this.$refs.gridfcstlongup.updateTimeChange()
    },
    updatefcstremark () {
      this.$refs.gridfcstremark.updateTabFun()
      this.$refs.gridfcstremarkttl.updateTabFun()
    },
    updatefcstremark1 () {
      this.$refs.gridfcstremark.updateTimeChange()
    },
    updateffwwlbgnbats () {
      this.$refs.gridffwwlbgnbats.updateTabFun()
    },
    updateffwwlbgnbats1 () {
      this.$refs.gridffwwlbgnbats.updateTimeChange()
    },
    updatelbgnbpartats () {
      this.$refs.gridlbgnbpartats.updateTabFun()
    },
    updatelbgnbpartats1 () {
      this.$refs.gridlbgnbpartats.updateTimeChange()
    },
    updatelbgnblcdmapping () {
      this.$refs.gridlbgnblcdmapping.updateTabFun()
    },
    updatelbgnblcdmapping1 () {
      this.$refs.gridlbgnblcdmapping.updateTimeChange()
    },
    updatelbgnbpormapping () {
      this.$refs.gridlbgnbpormapping.updateTabFun()
    },
    updatelbgnbpormapping1 () {
      this.$refs.gridlbgnbpormapping.updateTimeChange()
    },
    updatefcstfamily () {
      this.$refs.gridfcstfamily.updateTabFun()
      this.$refs.gridfcstfamilynew.updateTabFun()
    },
    updatefcstfamily1 () {
      this.$refs.gridfcstfamily.updateTimeChange()
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
