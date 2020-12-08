<template>
  <div class="alloview">
    <div class="content">
      <el-tabs :tab-position="'left'" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>分货总览预警
              <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="sn">
              <message-box></message-box>
            </div>
            <h2>Think T月供应日进展
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid1">
              <div class='histogram' ref='drawBarLine1'></div>
              <v-table
                :sheetsName="'Think_BP_PSD_SUM'"
                :tableName='"Think_BP_PSD_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BP_PSD_SUM'"
                ref="thinkBPPSD1">
              </v-table>
            </div>
            <h2>Think T月提货周节奏进展
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <div class='histogram' ref='drawBarLine2'></div>
              <v-table
                :sheetsName="'Think_BP_Weekly_CA_Dashboard'"
                :tableName='"Think_BP_Weekly_CA_Dashboard"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_BP_Weekly_CA_Dashboard'"
                ref="thinkBPPSD2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>Think T分货机型总览
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <div class='histogram' ref='drawBarLine3'></div>
              <div class='histogram' ref='drawBarLine4'></div>
              <v-table
                :sheetsName="'Think_T_Share_MTM_SUM'"
                :tableName='"Think_T_Share_MTM_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_T_Share_MTM_SUM'"
                ref="thinkBPPSD3">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import messageBox from '@/components/public/messageBox'
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      menuArr: ['月供应总览', 'T分货机型总览'],
      toggle: false
    }
  },
  components: {
    messageBox,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.drawBarLine1()
      this.drawBarLine2()
      this.drawBarLine3()
      this.drawBarLine4()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
    }, 3000)
  },
  methods: {
    drawBarLine4 () {
      let myChart = echarts.init(this.$refs.drawBarLine4)
      setTimeout(function () {
        var option = {
          legend: {left: 40, top: 20},
          tooltip: {
            trigger: 'axis'
          },
          dataset: {
            source: [
              ['product', '1月', '2月'],
              [],
              ['PN1', 5, 8],
              ['PN2', 2, 4],
              ['PN3', 1, 2],
              ['PN4', 4, 3]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN1PO量',
              data: [30, 22]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN2PO量',
              data: [10, 3]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN3PO量',
              data: [5, 4]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN4PO量',
              data: [4, 6]
            },
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@1月} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '1月',
                tooltip: '1月'
              }
            }
          ]
        }
        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0]
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            })
          }
        })
        myChart.setOption(option)
      })
    },
    drawBarLine3 () {
      let myChart = echarts.init(this.$refs.drawBarLine3)
      setTimeout(function () {
        var option = {
          legend: {left: 40, top: 20},
          tooltip: {
            trigger: 'axis'
          },
          color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
          dataset: {
            source: [
              ['product', '1月', '2月'],
              [],
              ['PN1', 5, 8],
              ['PN2', 2, 4],
              ['PN3', 1, 2],
              ['PN4', 4, 3]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN1PO量',
              data: [30, 22]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN2PO量',
              data: [10, 3]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN3PO量',
              data: [5, 4]
            },
            {
              type: 'bar',
              stack: 'bar1',
              smooth: true,
              barWidth: 30,
              seriesLayoutBy: 'row',
              name: 'PN4PO量',
              data: [4, 6]
            },
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@1月} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '1月',
                tooltip: '1月'
              }
            }
          ]
        }
        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0]
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            })
          }
        })
        myChart.setOption(option)
      })
    },
    drawBarLine2 () {
      var option = {
        title: {
          text: 'Think T月提货周节奏进展',
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
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        xAxis: [
          {
            type: 'category',
            data: ['MTM1', 'MTM2', 'MTM3', 'MTM4', 'MTM5']
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
            type: 'line',
            data: [201, 321, 312, 343, 900]
          },
          {
            name: '邮件营销',
            type: 'line',
            data: [120, 32, 101, 134, 90]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M1',
            data: [201, 321, 312, 343, 900]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M1',
            data: [120, 32, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M1',
            data: [220, 182, 11, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M1',
            data: [150, 232, 21, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M1',
            data: [862, 18, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M2',
            data: [320, 332, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M2',
            data: [120, 132, 101, 134, 10]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M2',
            data: [220, 182, 11, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M2',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M2',
            data: [862, 108, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M3',
            data: [320, 32, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M3',
            data: [120, 132, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M3',
            data: [220, 182, 191, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M3',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M3',
            data: [862, 1018, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M4',
            data: [320, 332, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M4',
            data: [120, 132, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M4',
            data: [220, 182, 191, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M4',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M4',
            data: [862, 1018, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M5',
            data: [201, 321, 312, 343, 900]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M5',
            data: [120, 32, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M5',
            data: [220, 182, 11, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M5',
            data: [150, 232, 21, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M5',
            data: [862, 18, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M6',
            data: [320, 332, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M6',
            data: [120, 132, 101, 134, 10]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M6',
            data: [220, 182, 11, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M6',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M6',
            data: [862, 108, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M7',
            data: [320, 32, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M7',
            data: [120, 132, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M7',
            data: [220, 182, 191, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M7',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M7',
            data: [862, 1018, 964, 1026, 1679]
          },
          {
            name: '直接访问',
            type: 'bar',
            stack: 'M8',
            data: [320, 332, 301, 334, 390]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M8',
            data: [120, 132, 101, 134, 90]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M8',
            data: [220, 182, 191, 234, 290]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M8',
            data: [150, 232, 201, 154, 190]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: 'M8',
            data: [862, 1018, 964, 1026, 1679]
          }
        ]
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine2)
      drawBarLine.setOption(option)
    },
    drawBarLine1 () {
      let histogramChart = echarts.init(this.$refs.drawBarLine1)
      histogramChart.setOption({
        title: {
          text: 'Think T月供应日进展',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            restore: {}
          }
        },
        grid: {
          left: 100
        },
        legend: {
          data: ['Fin Tar', 'Market Tar', 'MTD CA', 'INV', 'Togo Supply', 'ONS，NO PO']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['Think_T_TP_Edge', 'Think_T_TP_Premium', 'Think_T_TP', 'Think_T_TC_AIO', 'Think_T_TC_BOX', 'Think_T_TC', 'Think_T']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
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
        series: [
          {
            name: 'Fin Tar',
            type: 'bar',
            data: [15700, 10400, 60900, 87000, 100, 2000, 30000]
          },
          {
            name: 'Market Tar',
            type: 'bar',
            data: [25000, 35000, 70000, 130000, 25000, 35000, 70000]
          },
          {
            name: 'MTD CA',
            type: 'bar',
            stack: 'bar3',
            data: [3400, 3056, 6792, 1648, 3492, 3564, 692]
          },
          {
            name: 'INV',
            type: 'bar',
            stack: 'bar3',
            data: [3400, 3056, 6792, 1648, 3492, 3564, 692]
          },
          {
            name: 'Togo Supply',
            type: 'bar',
            stack: 'bar3',
            data: [3400, 3056, 6792, 1648, 3492, 3564, 692]
          },
          {
            name: 'ONS',
            type: 'bar',
            stack: 'bar3',
            data: [3400, 3056, 6792, 1648, 3492, 3564, 692]
          },
          {
            name: 'NO PO',
            type: 'bar',
            stack: 'bar3',
            data: [3400, 3056, 6792, 1648, 3492, 3564, 692]
          }
        ]
      })
    },
    toggleList () {
      let sn = document.getElementsByClassName('sn')[0]
      if (this.toggle) {
        sn.style.display = 'none'
      } else {
        sn.style.display = 'block'
      }
      this.toggle = !this.toggle
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
.alloview
  width 100%
  padding 10px
  .alloItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
      .form-box
        min-width 80px
        height auto
        float right
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
        background #fdbc40
        font-size 12px
        box-sizing border-box
        &:hover
          background #ff9933
    .sn
      width 96%
      margin 0 2%
      padding 5px
      min-height 40px
      height auto
      display none
      overflow hidden
      background #fff
    .histogram
      width 1200px
      height 380px
</style>








