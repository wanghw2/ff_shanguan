<template>
<div class="reg">
  <div class="block">
    <h2>ConNB_CDC库存监控
      <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid">
      <v-table
        :sheetsName="'ConNB_CDC库存监控'"
        :tableName="'ConNB_FGI_Tracking'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'ConNB_CDC库存监控'"
        ref="gridcdc">
      </v-table>
    </div>
    <div class="stack" ref="stack"></div>
    <div class="stack" ref="stack1"></div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      toggle: true
    }
  },
  components: {
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
      this.drawStack1()
      this.toggleList()
    }, 300)
  },
  methods: {
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    drawStack () {
      let cdcstackchart = echarts.init(this.$refs.stack)
      cdcstackchart.setOption({
        title: {
          text: 'CDC库存监控',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
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
          left: 100,
          bottom: '13%',
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['FGI Target', 'FGI Outlook']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: true},
            axisLabel: {
              interval: 0,
              rotate: 75,
              margin: 2
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'FGI Target',
            type: 'bar',
            stack: 'a',
            barWidth: '35px',
            markLine: {
              data: [
                {name: 'FGI Target', type: 'max'}
              ]
            },
            data: [157, 104, 39, 570, 117, 114, 609]
          },
          {
            name: 'FGI Outlook',
            type: 'bar',
            stack: 'a',
            markLine: {
              data: [
                {name: 'FGI Outlook', type: 'max'}
              ]
            },
            data: [157, 104, 609, 870, 157, 104, 609]
          }
        ]
      })
    },
    drawStack1 () {
      let cdcstackchart = echarts.init(this.$refs.stack1)
      cdcstackchart.setOption({
        title: {
          text: 'CDC库存细分监控',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
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
          left: 100,
          bottom: '13%',
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['天猫菜鸟', 'BTC', 'S121_0901', 'S121_0903', '5120_F001']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            axisLabel: {
              interval: 0,
              rotate: 75,
              margin: 2
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            // data: ['黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '天猫菜鸟',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 870, 157, 104, 609]
          },
          {
            name: 'BTC',
            type: 'bar',
            stack: 'a',
            barWidth: '30%',
            data: [157, 104, 609, 157, 104, 609, 870]
          },
          {
            name: 'S121_0901',
            type: 'bar',
            barWidth: '30%',
            stack: 'b',
            data: [610, 510, 310, 710, 710, 710, 710]
          },
          {
            name: 'S121_0903',
            type: 'bar',
            stack: 'b',
            data: [130, 230, 160, 140, 120, 110, 180]
          },
          {
            name: '5120_F001',
            type: 'bar',
            stack: 'b',
            data: [100, 110, 510, 330, 910, 1010, 510]
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .block
    width 100%
    height 100%
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
    .stack
      width 95%
      height 400px
      margin 10px auto
</style>
