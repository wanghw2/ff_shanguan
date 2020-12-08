<template>
<div class="sup-box">
  <div class="topBox">
    <div class="topLeft">
      <div class="waterGraph" ref="waterGraph"></div>
      <ul class="topBox-bottom">
        <li><span>242K</span><span>MTD供应</span></li>
        <li><span>114K</span><span>本月上限</span></li>
        <li><span>22K</span><span>本月备货</span></li>
        <li><span>42K</span><span>本月供应</span></li>
        <li><span>342K</span><span>本月Commit</span></li>
      </ul>
    </div>
    <div class="topRight">
      <ul class="topRight-item">
        <li>
          <h3>自然分货</h3>
          <ul class="list">
            <li>MTD供应<span>80k</span></li>
            <li>本月供应<span>20k</span></li>
            <li>有效来单<span>30k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" :percentage="9"></el-progress>
          </div>
          <div class="progress2">
            <el-progress type="circle" :width="55" :percentage="8"></el-progress>
          </div>
          <ul class="status">
            <li><span>50</span>本月备货</li>
            <li><span>50</span>备货指导</li>
            <li><span>80</span>累计订单</li>
          </ul>
        </li>
        <li>
          <h3>比例分货</h3>
          <ul class="list">
            <li>MTD供应<span>80k</span></li>
            <li>本月供应<span>20k</span></li>
            <li>有效来单<span>30k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" :color="'#8e71c7'" :percentage="80"></el-progress>
          </div>
          <div class="progress2">
            <el-progress type="circle" :width="55" :color="'#8e71c7'" :percentage="8"></el-progress>
          </div>
          <ul class="status">
            <li><span>50</span>本月备货</li>
            <li><span>50</span>备货指导</li>
            <li><span>80</span>累计订单</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <h2>供应 VS 订单
    <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
  </h2>
  <div class="addgrid addgrid0">
    <v-table
      :sheetsName="'供应VS订单'"
      :tableName='"ConNB_Supply_Analysis"'
      :source="'FF_IDSS_Data_CON'"
      :fileName="'供应VS订单'">
    </v-table>
  </div>
  <div class="drawBarLine" ref="drawBarLine1"></div>
  <div class="drawBarLine" ref="drawBarLine2"></div>
  <div class="pieGraph" ref="pieGraph1"></div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
