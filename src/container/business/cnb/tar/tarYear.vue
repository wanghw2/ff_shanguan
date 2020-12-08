<template>
  <div class="fcst-wraps">
    <div class="content">
      <el-tabs :tab-position="'left'" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block1">
            <div class="fcst-wrap">
              <div class="block">
                <el-form :inline="true" :model="form1" class="demo-form-inline">
                  <el-form-item label="预测版本">
                    <el-select v-model="form1.version" @change="getvsVersion" size="mini"  placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versions1"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item :label="versionvs" style="margin-left:30px">
                  </el-form-item>
                </el-form>
                <h2>季度变化
                  <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid3">
                  <div class="drawBar" ref="drawBar2"></div>
                  <div class="drawBar" ref="drawBar3"></div>
                  <div class="drawBar1" ref="drawBar1"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[0]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid4">
                  <div class="drawBar" ref="drawBar5"></div>
                  <div class="drawBar" ref="drawBar6"></div>
                  <div class="drawBar1" ref="drawBar4"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[1]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid5">
                  <div class="drawBar" ref="drawBar8"></div>
                  <div class="drawBar" ref="drawBar9"></div>
                  <div class="drawBar1" ref="drawBar7"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[2]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid6">
                  <div class="drawBar" ref="drawBar11"></div>
                  <div class="drawBar" ref="drawBar12"></div>
                  <div class="drawBar1" ref="drawBar10"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[3]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid7">
                  <div class="drawBar" ref="drawBar14"></div>
                  <div class="drawBar" ref="drawBar15"></div>
                  <div class="drawBar1" ref="drawBar13"></div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block1">
            <div class="fcst-wrap">
              <div class="waterfalls">
                <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
                  <div class="line1">
                    <el-form-item label="预测版本" prop="version">
                      <el-select v-model="form.version" size="mini" filterable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in versions"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="客户细分" prop="cusSegment" >
                      <el-select v-model="form.cusSegment" size="mini"  filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="item in cusSegments.children"
                          :key="item.value"
                          :label="item.name"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="制造工厂" prop="buildfact" label-width="84px">
                      <el-select v-model="form.buildfact" size="mini" filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="item in buildfacts.children"
                          :key="item.value"
                          :label="item.name"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="产品细分" prop="prosegment">
                      <el-select v-model="form.prosegment" @visible-change="getProsegments" size="mini" filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in prosegments.value"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="选择维度" prop="dimension">
                      <el-select v-model="form.dimension" size="mini" placeholder="请选择">
                        <el-option
                          v-for="(item, index) in dimensions"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                    <el-form-item label="Family1" prop="Family1">
                      <el-select v-model="form.Family1" @visible-change="getFamily1s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in Family1s.value"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="Family2" prop="Family2">
                      <el-select v-model="form.Family2" @visible-change="getFamily2s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in Family2s.value"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="FCST Family" prop="fcstFamily" label-width="84px">
                      <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in fcstFamilys.value"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="物料编码" prop="materialcode" >
                      <el-select v-model="form.materialcode" @visible-change="getMaterialcodes" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
                        <el-option
                          v-for="(item, index) in materialcodes"
                          :key="index"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item style="margin-left:20px">
                    <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                    <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                  </el-form-item>
                  <form-public ref="formPublic"
                  :pn='this.getPNvalue()'>
                  </form-public>
                </el-form>
              </div>
              <div class="block">
                <h2 style="margin-top:10px">变化分析</h2>
                <div class="vary-box">
                  <div class="varytable">
                    <div class="table-box">
                      <el-table
                        :data="tableData1"
                        :header-row-style="headerRowStyle"
                        :row-style="tableRowStyle"
                        border
                        stripe
                        style="width: 100%"
                        max-height="800"
                        >
                        <el-table-column
                          prop="选择值"
                          label="选择值"
                          align="center"
                          sortable>
                          <template slot-scope="scope">
                            <div>
                              <a @click="handleClick1(scope.row)">{{scope.row.选择值}}</a>
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="M1 Change"
                          :label="tableList[0]"
                          align="center"
                          width="65"
                          sortable>
                        </el-table-column>
                        <el-table-column
                          prop="M2 Change"
                          :label="tableList[1]"
                          align="center"
                          sortable
                          width="65">
                        </el-table-column>
                        <el-table-column
                          prop="M3 Change"
                          :label="tableList[2]"
                          align="center"
                          sortable
                          width="65">
                        </el-table-column>
                        <el-table-column
                          prop="M4 Change"
                          :label="tableList[3]"
                          align="center"
                          sortable
                          width="65">
                        </el-table-column>
                        <el-table-column
                          prop="M5 Change"
                          :label="tableList[4]"
                          align="center"
                          sortable
                          width="65">
                        </el-table-column>
                        <el-table-column
                          prop="Rolling Change"
                          label= "Rolling Change"
                          align="center"
                          sortable
                          width="70">
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <!-- <div style="float:left">{{selectValue}}</div> -->
                  <div class="varyanalysischart" ref="varyanalysischart"></div>
                  <div class="varyanalysischart" ref="varyanalysischart1"></div>
                </div>
              </div>
              <div class="block">
                <h2>预测版本全景图
                  <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
                </h2>
                <el-form :inline="true" :model="form2" class="demo-form-inline">
                  <el-form-item label="财年财月">
                    <el-select v-model="form2.monthYear" @change="drawBarLine1" size="mini"  placeholder="请选择">
                      <el-option
                        v-for="(item, index) in monthYears"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div class="addgrid addgrid0">
                  <v-table
                    :sheetsName="'ConNB_分客户类型'"
                    :tableName="'ConNB_Target'"
                    :source="'FF_IDSS_Data_CON'"
                    :fileName="'ConNB_分客户类型'"
                    ref="cnbcus">
                  </v-table>
                </div>
                <div class="drawBarLine" ref="drawBarLine1"></div>
              </div>
              <div class="block">
                <h2>滚动12个月需求趋势图表
                  <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
                </h2>
                <el-form :inline="true" :model="form3" class="demo-form-inline">
                  <el-form-item label="版本序号">
                    <el-select v-model="form3.versionNumber" @change="drawBarLine2" size="mini"  placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versionNumbers"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div class="addgrid addgrid1">
                  <v-table
                    :sheetsName="'ConNB_分客户类型'"
                    :tableName="'ConNB_Target'"
                    :source="'FF_IDSS_Data_CON'"
                    :fileName="'ConNB_分客户类型'"
                    ref="cnbcus">
                  </v-table>
                </div>
                <div class="drawBarLine" ref="drawBarLine2"></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import formPublic from '@/components/public/formPublic'
