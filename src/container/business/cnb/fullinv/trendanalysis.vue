<template>
<div class="fullinv-box">
  <div class="block">
    <h2>补货趋势分析
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="barbox" style="width:100%">
      <div ref="drawBarLine1" style="width:1200px;height:400px;overflow:hidden;margin:10px auto"></div>
      <div ref="drawBarLine2" style="width:1200px;height:400px;overflow:hidden;margin:10px auto"></div>
    </div>
    <h2>补货DOI建议
      <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
    </h2>
    <div class="doiChart" ref="doiChart" style="width:90%;height: 400px;overflow:hidden;margin:10px auto"></div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import FormPublic from '@/components/public/formPublic1'
import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
export default {
  data () {
    return {
      toggle1: false,
      toggle2: true
    }
  },
  components: {
    FormPublic,
    VTable,
    VTableQuery
  },
  mounted () {
    this.$nextTick(() => {
      this.doiChart()
      this.toggleList1()
      this.toggleList2()
      this.drawBarLine1()
      this.drawBarLine2()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('barbox')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('doiChart')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    doiChart () {
      var option = {
        title: {
          text: '补货DOI建议',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        toolbox: {
          show: true,
          feature: {
            // dataZoom: {
            //   yAxisIndex: 'none'
            // },
            dataView: {readOnly: false},
            // magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ['未清PO DOI', '非SEC DOI', 'SEC DOI', 'CDC DOI', '最低补货DOI', '最高补货DOI', '修正补货DOI'],
          left: '20%',
          right: '30%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['family1', 'family2', 'family3']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '未清PO DOI',
            type: 'bar',
            stack: '广告',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [320, 332, 301]
          },
          {
            name: '非SEC DOI',
            type: 'bar',
            stack: '广告',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [120, 132, 101]
          },
          {
            name: 'SEC DOI',
            type: 'bar',
            stack: '广告',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [220, 182, 191]
          },
          {
            name: 'CDC DOI',
            type: 'bar',
            stack: '广告',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [150, 232, 410]
          },
          {
            name: '最低补货DOI',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [862, 1018, 964]
            // markLine: {
            //   lineStyle: {
            //     normal: {
            //       type: 'dashed'
            //     }
            //   },
            //   data: [
            //     [{type: 'min'}, {type: 'max'}]
            //   ]
            // }
          },
          {
            name: '最高补货DOI',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [620, 732, 701]
          },
          {
            name: '修正补货DOI',
            type: 'bar',
            data: [120, 132, 220]
          }
        ]
      }
      let doiChart = echarts.init(this.$refs.doiChart)
      doiChart.setOption(option)
    },
    drawBarLine1 () {
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
          top: 0,
          left: 'left',
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
          right: '6%'
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
      let drawBarLine = echarts.init(this.$refs.drawBarLine1)
      drawBarLine.setOption(option)
    },
    drawBarLine2 () {
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
          top: 0,
          left: 'left',
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
          right: '6%'
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
      let drawBarLine = echarts.init(this.$refs.drawBarLine2)
      drawBarLine.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fullinv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
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
      margin-bottom 5px
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
    .addgrid
      width 100%
      min-height 10px
      overflow hidden
      margin-bottom 10px
</style>
