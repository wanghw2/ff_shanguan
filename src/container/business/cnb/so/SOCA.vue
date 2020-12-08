<template>
  <div class="so-box">
    <div class="content">
      <div class="block">
        <div class="gauge-box">
          <div class="gaugeChart" ref="gaugeChart1"></div>
          <div class="gaugeChart" ref="gaugeChart2"></div>
          <div class="gaugeChart" ref="gaugeChart3"></div>
        </div>
        <table class="table table1" border="1">
          <tr align="center">
            <th>业务线</th>
            <th>客户细分</th>
            <th>Q Fin Target</th>
            <th>Q 累计订单</th>
            <th>Q 累计确认</th>
            <th>Q 累计CA</th>
            <th>Q 发货过账</th>
            <th>Q 有效来单</th>
            <th>本周节奏</th>
            <th>本周目标</th>
            <th>本周GAP</th>
            <th>下周节奏</th>
            <th>下周目标</th>
            <th>下周GAP</th>
          </tr>
          <tr>
            <td rowspan="5" align="center">CONNB</td>
            <td align="center" v-for="(item, i) in tablefirst1" :key="i">
              {{item}}
            </td>
          </tr>
          <tr v-for="(tableitem, index) in newtable1" :key="index">
            <td align="center" v-for="(itemchild, j) in tableitem" :key="j">
              {{itemchild}}
            </td>
          </tr>
        </table>
        <table class="table table2" border="1">
          <tr align="center">
            <th>业务线</th>
            <th>客户细分</th>
            <th>营销目标</th>
            <th>CAOL</th>
            <th>累计订单</th>
            <th>累计确认</th>
            <th>已资审</th>
            <th>发货过账</th>
            <th>未资未发</th>
            <th>未资</th>
            <th>未发</th>
            <th>有效来单</th>
            <th>有效来单Gap(vs 营销目标)</th>
            <th>累计确认Gap(vs 营销目标)</th>
            <th>有效来单Gap(vs CA OL)</th>
            <th>累计确认Gap(vs CA OL)</th>
          </tr>
          <tr>
            <td align="center" rowspan="5">CONNB</td>
            <td align="center" v-for="(item2, m) in tablefirst2" :key="m">
              {{item2}}
            </td>
          </tr>
          <tr v-for="(tableitem, i) in newtable2" :key="i">
            <td align="center" v-for="(itemchild2, j) in tableitem" :key="j">
              {{itemchild2}}
            </td>
          </tr>
        </table>
        <div class="graph-box">
          <h2>进度监控
            <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
          </h2>
          <el-form :inline="true" :model="form" ref="form" size="mini" class="demo-form-inline">
            <el-form-item  label="时间选择" prop="timepick" style="margin-left:50px" >
              <el-select v-model="form.timepick" size="mini" placeholder="请选择">
                <el-option
                  v-for="(item, index) in timepicks"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
            </el-form-item>
          </el-form>
          <div class="gridBox">
            <div class="grid1" ref="grid1" style="width: 100%;height:auto;overflow:hidden;margin-bottom:10px"></div>
            <div class="grid2" ref="grid2" style="width: 100%;height:auto;overflow:hidden;margin-bottom:10px"></div>
          </div>
          <div class="chartBox">
            <div class="barchart1" ref="barchart1"></div>
            <div class="barchart2" ref="barchart2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      toggle: true,
      chartData: null,
      newtable1: [],
      newtable2: [],
      tablefirst1: [],
      tablefirst2: [],
      tableData1: [],
      tableData2: [],
      form: {
        timepick: '月度'
      },
      timepicks: ['月度', '季度'],
      columnsList1: [
        {
          field: '客户细分1',
          width: '120px'
        },
        {
          field: '客户细分4',
          width: '120px'
        },
        {
          field: '月度营销目标',
          width: '120px'
        },
        {
          field: '月度发货过账',
          width: '120px'
        },
        {
          field: '月度确认',
          width: '120px'
        },
        {
          field: '月度有效来单',
          width: '120px'
        },
        {
          field: '月度有效订单',
          width: '120px'
        }
      ],
      columnsList2: [
        {
          field: '客户细分1',
          width: '120px'
        },
        {
          field: '客户细分4',
          width: '120px'
        },
        {
          field: '季度营销目标',
          width: '120px'
        },
        {
          field: '季度发货过账',
          width: '120px'
        },
        {
          field: '季度确认',
          width: '120px'
        },
        {
          field: '季度有效来单',
          width: '120px'
        },
        {
          field: '季度有效订单',
          width: '120px'
        }
      ],
      dataSource: [],
      pageSize: 18
    }
  },
  components: {
    // Upload,
    // VTable
  },
  created () {
    this.getgaugechartData() // 仪表盘
    this.gettableData1()
    this.gettableData2()
    this.gridData()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.byCus1()
      this.byCus4()
    }, 3000)
  },
  methods: {
    toggleList () {
      let grid = document.getElementsByClassName('gridBox')[0]
      if (this.toggle) {
        grid.style.display = 'none'
      } else {
        grid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    onSubmit (form) {
      this.byCus1()
      this.byCus4()
      this.gridData()
    },
    judgeNegative (n) { // 判断表里的负值
      var tdlist = document.getElementsByClassName('table' + n)[0].getElementsByTagName('td')
      // var tdlist2 = document.getElementsByClassName('table2')[0].getElementsByTagName('td')
      for (var i = 0; i < tdlist.length; i++) {
        // alert(list[i].innerText)
        if (tdlist[i].innerText < 0) {
          tdlist[i].style.color = 'red'
        }
      }
    },
    gettableData1 () {
      let vm = this
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 1
        },
        done (data) {
          vm.tableData1 = data
          vm.tablefirst1 = vm.tableData1[0]
          vm.tableData1.shift()
          vm.newtable1 = vm.tableData1
          vm.$nextTick(() => {
            vm.judgeNegative(1)
          }, 1000)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    gettableData2 () {
      let vm = this
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 2
        },
        done (data) {
          vm.tableData2 = data
          vm.tablefirst2 = vm.tableData2[0]
          vm.tableData2.shift()
          vm.newtable2 = vm.tableData2
          vm.$nextTick(() => {
            // this.judgeNegative()
            vm.judgeNegative(2)
          }, 1000)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getgaugechartData () {
      let vm = this
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 3
        },
        done (data) {
          vm.chartData = data
          let Qname = vm.chartData.Q.name
          let Mname = vm.chartData.M.name
          let Wname = vm.chartData.W.name
          let Qvalue = vm.chartData.Q.value
          let Mvalue = vm.chartData.M.value
          let Wvalue = vm.chartData.W.value
          let gaugeChart1 = echarts.init(vm.$refs.gaugeChart1)
          var option1 = {
            title: {
              text: Qname,
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
                radius: '95%',
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
                    value: Qvalue,
                    name: '季度达成率'
                  }
                ]
              }
            ]
          }
          gaugeChart1.setOption(option1)
          let gaugeChart2 = echarts.init(vm.$refs.gaugeChart2)
          var option2 = {
            title: {
              text: Mname,
              left: 'center',
              bottom: '10%',
              textStyle: {
                fontSize: 13,
                color: '#666'
              }
            },
            tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
            },
            color: ['#37A2DA', '#32C5E9', '#67E0E3'],
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
                radius: '95%',
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
                data: [{value: Mvalue, name: '月度达成率'}]
              }
            ]
          }
          gaugeChart2.setOption(option2)
          let gaugeChart3 = echarts.init(vm.$refs.gaugeChart3)
          var option3 = {
            title: {
              text: Wname,
              left: 'center',
              bottom: '10%',
              textStyle: {
                fontSize: 13,
                color: '#666'
              }
            },
            tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
            },
            color: ['#37A2DA', '#32C5E9', '#67E0E3'],
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
                radius: '95%',
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
                data: [{value: Wvalue, name: '周达成率'}]
              }
            ]
          }
          gaugeChart3.setOption(option3)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    byCus1 () { // by客户细分1
      let vm = this
      let type = 0
      if (vm.form.timepick === '季度') {
        type = 1
      }
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 4,
          type: type,
          dim: '客户细分1'
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].type = 'bar'
            // if (xAxisData.length < 10) {
            //   seriesData[i].barWidth = '30px'
            // }
          }
          var option = {
            title: {
              text: '客户细分1',
              top: 0,
              left: 'center',
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
                magicType: {type: ['line', 'bar']},
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#6CC47C', '#7E6CC4', '#891734', '#178389', '#E895E5'],
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{b}<br/>{a0}: {c0}%<br/>{a1}: {c1}%<br/>{a2}: {c2}%<br/>{a3}: {c3}%'
            },
            legend: {
              data: legendData,
              top: 30
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 0,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                },
                max: 100,
                min: 0
              }
            ],
            series: seriesData
          }
          let barchart = echarts.init(vm.$refs.barchart1)
          barchart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    byCus4 () { // by客户细分4
      let vm = this
      let type = 0
      if (vm.form.timepick === '季度') {
        type = 1
      }
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 4,
          type: type,
          dim: '客户细分4'
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].type = 'bar'
          }
          var option = {
            title: {
              text: '客户细分4',
              top: 0,
              left: 'center',
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
                magicType: {type: ['line', 'bar']},
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#6CC47C', '#7E6CC4', '#891734', '#178389', '#E895E5'],
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{b}<br/>{a0}: {c0}%<br/>{a1}: {c1}%<br/>{a2}: {c2}%<br/>{a3}: {c3}%'
            },
            legend: {
              data: legendData,
              top: 30
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 0,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                },
                max: 100,
                min: 0
              }
            ],
            series: seriesData
          }
          let barchart = echarts.init(vm.$refs.barchart2)
          barchart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    initTabmonth () { // 初始化表格
      let vm = this
      $(vm.$refs.grid1).html('')
      $(vm.$refs.grid1).kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        pageable: {
          // pageSizes: true,
          numeric: true,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
        },
        excel: {
          fileName: '进度监控.xlsx',
          allPages: true
        },
        // pageable: {
        //   pageSize: vm.pageSize,
        //   numeric: true
        // },
        excelExport (e) {
        },
        columns: vm.columnsList1,
        dataSource: {
          data: vm.dataSource,
          pageSize: vm.pageSize
        }
      })
    },
    initTabquarter () { // 初始化表格
      let vm = this
      $(vm.$refs.grid2).html('')
      $(vm.$refs.grid2).kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        pageable: {
          // pageSizes: true,
          numeric: true,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
        },
        excel: {
          fileName: '进度监控.xlsx',
          allPages: true
        },
        // pageable: {
        //   pageSize: vm.pageSize,
        //   numeric: true
        // },
        excelExport (e) {
        },
        columns: vm.columnsList2,
        dataSource: {
          data: vm.dataSource,
          pageSize: vm.pageSize
        }
      })
    },
    gridData () {
      let vm = this
      vm.$ajax({
        url: '/getCaManager',
        data: {
          style: 6
        },
        done (data) {
          let grid1 = document.getElementsByClassName('grid1')[0]
          let grid2 = document.getElementsByClassName('grid2')[0]
          vm.dataSource = [].concat(data)
          if (vm.form.timepick === '月度') {
            vm.initTabmonth()
            grid1.style.display = 'block'
            grid2.style.display = 'none'
          }
          if (vm.form.timepick === '季度') {
            vm.initTabquarter()
            grid1.style.display = 'none'
            grid2.style.display = 'block'
          }
        },
        fail (msg) {
          // alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.so-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      .gauge-box
        width 100%
        height auto
        overflow hidden
        .gaugeChart
          width 33.333%
          height 250px
          float left
      .table
        width 98%
        height 100%
        margin 0 auto 20px
        border-collapse collapse
        tr,td,th
          border 1px solid #ccc
        th
          height 40px
          // padding 0 10px
          background #D9D9D9
          font-weight normal
        tr.bold
          font-weight bold
        td
          height 28px
          width 80px
      .graph-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
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
        .chartBox
          width 100%
          height auto
          margin 10px auto
          overflow hidden
        .barchart1
          width 35%
          height 400px
          float left
        .barchart2
          width 65%
          height 400px
          float left
</style>
