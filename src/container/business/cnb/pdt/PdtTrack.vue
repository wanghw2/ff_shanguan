<template>
  <div class="allpipo">
    <div class="content">
      <div class="block">
        <h2>备货进度表</h2>
        <div class="addgrid">
          <v-table :sheetsName="'ConNB_备货进度'"
                   :tableName="'ConNB_Replenishment_Report'"
                   :source="'FF_IDSS_Data_CON'"
                   :fileName="'ConNB_备货进度'"
                   ref="griddisplay">
          </v-table>
        </div>
        <div class="barDaily"
             ref="barDaily"></div>
        <div class="barrequire"
             ref="barrequire"></div>
        <el-form :inline="true"
                 :model="form1"
                 ref="form1"
                 label-width="80px"
                 class="demo-form-inline">
          <el-form-item label="时间维度"
                        prop="time">
            <el-select v-model="form1.time"
                       size="mini"
                       filterable
                       collapse-tags
                       placeholder="请选择">
              <el-option v-for="(item, index) in times"
                         :key="index"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left:30px">
            <el-button type="primary"
                       size="mini"
                       @click="onSubmit(form1)">查询</el-button>
            <el-button @click="resetForm('form1')"
                       size="mini">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="drawBarLine"
             ref="drawBarLine"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
export default {
  data () {
    return {
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
      form1: {
        time: []
      },
      times: []
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.barDaily()
      this.barrequire()
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
    barDaily () {
      let barDaily = echarts.init(this.$refs.barDaily)
      var option = {
        title: {
          text: '本月备货进度',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        legend: {
          data: ['Backlog', '新增']
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        xAxis: {
          type: 'category',
          data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
        },
        grid: {
          bottom: '15%'
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
            dataView: { readOnly: false },
            // magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Backlog',
          data: [120, 200, 150, 80, 90, 66, 155],
          type: 'bar',
          barWidth: '35px',
          stack: '趋势'
        }, {
          name: '新增',
          data: [30, 210, 50, 90, 89, 123, 231],
          type: 'bar',
          stack: '趋势'
        }, {
          name: '趋势',
          data: [180, 440, 230, 200, 199, 219, 416],
          type: 'line'
        }]
      }
      barDaily.setOption(option)
    },
    barrequire () {
      let barrequire = echarts.init(this.$refs.barrequire)
      var option = {
        title: {
          text: '备货 VS 累计订单',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        legend: {
          data: ['需求', 'RSD', '供应', '供应1'],
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['family1', 'family2', 'family3', 'family4', 'family5'],
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
        },
        grid: {
          bottom: '15%'
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        toolbox: {
          show: true,
          feature: {
            // dataZoom: {
            //   yAxisIndex: 'none'
            // },
            dataView: { readOnly: false },
            // magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
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
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '需求',
          data: [120, 200, 150, 80, 89],
          type: 'bar',
          stack: 'sd',
          barWidth: '35px',
          barGap: 0
        }, {
          name: 'RSD',
          data: [30, 210, 50, 90, 67],
          type: 'bar',
          stack: 'sd',
          barGap: 0
        }, {
          name: '供应',
          data: [130, 110, 210, 180, 84],
          type: 'bar',
          stack: 'ad',
          barWidth: '35px',
          barGap: 0
        }, {
          name: '供应1',
          data: [230, 130, 160, 100, 184],
          type: 'bar',
          stack: 'ad',
          barGap: 0
        }]
      }
      barrequire.setOption(option)
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
          text: '历史备货节奏',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
          right: 'center'
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
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
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
.allpipo
  width 100%
  height 100%
  padding 0.125rem
  overflow hidden
  .content
    width 100%
    height 100%
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
        height 0.475rem
        line-height 0.475rem
        font-weight normal
        box-shadow 0 0.025rem 0.1rem #ccc
        font-size 0.175rem
        padding-left 0.25rem
        margin-bottom 0.0625rem
        background #fafafa
        padding 0 0.25rem
        .form-box
          min-width 1rem
          height auto
          float right
      .addgrid
        width 100%
        min-height 0.125rem
        overflow hidden
        margin-bottom 0.125rem
      .barDaily, .barrequire
        width 100%
        height 5rem
        margin 0.125rem auto
      .drawBarLine
        width 100%
        height 5rem
        margin 0.125rem auto
      .warning-box
        width 13.75rem
        height auto
        overflow hidden
        margin 0.125rem auto
        padding 0.0625rem 0.125rem
        background #eee
        border-radius 0.1rem
        h3
          width 100%
          height 0.4375rem
          line-height 0.4375rem
          font-size 0.2rem
          text-align left
        ul
          width 100%
          height auto
          li
            height 0.35rem
            line-height 0.35rem
            span
              display inline-block
              width 0.25rem
              height 0.35rem
              line-height 0.35rem
</style>
