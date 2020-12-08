<template>
  <div class="fullinv3s">
    <div class="block">
      <h2>3S分析</h2>
      <el-form :inline="true" :model="form3s" ref="form3s" label-width="65px" size="mine" class="demo-form-inline">
        <el-form-item label="产品细分" prop="ProDetail" >
          <el-select v-model="form3s.ProDetail" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in ProDetails"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family1" prop="family1">
          <el-select v-model="form3s.family1" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in family1s"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family2" prop="family2">
          <el-select v-model="form3s.family2" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in family2s"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价位细分" prop="PriceDetial">
          <el-select v-model="form3s.PriceDetial" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in PriceDetials"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="matCode">
          <el-input v-model="form3s.matCode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form3s)">查询</el-button>
          <el-button @click="resetForm('form3s')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <div class="chart" ref="linechart" style="min-width:1100px;height: 400px;margin:10px auto"></div>
      <div class="chart" ref="stackbar" style="min-width:1100px;height: 400px;margin:10px auto"></div>
      <div class="chart" ref="stackbar1" style="min-width:1100px;height: 400px;margin:10px auto"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import VTableQuery from '@/components/public/vtableQuery'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      toggle: true,
      toggle1: true,
      paramssi: {},
      paramsso: {},
      columnsList: [],
      dataSource: [],
      columnsList1: [],
      dataSource1: [],
      pageSize: 15,
      params: null,
      form3s: {
        ProDetail: [],
        family1: [],
        family2: [],
        PriceDetial: [],
        matCode: ''
      },
      ProDetails: [],
      family1s: [],
      family2s: [],
      PriceDetials: []
    }
  },
  components: {
    VTable,
    VTableQuery
  },
  mounted () {
    this.$nextTick(() => {
      this.linechart()
      this.stackbar()
      this.stackbar1()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    linechart () {
      let vm = this
      vm.$ajax({
        url: '/get3SAnalysis ',
        data: {
          style: 1
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.xAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].smooth = 'true'
            seriesData[i].label = {
              show: true,
              position: 'top',
              formatter: '{c}'
            }
          }
          var option = {
            title: {
              text: '3S趋势',
              left: '6%',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{a} <br/>{b} : {c}%'
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
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
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            legend: {
              data: legendData,
              right: 'center'
            },
            grid: {
              left: '3%',
              right: '3%',
              top: '15%',
              containLabel: true
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 15,
                  margin: 2
                },
                data: xAxisData
              }
            ],
            yAxis: {
              type: 'value'
            },
            series: seriesData
          }
          let linechart = echarts.init(vm.$refs.linechart)
          linechart.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    stackbar () {
      let vm = this
      vm.$ajax({
        url: '/get3SAnalysis ',
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
          var option = {
            title: {
              text: '全链库存(数量)',
              left: '6%',
              textStyle: {
                fontSize: 14
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
            grid: {
              left: '3%',
              right: '3%',
              top: '18%',
              containLabel: true
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: legendData,
              right: 'center'
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 15,
                  margin: 2
                },
                data: xAxisData
              }
            ],
            yAxis: {
              type: 'value'
            },
            series: seriesData
          }
          let stackbar = echarts.init(vm.$refs.stackbar)
          stackbar.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    },
    stackbar1 () {
      let vm = this
      vm.$ajax({
        url: '/get3SAnalysis ',
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
          var option = {
            title: {
              text: '全链库存(DOI)',
              left: 'left',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '3%',
              right: '3%',
              top: '15%',
              containLabel: true
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
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
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            calculable: true,
            legend: {
              data: legendData,
              right: 'center'
            },
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 15,
                  margin: 2
                },
                data: xAxisData
              }
            ],
            yAxis: {
              type: 'value'
            },
            series: seriesData
          }
          let lineGraph = echarts.init(vm.$refs.stackbar1)
          lineGraph.setOption(option)
        },
        fail (msg) {
          // alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fullinv3s
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
</style>
