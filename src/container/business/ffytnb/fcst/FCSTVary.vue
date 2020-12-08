<template>
  <div class="fcst-box">
    <div class="fcst-wrap">
      <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
        <el-form-item label="预测版本" prop="preversion" >
          <el-select v-model="form.preversion" size="mini" :disabled="disabled" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in preversions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目标月份" prop="goalmonth">
          <el-select v-model="form.goalmonth" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in goalmonths"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目标季度" prop="goalquarter">
          <el-select v-model="form.goalquarter" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in goalquarters"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品系列" prop="proseri">
          <el-select v-model="form.proseri" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in proseris"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="特征值" prop="eigenvalue">
          <el-select v-model="form.eigenvalue" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in eigenvalues"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价位细分" prop="price">
          <el-select v-model="form.price" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in prices"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品细分" prop="prosegment">
          <el-select v-model="form.prosegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in prosegments"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="数值类型" prop="numbertype">
          <el-select v-model="form.numbertype" size="mini" filterable placeholder="请选择">
            <el-option
              v-for="item in numbertypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <form-public ref="formPublic"></form-public>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <div class="block">
        <h2>预测版本变化滚动图表
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="addgrid">
          <v-table
            :sheetsName="'ConNB_分客户类型'"
            :tableName="'ConNB_Target'"
            :source="'FF_IDSS_Data_CON'"
            :fileName="'ConNB_分客户类型'"
            ref="cnbcus">
          </v-table>
        </div>
        <div class="drawBarLine" ref="drawBarLine1"></div>
      </div>
      <div class="block">
        <h2>滚动12月需求趋势图表
          <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
        </h2>
        <div class="addgrid">
          <v-table
            :sheetsName="'ConNB_分客户类型'"
            :tableName="'ConNB_Target'"
            :source="'FF_IDSS_Data_CON'"
            :fileName="'ConNB_分客户类型'"
            ref="cnbcus">
          </v-table>
        </div>
        <div class="drawBarLine" ref="drawBarLine2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtablePage251'
import formPublic from '@/components/public/formPublic'
import echarts from 'echarts'
export default {
  data () {
    return {
      pageSize: 18,
      toggle: true,
      toggle1: true,
      disabled: false,
      form: {
        preversion: '',
        proseri: '',
        prosegment: '',
        eigenvalue: '',
        materialcode: '',
        price: '',
        goalquarter: '',
        goalmonth: ''
      },
      preversions: [
        {
          label: '区域1',
          value: 23
        },
        {
          label: '区域2',
          value: 53
        },
        {
          label: '区域3',
          value: 21
        }
      ],
      proseris: [
        {
          label: '区域1',
          value: 23
        },
        {
          label: '区域2',
          value: 53
        },
        {
          label: '区域3',
          value: 21
        }
      ],
      prosegments: [
        {
          label: '区域1',
          value: 23
        },
        {
          label: '区域2',
          value: 53
        },
        {
          label: '区域3',
          value: 21
        }
      ],
      goalmonths: [],
      goalquarters: [],
      eigenvalues: [
        {
          label: '区域1',
          value: 233
        },
        {
          label: '区域2',
          value: 523
        },
        {
          label: '区域3',
          value: 221
        }
      ],
      prices: [],
      numbertypes: [
        {
          label: '数值',
          value: 'value'
        },
        {
          label: '百分比',
          value: 'percent'
        }
      ]
    }
  },
  components: {
    VTable,
    formPublic
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.drawBarLine1()
      this.drawBarLine2()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.$refs.formPublic.resetForm()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid')[1]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    drawBarLine1 () {
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
        // console.log(customData)
        // var data = dataList[0]
        for (var j = 0; j < dataList.length; j++) {
          var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          dataList[j].push(value)
          // var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          customVal.push(value)
        }
        // console.log(customVal)
        // console.log(customData)
      }
      function renderItem (params, api) {
        var xValue = api.value(0)
        // console.log(xValue)
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
          // console.log(points)
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
          text: '预测版本变化滚动图表',
          top: 0,
          left: '10%',
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
      let drawBarLine = echarts.init(this.$refs.drawBarLine1)
      drawBarLine.setOption(option)
    },
    drawBarLine2 () {
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
      console.log(encodeY)
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
        // console.log(customData)
        // var data = dataList[0]
        for (var j = 0; j < dataList.length; j++) {
          var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          dataList[j].push(value)
          // var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          customVal.push(value)
        }
        // console.log(customVal)
        // console.log(customData)
      }
      function renderItem (params, api) {
        var xValue = api.value(0)
        // console.log(xValue)
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
          // console.log(points)
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
          text: '预测版本变化滚动图表',
          top: 0,
          left: '10%',
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
      let drawBarLine = echarts.init(this.$refs.drawBarLine2)
      drawBarLine.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fcst-box
  width 100%
  height 100%
  padding 10px
  .fcst-wrap
    width 100%
    height 100%
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
        margin-bottom 10px
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
      .drawBarLine
        width 100%
        height 400px
        margin 10px auto
</style>
