<template>
  <div class="fcst-box">
    <div class="content">
      <div class="block">
        <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
          <el-form-item label="客户细分1" prop="cussegment1">
            <el-select v-model="form.cussegment1" size="mini" multiple @visible-change="getQuerycussegment1" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in cussegment1s"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户细分4" prop="cussegment4">
            <el-select v-model="form.cussegment4" size="mini" multiple  @visible-change="getQuerycussegment4" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in cussegment4s"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <br/>
          <el-form-item label="产品细分" prop="productSegment">
            <el-select v-model="form.productSegment" size="mini" multiple @visible-change="getQueryproductSegment" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in productSegments"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重点机型" prop="importantmtm">
            <el-select v-model="form.importantmtm" size="mini" multiple @visible-change="getQueryimportantmtm" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in importantmtms"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品系列" prop="productseries">
            <el-select v-model="form.productseries" size="mini" multiple @visible-change="getQueryproductseries" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in productseriess"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left: 30px">
            <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
            <el-button @click="resetForm('form')" size="mini" >重置</el-button>
          </el-form-item>
        </el-form>
        <h2>SI维度
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid1">
          <v-table-query
            :params='params'
            :url="'getPushOut'"
            :columnurl="'queryTableColumns251'"
            :sheetsName="'ConNB_SI维度'"
            :tableName='"ConNB_SellOut_Return_Aging_SI"'
            :source="'FF_IDSS_Data_CON'"
            :fileName="'ConNB_SI维度'"
            ref="gridSI">
          </v-table-query>
        </div>
        <div class="siDimension" ref="siDimension"></div>
        <h2>SO维度
          <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid2">
          <v-table-query
            :params='params'
            :url="'getPushOut'"
            :columnurl="'queryTableColumns251'"
            :sheetsName="'ConNB_SO维度'"
            :tableName='"ConNB_SellOut_Return_Aging_SO"'
            :source="'FF_IDSS_Data_CON'"
            :fileName="'ConNB_SO维度'"
            ref="gridSO">
          </v-table-query>
        </div>
        <div class="soDimension" ref="soDimension"></div>
        <div class="dimension" ref="dimension"></div>
      </div>
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
      form: {
        cussegment1: [], // 客户细分1
        cussegment4: [], // 客户细分4
        productSegment: [], // 产品细分
        importantmtm: [], // 重点机型
        productseries: [] // 产品系列
      },
      productSegments: [],
      cussegment1s: [],
      cussegment4s: [],
      importantmtms: [],
      productseriess: []
    }
  },
  components: {
    VTable,
    VTableQuery
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.siDimension()
      this.soDimension()
      this.dimension()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      this.siDimension()
      this.soDimension()
      this.dimension()
      this.valieForm(4)
      this.$refs.gridSI.getColumns()
      this.valieForm(5)
      this.$refs.gridSO.getColumns()
      // this.$nextTick(() => {
      // }, 3000)
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('grid1')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.valieForm(4)
        this.$refs.gridSI.getColumns()
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('grid2')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.valieForm(5)
        this.$refs.gridSO.getColumns()
      }
      this.toggle1 = !this.toggle1
    },
    valieForm (n) { // params参数
      let params = {}
      if (this.form.cussegment1.join() !== '') {
        params['cusSegment1'] = this.form.cussegment1
      }
      if (this.form.cussegment4.join() !== '') {
        params['cusSegment4'] = this.form.cussegment4
      }
      if (this.form.productSegment.join() !== '') {
        params['productsegment'] = this.form.productSegment
      }
      if (this.form.importantmtm.join() !== '') {
        params['importantmtm'] = this.form.importantmtm
      }
      if (this.form.productseries.join() !== '') {
        params['productseries'] = this.form.productseries
      }
      params['style'] = n
      this.params = params
    },
    getQuerycussegment1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SellOut_Return_Aging_SI'
      params['obj0'] = '客户细分1'
      params['orderType'] = '1'
      params['checked'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SellOut_Return_Aging_SI'
      params['obj0'] = '客户细分4'
      params['orderType'] = '1'
      params['checked'] = '1'
      if (Array.isArray(this.form.cussegment1) && this.form.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = this.form.cussegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryproductSegment () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SellOut_Return_Aging_SI'
      params['obj0'] = '产品细分'
      params['orderType'] = '1'
      params['checked'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.productSegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryproductseries () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SellOut_Return_Aging_SI'
      params['obj0'] = '产品系列'
      params['orderType'] = '1'
      params['checked'] = '1'
      if (Array.isArray(this.form.productSegment) && this.form.productSegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.productSegment
      }
      if (Array.isArray(this.form.importantmtm) && this.form.importantmtm.length !== 0) {
        params['objk1'] = '重点机型'
        params['objv1'] = this.form.importantmtm
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.productseriess = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryimportantmtm () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SellOut_Return_Aging_SI'
      params['obj0'] = '重点机型'
      params['orderType'] = '1'
      params['checked'] = '1'
      if (Array.isArray(this.form.productSegment) && this.form.productSegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.productSegment
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.importantmtms = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    siDimension () {
      let vm = this
      vm.valieForm(1)
      let newparams = vm.params
      vm.$ajax({
        url: '/getPushOut',
        data: newparams,
        done (data) {
          let xAxisData = data.xAxis
          let legendData = data.legend
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            if (seriesData[i].type === 'line') {
              seriesData[i].smooth = true
              seriesData[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option = {
            title: {
              text: 'SI维度',
              left: '5%',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{b}<br/>{a0}: {c0}%<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}<br/>{a5}: {c5}<br/>{a6}: {c6}<br/>{a7}: {c7}<br/>{a8}: {c8}<br/>{a9}: {c9}'
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
                dataView: {
                  show: true
                },
                restore: {}
              }
            },
            legend: {
              data: legendData
            },
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            yAxis: [{
              type: 'value',
              name: 'Qty',
              min: 0,
              position: 'left',
              axisLabel: {
                formatter: '{value}'
              }
            }, {
              type: 'value',
              name: '激活率',
              min: 0,
              position: 'right',
              axisLabel: {
                formatter: '{value} %'
              }
            }],
            xAxis: {
              type: 'category',
              data: xAxisData,
              axisLabel: {
                interval: 0,
                rotate: 45,
                margin: 2
              }
            },
            series: seriesData
          }
          let siDimension = echarts.init(vm.$refs.siDimension)
          siDimension.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    soDimension () {
      let vm = this
      vm.valieForm(2)
      let newparams = vm.params
      vm.$ajax({
        url: '/getPushOut',
        // method: 'get',
        data: newparams,
        done (data) {
          let xAxisData = data.xAxis
          let legendData = data.legend
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            if (xAxisData.length < 22) {
              seriesData[i].barWidth = '30px'
            }
          }
          var option = {
            title: {
              text: 'SO维度',
              left: '5%',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
            legend: {
              data: legendData
            },
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                dataView: {
                  show: true
                },
                restore: {}
              }
            },
            yAxis: [{
              type: 'value',
              name: 'Qty',
              min: 0,
              position: 'left',
              axisLabel: {
                formatter: '{value}'
              }
            }],
            xAxis: {
              type: 'category',
              name: 'SO 财月',
              data: xAxisData,
              axisLabel: {
                interval: 0,
                rotate: 45,
                margin: 2
              }
            },
            series: seriesData
          }
          let soDimension = echarts.init(vm.$refs.soDimension)
          soDimension.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    dimension () {
      let vm = this
      vm.valieForm(3)
      let newparams = vm.params
      vm.$ajax({
        url: '/getPushOut',
        data: newparams,
        done (data) {
          let xAxisData = data.xAxis
          let legendData = data.legend
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            if (xAxisData.length < 22) {
              seriesData[i].barWidth = '30px'
            }
          }
          var option = {
            title: {
              text: '百分比',
              left: '5%',
              textStyle: {
                fontSize: 14
              }
            },
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                dataView: {
                  show: true
                },
                restore: {}
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
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{b}<br/>{a0}: {c0}%<br/>{a1}: {c1}%<br/>{a2}: {c2}%<br/>{a3}: {c3}%<br/>{a4}: {c4}%<br/>{a5}: {c5}%<br/>{a6}: {c6}%<br/>{a7}: {c7}%'
            },
            legend: {
              data: legendData,
              left: '25%'
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                name: 'SO 财月',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 45,
                  margin: 8
                }
              }
            ],
            color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
          let dimension = echarts.init(vm.$refs.dimension)
          dimension.setOption(option)
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
  overflow hidden
  .content
    width 100%
    height 100%
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
        padding 0 20px
        margin 5px 0
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
      .grid
        width 100%
        height auto
        overflow hidden
        margin 10px auto
      .siDimension, .soDimension, .dimension
        width 1200px
        height 400px
        margin 10px auto
</style>
