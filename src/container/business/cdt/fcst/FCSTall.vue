<template>
  <div class="fcst-wraps">
    <div class="waterfalls">
      <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
        <div class="line">
          <el-form-item label="预测版本" prop="version">
            <el-select v-model="form.version" size="mini" @change="getmonthYear" filterable  placeholder="请选择">
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
          <el-form-item label="制造工厂" prop="buildfact">
            <el-select v-model="form.buildfact" size="mini" filterable clearable  placeholder="请选择">
              <el-option
                v-for="item in buildfacts.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品细分" prop="prosegment" label-width="93px">
            <el-select v-model="form.prosegment" @visible-change="getProsegments" size="mini" filterable clearable  placeholder="请选择">
              <el-option
                v-for="(item, index) in prosegments.value"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="line">
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
          <el-form-item label="Family3" prop="Family3">
            <el-select v-model="form.Family3" @visible-change="getFamily3s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
              <el-option
                v-for="(item, index) in Family3s.value"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="FCST Family" prop="fcstFamily" label-width="93px">
            <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
              <el-option
                v-for="(item, index) in fcstFamilys.value"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
          <el-form-item label="物料编码" prop="materialcode" >
            <el-select v-model="form.materialcode" @visible-change="getMaterialcodes" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
              <el-option
                v-for="(item, index) in materialcodes.value"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料描述" prop="matDesc" >
            <el-select v-model="form.matDesc" @visible-change="getmatDescs" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
              <el-option
                v-for="(item, index) in matDescs.value"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择维度" prop="dimension">
            <el-select v-model="form.dimension" @change="clearcvValue" size="mini" placeholder="请选择">
              <el-option
                v-for="(item, index) in dimensions"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="CV值" prop="cvValue" label-width="93px">
            <el-select v-model="form.cvValue" @visible-change="getcvValuedata" size="mini" placeholder="请选择">
              <el-option
                v-for="item in cvValue.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left:150px">
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
        <form-public ref="formPublic"
        :pn='this.getPNvalue()'>
        </form-public>
      </el-form>
    </div>
    <div class="block">
      <h2 style="margin-top:10px">预测版本全景图
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
      </h2>
      <el-form :inline="true" :model="form1" class="demo-form-inline">
        <el-form-item label="财年财月">
          <el-select v-model="form1.monthYear" @change="drawBarLine1" size="mini"  placeholder="请选择">
            <el-option
              v-for="(item, index) in monthYears"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item ><span style="color:#ccc">{{promptMessage1}}</span></el-form-item>
      </el-form>
      <div class="addgrid addgrid0">
        <v-table
          :url="'/getFCSTDataByToken'"
          :sheetsName="'ConDT_预测全景'"
          :tableName="'ConDT_FCST_Change_Query_Panorama'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConDT_预测全景'"
          :orderBy="'[Version],[Index]'"
          :token="token1"
          :userId="userId + ''"
          ref="gridtable1">
        </v-table>
      </div>
      <div class="drawBarLine" ref="drawBarLine1"></div>
    </div>
    <div class="block">
      <h2>滚动12个月需求趋势图表
        <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
      </h2>
      <el-form :inline="true" :model="form2" class="demo-form-inline">
        <el-form-item label="版本序号">
          <el-select v-model="form2.versionNumber" @change="drawBarLine2" size="mini"  placeholder="请选择">
            <el-option
              v-for="(item, index) in versionNumbers"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item ><span style="color:#ccc">{{promptMessage2}}</span></el-form-item>
      </el-form>
      <div class="addgrid addgrid1">
        <v-table
          :url="'/getFCSTDataByToken'"
          :sheetsName="'ConDT_需求全景'"
          :tableName="'ConDT_FCST_Change_Query_Demand'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConDT_需求全景'"
          :orderBy="'[Index],[选择值],[财年],[财季],[财月]'"
          :token="token2"
          :userId="userId + ''"
          ref="gridtable2">
        </v-table>
      </div>
      <div class="drawBarLine" ref="drawBarLine2"></div>
    </div>
  </div>