import echarts from 'echarts'
export default {
  data () {
    return {
      tableData1: [],
      tableList: [],
      token: '',
      selectValue: 'aa',
      bardata1: [],
      versionvs: '',
      version: '',
      versions1: [],
      tableArr: [],
      menuArr: ['Overview', '预测变化'],
      monthName: [],
      pageSize: 18,
      toggle: true,
      toggle1: true,
      toggle3: false,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      toggle8: true,
      disabled: false,
      monthYears: [],
      form1: {
        version: ''
      },
      form2: {
        monthYear: ''
      },
      form3: {
        versionNumber: -1
      },
      form: {
        dimension: 'Family1',
        version: '', // version
        cusSegment: '', // 客户细分
        Family1: [], // Family1
        Family2: [], // Family2
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        buildfact: '', // 制造工厂
        materialcode: [] // 物料编码
      },
      versions: [],
      cusSegments: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: [],
      buildfacts: [],
      versionNumbers: [5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15],
      dimensions: ['客户细分', '制造工厂', '产品细分', 'Family1', 'Family2', 'FCST Family', '物料编码', 'CV']
    }
  },
  components: {
    VTable,
    formPublic
  },
  created () {
    this.getQuerybuipro()
    this.getQueryVersion()
    this.getVersionOverview()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
    }, 300)
  },
  methods: {
    drawBarLine1 () { // 预测版本全景图
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConNB'
      params['style'] = '8'
      params['ny'] = vm.form2.monthYear
      params['version'] = vm.form1.version
      vm.$ajax({
        url: '/getFcstChanges',
        data: params,
        done (data) {
          var xAxisData = data.xAxis
          var legendData = data.legend
          var dataList = data.series
          var option = {
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
            color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#E87C25', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
              containLabel: true
            },
            legend: {
              data: legendData,
              right: '6%'
            },
            dataZoom: [{
              type: 'slider',
              start: 0,
              end: 10
            }, {
              type: 'inside',
              start: 0,
              end: 10
            }],
            xAxis: {
              data: xAxisData,
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            yAxis: {},
            series: [{
              name: 'Step Start',
              type: 'line',
              step: 'middle',
              data: data.line
            }].concat(echarts.util.map(dataList, function (data, index) {
              return {
                type: 'bar',
                animation: false,
                name: legendData[index + 1],
                data: data
              }
            }))
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine1)
          drawBarLine.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarLine2 () { // 滚动12个月趋势图
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConNB'
      params['style'] = '9'
      params['versionIndex'] = vm.form3.versionNumber
      params['version'] = vm.form1.version
      vm.$ajax({
        url: '/getFcstChanges',
        data: params,
        done (data) {
          var yearCount = data.count
          var xAxisData = data.xAxis
          var legendData = data.legend
          var customData = data.line
          var dataList = data.series
          var encodeY = []
          for (var i = 0; i < yearCount; i++) {
            encodeY.push(1 + i)
          }
          function renderItem (params, api) {
            var xValue = api.value(0)
            var currentSeriesIndices = api.currentSeriesIndices()
            var barLayout = api.barLayout({
              barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
            })
            var points = []
            for (var i = 0; i < currentSeriesIndices.length; i++) {
              var seriesIndex = currentSeriesIndices[i]
              if (seriesIndex !== params.seriesIndex) {
                var point = api.coord([xValue, api.value(seriesIndex)])
                point[0] += barLayout[i - 1].offsetCenter
                point[1] -= 0
                points.push(point)
              }
            }
            var style = api.style({
              stroke: api.visual('color'),
              fill: null
            })
            return {
              type: 'polyline',
              shape: {
                points: points
              },
              style: style
            }
          }
          var option = {
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
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legendData,
              right: '6%'
            },
            color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#E87C25', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            dataZoom: [
              {
                type: 'slider',
                start: 0,
                end: 10
              }, {
                type: 'inside',
                start: 0,
                end: 10
              }
            ],
            xAxis: {
              data: xAxisData,
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            yAxis: {},
            series: [{
              type: 'custom',
              name: legendData[0],
              renderItem: renderItem,
              itemStyle: {
                normal: {
                  borderWidth: 2
                }
              },
              encode: {
                x: 0,
                y: encodeY
              },
              data: customData,
              z: 100
            }].concat(echarts.util.map(dataList, function (data, index) {
              return {
                type: 'bar',
                animation: false,
                name: legendData[index + 1],
                data: data
              }
            }))
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine2)
          drawBarLine.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit (form) {
      this.getTableData()
      this.drawBarLine1()
      this.drawBarLine2()
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
      this.tableData = []
      this.form.version = this.versions[0]
      this.getTableData()
      this.drawBarLine1()
      this.drawBarLine2()
    },
    getmonthYear () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 10,
          version: vm.form1.version
        },
        done (data) {
          vm.monthYears = data
          vm.form2.monthYear = data[0]
          vm.drawBarLine1()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getTableList () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 2,
          version: vm.form1.version
        },
        done (data) {
          vm.tableList = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    varyanalysischart () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 6,
          selectValue: vm.selectValue,
          token: vm.token,
          version: vm.form1.version
        },
        done (data) {
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart)
          var option = {
            title: {
              text: vm.selectValue + '  预测变化',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: function (params) {
                var tar = params[1]
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
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
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            grid: {
              left: '3%',
              right: '1%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              splitLine: {show: false},
              data: data.xAxis
            },
            yAxis: {
              type: 'value'
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
            series: data.series
          }
          varyanalysischart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    varyanalysischart1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 7,
          selectValue: vm.selectValue,
          token: vm.token,
          version: vm.form1.version
        },
        done (data) {
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart1)
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
              containLabel: true
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
            legend: {
              data: data.legend,
              right: '13%'
            },
            color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#E87C25', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            xAxis: {
              type: 'category',
              data: data.xAxis,
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            yAxis: {
              type: 'value'
            },
            series: data.series
          }
          varyanalysischart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getTableData () {
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConNB'
      params['style'] = '5'
      vm.$ajax({
        url: '/getFcstChanges',
        data: params,
        done (data) {
          vm.tableData1 = data.part1
          vm.token = data.token
          vm.selectValue = data.part1[0].选择值
          vm.varyanalysischart()
          vm.varyanalysischart1()
        },
        fail (data) {
          alert(data)
        }
      })
    },
    getVersionOverview () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Change_Family'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions1 = data
          vm.form1.version = data[0]
          vm.getvsVersion()
          vm.getMonthName()
          vm.drawBarQuarter()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getPNvalue () {
      let pn = []
      if (this.form.Family1.length === 0) {
        this.Family1s.pn = []
      }
      if (this.form.Family2.length === 0) {
        this.Family2s.pn = []
      }
      if (this.form.fcstFamily.length === 0) {
        this.fcstFamilys.pn = []
      }
      if (this.form.materialcode.length !== 0) {
        pn = this.form.materialcode
      } else if (this.form.fcstFamily.length !== 0) {
        pn = this.fcstFamilys.pn
      } else if (this.form.Family2.length !== 0) {
        pn = this.Family2s.pn
      } else if (this.form.Family1.length !== 0) {
        pn = this.Family1s.pn
      }
      return pn
    },
    downloadDate () {
      this.disabledload = true
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Waterfall_Tran_TTL'
      this.$ajax1({
        url: '/downloadExelWaterfall',
        data: params,
        done (data) {
          let blob = new Blob([data], {type: 'application/vnd.ms-excel;charset=utf-8'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'waterfall下载.xlsx'
          link.click()
          window.URL.revokeObjectURL(link.href)
          vm.disabledload = false
        }
      })
      setTimeout(() => {
        vm.disabledload = false
      }, 20000)
    },
    countProperties (obj) { // 判断对象的长度
      let count = 0
      for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
          count++
        }
      }
      return count
    },
    valieForm () {
      let params = this.$refs.formPublic.valieForm()
      if (this.form.materialcode.join() !== '') {
        params['materialcode'] = this.form.materialcode
      }
      if (this.form.version !== '') {
        params['version'] = this.form.version
      }
      if (this.form.prosegment !== '') {
        params['prosegment'] = this.form.prosegment
      }
      if (this.form.cusSegment !== '') {
        params['cusSegment'] = this.form.cusSegment
      }
      if (this.form.buildfact !== '') {
        params['buildfact'] = this.form.buildfact
      }
      if (this.form.Family1.join() !== '') {
        params['Family1'] = this.form.Family1
      }
      if (this.form.Family2.join() !== '') {
        params['Family2'] = this.form.Family2
      }
      if (this.form.fcstFamily.join() !== '') {
        params['fcstFamily'] = this.form.fcstFamily
      }
      if (this.form.dimension !== '') {
        params['dimension'] = this.form.dimension
        if (this.form.dimension === '客户细分') {
          params['dimentionValue'] = this.form.cusSegment
        }
        if (this.form.dimension === '制造工厂') {
          params['dimentionValue'] = this.form.buildfact
        }
        if (this.form.dimension === '产品细分') {
          params['dimentionValue'] = this.form.prosegment
        }
        if (this.form.dimension === 'Family1' && this.form.Family1.length !== 0) {
          params['dimentionValue'] = this.form.Family1
        }
        if (this.form.dimension === 'Family2' && this.form.Family2.length !== 0) {
          params['dimentionValue'] = this.form.Family2
        }
        if (this.form.dimension === 'FCST Family') {
          params['dimentionValue'] = this.form.fcstFamily
        }
        if (this.form.dimension === '物料编码') {
          params['dimentionValue'] = this.form.materialcode
        }
        if (this.form.dimension === 'CV') {
          params['valueCV'] = (JSON.stringify(this.$refs.formPublic.valieForm1())).replace(/"/g, '').replace(/\{|\}/g, '')
        }
      }
      if (this.countProperties(params) === 1 && params.hasOwnProperty('version')) { // 如果params对象长度为1并且只包含version属性
        params['init'] = 1
      }
      return params
    },
    getQueryVersion () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Waterfall_Tran_PN_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions = data
          vm.form.version = data[0]
          vm.getTableList()
          vm.getTableData()
          vm.drawBarLine2()
          vm.getmonthYear()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerybuipro () { // 获取产品细分和制造工厂的下拉选项
      let vm = this
      this.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {'codeValue': '制造工厂_ConNB,客户细分1_CON'},
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '客户细分1_CON') {
              vm.cusSegments = data[i]
            }
            if (data[i].value === '制造工厂_ConNB') {
              vm.buildfacts = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getProsegments () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[产品细分]'
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.prosegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily1s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family1]'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.Family1s.value = data.value
          vm.Family1s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily2s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family2]'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.Family2s.value = data.value
          vm.Family2s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFcstFamilys () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'a.[FCST Family]'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'b.[Family2]'
        params['objv3'] = this.form.Family2
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.fcstFamilys.value = data.value
          vm.fcstFamilys.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMaterialcodes () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Waterfall_Tran_PN_TTL'
      params['obj0'] = 'PN'
      if (this.form.prosegment !== '') {
        let prosegment = []
        prosegment[0] = this.form.prosegment
        params['objk1'] = '产品细分'
        params['objv1'] = prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'Family2'
        params['objv3'] = this.form.Family2
      }
      if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
        params['objk4'] = 'FCST Family'
        params['objv4'] = this.form.fcstFamily
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.materialcodes = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getvsVersion () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 4,
          version: vm.form1.version,
          type: 'TTL'
        },
        done (data) {
          vm.versionvs = data
          vm.drawBarQuarter()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMonthName () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 1,
          version: vm.form1.version
        },
        done (data) {
          vm.monthName = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarQuarter () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: 'TTL'
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'family',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisLabel: {
                  interval: 0,
                  rotate: 30,
                  margin: 2
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar1)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar2)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar3)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[0]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'family',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar4)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar5)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar6)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth2 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[1]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'family',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar7)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar8)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar9)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth3 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[2]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'family',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar10)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar11)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar12)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth4 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[3]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'family',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar13)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar14, true)
          drawBar2.setOption(option2)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar15, true)
          drawBar3.setOption(option3)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid0')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
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
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarQuarter()
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth1()
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth2()
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth3()
      }
      this.toggle6 = !this.toggle6
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth4()
      }
      this.toggle7 = !this.toggle7
    },
    headerRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '35px'
      }
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '14px'
      }
    },
    handleClick1 (row) {
      this.selectValue = row.选择值
      this.varyanalysischart()
      this.varyanalysischart1()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fcst-wraps
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom 0 !important
  .fcstItem
    width 100%
    height 100%
    .block1
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      .block
        width 100%
        height auto
        overflow hidden
        h2
          width 100%
          height 38px
          line-height 38px
          font-weight normal
          box-shadow: 0 2px 8px #ccc
          font-size 14px
          margin-bottom 10px
          padding 0 20px
          background #fafafa
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
        .title
          background #fff
          box-shadow 0 0 0 #fff
          font-weight 700
        .addgrid
          min-height 10px
          width 100%
          overflow hidden
          margin 10px 0px
        .drawBarLine
          width 95%
          height 400px
          margin 10px auto
        .vary-box
          width 100%
          height auto
          padding 10px 0
          overflow hidden
          .varytable
            width 45%
            height 800px
            float left
          .varyanalysischart
            width 50%
            height 400px
            float left
        .drawBar
          float left
          width 50%
          height 400px
          margin-bottom 20px
        .drawBar1
          float left
          width 100%
          height 400px
          margin-right 10px
</style>

