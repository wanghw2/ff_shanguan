<template>
<div class="ons">
  <div class="ons-wrap">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="fcstItem">
        <div class="block">
          <h2>ConNB ONS
            <div class="form-box">
              <upload
                :sheetsName="'ConNB_ONS'"
                @on-success="cnbTargetFun"
                @updateTimeChange="cnbTargetFun1"
                :logTableName="'ConNB_ONS'"
                :logObj="'cnbtarget'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_ONS'"
              :tableName="'ConNB_ONS'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_ONS'"
              ref="cnbtarget">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="fcstItem">
        <div class="block">
          <div class="sunChart" ref="sunChart" style="width:1100px;height:500px;margin: 10px auto;"></div>
          <div class="onsFamilyChart" ref="onsFamilyChart" style="width:1200px;height:400px;margin: 10px auto;"></div>
          <div class="onsODMChart" ref="onsODMChart" style="width:1200px;height:400px;margin: 10px auto;"></div>
          <div class="drawBarLine" ref="drawBarLine" style="width:1200px;height:400px;margin: 10px auto;"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['ONS上传', 'ONS分析']
    }
  },
  components: {
    VTable,
    Upload
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.onsFamilyChart()
      this.onsODMChart()
      this.drawBarLine()
      this.sunChart()
    }, 300)
  },
  methods: {
    sunChart () {
      let vm = this
      vm.$ajax({
        url: '/getONSAnalysis ',
        data: {
          style: 1
        },
        done (data) {
          let seriesData = data.series
          var option = {
            title: {
              text: '缺料原因分析',
              textStyle: {
                fontSize: 14,
                align: 'center'
              }
            },
            series: {
              type: 'sunburst',
              highlightPolicy: 'ancestor',
              data: seriesData,
              radius: [0, '95%'],
              sort: null,
              levels: [
                {},
                {
                  r0: '15%',
                  r: '35%',
                  itemStyle: {
                    borderWidth: 2
                  },
                  label: {
                    rotate: 'tangential'
                  }
                }, {
                  r0: '35%',
                  r: '70%',
                  label: {
                    align: 'right'
                  }
                }, {
                  r0: '70%',
                  r: '72%',
                  label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                  },
                  itemStyle: {
                    borderWidth: 3
                  }
                }
              ]
            }
          }
          let sunChart = echarts.init(vm.$refs.sunChart)
          sunChart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    onsFamilyChart () {
      let vm = this
      vm.$ajax({
        url: '/getONSAnalysis ',
        data: {
          style: 2
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            if (xAxisData.length < 12) {
              seriesData[i].barWidth = '30px'
            }
          }
          let onsFamilyChart = echarts.init(vm.$refs.onsFamilyChart)
          var option = {
            title: {
              text: 'ONS后续到货（Family)',
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
            legend: {
              data: legendData,
              left: '25%',
              right: '30%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
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
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: seriesData
          }
          onsFamilyChart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    onsODMChart () {
      let vm = this
      vm.$ajax({
        url: '/getONSAnalysis ',
        data: {
          style: 3
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            if (xAxisData.length < 12) {
              seriesData[i].barWidth = '30px'
            }
          }
          let onsODMChart = echarts.init(vm.$refs.onsODMChart)
          var option = {
            title: {
              text: 'ONS后续到货（ODM)',
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
            legend: {
              data: legendData,
              left: '25%',
              right: '30%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 15,
                  margin: 2
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: seriesData
          }
          onsODMChart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    drawBarLine () {
      let vm = this
      vm.$ajax({
        url: '/getONSAnalysis ',
        data: {
          style: 4
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          var option = {
            title: {
              text: '节点监控',
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
            grid: {
              left: '3%',
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legendData,
              left: 100
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
                rotate: 20,
                margin: 8
              }
            },
            yAxis: {},
            series: seriesData
          }
          let drawBarLine = echarts.init(vm.$refs.drawBarLine)
          drawBarLine.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    cnbTargetFun () { // 上传后自动刷新表格数据
      this.$refs.cnbtarget.updateTabFun()
    },
    cnbTargetFun1 () { // 上传后自动刷新表格数据
      this.$refs.cnbtarget.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ons
  width 100%
  height 100%
  padding 10px
  .ons-wrap
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
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        padding 0 20px
        margin-bottom 5px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
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
