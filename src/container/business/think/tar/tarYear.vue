<template>
  <div class="yearGoal">
    <div class="Annual_business_line">
      <div class="toggle">
        <el-button type="primary" size="small">全选</el-button>
        <el-button type="info" size="small" >清空</el-button>
      </div>
      <div class="year_Business_line">
        <span class="lable">业务线：</span>
        <el-select v-model="businessLineval" placeholder="请选择" class="Business_line" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="check-box">
        <ul class="checkUl">
          <li v-for="(item, index) in productName" :key="index">
            <span class="Product_model">{{item.name}}</span>
              <template>
              <label v-for="(subItem, i) in item.content" :key="i"><input :id="subItem.id" type="checkbox">{{subItem.tagName}}</label>
              </template>
          </li>
        </ul>
      </div>
      <div id="myChart" style="width: 800px;height:400px;">
      </div>
      <div id="quarter_Chart" style="width: 800px;height:400px;">
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      products: false,
      businessLineval: '',
      options: [
        {
          value: '选项1',
          label: 'ThinCent'
        },
        {
          value: '选项2',
          label: 'ThinCent2'
        },
        {
          value: '选项3',
          label: 'ThinCent3'
        }, {
          value: '选项4',
          label: 'ThinCent4'
        }, {
          value: '选项5',
          label: 'ThinCent5'
        }
      ],
      'productName': [
        {
          'name': 'M 0',
          'content': [
            {
              'tagName': 'FY16',
              'id': 1237843
            },
            {
              'tagName': 'FY17',
              'id': 1231543
            },
            {
              'tagName': 'FY18',
              'id': 1223343
            },
            {
              'tagName': 'FY18',
              'id': 1234323
            }
          ]
        },
        {
          'name': 'M 1',
          'content': [
            {
              'tagName': 'FY16',
              'id': 1234355
            },
            {
              'tagName': 'FY17',
              'id': 12343756
            },
            {
              'tagName': 'FY18',
              'id': 12343099
            },
            {
              'tagName': 'FY18',
              'id': 12343233333
            }
          ]
        },
        {
          'name': 'M 2',
          'content': [
            {
              'tagName': 'FY16',
              'id': 12343000
            },
            {
              'tagName': 'FY17',
              'id': 1234398888
            },
            {
              'tagName': 'FY18',
              'id': 1234300876
            },
            {
              'tagName': 'FY18',
              'id': 1234323322333
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine2()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '年度目标' },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            dataView: {
              show: true
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine2 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('quarter_Chart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '' },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            dataView: {
              show: true
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: ['Q1', 'Q2', 'Q3', 'Q4']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 45]
        }]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.yearGoal
  width 100%
  height 100%
  background #fff
.Annual_business_line
  padding 20px
  .year_Business_line
    margin-top 20px
    .lable 
      width 80px
      height 40px
      line-height 32px
      display inline-block
      font-size 14px
      text-align left
      float: left
    .Business_line
      width 150px
      height 32px
 .check-box
    width 100%
    min-height 100px
    overflow hidden
    // margin 20px 0
    background #fcfcfc
    margin-top 20px
    span 
      width 60px
      height 32px
      line-height 32px
      font-size 14px
      float left
      display inline-block
    .checkUl
      float left
      li
        width 100%
        height 32px 
        line-height 32px
        margin-right 15px
        .Product_model
          font-size 14px
        input
          margin-right 5px
          height 32px 
          float left
          line-height 32px
          background none
        label
          height 32px
          padding 0 8px
          float left
        select 
          width 150px
          height 32px
          float left
        .orderDate
          width 150px
          height 32px 
          line-height 32px
          float left
          padding-right 5px
        .orderTo
          width 60px
          height 32px 
          line-height 32px
          text-align center 
          float left
</style>