</template>
<script>
import formPublic from '@/components/public/formPubcdt'
import vTable from '@/components/public/vtableQueryToken'
import echarts from 'echarts'
export default {
  data () {
    return {
      promptMessage1: '',
      promptMessage2: '',
      token1: '',
      token2: '',
      userId: '',
      columnsList1: [],
      columnsList2: [],
      toggle: true,
      toggle1: true,
      monthYears: [],
      form: {
        cvValue: '',
        dimension: 'Family1',
        version: '', // version
        cusSegment: '', // 客户细分
        Family1: [], // Family1
        Family2: [], // Family2
        Family3: [], // Family3
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        buildfact: '', // 制造工厂
        matDesc: [],
        materialcode: [] // 物料编码
      },
      versions: [],
      cusSegments: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      Family3s: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: {pn: [], value: []},
      matDescs: {pn: [], value: []},
      buildfacts: [],
      cvValue: {},
      dimensions: ['客户细分', '制造工厂', '产品细分', 'Family1', 'Family2', 'Family3', 'FCST Family', '物料编码', 'CV_CPU', 'CV_硬盘', 'CV_内存', 'CV_显卡', 'CV_屏幕', 'CV_颜色', 'CV_OS', 'CV_Office', 'CV_其它'],
      form1: {
        monthYear: ''
      },
      form2: {
        versionNumber: -1
      },
      versionNumbers: [5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]
    }
  },
  components: {
    formPublic,
    vTable
  },
  created () {
    this.getQuerybuipro()
    this.getQueryVersion()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      if (this.form.dimension.indexOf('CV') !== -1 && this.form.cvValue === '') {
        alert('CV值不能为空')
      } else {
        this.drawBarLine1()
        this.drawBarLine2()
      }
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
      this.form.version = this.versions[0]
      this.form1.monthYear = this.monthYears[0]
      this.form2.versionNumber = -1
      this.form.dimension = 'Family1'
      this.drawBarLine1()
      this.drawBarLine2()
    },
    getmonthYear () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 10,
          businessLine: 'ConDT',
          version: vm.form.version
        },
        done (data) {
          vm.monthYears = data
          vm.form1.monthYear = data[0]
          vm.drawBarLine1()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarLine1 () { // 预测版本全景图
      let vm = this
      vm.promptMessage1 = '请稍等，正在快马加鞭计算中……'
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConDT'
      params['style'] = '1'
      params['ny'] = vm.form1.monthYear
      params['version'] = vm.form.version
      vm.$ajax({
        url: '/getFcstPanorama',
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
            color: ['#8e8e91', '#fee6e4', '#d3eace', '#fbe1c8', '#f7e6b2', '#c6e8d8', '#b2d6ee', '#c1ceee', '#c5bdee', '#efc2df', '#ffff00', '#dce6f2', '#8e8e91', '#34b1f5', '#68d845', '#fecb2f', '#cd7de0', '#e6ac23', '#13b9a7', '#fc3d39'],
            // color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#E87C25', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            grid: {
              left: '3%',
              right: '1%',
              top: '20%',
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
              end: 30
            }, {
              type: 'inside',
              start: 0,
              end: 30
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
          drawBarLine.setOption(option, true)
          vm.userId = data.userId
          vm.token1 = data.token
          vm.$refs.gridtable1.getColumns()
          vm.promptMessage1 = ''
        },
        fail (data) {
          var xAxisData = []
          var legendData = []
          var dataList = []
          var option = {
            legend: {
              data: legendData,
              right: '6%'
            },
            dataZoom: [{
              type: 'slider',
              start: 0,
              end: 30
            }, {
              type: 'inside',
              start: 0,
              end: 30
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
          vm.userId = data.userId
          vm.token1 = data.token
          vm.$refs.gridtable1.getColumns()
          vm.promptMessage1 = data
        }
      })
    },
    drawBarLine2 () { // 滚动12个月趋势图
      let vm = this
      vm.promptMessage2 = '请稍等，正在快马加鞭计算中……'
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConDT'
      params['style'] = '2'
      params['versionIndex'] = vm.form2.versionNumber
      params['version'] = vm.form.version
      vm.$ajax({
        url: '/getFcstPanorama',
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
              top: '20%',
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
            color: ['#fc3d39', '#fee6e4', '#d3eace', '#fbe1c8', '#f7e6b2', '#c6e8d8', '#b2d6ee', '#c1ceee', '#c5bdee', '#efc2df', '#efc2df', '#dce6f2', '#9cdcf0'],
            dataZoom: [
              {
                type: 'slider',
                start: 0,
                end: 30
              }, {
                type: 'inside',
                start: 0,
                end: 30
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
          drawBarLine.setOption(option, true)
          vm.userId = data.userId
          vm.token2 = data.token
          vm.$refs.gridtable2.getColumns()
          vm.promptMessage2 = ''
        },
        fail (data) {
          var yearCount = []
          var xAxisData = []
          var legendData = []
          var customData = []
          var dataList = []
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
            legend: {
              data: legendData,
              right: '6%'
            },
            // color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#E87C25', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            dataZoom: [
              {
                type: 'slider',
                start: 0,
                end: 30
              }, {
                type: 'inside',
                start: 0,
                end: 30
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
          vm.userId = data.userId
          vm.$refs.gridtable2.getColumns()
          vm.getColumns2()
          vm.promptMessage2 = data
        }
      })
    },
    clearcvValue () {
      this.form.cvValue = ''
    },
    getcvValuedata () { // 获取查询条件
      let vm = this
      vm.cvValue = {}
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': this.form.dimension + '_0001'
        },
        done (data) {
          if (JSON.stringify(data) !== '[]') {
            vm.cvValue = data[0]
          }
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
      if (this.form.matDesc.length !== 0) {
        pn = this.matDescs.pn
      } else if (this.form.fcstFamily.length !== 0) {
        pn = this.fcstFamilys.pn
      } else if (this.form.Family2.length !== 0) {
        pn = this.Family2s.pn
      } else if (this.form.Family1.length !== 0) {
        pn = this.Family1s.pn
      }
      return pn
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
      if (this.form.cvValue !== '') {
        params['cvValue'] = this.form.cvValue
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
      if (this.form.Family3.join() !== '') {
        params['Family3'] = this.form.Family3
      }
      if (this.form.fcstFamily.join() !== '') {
        params['fcstFamily'] = this.form.fcstFamily
      }
      if (this.form.matDesc.join() !== '') {
        params['matDesc'] = this.form.matDesc
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
        if (this.form.dimension === 'Family3' && this.form.Family3.length !== 0) {
          params['dimentionValue'] = this.form.Family3
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
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_PN_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions = data
          vm.form.version = data[0]
          vm.getmonthYear()
          vm.drawBarLine2()
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
        params: {'codeValue': '制造工厂_ConDT,客户细分1_CON'},
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '客户细分1_CON') {
              vm.cusSegments = data[i]
            }
            if (data[i].value === '制造工厂_ConDT') {
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
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
    getFamily3s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family3]'
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
          vm.Family3s.value = data.value
          vm.Family3s.pn = data.pn
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
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'b.[Family3]'
        params['objv4'] = this.form.Family3
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
      params['obj0'] = 'a.[PN]'
      params['tableName'] = 'CONNB_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
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
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'b.[Family3]'
        params['objv4'] = this.form.Family3
      }
      if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
        params['objk5'] = 'a.[FCST Family]'
        params['objv5'] = this.form.fcstFamily
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.materialcodes.value = data.value
          vm.materialcodes.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getmatDescs () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Desc]'
      if (this.form.materialcode.length !== 0) {
        params['objk2'] = 'a.[PN]'
        params['objv2'] = this.form.materialcode
      }
      if (this.form.materialcode.length === 0) {
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
        if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
          params['objk4'] = 'Family3'
          params['objv4'] = this.form.Family3
        }
        if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
          params['objk5'] = 'FCST Family'
          params['objv5'] = this.form.fcstFamily
        }
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          console.log(data)
          vm.matDescs.value = data.value
          vm.matDescs.pn = data.pn
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
      height 430px
      margin 10px auto
</style>

