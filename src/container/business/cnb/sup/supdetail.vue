
<template>
  <div class="sup-box">
    <div class="content">
      <!-- 筛选条件 -->
      <el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-form-inline">
        <el-form-item label="产品系列" prop="productseries">
          <el-select v-model="form.productseries" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in productseriess"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分" prop="cussegment">
          <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cussegments"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="制造工厂" prop="buildfact">
          <el-select v-model="form.buildfact" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in buildfacts"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品细分" prop="product" >
          <el-select v-model="form.product" size="mini"  multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in products"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="供应状态" prop="supStatus">
          <el-select v-model="form.supStatus" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in supStatuss"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="特征值" prop="eigenvalue">
          <el-select v-model="form.eigenvalue" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in eigenvalues"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="选择维度" prop="dimension">
          <el-select v-model="form.dimension" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in dimensions"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="介于" prop="betweenmin">
          <el-input v-model="form.betweenmin" size="mini" class="betweeninput" placeholder="请输入"></el-input>
        </el-form-item>
        <i class="shortline">-</i>
        <el-form-item label="" prop="betweenmax">
          <el-input v-model="form.betweenmax" class="betweeninput" size="mini" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <h2>供应detail
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
      </h2>
      <div class="addgrid">
        <v-table
          :sheetsName="'ConNB_Commit'"
          :tableName='"ConNB_Commit"'
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_Commit'"
          ref="gridupcommit" >
        </v-table>
      </div>
      <div class="barchart" ref="barchart"></div>
    </div>
  </div>
</template>
<script>
// import {domainUrl} from '@/config/config.js'
// import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
// const $ = window.$
import echarts from 'echarts'
export default {
  data () {
    return {
      // serverUrl: domainUrl,
      tabPosition: 'left',
      toggle: true,
      disabled: false,
      menuArr: ['Commit Overview', 'Commit Detail', 'Commit 外ATS', 'Commit 准确性'],
      form: {
        product: [], // 产品细分
        productseries: [], // 产品系列
        cussegment: [], // 客户细分
        eigenvalue: [], // 特征值
        materialcode: '', // 物料编码
        dimension: '', // 选择维度
        buildfact: [], // 制造工厂
        supStatus: [], // 供应状态
        betweenmin: '', // 区间最小值
        betweenmax: '' // 区间最大值
      },
      products: ['产品', '产品1'],
      buildfacts: [],
      productseriess: ['区域1', '区域2', '区域3'],
      cussegments: ['细分1', '细分2', '细分3', '细分4'],
      supStatuss: ['供应滞后订单', '供应滞后节奏', '供应滞后计划', '供应超上限', '供应超订单', '本月ONS'],
      eigenvalues: ['特dshfjnvjnvfjnv1', '特征值2', '特征值3', '特征值4'],
      dimensions: ['产品系列', '特征值', '制造工厂', '产品细分', '物料编码']
    }
  },
  components: {
    // Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.barchart()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
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
    barchart () {
      var yearCount = 3
      var categoryCount = 28
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000', 'aa', 'bb', 'cc', 'dd', 'ee', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'aaaaaaa', 'bbbbbbbb']
      var customData = []
      var legendData = ['MTM供应', '有效订单', '备货上限']
      var dataList = []
      legendData.unshift('trend')
      var encodeY = []
      for (var i = 0; i < yearCount; i++) {
        dataList.push([])
        encodeY.push(1 + i)
      }
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
          text: '供应detail',
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
          right: '10%'
        },
        dataZoom: [{
          type: 'slider',
          start: 30,
          end: 70
        }, {
          type: 'inside',
          start: 30,
          end: 70
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
      let barchart = echarts.init(this.$refs.barchart)
      barchart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sup-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height auto
    overflow hidden
    display none
    &:nth-child(1)
      display block
    .shortline
      display inline-block
      width 10px
      height 40px
      line-height 40px
      margin-right 10px
      text-align center
    .el-form-item
      margin-bottom 0 !important
    .el-select, .el-input
      width 200px !important
    .betweeninput
      width 140px !important
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
    .addgrid
      width 100%
      min-height 10px
      overflow hidden
      margin-bottom 10px
    .barchart
      width 100%
      height 400px
</style>
