<template>
<div class="waterfall">
  <div class="content">
    <el-tabs :tab-position="'left'" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="fcstItem">
        <div class="block">
          <div class="form-box">
            <el-form :inline="true" :model="form" ref="form" label-width="80px" size="mine" class="demo-form-inline">
              <el-form-item  label="so日期" prop="soDate" >
                <div class="block">
                  <el-date-picker
                    size="mini"
                    v-model="form.soDate"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="产品细分" prop="ProDetail" >
                <el-select v-model="form.ProDetail" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in ProDetails"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family1" prop="family1">
                <el-select v-model="form.family1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in family1s"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family2" prop="family2">
                <el-select v-model="form.family2" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in family2s"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="特征值" prop="quarter">
                <el-select v-model="form.quarter" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in quarters"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="价位细分" prop="PriceDetial">
                <el-select v-model="form.PriceDetial" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in PriceDetials"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="库存量" prop="inventory">
                <el-select v-model="form.inventory" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in inventorys"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="DOI" prop="DOI">
                <el-select v-model="form.DOI" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in DOIs"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="激活周期" prop="ActivCycle">
                <el-select v-model="form.ActivCycle" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in ActivCycles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="line-box">
            <div class="lineItem">
              <div class="lineGraph" ref="lineGraph"></div>
              <div class="Analysis">
                Max：SO量为5743台<br>
                Min：SO量为203台<br>
                Ave：SO量为3795台<br>
                近6周：平均SO量为3865台
              </div>
            </div>
            <div class="lineItem">
              <div class="lineGraph" ref="lineGraph1"></div>
              <div class="Analysis">
                Max：全链库存量为54972台<br>
                Min：全链库存量为2344台<br>
                Ave：全链库存量为40100台<br>
                近6周：CDC库存量占比-2%，RDC库存量占比-1%，经销(计算)库存量占比6%
              </div>
            </div>
          </div>
          <div class="line-box">
            <div class="lineItem">
              <div class="lineGraph" ref="lineGraph2"></div>
              <div class="Analysis">
                Max：全链DOI 90.4周<br>
                Min：全链DOI 7.1周<br>
                Ave：全链DOI为18.1周<br>
                近6周：平均SO量为9.3周
              </div>
            </div>
            <div class="lineItem">
              <div class="lineGraph" ref="lineGraph3"></div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="fcstItem">
        <div class="block">
          <div class="form-box">
            <el-form :inline="true" :model="form" ref="form" label-width="80px" size="mine" class="demo-form-inline">
              <el-form-item label="激活周期" prop="ActivCycle">
                <el-select v-model="form.ActivCycle" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in ActivCycles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <h2>SO变化趋势图
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid1">
          </div>
          <h2>SO变化趋势表
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid2">
          </div>
          <h2>两周备货趋势
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid3">
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      menuArr: ['SO维度分析', '备货趋势分析'],
      form: {
        soDate: [],
        ProDetail: '',
        quarter: '',
        PriceDetial: '',
        family1: '',
        family2: '',
        inventory: '',
        DOI: '',
        ActivCycle: '',
        materialcode: ''
      },
      ProDetails: [],
      quarters: [],
      PriceDetials: [],
      family1s: [],
      family2s: [],
      inventorys: [],
      DOIs: [],
      ActivCycles: [],
      ProDetails1: [],
      quarters1: [],
      PriceDetials1: [],
      familys1: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.line()
      this.line1()
      this.line2()
      this.line3()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    line () {
      var option = {
        title: {
          text: 'SO分析',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['120s-14IAP', '潮7000-13'],
          right: '3%'
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
              rotate: 75,
              margin: 2
            },
            data: ['2017年10月W1', '2017年10月W2', '2017年10月W3', '2017年10月W4', '2017年10月W5', '2017年10月W6', '2017年10月W7', '2017年10月W8', '2017年10月W9', '2017年10月W31', '2017年10月W32', '2017年10月W33', '2017年10月W30', '2017年11月W1', '2017年12月W3', '2016年10月W3', '2015年10月W3', '2014年10月W3']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '120s-14IAP',
            type: 'line',
            smooth: true,
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          },
          {
            name: '潮7000-13',
            type: 'line',
            smooth: true,
            data: [1200, 1000, 900, 800, 2000, 1600, 1500, 1400, 700, 500, 501, 499, 482, 450, 350, 310, 300, 290]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph)
      lineGraph.setOption(option)
    },
    line1 () {
      var option = {
        title: {
          text: '全链库存数量分析',
          left: '6%',
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
          top: '18%',
          containLabel: true
        },
        legend: {
          data: ['CDC qly', 'RDC qly', '经销(计算)'],
          right: '3%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 75,
              margin: 2
            },
            data: ['2017年10月W1', '2017年10月W2', '2017年10月W3', '2017年10月W4', '2017年10月W5', '2017年10月W6', '2017年10月W7', '2017年10月W8', '2017年10月W9', '2017年10月W31', '2017年10月W32', '2017年10月W33', '2017年10月W30', '2017年11月W1', '2017年12月W3', '2016年10月W3', '2015年10月W3', '2014年10月W3']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'CDC qly',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          },
          {
            name: 'RDC qly',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          },
          {
            name: '经销(计算)',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph1)
      lineGraph.setOption(option)
    },
    line2 () {
      var option = {
        title: {
          text: '全链DOI分析',
          left: '6%',
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
        calculable: true,
        legend: {
          data: ['CDC qly', 'RDC qly', '经销 DOI'],
          right: '3%'
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 75,
              margin: 2
            },
            data: ['2017年10月W1', '2017年10月W2', '2017年10月W3', '2017年10月W4', '2017年10月W5', '2017年10月W6', '2017年10月W7', '2017年10月W8', '2017年10月W9', '2017年10月W31', '2017年10月W32', '2017年10月W33', '2017年10月W30', '2017年11月W1', '2017年12月W3', '2016年10月W3', '2015年10月W3', '2014年10月W3']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'CDC qly',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          },
          {
            name: 'RDC qly',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          },
          {
            name: '经销 DOI',
            type: 'bar',
            stack: '总量',
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph2)
      lineGraph.setOption(option)
    },
    line3 () {
      var option = {
        title: {
          text: '激活周期分析',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c}({d}%)'
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 20,
          data: ['0-3天', '4-14天', '一个月', '二个月', '三个月', '4个月', '6个月', '大于6个月']
        },
        series: [
          {
            name: '激活周期',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
              {name: '0-3天', value: 20},
              {name: '4-14天', value: 22},
              {name: '一个月', value: 11},
              {name: '二个月', value: 44},
              {name: '三个月', value: 66},
              {name: '4个月', value: 45},
              {name: '6个月', value: 77},
              {name: '大于6个月', value: 88}
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
      }
      let lineGraph = echarts.init(this.$refs.lineGraph3)
      lineGraph.setOption(option)
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfall
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom 0px
  .fcstItem
    width 100%
    height 100%
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
    .line-box
      width 100%
      height 430px
      overflow hidden
      .lineItem
        margin 10px 2%
        width 43%
        float left
        padding-bottom 10px
        .lineGraph
          width 100%
          height 380px
        .Analysis
          width 100%
          height auto
          font-size 14px
          line-height 16px
          margin-top -40px
          margin-left 50px
</style>
