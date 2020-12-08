<template>
  <div class="mtm-box">
    <el-form ref="form" :model="form" label-width="60px">
      <div class="cpu">
        <div class="title">CPU系列: </div>
        <el-form-item label="平台：" prop="options2">
        <el-select v-model="form.options2" size="mini" multiple collapse-tags filterable placeholder="请选择内容">
          <el-option label="平台1" value="平台1"></el-option>
          <el-option label="平台2" value="平台2"></el-option>
          <el-option label="平台3" value="平台3"></el-option>
          <el-option label="平台4" value="平台4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="BAND：" prop="options3">
        <el-select v-model="form.options3" style="width:220px" size="mini" multiple collapse-tags filterable placeholder="请选择内容">
          <el-option label="BAND1" value="BAND1"></el-option>
          <el-option label="BAND2" value="BAND2"></el-option>
          <el-option label="BAND3" value="BAND3"></el-option>
          <el-option label="BAND4" value="BAND4"></el-option>
          <el-option label="BAND5" value="BAND5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="厂商：" prop="options1">
        <el-select v-model="form.options1" size="mini" multiple collapse-tags filterable placeholder="请选择内容">
          <el-option label="厂商1" value="厂商1"></el-option>
          <el-option label="厂商2" value="厂商2"></el-option>
          <el-option label="厂商3" value="厂商3"></el-option>
          <el-option label="厂商4" value="厂商4"></el-option>
          <el-option label="厂商5" value="厂商5"></el-option>
          <el-option label="厂商6" value="厂商6"></el-option>
        </el-select>
      </el-form-item>
      </div>
      <el-form-item label="PN：" prop="options">
        <el-select v-model="form.options" size="mini" multiple collapse-tags filterable placeholder="请选择内容">
          <el-option label="PN1" value="PN1"></el-option>
          <el-option label="PN2" value="PN2"></el-option>
          <el-option label="PN3" value="PN3"></el-option>
          <el-option label="PN4" value="PN4"></el-option>
          <el-option label="PN5" value="PN5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Desc：" prop="desc">
        <el-input v-model="form.desc" size="small" placeholder="请输入内容" style="width:215px"></el-input>
      </el-form-item>
      <el-form-item class="search">
        <el-button type="primary" size="small" @click="onSubmit">立即查询</el-button>
        <el-button @click="resetForm('form')" size="small">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="scatterGraph" ref="scatter">
    </div>
    <div class="twoGraph">
      <div class="histogramGraph">
        <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
      </div>
      <!-- <div class="pieGraph">
        <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
      </div> -->
    </div>
    <div class="lineGraph" ref="lineGraph">
      <div class="toggleBtn">
        <div v-html="timeArr[timeIndex]" class="showWord"></div>
        <div class="btnGroup">
          <el-button-group>
            <el-button type="primary" size="small" icon="el-icon-minus" @click="minus" :disabled="timeIndex === 0"></el-button>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="plus" :disabled="timeIndex === timeArr.length - 1"></el-button>
          </el-button-group>
        </div>
      </div>
      <ve-line
        :data="chartData"
        :colors="colors"
        :data-empty="false"
        :loading="loading"
        :markPoint="markPoint"
        :markLine="markLine"
        :title="title"
        :visualMap="visualMap"
        :tool-box="toolbox"
        :data-zoom="dataZoom"
        :settings="chartSettings">
      </ve-line>
      <!-- <el-button @click="changeTheme">切换主题</el-button> -->
    </div>
    <div class="chartTab"></div>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line'
