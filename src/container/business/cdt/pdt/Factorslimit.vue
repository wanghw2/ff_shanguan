<template>
  <div class="pdtbox">
    <div class="block">
      <div class='echars' ref='drawChart1'></div>
      <div class='echars' ref='drawChart2'></div>
      <div class='echars' ref='drawChart3'></div>
      <div class='echars' ref='drawChart4'></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle: false
    }
  },
  components: {
  },
  mounted () {
    this.drawChart1()
    this.drawChart2()
    this.drawChart3()
    this.drawChart4()
  },
  methods: {
    drawChart1 () {
      let vepieChart = echarts.init(this.$refs.drawChart1)
      vepieChart.setOption({
        title: {
          text: '男性女性身高体重分布'
        },
        tooltip: {
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return params.seriesName + ' :<br/>' + params.value[0] + '台 ' + params.value[1] + '% '
            } else {
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + '% '
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
        legend: {
          data: ['女性']
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            min: 140,
            axisLabel: {
              formatter: '{value} cm'
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
            min: 40,
            axisLabel: {
              formatter: '{value} kg'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '女性',
            type: 'scatter',
            data: [
              [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
              [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
              [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
              [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
              [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
              [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
              [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
              [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
              [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
              [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
              [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'solid'
                }
              },
              data: [
                {xAxis: 160},
                {yAxis: 70}
              ]
            }
          }
        ]
      })
    },
    drawChart2 () {
      let vepieChart = echarts.init(this.$refs.drawChart2)
      vepieChart.setOption({
        title: {
          text: '男性女性身高体重分布'
        },
        tooltip: {
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return params.seriesName + ' :<br/>' + params.value[0] + '台 ' + params.value[1] + '% '
            } else {
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + '% '
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
        legend: {
          data: ['女性']
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            min: 140,
            axisLabel: {
              formatter: '{value} cm'
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
            min: 40,
            axisLabel: {
              formatter: '{value} kg'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '女性',
            type: 'scatter',
            data: [
              [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
              [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
              [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
              [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
              [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
              [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
              [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
              [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
              [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
              [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
              [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'solid'
                }
              },
              data: [
                {xAxis: 160},
                {yAxis: 70}
              ]
            }
          }
        ]
      })
    },
    drawChart3 () {
      let vepieChart = echarts.init(this.$refs.drawChart3)
      vepieChart.setOption({
        title: {
          text: '男性女性身高体重分布'
        },
        tooltip: {
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return params.seriesName + ' :<br/>' + params.value[0] + '台 ' + params.value[1] + '% '
            } else {
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + '% '
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
        legend: {
          data: ['女性']
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            min: 140,
            axisLabel: {
              formatter: '{value} cm'
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
            min: 40,
            axisLabel: {
              formatter: '{value} kg'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '女性',
            type: 'scatter',
            data: [
              [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
              [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
              [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
              [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
              [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
              [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
              [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
              [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
              [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
              [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
              [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'solid'
                }
              },
              data: [
                {xAxis: 160},
                {yAxis: 70}
              ]
            }
          }
        ]
      })
    },
    drawChart4 () {
      let vepieChart = echarts.init(this.$refs.drawChart4)
      vepieChart.setOption({
        title: {
          text: '男性女性身高体重分布'
        },
        tooltip: {
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return params.seriesName + ' :<br/>' + params.value[0] + '台 ' + params.value[1] + '% '
            } else {
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + '% '
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
        legend: {
          data: ['女性']
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            min: 140,
            axisLabel: {
              formatter: '{value} cm'
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
            min: 40,
            axisLabel: {
              formatter: '{value} kg'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '女性',
            type: 'scatter',
            data: [
              [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
              [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
              [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
              [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
              [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
              [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
              [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
              [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
              [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
              [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
              [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'solid'
                }
              },
              data: [
                {xAxis: 160},
                {yAxis: 70}
              ]
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtbox
  width 100%
  padding 10px
  .block
    width 100%
    margin 10px 0px
    height auto
    overflow hidden
    h2
      width 96%
      margin 0 2%
      height 38px
      line-height 38px
      font-weight normal
      box-shadow: 0 2px 8px #ccc
      font-size 14px
      padding 0 20px
      margin-bottom 5px
      background #fff
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
        background #fdbc40
        font-size 12px
        box-sizing border-box
        &:hover
          background #ff9933
    .echars
      width 50%
      height 400px
      float left
      margin 10px 0
</style>
