<template>
  <div class="fullinv-box">
    <div class="vary-box">
      <div class="varytable">
        <div class="table-box">
          <el-table
            :data="tableArr"
            :header-row-style="headerRowStyle"
            :row-style="tableRowStyle"
            border
            stripe
            height="400"
            style="width: 100%"
            :default-sort = "{prop: 'M3 Rolling Gap', order: 'ascending'}" >
            <el-table-column
              prop="产品细分"
              label="产品细分"
              align="center"
              sortable
              width="75" >
            </el-table-column>
            <el-table-column
              prop="Family"
              label="Family"
              align="center"
              sortable>
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.Family}}</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="M1 Gap"
              :label= "'M1 Gap'"
              align="center"
              sortable
              width="75">
            </el-table-column>
            <el-table-column
              prop="M2 Gap"
              :label= "'M2 Gap'"
              align="center"
              sortable
              width="75">
            </el-table-column>
            <el-table-column
              prop="M3 Gap"
              :label= "'M3 Gap'"
              align="center"
              sortable
              width="75">
            </el-table-column>
            <el-table-column
              prop="M3 Rolling Gap"
              label= "Rolling Gap"
              align="center"
              sortable
              width="100">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="drawBarLine" ref="drawBarLine"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawBarLine()
    }, 300)
  },
  methods: {
    drawBarLine () {
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var legendData = ['Step Start', 'Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = [
        [289.55, 937.96, 843.28, 545.3, 248.23, 98.33],
        [224.32, 974.27, 776.84, 571.35, 240.85, 116.08],
        [148.52, 1018.55, 721.58, 502.15, 253, 35.57],
        [78.47, 956.85, 695.53, 414.25, 315.16, 105.36],
        [134.91, 1021.79, 696.95, 358.12, 327.18, 80.36],
        [139.11, 1067.04, 736.44, 436.93, 424.98, 151.84],
        [182.64, 1079.56, 833.6, 534.93, 506.1, 80.01],
        [247.28, 1026.75, 924.68, 586.65, 465.35, 137.05]
      ]
      var option = {
        // title: {
        //   text: '预测版本变化滚动图表',
        //   top: 0,
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
          name: 'Step Start',
          type: 'line',
          step: 'middle',
          data: [12, 200, 300, 1000, 50, 500]
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
.fullinv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
  .vary-box
    width 100%
    height auto 
    overflow hidden
    .varytable
      width 48%
      height 400px
      float left
    .drawBarLine
      width 48%
      height 400px
      float right
</style>
