<template>
<div class="inv-box">
  <div class="content">
    <h2>FGI_Aging_Tracking
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid addgrid1">
      <v-table
        :sheetsName="'ConNB_CDC库存监控'"
        :tableName="'ConNB_FGI_Aging_Tracking'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'ConNB_CDC库存监控'"
        ref="grida">
      </v-table>
    </div>
    <div class="pie-box">
      <div class="pieGraph" ref="piegraph1"></div>
      <div class="pieGraph" ref="piegraph2"></div>
      <div class="pieGraph" ref="piegraph3"></div>
    </div>
    <h2>FGI_Tracking
      <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid addgrid2">
      <v-table
        :sheetsName="'ConNB_CDC库存监控'"
        :tableName="'ConNB_FGI_Tracking'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'ConNB_CDC库存监控'"
        ref="gridb">
      </v-table>
    </div>
    <div class="barchart" ref="barchart1"></div>
    <h2>FGI_Overview
      <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid addgrid3">
      <v-table
        :sheetsName="'ConNB_CDC库存监控'"
        :tableName="'ConNB_FGI_Overview'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'ConNB_CDC库存监控'"
        ref="gridc">
      </v-table>
    </div>
    <div class="barchart" ref="barchart2"></div>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.piegraph1()
      this.piegraph2()
      this.piegraph3()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.barchart1()
      this.barchart2()
    }, 3000)
  },
  methods: {
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
    },
    piegraph1 () {
      var option = {
        title: {
          text: '当前库存数量',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph1)
      pieGraph.setOption(option)
    },
    piegraph2 () {
      var option = {
        title: {
          text: '月底超期数量',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph2)
      pieGraph.setOption(option)
    },
    piegraph3 () {
      var option = {
        title: {
          text: '月底超期金额',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph3)
      pieGraph.setOption(option)
    },
    barchart1 () {
      let barchart = echarts.init(this.$refs.barchart1)
      var option = {
        title: {
          text: '库存目标 VS 库存达成',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        legend: {
          data: ['Backlog', '新增']
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        xAxis: {
          type: 'category',
          data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
        },
        grid: {
          bottom: '15%'
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
        toolbox: {
          show: true,
          feature: {
            // dataZoom: {
            //   yAxisIndex: 'none'
            // },
            dataView: {readOnly: false},
            // magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Backlog',
          data: [120, 200, 150, 80, 90, 66, 155],
          type: 'bar',
          barWidth: '35px',
          stack: '趋势'
        }, {
          name: '新增',
          data: [30, 210, 50, 90, 89, 123, 231],
          type: 'bar',
          stack: '趋势'
        }, {
          name: '趋势',
          data: [180, 440, 230, 200, 199, 219, 416],
          type: 'line'
        }]
      }
      barchart.setOption(option)
    },
    barchart2 () {
      let barchart = echarts.init(this.$refs.barchart2)
      var option = {
        title: {
          text: '超期目标 VS 超期达成',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        legend: {
          data: ['Target', 'Strech Target', 'Actual', 'Actual1', 'Actual/Target']
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
        },
        grid: {
          bottom: '15%'
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
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        yAxis: [{
          type: 'value'
        },
        {
          type: 'value',
          min: 0,
          max: 100,
          position: 'right',
          axisLabel: {
            formatter: '{value} %'
          }
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        series: [{
          name: 'Target',
          data: [120, 200, 150, 80, 90, 66, 155],
          type: 'bar',
          stack: '趋势'
        }, {
          name: 'Strech Target',
          data: [30, 210, 50, 90, 89, 123, 231],
          type: 'bar',
          stack: '趋势'
        }, {
          name: 'Actual',
          data: [120, 540, 530, 290, 329, 619, 236],
          type: 'bar'
        }, {
          name: 'Actual1',
          data: [180, 440, 230, 200, 199, 219, 416],
          type: 'bar'
        }, {
          name: 'Actual/Target',
          data: [10, 40, 20, 20, 19, 19, 46],
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          label: {
            formatter: '{value}%'
          }
        }]
      }
      barchart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height 100%
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
    .pie-box
      width 100%
      height 350px
      margin 10px auto
      .pieGraph
        width 33%
        height 350px
        float left
        padding 10px 5px
    .barchart
      width 100%
      height 400px
</style>
