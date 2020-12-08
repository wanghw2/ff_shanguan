<template>
  <div class="allocview-box">
    <table class="tablebox" border="1" >
      <tr>
        <th>客户细分</th>
        <th>全月可分</th>
        <th>累计来单</th>
        <th>有效订单</th>
        <th>累计确认</th>
        <th>转储出库</th>
        <th>今日应分</th>
        <th>今日预计确认</th>
      </tr>
      <tr class="alt">
        <td>传统渠道</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RKA</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="alt">
        <td>线上渠道</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>直营</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <h2>进度监控</h2>
    <div class="fcst-wrap">
      <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
        <el-form-item label="客户细分" prop="cussegment">
          <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cussegments"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
          <el-button type="primary" size="mini" >数据下载</el-button>
        </el-form-item>
      </el-form>
      <div class="block">
        <div class="stack" ref="stack"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      form: {
        cussegment: '',
        materialcode: ''
      },
      cussegments: [{value: '第三方', label: '第三方'}]
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    drawStack () {
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['全月可分', '累计来单', '有效订单', '日供应', '累计确认'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 80
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 80
          }
        ],
        grid: {
          left: '5%',
          right: '18%',
          top: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {type: 'value'},
        series: [
          {
            name: '全月可分',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '累计来单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '日供应',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '累计确认',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效订单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack)
      stackChart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allocview-box
  width 100%
  height 100%
  padding 10px
  .tablebox
    width 100%
    margin 8px 0
    border-collapse collapse
    td,th
      font-size 1em
      border 1px solid #98bf21
      padding 3px 7px 2px 7px
    th
      font-size 1.1em
      padding-top 5px
      padding-bottom 4px
      background-color #A7C942
      color #ffffff
    tr.alt td
      color #000000
      background-color #EAF2D3
  .fcst-wrap
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
    .stack
      width 80%
      height 400px
      float left
      margin-bottom 20px
</style>

