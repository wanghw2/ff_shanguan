<template>
<div class="so">
  <div class="selectBox">
    <el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
      <el-form-item label="客户类型" prop="customer" >
        <el-select v-model="form.customer" size="mini" multiple filterable collapse-tags placeholder="请选择">
          <el-option
            v-for="item in customers"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户" prop="family">
        <el-select v-model="form.family" size="mini" placeholder="请选择">
          <el-option
            v-for="item in familys"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日历区间" prop="mtm">
        <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
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
    </div>
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph1"></div>
    </div>
  </div>
  <div class="line-box">
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph2"></div>
    </div>
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph3"></div>
    </div>
  </div>
  <div class="line-box">
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph4"></div>
    </div>
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph5"></div>
    </div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      aaa: 100,
      bbb: 266,
      ccc: 300,
      ddd: 267,
      form: {
        customer: '',
        family: '',
        materialcode: ''
      },
      customers: [
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
      familys: []
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.line()
      this.line1()
      this.line2()
      this.line3()
      this.line4()
      this.line5()
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
          text: 'CA Analysis',
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
        xAxis: [
          {
            type: 'category',
            data: ['1', '19', '28', '39', '40', '55', '66', '77', '88', '90', '99', '100', '111', '120', '131', '141', '150', '161', '181']
          }
        ],
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '数值',
            type: 'line',
            smooth: true,
            data: [3000, 2000, 1600, 1500, 1400, 1200, 1000, 900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300, 290]
          },
          {
            type: 'pie',
            radius: ['15%', '20%'],
            center: ['75%', '20%'],
            color: 'red',
            // label: {
            //   show: true,
            //   normal: {
            //     position: 'center',
            //     textStyle: {
            //       color: '#333'
            //     }
            //   }
            // },
            data: [
              {
                name: '80%(' + this.aaa + ')',
                value: 80
                // label: {
                //   normal: {
                //     formatter: '{d} %',
                //     textStyle: {
                //       color: 'red',
                //       fontSize: 13
                //     }
                //   }
                // }
              },
              {
                name: '20%(' + this.bbb + ')',
                value: 20,
                // label: {
                //   normal: {
                //     textStyle: {
                //       color: 'blue',
                //       fontSize: 13
                //     }
                //   }
                // },
                itemStyle: {
                  normal: {
                    color: '#aaa'
                  },
                  emphasis: {
                    color: '#aaa'
                  }
                }
              }
            ]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph)
      lineGraph.setOption(option)
    },
    line2 () {
      var option = {
        title: {
          text: 'Margin  Analysis',
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
        xAxis: [
          {
            type: 'category',
            data: ['1', '19', '28', '39', '40', '55', '66', '77', '88', '90', '99', '100', '111', '120', '131', '141', '150', '161', '181']
          }
        ],
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '数值',
            type: 'line',
            smooth: true,
            data: [3000, 1000, 100, 1500, 400, 1200, 100, 1900, 800, 700, 500, 501, 499, 482, 450, 350, 310, 300, 290]
          },
          {
            type: 'pie',
            radius: ['15%', '20%'],
            center: ['75%', '20%'],
            color: 'red',
            // label: {
            //   show: true,
            //   normal: {
            //     position: 'center',
            //     textStyle: {
            //       color: '#333'
            //     }
            //   }
            // },
            data: [
              {
                name: '80%(' + this.ccc + ')',
                value: 80
                // label: {
                //   normal: {
                //     formatter: '{d} %',
                //     textStyle: {
                //       color: 'red',
                //       fontSize: 13
                //     }
                //   }
                // }
              },
              {
                name: '20%(' + this.ddd + ')',
                value: 20,
                // label: {
                //   normal: {
                //     textStyle: {
                //       color: 'blue',
                //       fontSize: 13
                //     }
                //   }
                // },
                itemStyle: {
                  normal: {
                    color: '#aaa'
                  },
                  emphasis: {
                    color: '#aaa'
                  }
                }
              }
            ]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph2)
      lineGraph.setOption(option)
    },
    line1 () {
      var option = {
        title: {
          text: 'Family Revenue贡献效率季度分析',
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
          top: '7%',
          left: '6%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'CA1',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'CA2',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'CA3',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'CA4',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'CA5',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph1)
      lineGraph.setOption(option)
    },
    line3 () {
      var option = {
        title: {
          text: 'family内MTM平均CA贡献',
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
          top: '15%',
          containLabel: true
        },
        legend: {
          data: ['CA/Revenue'],
          right: '3%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 45,
              margin: 5
            },
            data: ['XiaoXinAir12', '110-15', '小新潮5000', '120S-14', '小新潮7000-13', '320-15', '拯救者 R720-15', '小新潮7000', '520-15', '310S-14', '320S-15', 'TianYi310-14', 'YOGA710-14', '720S-13']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'CA/Revenue',
            type: 'bar',
            data: [1400, 1300, 1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph3)
      lineGraph.setOption(option)
    },
    line4 () {
      var option = {
        title: {
          text: '价位段产品复杂度分析',
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
        legend: {
          data: ['a', 'b'],
          right: '3%'
        },
        calculable: true,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'b',
            type: 'line',
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: 'a',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph4)
      lineGraph.setOption(option)
    },
    line5 () {
      var option = {
        title: {
          text: '产品Revenue/Margin散点图分析',
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
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [{
          type: 'effectScatter',
          symbolSize: 20,
          data: [
            [172.7, 105.2],
            [153.4, 42]
          ]
        },
        {
          type: 'scatter',
          data: [
            [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
          ]
        }]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph5)
      lineGraph.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.so
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
  .el-select, .el-input
    width: 182px !important
  .selectBox
    width 100%
    height 120px
  .pieGraph
    width 100%
    height 350px
  .line-box
    width 100%
    height 380px
    overflow hidden
    .lineItem
      margin 10px 5%
      width 33.333%
      float left
      .lineGraph
        width 100%
        height 380px
</style>
