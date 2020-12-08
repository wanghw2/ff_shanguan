<template>
  <div class="optINV">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>Think选件Aging Inv
              <div class="form-box">
                <a href="javascript:" class="fold" @click="toggleList" v-text="toggle ? '预警折叠' : '预警展开'"></a>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updataOptINV2"
                  :menuId="'77'"
                  :logTableName="'Think_OPT_WriteOff'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <div class="sn">
                <message-box></message-box>
              </div>
              <div class='histogram' ref='histogram1'></div>
              <v-table2
                :sheetsName="'Think选件Aging_Inv'"
                :tableName='"Think_OPT_WriteOff"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件Aging_Inv'"
                ref="gridOptINV2">
              </v-table2>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>Think选件消耗计划
              <div class="form-box">
                <upload
                  @on-success="updateoptconsume"
                  @updateTimeChange="updateoptconsume1"
                  :sheetsName="'Think选件消耗计划'"
                  :logTableName="'Think_OPT_Consume_Plan'"
                  :logObj="'gridoptconsume'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'Think选件消耗计划'"
                :tableName="'Think_OPT_Consume_Plan'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件消耗计划'"
                ref="gridoptconsume">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2>Think选件DOI
              <div class="form-box">
                <a href="javascript:" class="fold" @click="toggleList1" v-text="toggle1 ? '预警折叠' : '预警展开'"></a>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updataOptINV1"
                  :menuId="'77'"
                  :logTableName="'Think_OPT_DOI'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <div class="sn1">
                <message-box></message-box>
              </div>
              <div class='histogram' ref='histogram'></div>
              <v-table2
                :sheetsName="'Think选件DOI'"
                :tableName='"Think_OPT_DOI"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think选件DOI'"
                ref="gridOptINV1">
              </v-table2>
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
import VTable2 from '@/components/public/vtable2'
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
import Upload from '@/components/public/upload1'
import vtableEdit from '@/components/public/vtableEdit'
// const $ = window.$
export default {
  data () {
    return {
      disabled: false,
      tabPosition: 'left',
      toggle: false,
      toggle1: false,
      menuArr: ['选件Aging Inv', '选件消耗计划', '选件DOI']
    }
  },
  components: {
    VTable,
    vtableEdit,
    Upload,
    VTable2,
    messageBox,
    updata
  },
  mounted () {
    this.drawHistogramChart()
    this.drawHistogramChart1()
  },
  methods: {
    drawHistogramChart () {
      var base = +new Date(1968, 9, 3)
      var oneDay = 24 * 3600 * 1000
      var date = []
      var data = [Math.random() * 300]
      for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay)
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
      }
      let histogramChart = echarts.init(this.$refs.histogram)
      histogramChart.setOption({
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['Box fin tar', 'Dmd', 'Sup', 'Delta']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: date
          }
        ],
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, '100%']
          }
        ],
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10
        }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }],
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              }
            },
            data: data
          }
        ]
      })
    },
    drawHistogramChart1 () {
      let myChart = echarts.init(this.$refs.histogram1)
      setTimeout(function () {
        var option = {
          legend: {left: 40, top: 20},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              [],
              ['坏品', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['BTC', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['A', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['DOA库存', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['显示器', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '120D Reserve',
              data: [41.1, 30.4, 65.1, 53.3, 83.8, 98.7]
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '160D Reserve',
              data: [86.5, 92.1, 85.7, 83.1, 73.4, 55.1]
            },
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
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
      let sn1 = document.getElementsByClassName('sn1')[0]
      if (this.toggle1) {
        sn1.style.display = 'none'
      } else {
        sn1.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    updataOptINV1 () {
      this.$refs.gridOptINV1.updateTabFun()
    },
    updataOptINV2 () {
      this.$refs.gridOptINV2.updateTabFun()
    },
    updateoptconsume () { // 上传后自动刷新表格数据
      this.$refs.gridoptconsume.updateTabFun()
    },
    updateoptconsume1 () { // 上传后自动刷新表格数据
      this.$refs.gridoptconsume.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.optINV
  width 100%
  height 100%
  padding 10px
  .mtmItem
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
        padding 0 20px
        margin-bottom 5px
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
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
      .histogram, .histogram1
        width 1200px
        height 350px
      .sn, .sn1
        width 100%
        padding 5px
        min-height 40px
        height auto
        display none
        overflow hidden
        background #fff
</style>
