<template>
<div class="reg">
  <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
    <el-form-item label="业务线" prop="business">
      <el-select v-model="form.business" @visible-change="getQueryCpu2" size="mini" filterable collapse-tags placeholder="请选择">
        <el-option
          v-for="(item, index) in business"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" size="mini" @click="submitForm()">查询</el-button>
      <el-button size="mini" @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
  <div class="chartsbox">
    <div class="stack" ref="stack"></div>
    <div class="stack" ref="stack1"></div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      form: {
        business: ''
      },
      business: ['ConNB', 'ConDT', 'TTL']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
      this.drawStack1()
    }, 300)
  },
  methods: {
    drawStack () {
      let histogramChart = echarts.init(this.$refs.stack)
      histogramChart.setOption({
        title: {
          text: 'SI达成情况',
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
          data: ['达成率', '有效订单百分比']
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
        color: ['#DCE6F2', '#F79646', '#DCE6F2', '#F79646'],
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
            data: ['黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '达成率',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 870, 157, 104, 609, 870, 157, 104, 609, 870]
          },
          {
            name: '有效订单百分比',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 870, 157, 104, 609, 870, 157, 104, 609, 870]
          },
          {
            name: '全国预计达成',
            type: 'bar',
            barWidth: 0.1,
            data: [710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710],
            markLine: {
              data: [
                {type: 'average'}
              ]
            }
          },
          {
            name: '全国当前达成',
            type: 'bar',
            barWidth: 0.1,
            data: [1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010],
            markLine: {
              data: [
                {type: 'average'}
              ]
            }
          }
        ]
      })
    },
    drawStack1 () {
      let histogramChart = echarts.init(this.$refs.stack1)
      histogramChart.setOption({
        title: {
          text: '渠道达成情况',
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
          data: ['达成率', '有效订单百分比']
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
        color: ['#DCE6F2', '#F79646', '#DCE6F2', '#F79646'],
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
            data: ['黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区', '黑吉战区', '辽宁战区']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '达成率',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 870, 157, 104, 609, 870, 157, 104, 609, 870]
          },
          {
            name: '有效订单百分比',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 870, 157, 104, 609, 870, 157, 104, 609, 870]
          },
          {
            name: '战区预计达成',
            type: 'bar',
            barWidth: 0.1,
            data: [710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710],
            markLine: {
              data: [
                {type: 'average'}
              ]
            }
          },
          {
            name: '当前战区预计达成',
            type: 'bar',
            barWidth: 0.1,
            data: [1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010],
            markLine: {
              data: [
                {type: 'average'}
              ]
            }
          }
        ]
      })
    },
    onSubmit () {
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom -3px !important
  .chartsbox
    margin-top 20px
    width 100%
    height auto
    overflow hidden
    .stack
      width 50%
      height 400px
      float left
      margin-bottom 20px
</style>
