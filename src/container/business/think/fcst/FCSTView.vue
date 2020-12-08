<template>
  <div class="fcst-box">
    <div class="fcst-wrap">
      <div class="block">
        <h2>预测总览</h2>
        <el-form :inline="true" :model="form" ref="form" label-width="95px" class="demo-form-inline">
          <el-form-item label="预测版本" prop="preversion" >
            <el-select v-model="form.preversion" size="mini" filterable placeholder="请选择">
              <el-option
                v-for="(item, index) in preversions"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品状态" prop="prostatus">
            <el-select v-model="form.prostatus" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="item in prostatuss.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Site" prop="site">
            <el-select v-model="form.site" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="item in sites"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Family" prop="family">
            <el-select v-model="form.family" size="mini" @visible-change="queryfamily" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in familys"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Think业务线" prop="thinkline">
            <el-select v-model="form.thinkline" size="mini" @visible-change="queryfamily2" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in thinklines"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品类型" prop="productType">
            <el-select v-model="form.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="item in productTypes"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left:30px">
            <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
            <el-button @click="resetForm('form')" size="mini" >重置</el-button>
          </el-form-item>
          <form-public ref="formpublic"/>
        </el-form>
      </div>
      <div class="block">
        <h2>{{newdimension}}
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="tableWrap">
          <table class="tableitem" border="0">
            <tr align="center">
              <th v-for="(item, index) in tableTitle" :key="index">{{item}}</th>
            </tr>
            <tr v-for="(tableitem, i) in tablesubData" :key="i">
              <td align="center" v-for="(itemchild, j) in tableitem" :key="j">
                {{itemchild}}
              </td>
            </tr>
          </table>
          <table class="tableitem" border="0">
            <tr align="center">
              <th v-for="(item, index) in tableTitle" :key="index">{{item}}</th>
            </tr>
            <tr v-for="(tableitem, i) in tablepercentData" :key="i">
              <td align="center" v-for="(itemchild, j) in tableitem" :key="j">
                {{itemchild}}
              </td>
            </tr>
          </table>
        </div>
        <div class="chartsbox">
          <div class="stack" ref="stack"></div>
          <div class="stack" ref="stack1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import formPublic from '@/components/public/formPublic1'
