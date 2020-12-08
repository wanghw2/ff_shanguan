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
            <th>产品类型</th>
            <th>客户细分1</th>
            <th>Q Fin Tar</th>
            <th>Q 累计来单</th>
            <th>Q 累计确认</th>
            <th>Q 累计CA</th>
            <th>Q Cover</th>
            <th>本周四节奏</th>
            <th>本周四CA目标</th>
            <th>本周GAP</th>
            <th>下周四节奏</th>
            <th>下周四CA目标</th>
            <th>下周GAP</th>
          </tr>
          <tr align="center" class="bold">
            <td rowspan="5">CONDT</td>
            <td>TTL</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-341</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>直营</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-51</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-41</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>RKA</td>
            <td>1</td>
            <td>1</td>
            <td>-51</td>
            <td>-4</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>线上</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-23</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>传统</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-43</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>-8</td>
          </tr>
        </table>
        <table class="table table2" border="1">
          <tr align="center">
            <th>产品类型</th>
            <th>客户细分1</th>
            <th>Mar.目标</th>
            <th>CAOL</th>
            <th>已确认</th>
            <th>已资审</th>
            <th>本月CA</th>
            <th>未资未发</th>
            <th>未资</th>
            <th>未发</th>
            <th>月Cover</th>
            <th>来单Gap(对比目标)</th>
            <th>确认Gap(对比目标)</th>
            <th>来单Gap(对比CAOL)</th>
            <th>确认Gap(对比CAOL)</th>
          </tr>
          <tr align="center" class="bold">
            <td rowspan="5">CONDT</td>
            <td>TTL</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>直营</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>RKA</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>线上</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr align="center">
            <td>传统</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </table>
        <div class="graph-box">
          <div class="multidimensional" ref="multidimensional"></div>
        </div>
      </div>
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
  components: {
    // Upload,
    // VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.gaugeChart1()
      this.gaugeChart2()
      this.gaugeChart3()
      this.multidimensional()
      this.judgeNegative()
    }, 3000)
  },
  methods: {
    judgeNegative () { // 判断表里的负值
      var tdlist1 = document.getElementsByClassName('table1')[0].getElementsByTagName('td')
      var tdlist2 = document.getElementsByClassName('table2')[0].getElementsByTagName('td')
      for (var i = 0; i < tdlist1.length; i++) {
        // alert(list[i].innerText)
        if (tdlist1[i].innerText < 0) {
          tdlist1[i].style.color = 'red'
        }
      }
      for (var j = 0; j < tdlist2.length; j++) {
        // alert(list[i].innerText)
        if (tdlist2[j].innerText < 0) {
          tdlist2[j].style.color = 'red'
        }
      }
    },
    gaugeChart1 () {
      let gaugeChart = echarts.init(this.$refs.gaugeChart1)
      var option = {
        // title: {
        //   text: '季度',
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
              // fontStyle: 'italic',
              offsetCenter: [0, '80%']
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
                value: 23,
                name: '季度达成率'
              }
            ]
          }
        ]
      }
      gaugeChart.setOption(option)
    },
    gaugeChart2 () {
      let gaugeChart = echarts.init(this.$refs.gaugeChart2)
      var option = {
        // title: {
        //   text: '月',
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
              // fontStyle: 'italic',
              offsetCenter: [0, '80%']
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
            data: [{value: 60, name: '月度达成率'}]
          }
        ]
      }
      gaugeChart.setOption(option)
    },
    gaugeChart3 () {
      let gaugeChart = echarts.init(this.$refs.gaugeChart3)
      var option = {
        // title: {
        //   text: '周',
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
              // fontStyle: 'italic',
              offsetCenter: [0, '80%']
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
            data: [{value: 90, name: '周达成率'}]
          }
        ]
      }
      gaugeChart.setOption(option)
    },
    multidimensional () {
      let multidimensional = echarts.init(this.$refs.multidimensional)
      var placeHoledStyle = {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      }
      var dataStyle = {
        normal: {
          label: {
            show: true,
            position: 'insideLeft',
            formatter: '{c}%'
          }
        }
      }
      var option = {
        title: {
          text: '进度监控（by 客户细分）',
          top: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
        },
        legend: {
          data: ['发货过账进度', '确认进度', '有效来单进度', '有效订单进度']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        grid: {
          y: 80,
          y2: 30
        },
        xAxis: [
          {
            type: 'value',
            position: 'top',
            splitLine: {show: false},
            axisLabel: {show: false}
          }
        ],
        yAxis: [
          {
            type: 'category',
            splitLine: {show: false},
            data: ['传统', 'RKA', '线上', '直营', 'TTl']
          }
        ],
        series: [
          {
            name: '发货过账进度',
            type: 'bar',
            stack: '总量',
            itemStyle: dataStyle,
            data: [38, 50, 33, 72, 66]
          },
          {
            name: '发货过账进度',
            type: 'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data: [62, 50, 67, 28, 34]
          },
          {
            name: '有效来单进度',
            type: 'bar',
            stack: '总量',
            itemStyle: dataStyle,
            data: [61, 41, 42, 30, 27]
          },
          {
            name: '有效来单进度',
            type: 'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data: [39, 59, 58, 70, 73]
          },
          {
            name: '有效订单进度',
            type: 'bar',
            stack: '总量',
            itemStyle: dataStyle,
            data: [37, 35, 44, 60, 45]
          },
          {
            name: '有效订单进度',
            type: 'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data: [63, 65, 56, 40, 55]
          },
          {
            name: '确认进度',
            type: 'bar',
            stack: '总量',
            itemStyle: dataStyle,
            data: [71, 50, 31, 39, 67]
          },
          {
            name: '确认进度',
            type: 'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data: [29, 50, 69, 61, 33]
          }
        ]
      }
      multidimensional.setOption(option)
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
      .table
        width 98%
        height 100%
        margin 0 auto 20px
        border-collapse collapse
        tr,td,th
          border 1px solid #ccc
        th
          height 40px
          padding 0 10px
          background #D9D9D9
          font-weight normal
        tr.bold
          font-weight bold
        td
          height 28px
      .graph-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .multidimensional
          width 90%
          height 400px
          margin 0 auto
</style>
