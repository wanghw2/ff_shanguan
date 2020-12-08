<template>
  <div class="fcst-box">
    <div class="content">
      <div class="block">
        <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
          <el-form-item label="物料范围" prop="pntype">
            <el-select v-model="form.pntype" size="mini"  placeholder="请选择">
              <el-option
                v-for="(item, index) in pntypes"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择维度" prop="dimension">
            <el-select v-model="form.dimension" size="mini" placeholder="请选择">
              <el-option
                v-for="(item, index) in dimensions"
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
        <h2>WOI时间趋势分布
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid1">
        </div>
        <div class="siDimension" ref="drawchars1"></div>
        <h2>WOI产品趋势分布
          <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
        </h2>
        <div class="grid2">
        </div>
        <div class="soDimension" ref="drawchars2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle: true,
      toggle1: true,
      form: {
        pntype: '预测物料',
        dimension: '物料编码'
      },
      dimensions: ['物料编码', 'Family1', 'Family2', 'Family3', 'FCST Family'],
      pntypes: ['预测物料', '全部物料']
    }
  },
  components: {
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.drawchars1()
      this.drawchars2()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      this.drawchars1()
      this.drawchars2()
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.form.pntype = '预测物料'
      this.form.dimension = '物料编码'
      this.drawchars1()
      this.drawchars2()
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
    valieForm (n) {
      let params = {}
      params['pntype'] = this.form.pntype
      if (this.form.dimension === '物料编码') {
        params['dimension'] = 'PN'
      } else {
        params['dimension'] = this.form.dimension
      }
      params['style'] = n
      params['businessLine'] = 'ConNB'
      return params
    },
    drawchars1 () {
      let vm = this
      let params = this.valieForm(1)
      this.$ajax({
        url: '/getWOIBoxplot',
        data: params,
        done (datas) {
          var data = echarts.dataTool.prepareBoxplotData(datas.series)
          let legend = datas.xAxis
          var option = {
            title: {
              text: 'WOI时间趋势分布',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow'
              }
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
            dataZoom: [
              {
                show: true,
                start: 70,
                end: 100
              },
              {
                type: 'inside',
                start: 70,
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
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            yAxis: [
              {
                type: 'value',
                name: ' WOI',
                splitArea: {
                  show: true
                }
              }
            ],
            xAxis: {
              type: 'category',
              data: legend,
              axisLabel: {
                interval: 0,
                rotate: 60,
                margin: 2
              }
            },
            series: [
              {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                tooltip: {
                  formatter: function (param) {
                    return [
                      'Experiment ' + param.name + ': ',
                      'upper: ' + param.data[5],
                      'Q3: ' + param.data[4],
                      'median: ' + param.data[3],
                      'Q1: ' + param.data[2],
                      'lower: ' + param.data[1]
                    ].join('<br/>')
                  }
                }
              },
              {
                name: 'outlier',
                type: 'scatter',
                symbolSize: 2,
                data: data.outliers
              }
            ]
          }
          let siDimension = echarts.init(vm.$refs.drawchars1)
          siDimension.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawchars2 () {
      let vm = this
      let params = this.valieForm(2)
      this.$ajax({
        url: '/getWOIBoxplot',
        data: params,
        done (datas) {
          var data = echarts.dataTool.prepareBoxplotData(datas.series)
          let legend = datas.xAxis
          var option = {
            title: {
              text: 'WOI产品趋势分布',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow'
              }
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
            dataZoom: [
              {
                show: true,
                start: 70,
                end: 100
              },
              {
                type: 'inside',
                start: 70,
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
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            yAxis: [
              {
                type: 'value',
                name: ' WOI',
                splitArea: {
                  show: true
                }
              }
            ],
            xAxis: {
              type: 'category',
              data: legend,
              axisLabel: {
                interval: 0,
                rotate: 60,
                margin: 2
              }
            },
            series: [
              {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                tooltip: {
                  formatter: function (param) {
                    return [
                      'Experiment ' + param.name + ': ',
                      'upper: ' + param.data[5],
                      'Q3: ' + param.data[4],
                      'median: ' + param.data[3],
                      'Q1: ' + param.data[2],
                      'lower: ' + param.data[1]
                    ].join('<br/>')
                  }
                }
              },
              {
                name: 'outlier',
                type: 'scatter',
                symbolSize: 2,
                data: data.outliers
              }
            ]
          }
          let siDimension = echarts.init(vm.$refs.drawchars2)
          siDimension.setOption(option)
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
        width 100%
        height 400px
        margin 10px auto
</style>