import VeScatter from 'v-charts/lib/scatter'
import VeHistogram from 'v-charts/lib/histogram'
import VePie from 'v-charts/lib/pie'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'v-charts/lib/style.css'
import echarts from 'echarts'
// import dark from '../../../../../static/js/dark.theme'
// import chalk from '../../../../../static/js/chalk.theme'
const $ = window.$
export default {
  data () {
    return {
      form: {
        // checkboxs: [], // 多选
        options: '', // select
        options1: '', // select
        options2: '', // select
        options3: '', // select
        radios: '', // 单选
        desc: '' // input
      },
      timeArr: ['年', '季', '月', '周', '日'],
      timeIndex: 0,
      time: '0',
      chartData: {}, // 图表数据
      chartSettings: {}, // 图表配置
      chartColumns: [],
      chartRows: [],
      columnsList: [],
      colors: [],
      // scatterData: [],
      // theme: chalk,
      loading: false,
      visualMap: null,
      toolbox: null,
      tooltip: null,
      title: null,
      markLine: null,
      markPoint: null,
      dataZoom: null,
      activeName: '1'
    }
  },
  components: {
    VeLine,
    VeScatter,
    VeHistogram,
    VePie
  },
  mounted () {
    this.$nextTick(() => {
      // this.scattercharts()
      // this.scatter()
    }, 10000)
  },
  created () {
    // this.getChartData()
    this.scattercharts()
    this.chartSettings = {
      metrics: ['SI Qty', 'SO Qty'],
      dimension: ['Date']
      // yAxis: {
      //   show: true
      // }
    }
    this.markLine = {
      silent: true,
      data: [{
        yAxis: 20
      }, {
        yAxis: 50
      }, {
        yAxis: 90
      }, {
        yAxis: 150
      }, {
        yAxis: 200
      }, {
        yAxis: 250
      }, {
        yAxis: 300
      }, {
        yAxis: 350
      }]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        },
        {
          name: '最小值',
          type: 'min'
        }
      ]
    }
    this.title = {
      text: '我是大标题',
      // subtext: '我是副标题',
      left: 200,
      itemGap: 10, // 俩标题之间的间隔
      textStyle: {
        // color: 'lightblue'
      }
    }
    // this.tooltip: {
    //   trigger: 'axis'
    // }
    this.dataZoom = [
      {
        type: 'slider',
        start: 10
      }
    ]
    this.toolbox = {
      right: 120,
      top: 0,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        // magicType: {type: ['line', 'bar']},
        restore: {}, // 还原
        saveAsImage: {}
      }
    }
    this.colors = ['red', 'yellowgreen', 'yellow', 'green', 'purple', 'blue', 'orange']
    this.visualMap = {
      top: 0,
      right: 0,
      pieces: [{
        gt: 0,
        lte: 50,
        color: '#096'
      }, {
        gt: 50,
        lte: 100,
        color: '#ffde33'
      }, {
        gt: 100,
        lte: 150,
        color: '#ff9933'
      }, {
        gt: 150,
        lte: 200,
        color: '#cc0033'
      }, {
        gt: 200,
        lte: 300,
        color: '#660099'
      }, {
        gt: 300,
        color: '#7e0023'
      }],
      outOfRange: {
        color: '#999'
      }
    }
  },
  // watch: {
  //   activeName () {
  //     this.$nextTick(_ => {
  //       this.$refs.graph.echarts.resize()
  //     })
  //   }
  // },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    // changeTheme () {
    //   this.theme = chalk
    //   console.log(this.theme)
    // },
    resetForm (formName) { // 重置表单
      this.$refs[formName].resetFields()
    },
    minus () {
      this.timeIndex = this.timeIndex - 1
    },
    plus () {
      this.timeIndex = this.timeIndex + 1
    },
    scattercharts () { // 散点图
      let vm = this
      this.$ajax({
        url: '/scatterChart',
        data: {
          menuId: 213,
          proIndex: 1
        },
        done (data) {
          let scatterChart = echarts.init(vm.$refs.scatter)
          scatterChart.showLoading()
          // console.log(data.data[2].data)
          let scatteroption = {
            title: {
              text: 'SI/SO'
            },
            grid: {
              left: '3%',
              right: '7%',
              bottom: '3%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              showDelay: 0,
              formatter: function (params) {
                if (params.value.length > 1) {
                  return params.seriesName + ' :<br/>' + params.value[0] + '<br/>' + params.value[2] + ' : ' + params.value[1] + ''
                } else {
                  return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + ''
                }
              },
              axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                  type: 'dashed',
                  width: 1
                }
              }
            },
            toolbox: {
              feature: {
                dataZoom: {},
                brush: {
                  type: ['rect', 'polygon', 'clear']
                }
              }
            },
            brush: {
            },
            legend: {
              data: ['SI', 'SO'],
              left: 'center'
            },
            xAxis: [
              {
                type: 'category',
                name: '日期',
                nameGap: 16,
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 14
                },
                data: data.data[0].scale,
                // scale: true,
                show: true,
                min: '2017-07-01',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  inside: false,
                  rotate: 90,
                  margin: 8,
                  formatter: null,
                  showMinLabel: null,
                  showMaxLabel: null
                },
                splitLine: {
                  show: false
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                scale: true,
                max: 1000,
                axisLabel: {
                  formatter: '{value}'
                },
                splitLine: {
                  show: false
                }
              }
            ],
            series: [
              // {
              //   name: 'SI',
              //   type: 'scatter',
              //   data: data.data[1].data,
              //   markArea: {
              //     silent: true,
              //     itemStyle: {
              //       normal: {
              //         color: 'transparent',
              //         borderWidth: 1,
              //         borderType: 'dashed'
              //       }
              //     }
              //   }
              // }
              {
                name: 'SO',
                type: 'scatter',
                data: data.data[2].data,
                symbolSize: 8,
                markArea: {
                  silent: true,
                  itemStyle: {
                    normal: {
                      color: 'transparent',
                      borderWidth: 1,
                      borderType: 'dashed'
                    }
                  }
                }
              }
            ]
          }
          scatterChart.hideLoading()
          scatterChart.setOption(scatteroption)
        }
      })
    },
    scatter () { // 配置
      let scatteroption = {
        title: {
          text: 'SI/SO'
        },
        grid: {
          left: '3%',
          right: '7%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return params.seriesName + ' :<br/>' + params.value[2] + ' : ' + params.value[1] + ''
            } else {
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + ''
            }
          },
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        brush: {
        },
        legend: {
          data: ['SI', 'SO'],
          left: 'center'
        },
        xAxis: [
          {
            type: 'time',
            scale: true,
            show: true,
            min: '2016-01-01'
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            max: '1000',
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'SI',
            type: 'scatter',
            data: this.aaa.slice(100),
            markArea: {
              silent: true,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderWidth: 1,
                  borderType: 'dashed'
                }
              }
            }
          },
          {
            name: 'SO',
            type: 'scatter',
            data: this.aaa.slice(100),
            markArea: {
              silent: true,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderWidth: 1,
                  borderType: 'dashed'
                }
              }
            }
          }
        ]
      }
      let scatterChart = echarts.init(this.$refs.scatter)
      scatterChart.setOption(scatteroption)
    },
    getChartData () {
      let vm = this
      this.$ajax({
        url: '/getChartData',
        data: {
          menuId: 213,
          proIndex: 1
        },
        done (data) {
          vm.chartRows = [].concat(data)
          let newArr = vm.chartRows[0] // 获取第一条的数据,用来获取键名
          // console.log(11)
          for (var key in newArr) {
            if (newArr.hasOwnProperty(key)) {
              vm.chartColumns.push(key) // 图表列名
            }
          }
          // console.log(vm.chartColumns)
          vm.columnsList = vm.chartColumns.map((item) => { // 表格列的数据处理
            return {
              title: item,
              field: ('' + item).replace(/\s/g, '_'),
              width: '120px'
            }
          })
          vm.dataSource = vm.chartRows.map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[('' + key).replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
          // console.log(vm.dataSource)
          vm.chartData = { // 图表数据配置
            columns: vm.chartColumns,
            rows: vm.chartRows
          }
          // console.log(vm.chartData)
          vm.initTab()
        }
      })
    },
    initTab () { // 初始化表格
      let vm = this
      $('.chartTab').kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        excel: {
          // fileName: vm.fileName + '_' + vm.getDate() + '.xlsx',
          fileName: '图表.xlsx',
          allPages: true
        },
        pageable: {
          pageSize: 15,
          numeric: true
        },
        excelExport (e) {
          e.workbook.sheets[0].name = '图表'
        },
        columns: vm.columnsList,
        dataSource: vm.dataSource
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
  width 100%
  height 100%
  padding 10px
  background #fff
  overflow hidden
  .el-form
    width 100%
    height auto
    overflow hidden
    font-size 14px
    .cpu
      width 100%
      height 40px
      display block
      .title
        padding 0 10px
        height 40px
        line-height 40px
        float left
        font-weight bold
  .el-form-item
    margin-bottom 0
    width 300px
    padding-right 10px
    float left
    &:nth-child(4) .el-form-item__content
      margin-left 0
      .el-button
        // float left
        margin-right 10px
  .el-form-item__label
    text-align right
    width 60px
  .search
    .el-form-item__content
      margin-left 0 !important
  .scatterGraph
    width 100%
    height 600px
    padding 0 20px
    margin 10px auto
  .twoGraph
    width 100%
    min-height 100px
    padding 0 20px
    margin 10px auto
    .histogramGraph, .pieGraph
      width 50%
      min-height 100px
      padding 0 20px
      margin-top 20px
      float left
  .lineGraph
    width 100%
    min-height 300px
    padding 0 20px
    box-sizing border-box
    margin 20px auto
    position relative
    overflow hidden
    .toggleBtn
      width 135px
      height 32px
      text-align right
      position absolute
      top 0px
      z-index 50
      .showWord
        width 30px
        // padding 0 10px
        margin-right 10px
        height 32px
        line-height 32px
        float left
      .btnGroup
        float left
  .chartTab
    width 100%
    min-height 30px
    overflow hidden
    // padding 0 10px
    margin 20px auto
</style>
