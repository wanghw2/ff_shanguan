<template>
  <div class="so-box">
    <div class="formBox">
      <el-form ref="form" class="formBoxContent" :model="form" label-width="80px" size="mini">
        <div class="item2">
          <el-form-item label="分货类型" prop="fhType" class="item21" >
            <el-select v-model="form.fhType" placeholder="请选择">
              <el-option label="ZOR" value="ZOR"></el-option>
              <el-option label="RE" value="RE"></el-option>
              <el-option label="ZSD" value="ZSD"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料编码" prop="wlCode" class="item21">
            <el-input v-model="form.wlCode" ></el-input>
          </el-form-item>
          <el-form-item label="渠道编码" prop="qdcode" class="item21">
            <el-input v-model="form.qdcode"  ></el-input>
          </el-form-item>
          <el-form-item label="CRAD KPI" prop="cradKpi" class="item11" >
            <el-select v-model="form.cradKpi" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户细分4" prop="khSegment4" class="item25" >
            <el-select v-model="form.khSegment4" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="item2">
          <el-form-item label="订单状态" prop="dDState" class="item21" >
            <el-select v-model="form.dDState" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料描述" prop="wlDescribe" class="item21">
            <el-input v-model="form.wlDescribe" ></el-input>
          </el-form-item>
          <el-form-item label="渠道名称" prop="qdName" class="item21">
            <el-input v-model="form.qdName"  ></el-input>
          </el-form-item>
          <el-form-item label="CRAD时间段" prop="cradPeriod" class="item11" >
            <el-select v-model="form.cradPeriod" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户细分1" prop="khSegment1" class="item25" >
            <el-select v-model="form.khSegment1" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="fold">
          <div class="senior">高级查询</div>
          <div class="toggle" @click="toggleList">
            <a href="javascript:;" v-text="toggle ? '展开' : '折叠'"></a>
          </div>
        </div>
        <div class="box">
          <div class="item2">
            <el-form-item  label="创建日期" prop="cjDate" class='item31'>
              <div class="block">
                <el-date-picker
                  class="item221"
                  v-model="form.cjDate"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-value="['2018-03-08', '2018-04-20']">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item  label="发货过账" prop="fhPostDate" class='item31 item41'>
              <div class="block">
                <el-date-picker
                  class="item221"
                  v-model="form.fhPostDate"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="产品细分" prop="cpSegment" class="item21" >
              <el-select v-model="form.cpSegment" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="item2">
            <el-form-item  label="确认日期" prop="qrDate" class='item31'>
              <div class="block">
                <el-date-picker
                  class="item221"
                  v-model="form.qrDate"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item  label="CRAD日期" prop="CRADdate" class='item31 item41'>
              <div class="block">
                <el-date-picker
                  class="item221"
                  v-model="form.CRADdate"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="大区"  prop="regional" class="item21" >
              <el-select v-model="form.regional" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <el-form-item class="item3">
          <el-button type="primary" @click="submitForm('form')">查询</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pies clearfix">
      <div class="pie" ref="pie1"></div>
      <div class="pie" ref="pie2"></div>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="allo"
            style="background: red">
          </el-table-column>
          <el-table-column
            prop="so"
            label="by SO">
          </el-table-column>
          <el-table-column
            prop="qty"
            label="by Qty">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="bar" ref="bar"></div>
    <div class="stack" ref="stack"></div>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle: true,
      form: {
        fhType: '',
        wlCode: '',
        qdcode: '',
        cradKpi: '',
        khSegment4: '',
        dDState: '',
        wlDescribe: '',
        qdName: '',
        cradPeriod: '',
        khSegment1: '',
        fhPostDate: '',
        cpSegment: '',
        qrDate: '',
        CRADdate: '',
        regional: ''
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      tableData: [{
        allo: '自然分货',
        so: '66%',
        qty: '20%'
      }, {
        allo: '比列分货',
        so: '34%',
        qty: '80%'
      }],
      barSource: [],
      barSeries: []
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
      this.drawLine()
      this.drawBar()
      this.drawPie1()
      this.drawPie2()
    }, 3000)
  },
  methods: {
    toggleList () {
      let box = document.getElementsByClassName('box')[0]
      if (this.toggle) {
        box.style.display = 'block'
      } else {
        box.style.display = 'none'
      }
      this.toggle = !this.toggle
    },
    drawPie1 () {
      let PieChart1 = echarts.init(this.$refs.pie1)
      let vm = this
      vm.$ajax({
        url: '/cradAnalysisChartGraph',
        method: 'get',
        params: {
          type: '01'
        },
        done (data) {
          let pie1Data = [].concat(data)
          let legendData = []
          pie1Data.forEach((item, i) => {
            legendData.push(item.name)
          })
          // console.log(legendData)
          var option = {
            title: {
              text: 'CRAD vs 创建日期(by SO)',
              left: 20,
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}:<br /> {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              top: 'middle',
              // bottom: 10,
              left: 10,
              data: legendData
            },
            series: [
              {
                type: 'pie',
                radius: '45%',
                center: ['40%', '40%'],
                selectedMode: 'single',
                data: pie1Data,
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
          PieChart1.setOption(option)
        }
      })
    },
    drawPie2 () {
      var weatherIcons = {
        'Sunny': 'http://echarts.baidu.com/examples/data/asset/img/weather/sunny_128.png',
        'Cloudy': 'http://echarts.baidu.com/examples/data/asset/img/weather/cloudy_128.png',
        'Showers': 'http://echarts.baidu.com/examples/data/asset/img/weather/showers_128.png'
      }
      var option = {
        title: {
          text: 'CRAD vs 创建日期(by Qty)',
          left: 20,
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b} : {c} ({d}%)'
        },
        // backgroundColor: '#eee',
        legend: {
          orient: 'vertical',
          top: 'middle',
          // bottom: 10,
          left: 10,
          data: ['西凉', '益州', '兖州', '荆州', '幽州']
        },
        series: [
          {
            type: 'pie',
            radius: '35%',
            center: ['40%', '40%'],
            selectedMode: 'single',
            data: [
              {
                value: 1548,
                name: '幽州',
                label: {
                  normal: {
                    formatter: [
                      '{title|{b}}{abg|}',
                      '{weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                      '{hr|}',
                      '{Sunny|}{value|202}{rate|55.3%}',
                      '{Cloudy|}{value|142}{rate|38.9%}',
                      '{Showers|}{value|21}{rate|5.8%}'
                    ].join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: '#eee',
                        align: 'center'
                      },
                      abg: {
                        backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Sunny
                        }
                      },
                      Cloudy: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Cloudy
                        }
                      },
                      Showers: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Showers
                        }
                      },
                      weatherHead: {
                        color: '#333',
                        height: 24,
                        align: 'left'
                      },
                      hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'left'
                      },
                      valueHead: {
                        color: '#333',
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'center'
                      },
                      rate: {
                        width: 40,
                        align: 'right',
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: '#333',
                        width: 40,
                        align: 'center',
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                }
              },
              {value: 535, name: '荆州'},
              {value: 510, name: '兖州'},
              {value: 634, name: '益州'},
              {value: 735, name: '西凉'}
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
      let PieChart2 = echarts.init(this.$refs.pie2)
      PieChart2.setOption(option)
    },
    drawBar1 () {
      // 基于准备好的dom，初始化echarts实例
      let barChart = echarts.init(this.$refs.bar)
      // 绘制图表
      var option = {
        title: {
          text: 'CRAD日期分布',
          left: 20,
          textStyle: {
            fontSize: 18,
            color: '#333'
          }
        },
        legend: {
          left: 'center'
        },
        dataZoom: [{
          startValue: '10%'
        }, {
          type: 'inside'
        }],
        tooltip: {},
        dataset: {
          source: this.barSource
        },
        xAxis: [
          {type: 'category', gridIndex: 0},
          {type: 'category', gridIndex: 1}
        ],
        yAxis: [
          {gridIndex: 0},
          {gridIndex: 1}
        ],
        grid: [
          {bottom: '55%'},
          {top: '55%'}
        ],
        series: [
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
        ]
      }
      barChart.setOption(option)
    },
    drawBar () {
      let barChart = echarts.init(this.$refs.bar)
      let vm = this
      vm.$ajax({
        url: '/cradAnalysisChartGraph',
        method: 'get',
        params: {
          type: '02'
        },
        done (data) {
          vm.barSource = [].concat(data)
          for (let i = 0; i < vm.barSource.length - 1; i++) {
            vm.barSeries.push({
              type: 'bar', seriesLayoutBy: 'row'
            })
          }
          // console.log(vm.barSeries)
          for (let i = 0; i < vm.barSource[0].length - 1; i++) {
            vm.barSeries.push({
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1
            })
          }
          // console.log(vm.barSeries)
          var option = {
            title: {
              text: 'CRAD日期分布',
              left: 20,
              textStyle: {
                fontSize: 18,
                color: '#333'
              }
            },
            legend: {
              left: 'center'
            },
            dataZoom: [{
              startValue: 0
            }, {
              type: 'inside'
            }],
            tooltip: {},
            dataset: {
              source: vm.barSource
            },
            xAxis: [
              {type: 'category', gridIndex: 0},
              {type: 'category', gridIndex: 1}
            ],
            yAxis: [
              {gridIndex: 0},
              {gridIndex: 1}
            ],
            grid: [
              {bottom: '55%'},
              {top: '55%'}
            ],
            series: vm.barSeries
          }
          barChart.setOption(option)
        }
      })
    },
    drawStack () {
      var option = {
        title: {
          // backgroundColor: '#333',
          text: '下单习惯分析（by SO)',
          top: 0,
          left: 'left',
          // width: 150,
          textStyle: {
            fontSize: 18,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          left: 'center'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: 35,
            stack: '广告',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '广告',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '百度',
            type: 'bar',
            stack: '广告',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '广告',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '广告',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack)
      stackChart.setOption(option)
    },
    drawLine () {
      var option = {
        title: {
          text: '下单习惯分析（by SO)'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.line)
      stackChart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.so-box
  width 100%
  height 100%
  overflow hidden
  .formBox
    width 100%
    height 100%
    margin 10px 0 15px
    border 1px solid #eceef4
    padding 5px
    .el-form-item
      margin-bottom 4px
    .item1
      height 22px
      overflow hidden
    .item2
      overflow hidden
      width 100%
      .item21,.item11,.item31,.item25
        float left
        width 192px
        margin-left -10px
        .item221
          width 100%
      .item11
        margin-left 7px
      .item31
        width 260px
      .item41
        margin-left 0px
      .item25
        margin-left -3px
    .item3
      .el-button--mini
        padding 7px 35px
    .fold
      height 35px
      overflow hidden
      width 100%
      margin-top 3px
      margin-bottom 8px
      padding-bottom 6px
      position relative
      box-shadow 0px 6px 3px 0px rgba(0,0,0,0.1)
      .senior
        width 100%
        background #fafafa
        font-weight 700
        height 35px
        line-height 35px
        font-size 14px
        padding-left 25px
        margin-bottom 8px
      .toggle
        position absolute
        top 0
        right 20px
        height 30px
        transition 0.5s
        a
          display block
          color #37a6cc
          padding 0 15px
          height 30px
          line-height 30px
          text-align center
          &:hover
            color #37a6cc
    .box
      display none
      margin 15px 0px 5px
  .pies
    width 100%
    height 240px
    .pie
      width 40%
      height 240px
      float left
    .table
      width 20%
      height 240px
      float left
      padding-top 20px
  .bar
    width 100%
    height 600px
    margin-bottom 20px
  .stack
    width 100%
    height 400px
    margin-bottom 20px
  .line
    width 100%
    height 400px
    margin-bottom 20px
</style>