import echarts from 'echarts'
// const $ = window.$
export default {
  data () {
    return {
      toggle: true,
      columnsList: [],
      dataSource: [],
      tableTitle: [],
      tablesubData: [],
      tablepercentData: [],
      form: {
        preversion: '',
        prostatus: [], // 产品状态
        family: [],
        thinkline: [],
        productType: [], // 产品类型
        site: []
      },
      preversions: [],
      prostatuss: [],
      Familys: [],
      thinklines: [],
      buildfacts: [],
      sites: []
    }
  },
  components: {
    VTable,
    formPublic
  },
  created () {
    this.getQuerydata()
    this.queryVersionCode() // 预测版本
    this.getinitTable()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.initdrawStack()
      this.initdrawStack1()
      // this.getTable()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      this.showTableData()
      this.showStack()
      this.showStack1()
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.$refs.formpublic.resetForm()
    },
    validParams () {
      var dimValue = '' // 判断选择维度的value值
      let params = {} // 判断参数是否为空
      if (this.form.dimension === '客户细分') {
        dimValue = '客户细分1_CON'
      }
      if (this.form.dimension === '产品状态') {
        dimValue = '产品状态'
      }
      if (this.form.dimension === '制造工厂') {
        dimValue = '制造工厂_ConNB'
      }
      if (this.form.dimension === '产品细分') {
        dimValue = '产品细分_CONNB'
      }
      if (this.form.dimension === '价位段') {
        dimValue = '价位段'
      }
      if (this.form.dimension === 'Family1') {
        dimValue = 'Family1'
      }
      if (this.form.dimension === 'Family2') {
        dimValue = 'Family2'
      }
      if (this.form.dimension === 'Cv值') {
        dimValue = 'Cv值'
      }
      if (this.form.preversion !== '') {
        params['version'] = this.form.preversion
      }
      if (this.form.cussegment.join() !== '') {
        params['customersegment'] = this.form.cussegment
      }
      if (this.form.prostatus.join() !== '') {
        params['productstatus'] = this.form.prostatus
      }
      if (this.form.Family1.join() !== '') {
        params['family1'] = this.form.Family1
      }
      if (this.form.Family2.join() !== '') {
        params['family2'] = this.form.Family2
      }
      if (this.form.prosegment.join() !== '') {
        params['productsegment'] = this.form.prosegment
      }
      if (this.form.price.join() !== '') {
        params['pricesegment'] = this.form.pricesegment
      }
      if (this.form.buildfact.join() !== '') {
        params['factory'] = this.form.buildfact
      }
      if (this.form.materialcode !== '') {
        params['pn'] = this.form.materialcode
      }
      params['dimKey'] = this.form.dimension
      params['dimValue'] = dimValue
      return params
    },
    showTableData () {
      let vm = this
      // vm.validParams()
      vm.$ajax({
        url: '/queryFcstPandect',
        method: 'get',
        params: vm.validParams(),
        done (data) {
          if (data.data.length > 1) {
            vm.tableTitle = data.column
            vm.tablesubData = data.data
            vm.tablepercentData = data.data1
            vm.newdimension = vm.form.dimension
          } else {}
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    showStack () {
      let vm = this
      vm.$ajax({
        url: '/getFcstPandect',
        method: 'get',
        params: vm.validParams(),
        done (data) {
          if (data.series.length > 0) {
            let seriesData = data.series
            let legendData = data.cell
            let xAxisData = data.column
            let titleData = data.chartName
            for (var i = 0; i < seriesData.length; i++) {
              seriesData[i].barWidth = '35px'
            }
            let stackChart = echarts.init(vm.$refs.stack)
            stackChart.hideLoading()
            var option = {
              title: {
                text: titleData,
                top: 0,
                left: '3%',
                textStyle: {
                  fontSize: 14,
                  color: '#333'
                }
              },
              color: ['#0283bd', '#32b1f4', '#b6d33b', '#fcc705'],
              toolbox: {
                show: true,
                feature: {
                  saveAsImage: {
                    show: true
                  },
                  // magicType: {
                  //   type: ['stack', 'tiled']
                  // },
                  restore: {}
                }
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data: legendData,
                left: '25%'
                // orient: 'vertical'
              },
              grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  data: xAxisData
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: seriesData
            }
            stackChart.setOption(option)
          } else {
            alert('无相关数据')
          }
        }
      })
    },
    showStack1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstPandectPer',
        method: 'get',
        params: vm.validParams(),
        done (data) {
          if (data.series.length > 0) {
            let seriesData = data.series
            let legendData = data.cell
            let xAxisData = data.column
            let titleData = data.chartName
            for (var i = 0; i < seriesData.length; i++) {
              seriesData[i].barWidth = '35px'
            }
            let stackChart = echarts.init(vm.$refs.stack1)
            stackChart.hideLoading()
            var option = {
              title: {
                text: titleData,
                top: 0,
                left: '3%',
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
                  // magicType: {
                  //   type: ['stack', 'tiled']
                  // },
                  restore: {}
                }
              },
              color: ['#0283bd', '#32b1f4', '#b6d33b', '#fcc705'],
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data: legendData,
                left: '25%'
              },
              grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  data: xAxisData
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLabel: {
                    formatter: '{value} %'
                  },
                  max: 100
                }
              ],
              series: seriesData
            }
            stackChart.setOption(option)
          } else {
          }
        }
      })
    },
    toggleList () {
      let grid = document.getElementsByClassName('tableWrap')[0]
      if (this.toggle) {
        grid.style.display = 'none'
      } else {
        grid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    getQuerydata () { // 获取查询条件（公用接口）
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '客户细分1_CON,产品状态,制造工厂_ConNB,产品细分_CONNB,价位段'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '客户细分1_CON') {
              vm.cussegments = data[i]
            }
            if (data[i].value === '产品状态') {
              vm.prostatuss = data[i]
            }
            if (data[i].value === '制造工厂_ConNB') {
              vm.buildfacts = data[i]
            }
            if (data[i].value === '产品细分_CONNB') {
              vm.prosegments = data[i]
            }
            if (data[i].value === '价位段') {
              vm.prices = data[i]
            }
          }
          vm.form.dimension = vm.dimensions[0]
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryVersionCode () { // 版本预测筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = 'version'
      params['orderType'] = 1 // 倒叙排列
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.preversions = data
          let current = vm.preversions[0]
          vm.form.preversion = current
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryfamily1 () { // family1筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Query_Overview_Base_TTL'
      params['obj0'] = 'Family1'
      if (Array.isArray(this.form.prosegment) && this.form.prosegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.Family1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryfamily2 (show) { // family2筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Query_Overview_Base_TTL'
      params['obj0'] = 'Family2'
      if (Array.isArray(this.form.prosegment) && this.form.prosegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk1'] = 'Family1'
        params['objv1'] = this.form.Family1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.Family2s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    initdrawStack () {
      let vm = this
      vm.$ajax({
        url: '/getFcstPandect',
        method: 'get',
        params: {
          version: '20180516',
          dimKey: '客户细分',
          dimValue: '客户细分1_CON'
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.cell
          let xAxisData = data.column
          let titleData = data.chartName
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
              top: 0,
              left: '3%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#0283bd', '#32b1f4', '#b6d33b', '#fcc705'],
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                // magicType: {
                //   type: ['stack', 'tiled']
                // },
                restore: {}
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: legendData,
              left: '25%'
              // orient: 'vertical'
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          let stackChart = echarts.init(vm.$refs.stack)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    initdrawStack1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstPandectPer',
        method: 'get',
        params: {
          version: '20180516',
          dimKey: '客户细分',
          dimValue: '客户细分1_CON'
        },
        done (data) {
          let seriesData = data.series
          let legendData = data.cell
          let xAxisData = data.column
          let titleData = data.chartName
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
              top: 0,
              left: '3%',
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
                // magicType: {
                //   type: ['stack', 'tiled']
                // },
                restore: {}
              }
            },
            color: ['#0283bd', '#32b1f4', '#b6d33b', '#fcc705'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: legendData,
              left: '25%'
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                },
                max: 100
              }
            ],
            series: seriesData
          }
          let stackChart = echarts.init(vm.$refs.stack1)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getinitTable () { // 表格数据
      let vm = this
      vm.$ajax({
        url: '/queryFcstPandect',
        method: 'get',
        params: {
          version: '20180516',
          dimKey: '客户细分',
          dimValue: '客户细分1_CON'
        },
        done (data) {
          vm.tableTitle = data.column
          // vm.tableTitle1 = data.column1
          vm.tablesubData = data.data
          vm.tablepercentData = data.data1
        },
        fail (msg) {
          alert(msg)
        }
      })
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
    .el-button--primary
      background-color #ff6666
      border-color #ccc
    .el-button--primary:hover
      background-color #ff3333
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
      .chartsbox
        width 100%
        height auto
        overflow hidden
        .stack
          width 50%
          height 400px
          float left
          margin-bottom 20px
      .tableWrap
        width 100%
        height auto
        overflow hidden
        padding 10px
        .tableitem
          width 49%
          height auto
          float left
          border-collapse collapse
          &:last-child
            float right
          tr,td,th
            border 1px solid #ccc
          th
            height 35px
            padding 0 8px
            background #eee
          td
            height 28px
</style>
