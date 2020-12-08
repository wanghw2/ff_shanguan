<template>
  <div class="sup-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" >
        <el-tab-pane :label="menuArr[0]" class="supitem">
          <div class="block">
            <h2>Tablet PSD 手工
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Tablet_PSD_Upload'"
                  @on-success="updatePSDReport"
                  @updateTimeChange="updatePSDReport1"
                  :logTableName="'Tablet_PSD_Upload'"
                  :logObj="'gridTabletpsdup'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Tablet_PSD_Upload'"
                :tableName="'Tablet_PSD_Upload'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Tablet_PSD_Upload'"
                ref="gridTabletpsdup">
              </v-table>
            </div>
            <h2>Tablet PSD
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Tablet_PSD_Detail'"
                :tableName="'Tablet_PSD_Detail'"
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Tablet_PSD_Detail'"
                :allPages="false"
                ref="gridTabletpsd">
              </v-table>
            </div>
            <h2>Tablet 后续可供
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail2" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateTogosupply"
                  :menuId="'402'"
                  :menuName="'PSD管理_PSD上传'"
                  :logTableName="'Tablet_PSD_Update'"
                  :proIndex="'1'" >
                </updata>
              </div>            
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Tablet_PSD_Update'"
                :tableName='"Tablet_PSD_Update"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Tablet_PSD_Update'"
                ref="gridTogosupply">
              </v-table>
            </div>
          </div>
        </el-tab-pane>  
        <el-tab-pane :label="menuArr[1]" class="supitem">
          <div class="block">
            <div class="top">
              <div class="gaugeChart" ref="gaugeChart" style="width:300px;height:300px;float: left;margin-right:150px"></div>
              <div class="wood">
                <div class="wooditem">
                  <ul v-if="woodul">
                    <li>
                      <h4>{{woodul[0].name}}</h4>
                      <i></i>
                      <span>{{woodul[0].value}}</span>
                    </li>
                    <li>
                      <h4>{{woodul[1].name}}</h4>
                      <i></i>
                      <span>{{woodul[1].value}}</span>
                    </li>
                    <li>
                      <h4>{{woodul[2].name}}</h4>
                      <i>{{woodul[2].change}}</i>
                      <span>{{woodul[2].value}}</span>
                    </li>
                    <li>
                      <h4>{{woodul[3].name}}</h4>
                      <i>{{woodul[3].change}}</i>
                      <span>{{woodul[3].value}}</span>
                    </li>
                    <li>
                      <h4>{{woodul[4].name}}</h4>
                      <i></i>
                      <span>{{woodul[4].value}}</span>
                    </li>
                  </ul>
                </div>
                <el-form :inline="true" :model="form" ref="form" label-width="90px" class="demo-form-inline">
                  <el-form-item label="ODM" prop="odm">
                    <el-select v-model="form.odm" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in odms"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Family" prop="family">
                    <el-select v-model="form.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in familys"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="PN" prop="pn">
                    <el-input v-model="form.pn" size="mini" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item style="margin-left: 30px">
                    <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                    <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <form-public ref="formpublic"/>
            <h2>RSD Tracking
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'RSD_Tracking'"
                :tableName='"Tablet_RSD_Tracking"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'RSD_Tracking'">
              </v-table>
            </div>
            <el-form :inline="true" :model="form1" ref="form1" label-width="75px" class="demo-form-inline">
              <el-form-item label="Order Date" prop="ordedate">
                <el-date-picker
                  size="mini"
                  v-model="form1.ordedate"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="RSD Date" prop="rsddate">
                <el-date-picker
                  v-model="form1.rsddate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="Input Date" prop="inputdate">
                <el-date-picker
                  v-model="form1.inputdate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="FG Date" prop="fgdate">
                <el-date-picker
                  v-model="form1.fgdate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="Ship Date" prop="shipdate">
                <el-date-picker
                  v-model="form1.shipdate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item style="margin-left: 30px">
                <el-button type="primary" size="mini" @click="onSubmit(form1)">查询</el-button>
                <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="drawBarLine" ref="drawBarLine1"></div>
            <h2>PSD Tracking
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'PSD_Tracking'"
                :tableName='"Tablet_PSD_Tracking"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'PSD_Tracking'">
              </v-table>
            </div>
            <div class="drawBarLine" ref="drawBarLine2"></div>
            <h2>GEO Order Candence
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'GEO_Order_Candence'"
                :tableName='"Tablet_GEO_Order_Candence"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'GEO_Order_Candence'">
              </v-table>
            </div>
            <div class="drawBarLine" ref="drawBarLine3"></div>
            <h2>Input分析
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'Input分析'"
                :tableName='"Tablet_Input_Analysis"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'Input分析'">
              </v-table>
            </div>
            <div style="width:100%;height:auto;overflow:hidden;">
              <div class="drawStack" ref="drawStack" style="width:600px;height:400px;float: left"></div>
              <div class="drawStack" ref="drawStack1" style="width:600px;height:400px;float: left"></div>
            </div>
            <h2>PSD Status
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'PSDStatus'"
                :tableName='"Tablet_PSD_Status"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'PSDStatus'">
              </v-table>
            </div>
            <div class="drawStack" ref="drawStack2" style="width:1200px;height:400px;float: left"></div>
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
import formPublic from '@/components/public/formPublic1'
import echarts from 'echarts'
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
      woodul: null,
      gaugename: null,
      gaugevalue: null,
      tabPosition: 'left',
      menuArr: ['PSD上传', 'PSD分析'],
      form: {
        odm: '',
        family: '',
        pn: ''
      },
      form1: {
        ordedate: '',
        rsddate: '',
        inputdate: '',
        fgdate: '',
        shipdate: ''
      },
      odms: ['LCFC', '3nod', 'Compal'],
      familys: ['330-15AST', 'XXCHAO7000', 'Xiaoxin AIR']
    }
  },
  created () {
    this.gagueBoarddata()
  },
  components: {
    Upload,
    Updata,
    formPublic,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.drawBarLine1()
      this.drawBarLine2()
      this.drawBarLine3()
      // this.drawStack()
      this.drawStack1()
      this.drawStack2()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
      this.toggleList8()
      this.toggleList9()
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
          DOWNLOAD_BAT_PATH: 'Tablet_PSD_Report_Download'
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
          SENDMAIL_BAT_PATH: 'Tablet_PSD_Report'
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
          DOWNLOAD_BAT_PATH: 'Tablet_后续可供_Download'
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
          SENDMAIL_BAT_PATH: 'Tablet_后续可供'
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
    updateTogosupply () {
      this.$refs.gridTogosupply.updateTabFun()
    },
    updatePSDReport () {
      this.$refs.gridTabletpsdup.initTabTable()
      this.$refs.gridTabletpsd.initTabTable()
    },
    updatePSDReport1 () {
      this.$refs.gridTabletpsdup.updateTimeChange()
      this.$refs.gridTabletpsd.updateTimeChange()
    },
    gagueBoarddata () {
      let vm = this
      vm.$ajax({
        url: '/getPSDAnalysis',
        data: {
          style: 1
        },
        done (data) {
          vm.woodul = data.grid
          vm.gaugename = data.gauge.name
          vm.gaugevalue = data.gauge.value
          let gaugeChart = echarts.init(vm.$refs.gaugeChart)
          var option = {
            title: {
              text: vm.gaugename,
              left: 'center',
              bottom: '10%',
              textStyle: {
                fontSize: 13,
                color: '#666'
              }
            },
            color: ['#37A2DA', '#32C5E9', '#67E0E3'],
            tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
              feature: {
                restore: {},
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '业务指标',
                type: 'gauge',
                pointer: {
                  width: 3
                },
                title: {
                  fontWeight: 'bolder',
                  fontSize: 14,
                  color: '#bbb',
                  // fontStyle: 'italic',
                  offsetCenter: [0, '-22%']
                },
                radius: '65%',
                axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                    width: 18,
                    shadowBlur: 0,
                    color: [
                      [0.3, '#67e0e3'],
                      [0.7, '#37a2da'],
                      [1, '#fd666d']
                    ]
                  }
                },
                detail: {formatter: '{value}%'},
                data: [
                  {
                    value: vm.gaugevalue,
                    name: '出货进度'
                  }
                ]
              }
            ]
          }
          gaugeChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarLine1 () {
      let vm = this
      vm.$ajax({
        url: '/getPSDAnalysis',
        data: {
          style: 2
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          let labelOption = {
            normal: {
              show: true,
              position: 'inside',
              distance: 5,
              align: 'left',
              verticalAlign: 'middle',
              formatter: '{c}',
              rotate: 90,
              fontSize: 12,
              rich: {
                name: {
                  textBorderColor: '#fff'
                }
              }
            }
          }
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].type = 'bar'
            seriesData[i].barGap = 0
            seriesData[i].label = labelOption
          }
          var option = {
            title: {
              text: 'RSD Tracking',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              top: '10%',
              left: '5%',
              bottom: '20%'
            },
            color: ['#9BBB59', '#9CDCF0'],
            legend: {
              data: legendData,
              left: 'center'
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            series: seriesData
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine1)
          drawBarLine.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarLine2 () {
      let vm = this
      vm.$ajax({
        url: '/getPSDAnalysis',
        data: {
          style: 3
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].type = 'line'
          }
          var option = {
            title: {
              text: 'PSD Tracking',
              left: 'left',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              left: 'center',
              data: legendData
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              right: 50,
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            grid: {
              right: 100,
              bottom: '20%'
            },
            series: seriesData
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine2)
          drawBarLine.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarLine3 () {
      let vm = this
      vm.$ajax({
        url: '/getPSDAnalysis',
        data: {
          style: 4
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].type = 'line'
          }
          var option = {
            title: {
              text: 'GEO Order Candence',
              left: 'left',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              left: 'center',
              // top: 50,
              // orient: 'vertical',
              data: legendData
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              right: 50,
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            smooth: true,
            calculable: true,
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            grid: {
              right: 100,
              bottom: '20%'
            },
            series: seriesData
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine3)
          drawBarLine.setOption(option)
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
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    // updatePSDReport () {
    //   this.$refs.cnbPSDReport.updateTabFun()
    // },
    // updatePSDReport1 () {
    //   this.$refs.cnbPSDReport.updateTimeChange()
    // },
    // drawStack () {
    //   let vm = this
    //   vm.$ajax({
    //     url: '/getPSDAnalysis',
    //     data: {
    //       style: 5
    //     },
    //     done (data) {
    //       // let seriesData = data.series
    //       // let legendData = data.legend
    //       // let xAxisData = data.xAxis
    //       var option = {
    //         title: {
    //           text: 'Input QTY',
    //           top: 0,
    //           left: '10%',
    //           textStyle: {
    //             fontSize: 14,
    //             color: '#333'
    //           }
    //         },
    //         toolbox: {
    //           show: true,
    //           feature: {
    //             saveAsImage: {
    //               show: true
    //             },
    //             restore: {},
    //             dataView: {
    //               show: true
    //             }
    //           }
    //         },
    //         tooltip: {
    //           trigger: 'axis',
    //           axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //           }
    //         },
    //         legend: {
    //           data: ['<=4', '<=7', '<=14', '>=15', 'No input'],
    //           right: 0,
    //           orient: 'vertical',
    //           top: '40%'
    //         },
    //         grid: {
    //           left: '5%',
    //           right: '25%',
    //           bottom: '3%',
    //           containLabel: true
    //         },
    //         xAxis: [
    //           {
                // type: 'category',
                // axisLabel: {
                //   interval: 0,
                //   rotate: 20,
                //   margin: 8
                // },
    //             data: ['3NOD', 'Bitland', 'Compal', 'LCFC', 'Wistron']
    //           }
    //         ],
    //         yAxis: [
    //           {
    //             type: 'value'
    //           }
    //         ],
    //         series: [
    //           {
    //             name: '<=4',
    //             type: 'bar',
    //             barWidth: 35,
    //             stack: '广告',
    //             data: [1, 4, 2, 3, 3]
    //           },
    //           {
    //             name: '<=7',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [5, 7, 5, 6, 7]
    //           },
    //           {
    //             name: '<=14',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [13, 10, 12, 14, 9]
    //           },
    //           {
    //             name: '>=15',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [15, 24, 44, 44, 30]
    //           },
    //           {
    //             name: 'No input',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [36, 34, 41, 33, 44]
    //           }
    //         ]
    //       }
    //       let stackChart = echarts.init(vm.$refs.drawStack)
    //       stackChart.setOption(option)
    //       var option = {
    //         title: {
    //           text: 'Input Ratio',
    //           top: 0,
    //           left: '10%',
    //           textStyle: {
    //             fontSize: 14,
    //             color: '#333'
    //           }
    //         },
    //         toolbox: {
    //           show: true,
    //           feature: {
    //             saveAsImage: {
    //               show: true
    //             },
    //             restore: {},
    //             dataView: {
    //               show: true
    //             }
    //           }
    //         },
    //         tooltip: {
    //           trigger: 'axis',
    //           axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //           }
    //         },
    //         legend: {
    //           data: ['<=4', '<=7', '<=14', '>=15', 'No input'],
    //           right: 0,
    //           orient: 'vertical',
    //           top: '40%'
    //         },
    //         grid: {
    //           left: '5%',
    //           right: '25%',
    //           bottom: '3%',
    //           containLabel: true
    //         },
    //         xAxis: [
    //           {
    //             type: 'category',
    //             data: ['3NOD', 'Bitland', 'Compal', 'LCFC', 'Wistron']
    //           }
    //         ],
    //         yAxis: [
    //           {
    //             type: 'value',
    //             axisLabel: {
    //               formatter: '{value} %'
    //             },
    //             max: 100
    //           }
    //         ],
    //         series: [
    //           {
    //             name: '<=4',
    //             type: 'bar',
    //             barWidth: 35,
    //             stack: '广告',
    //             data: [1, 4, 2, 3, 3]
    //           },
    //           {
    //             name: '<=7',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [5, 7, 5, 6, 7]
    //           },
    //           {
    //             name: '<=14',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [13, 10, 12, 14, 9]
    //           },
    //           {
    //             name: '>=15',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [15, 24, 44, 44, 30]
    //           },
    //           {
    //             name: 'No input',
    //             type: 'bar',
    //             stack: '广告',
    //             data: [36, 34, 41, 33, 44]
    //           }
    //         ]
    //       }
    //       let stackChart = echarts.init(vm.$refs.drawStack1)
    //       stackChart.setOption(option)
    //     },
    //     fail (msg) {
    //       alert(msg)
    //     }
    //   })
    // },
    drawStack1 () {
      var option = {
        title: {
          text: 'Input Ratio',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['<=4', '<=7', '<=14', '>=15', 'No input'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '25%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['3NOD', 'Bitland', 'Compal', 'LCFC', 'Wistron']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} %'
            },
            max: 100
          }
        ],
        series: [
          {
            name: '<=4',
            type: 'bar',
            barWidth: 35,
            stack: '广告',
            data: [1, 4, 2, 3, 3]
          },
          {
            name: '<=7',
            type: 'bar',
            stack: '广告',
            data: [5, 7, 5, 6, 7]
          },
          {
            name: '<=14',
            type: 'bar',
            stack: '广告',
            data: [13, 10, 12, 14, 9]
          },
          {
            name: '>=15',
            type: 'bar',
            stack: '广告',
            data: [15, 24, 44, 44, 30]
          },
          {
            name: 'No input',
            type: 'bar',
            stack: '广告',
            data: [36, 34, 41, 33, 44]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.drawStack1)
      stackChart.setOption(option)
    },
    drawStack2 () {
      var option = {
        title: {
          text: 'PSD Status',
          top: 0,
          left: '10%',
          // width: 150,
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['Ship', 'Wip', 'Open'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '15%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['LCFC', '3nod', 'Compal', 'Bitland', 'Wistron']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Ship',
            type: 'bar',
            // barWidth: 35,
            // stack: '广告',
            data: [108, 99, 116, 128, 32]
          },
          {
            name: 'Wip',
            type: 'bar',
            // stack: '广告',
            data: [112, 142, 157, 131, 67]
          },
          {
            name: 'Open',
            type: 'bar',
            // stack: '广告',
            data: [51, 30, 24, 27, 39]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.drawStack2)
      stackChart.setOption(option)
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
        .drawBarLine
          width 1200px
          height 400px
          margin 10px auto
        .top
          width 100%
          height 306px
          overflow hidden
          .wood
            width 465px
            float left
            height auto
            margin-top 40px
            overflow hidden
            .wooditem
              width 100%
              margin-bottom 40px
              height auto
              overflow hidden
              ul
                width auto
                height 80px
                margin 0 10px 15px 0
                float left
                border-left 1px solid #71893F
                li
                  width 84px
                  height 80px
                  float left
                  text-align center
                  border 1px solid #71893F
                  border-left 0
                  &:nth-child(1)
                    background #DCE6F2
                  &:nth-child(2)
                    background #9CDCF0
                  &:nth-child(3)
                    background #9BBB59
                  &:nth-child(4)
                    background #F79646
                  &:nth-child(5)
                    background #00ffff
                  h4
                    width 100%
                    height 30px
                    line-height 30px
                    font-size 12px
                  i
                    text-align right
                    width 100%
                    height 25px
                    line-height 25px
                    padding-right 5px
                    display block
                    font-style normal
                    font-size 10px
                  span
                    width 100%
                    height 25px
                    line-height 25px
                    color #fff
                    display block
                    font-weight bold
                    font-size 12px
</style>
