<template>
  <div class="optview">
    <div class="block">
      <h2>选件总览预警
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
      </h2>
      <div class="sn">
        <message-box></message-box>
      </div>
    </div>
    <div class='vepie' ref='vepie'></div>
    <div class='histogram' ref='histogram'></div>
    <div class='vebar' ref='vebar'></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import messageBox from '@/components/public/messageBox'
export default {
  data () {
    return {
      toggle: false
    }
  },
  components: {
    messageBox
  },
  mounted () {
    this.drawvepieChart()
    this.drawHistogramChart()
    this.drawVebarChart()
  },
  methods: {
    toggleList () {
      let sn = document.getElementsByClassName('sn')[0]
      if (this.toggle) {
        sn.style.display = 'none'
      } else {
        sn.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    drawvepieChart () {
      let vepieChart = echarts.init(this.$refs.vepie)
      vepieChart.setOption({
        title: {
          text: '零售产品',
          subtext: 'Customer order: 95254',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['Inv', 'CA', 'TO GO', 'ONS']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              {value: 34897, name: 'Inv'},
              {value: 24980, name: 'CA'},
              {value: 30029, name: 'TO GO'},
              {value: 5348, name: 'ONS'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawHistogramChart () {
      let histogramChart = echarts.init(this.$refs.histogram)
      histogramChart.setOption({
        title: {
          text: '捆绑显示器',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: 100
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['Box fin tar', 'Dmd', 'Sup', 'Delta']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['Jan', 'Feb', 'Mar', 'Q4']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Box fin tar',
            type: 'bar',
            barGap: 0,
            data: [15700, 10400, 60900, 87000]
          },
          {
            name: 'Dmd',
            type: 'bar',
            data: [25000, 35000, 70000, 130000]
          },
          {
            name: 'Sup',
            type: 'bar',
            data: [34092, 30564, 67992, 132648]
          },
          {
            name: 'Delta',
            type: 'bar',
            data: [9092, -4436, -2008, 2648]
          }
        ]
      })
    },
    drawVebarChart () {
      let vebarChart = echarts.init(this.$refs.vebar)
      vebarChart.setOption({
        title: {
          text: 'Thinkpad硬捆绑产品',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          bottom: 10,
          data: ['NB FCST', 'Bundle FCST', 'Demand', 'CA', 'INV', 'Call', 'to go supply']
        },
        grid: {
          bottom: 100,
          left: 100
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['包', '鼠标', '转接线']
        },
        series: [
          {
            name: 'NB FCST',
            type: 'bar',
            data: [40, 40, 3.5]
          },
          {
            name: 'Bundle FCST',
            type: 'bar',
            data: [40, 40, 3.5]
          },
          {
            name: 'Demand',
            type: 'bar',
            data: [2.44, 1.5, 1.5]
          },
          {
            name: 'CA',
            type: 'bar',
            stack: 'two',
            data: [1.88, 1.5, 1.5]
          },
          {
            name: 'INV',
            type: 'bar',
            stack: 'two',
            data: [0.56, 0, 0]
          },
          {
            name: 'Call',
            type: 'bar',
            stack: 'two',
            data: [7.648, 21.444, 2.103]
          },
          {
            name: 'to go supply',
            type: 'bar',
            stack: 'two',
            data: [0, 0, 0]
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.optview
  width 100%
  padding 10px
.vepie, .histogram, .vebar
  margin-left 1%
  float left
  width 32%
  height 380px
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
  .sn
    width 96%
    margin 0 2%
    padding 5px
    min-height 40px
    height auto
    display none
    overflow hidden
    background #fff
</style>







