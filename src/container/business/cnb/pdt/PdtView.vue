<template>
  <div class="pdtView-box">
    <div class="content">
      <div class="block">
        <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
          <el-form-item label="Version" prop="version" >
            <el-select v-model="form.version" size="mini" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in versions"
                :key="index"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="业务线" prop="buisinesline">
            <el-select v-model="form.buisinesline" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in buisineslines"
                :key="index"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户" prop="customer">
            <el-select v-model="form.customer" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in customers"
                :key="index"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
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
          <el-form-item label="Key Parts" prop="keyPart">
            <el-select v-model="form.keyPart" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in keyParts"
                :key="index"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left:30px">
            <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
            <el-button @click="resetForm('form')" size="mini" >重置</el-button>
          </el-form-item>
        </el-form>
        <h2>备货总览
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid grid1" ref="grid1"></div>
        <div class="readyview" ref="readyview"></div>
        <h2>投产总览
          <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid grid2" ref="grid2"></div>
        <div class="pdtview" ref="pdtview"></div>
        <h2>PO cadence
          <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid grid3" ref="grid3"></div>
        <div class="drawBarLine" ref="drawBarLine"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      toggle: true,
      toggle1: true,
      toggle2: true,
      form: {
        version: '',
        buisinesline: [],
        odm: [],
        family: [],
        keyPart: [],
        customer: []
      },
      versions: [],
      buisineslines: [],
      odms: [],
      familys: [],
      keyParts: [],
      customers: [],
      datasourceready: [],
      datasourcepdt: [],
      columnsready: [],
      columnspdt: [],
      columnspo: [],
      datasourcepo: []
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.toggleList2()
      this.readyChart()
      this.pdtChart()
      this.readyGrid()
      this.pdtGrid()
      this.drawBarGrid()
      this.drawBarLine()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('grid1')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('grid2')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('grid3')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    readyChart () {
      var option = {
        title: {
          text: '',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Target', '备货量', '上限', '供应']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        xAxis: {
          type: 'category',
          data: ['传统通路', '线上', 'RKA', '直营']
        },
        series: [
          {
            name: 'Target',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [123, 69, 34, 12]
          },
          {
            name: '备货量',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [15, 24, 54, 89]
          },
          {
            name: '上限',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [45, 64, 24, 46]
          },
          {
            name: '供应',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [25, 34, 34, 46]
          }
        ]
      }
      let readyview = echarts.init(this.$refs.readyview)
      readyview.setOption(option)
    },
    pdtChart () {
      var option = {
        title: {
          text: '',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['ship', 'wip', 'open']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五']
        },
        series: [
          {
            name: 'ship',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [123, 69, 34, 78, 89]
          },
          {
            name: 'wip',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [15, 24, 54, 98, 56]
          },
          {
            name: 'open',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [45, 64, 24, 45, 78]
          }
        ]
      }
      let pdtview = echarts.init(this.$refs.pdtview)
      pdtview.setOption(option)
    },
    readyGrid () {
      $(this.$refs.grid1).kendoGrid({
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
          fileName: '监控.xlsx',
          allPages: true
        },
        // pageable: {
        //   pageSize: vm.pageSize,
        //   numeric: true
        // },
        // excelExport (e) {
        //   e.workbook.sheets[0].name = vm.sheetsName
        // },
        columns: this.columnsready,
        dataSource: {
          data: this.datasourceready,
          pageSize: this.pageSize
        }
      })
    },
    pdtGrid () {
      $(this.$refs.grid2).kendoGrid({
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
          fileName: '监控.xlsx',
          allPages: true
        },
        // pageable: {
        //   pageSize: vm.pageSize,
        //   numeric: true
        // },
        // excelExport (e) {
        //   e.workbook.sheets[0].name = vm.sheetsName
        // },
        columns: this.columnspdt,
        dataSource: {
          data: this.datasourcepdt,
          pageSize: this.pageSize
        }
      })
    },
    drawBarGrid () {
      $(this.$refs.grid3).kendoGrid({
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
          fileName: '监控.xlsx',
          allPages: true
        },
        // pageable: {
        //   pageSize: vm.pageSize,
        //   numeric: true
        // },
        // excelExport (e) {
        //   e.workbook.sheets[0].name = vm.sheetsName
        // },
        columns: this.columnspo,
        dataSource: {
          data: this.datasourcepo,
          pageSize: this.pageSize
        }
      })
    },
    drawBarLine () {
      var yearCount = 8
      var categoryCount = 6
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var customData = []
      var legendData = ['Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = []
      legendData.unshift('trend')
      var encodeY = []
      for (var i = 0; i < yearCount; i++) {
        dataList.push([])
        encodeY.push(1 + i)
      }
      // dataList = [
      //   [299.81, 933.37, 4.24, 85.86, 497.88, 594.64, 300.12, 660.33, 904.56],
      //   [296.81, 864.72, 0, 122.97, 434.3, 621.95, 333.96, 659.2, 952.43],
      //   [209.83, 807.12, 0, 117.63, 358.33, 675.81, 271.1, 693.99, 871.22],
      //   [255.89, 878.9, 7.96, 215.83, 404.03, 666.54, 249.79, 762.27, 792.4],
      //   [340.73, 909.36, 0, 140.98, 398.27, 570.1, 196.84, 817.14, 891.92],
      //   [419.22, 1065.39, 107.13, 232.46, 345.67, 697.64, 390.74, 842.39, 996.2]]
      for (let i = 0; i < categoryCount; i++) {
        var val = Math.random() * 1000
        var customVal = [i]
        customData.push(customVal)
        // var data = dataList[0]
        for (var j = 0; j < dataList.length; j++) {
          var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          dataList[j].push(value)
          // var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          customVal.push(value)
        }
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
            point[1] -= 20
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
        title: {
          text: '预测版本变化滚动图表',
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
        legend: {
          data: legendData,
          left: '20%',
          right: '16%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          type: 'custom',
          name: 'trend',
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
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine)
      drawBarLine.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtView-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
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
        margin-bottom 5px
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
      .grid
        width 100%
        height auto
        margin 10px 0
        box-shadow 0 2px 8px #ccc
      .readyview, .pdtview, .drawBarLine
        width 100%
        height 400px
        margin 10px auto
</style>