export default {
  data () {
    return {
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
      familys: [],
      toggle: true
    }
  },
  components: {
    VTable
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawBarLine1()
      this.drawBarLine2()
      this.toggleList()
      this.water()
      this.pie1()
    }, 3000)
  },
  methods: {
    drawBarLine1 () {
      var option = {
        title: {
          text: '自然确认机型',
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '直接访问1', '邮件营销1', '联盟广告1', '视频广告1', '直接访问2', '邮件营销2', '联盟广告2', '视频广告2'],
          left: '20%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['family1', 'family2', 'family3', 'family4', 'family5', 'family6', 'family7']
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
            name: '直接访问',
            type: 'bar',
            stack: 'M1',
            data: [201, 321, 312, 343, 900, 300, 200]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M1',
            data: [120, 32, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M1',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M1',
            data: [150, 232, 21, 154, 190, 330, 410]
          },
          {
            name: '直接访问1',
            type: 'bar',
            stack: 'M2',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销1',
            type: 'bar',
            stack: 'M2',
            data: [120, 132, 101, 134, 10, 230, 210]
          },
          {
            name: '联盟广告1',
            type: 'bar',
            stack: 'M2',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: '视频广告1',
            type: 'bar',
            stack: 'M2',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问2',
            type: 'bar',
            stack: 'M3',
            data: [320, 32, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销2',
            type: 'bar',
            stack: 'M3',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '联盟广告2',
            type: 'bar',
            stack: 'M3',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告2',
            type: 'bar',
            stack: 'M3',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine1)
      drawBarLine.setOption(option)
    },
    drawBarLine2 () {
      var option = {
        title: {
          text: '分货机型',
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '直接访问1', '邮件营销1', '联盟广告1', '视频广告1', '直接访问2', '邮件营销2', '联盟广告2', '视频广告2'],
          left: '20%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['family1', 'family2', 'family3', 'family4', 'family5', 'family6', 'family7']
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
            name: '直接访问',
            type: 'bar',
            stack: 'M1',
            data: [201, 321, 312, 343, 900, 300, 200]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: 'M1',
            data: [120, 32, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: 'M1',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: 'M1',
            data: [150, 232, 21, 154, 190, 330, 410]
          },
          {
            name: '直接访问1',
            type: 'bar',
            stack: 'M2',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销1',
            type: 'bar',
            stack: 'M2',
            data: [120, 132, 101, 134, 10, 230, 210]
          },
          {
            name: '联盟广告1',
            type: 'bar',
            stack: 'M2',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: '视频广告1',
            type: 'bar',
            stack: 'M2',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问2',
            type: 'bar',
            stack: 'M3',
            data: [320, 32, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销2',
            type: 'bar',
            stack: 'M3',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '联盟广告2',
            type: 'bar',
            stack: 'M3',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告2',
            type: 'bar',
            stack: 'M3',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine2)
      drawBarLine.setOption(option)
    },
    water () {
      var option = {
        title: {
          text: 'MTD供应 VS 本月上限',
          x: 'center',
          textStyle: {
            fontSize: 14
          }
        },
        gird: {
          top: 150
          // left: 'center',
          // containLabel: true
        },
        series: [{
          type: 'liquidFill',
          data: [
            {
              value: 0.75,
              direction: 'left',
              itemStyle: {
                color: '#4F94B6'
              }
            }
          ],
          radius: '50%'
        }],
        label: { // 容器内部字体
          normal: {
            // formatter: '{b}\n{a}',//格式化输出 默认是百分比
            // formatter: '{a}\n{b}\nvalue:{c}',
            textStyle: {
              fontSize: '12px'
            }
          }
        }
      }
      let waterGraph = echarts.init(this.$refs.waterGraph)
      waterGraph.setOption(option)
    },
    pie1 () {
      var option = {
        title: {
          text: '标题1',
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
            radius: [0, '30%'],
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
            radius: ['35%', '48%'],
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
      let pieGraph = echarts.init(this.$refs.pieGraph1)
      pieGraph.setOption(option)
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid0')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
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
  .topBox
    height 325px
    width 100%
    padding 10px
    margin-bottom 10px
    overflow hidden
    .topLeft
      width 480px
      height auto
      float left
      overflow hidden
      .waterGraph
        width 480px
        height 300px
      .topBox-bottom
        margin-top -55px
        width 480px
        height 100px
        li
          float left
          width 94px
          border-right dashed 2px #ccc
          &:first-child
            border-left dashed 2px #ccc
          span
            display block
            width 94px
            height 30px
            text-align center
            &:first-child
              font-weight bold
              font-size 14px
    .topRight
      width 580px
      height auto
      overflow hidden
      float right
      margin-top 122px
      .progress-title
        width 100%
        height 30px
        line-height 30px
      .topRight-item
        width 100%
        height auto
        >li
          border-bottom 1px solid #ccc
          // border-right 1px solid #ccc
          width 100%
          height 91px
          &:first-child
            border-top 1px solid #ccc
          h3
            width 100px
            height 90px
            line-height 90px
            text-align center
            float left
          .list
            width 125px
            height auto
            overflow hidden
            float left
            li
            height 30px
            line-height 30px
            border-bottom 0
            span
              display inline-block
              width 70px
              height 30px
              float right
              text-align right
          .progress,.progress2
            float left
            width 75px
            height 90px
            margin-left 10px
            text-align center
            padding-top 18px
          .progress2
            text-align right
          .status
            width 180px
            height auto
            overflow hidden
            float left
            li
              width 100%
              height 30px
              line-height 30px
              color #ccc
              span
                width 80px
                height 30px
                line-height 30px
                color #333
                text-align center
                display inline-block
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
  .addgrid
    min-height 10px
    width 100%
    overflow hidden
    margin 10px 0px
  .pieGraph
    width 70%
    height 380px
    margin-top 10px
  .drawBarLine
    width 100%
    height 400px
    margin 10px 0
 </style>
