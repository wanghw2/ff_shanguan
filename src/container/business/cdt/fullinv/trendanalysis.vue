<template>
<div class="fullinv-box">
  <div class="block">
    <h2>补货趋势分析</h2>
    <h2>补货DOI建议
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="chartdoi" ref="doiChart" style="width:1100px;height: 400px;margin:10px auto"></div>
    <!-- <div class="chart" ref="stackbardoi" style="width:1100px;height: 400px;margin:10px auto"></div>
    <div class="chart" ref="stackbar1" style="width:1100px;height: 400px;margin:10px auto"></div> -->
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
      toggle1: true,
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
      let addgrid = document.getElementsByClassName('chartdoi')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
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
            data: [862, 1018, 964],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
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
