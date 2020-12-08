<template>
  <div>
    <div>
      <div class="graph">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </div>
      <div class="graph1">
        <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
      </div>
      <div class="graph2">
        <ve-ring :data="chartData1" :settings="chartSettings1"></ve-ring>
      </div>
    </div>
    <div class="graph3">
      <span>当前选中了: {{ cityName || '-' }}</span>
      <ve-map :data="chartData2" :settings="chartSettings2" :events="chartEvents"></ve-map>
    </div>
    <div class="graph4">
      <ve-candle :data="chartData3" :settings="chartSettings3" :events="chartEvents"></ve-candle>
    </div>
    <div class="graph5">
      <ve-tree :data="chartData4" :settings="chartSettings4"></ve-tree>
    </div>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
import VeRing from 'v-charts/lib/ring'
import Vemap from 'v-charts/lib/map'
import VeCandle from 'v-charts/lib/candle'
import VeTree from 'v-charts/lib/tree'
export default {
  data () {
    return {
      chartData: {},
      chartSettings: {},
      chartData1: {},
      chartSettings1: {},
      chartData2: {},
      chartSettings2: {},
      chartData3: {},
      chartSettings3: {},
      chartData4: {},
      chartSettings4: {},
      chartEvents: null,
      cityName: ''
    }
  },
  components: {
    VeLine,
    VeHistogram,
    VeRing,
    Vemap,
    VeTree,
    VeCandle
  },
  created () {
    this.chartData = {
      columns: ['日期', '成本', '利润', '占比', '其他'],
      rows: [
        { '成本': 1523, '日期': '2018年1月1日', '利润': 15, '占比': 0.12, '其他': 100 },
        { '成本': 1223, '日期': '2018年1月2日', '利润': 123, '占比': 0.345, '其他': 100 },
        { '成本': 2123, '日期': '2018年1月3日', '利润': 523, '占比': 0.7, '其他': 100 },
        { '成本': 4123, '日期': '2018年1月4日', '利润': 115, '占比': 0.31, '其他': 100 },
        { '成本': 3123, '日期': '2018年1月5日', '利润': 1523, '占比': 0.12, '其他': 100 },
        { '成本': 7123, '日期': '2018年1月6日', '利润': 1123, '占比': 0.65, '其他': 100 }
      ]
    }
    this.chartSettings = {
      metrics: ['成本', '利润'],
      dimension: ['日期'],
      showLine: ['利润']
    }
    this.chartData1 = {
      columns: ['日期', '成本', '利润'],
      rows: [
        { '日期': '1月1号', '成本': 123, '利润': 3 },
        { '日期': '1月2号', '成本': 1223, '利润': 6 },
        { '日期': '1月3号', '成本': 2123, '利润': 90 },
        { '日期': '1月4号', '成本': 4123, '利润': 12 },
        { '日期': '1月5号', '成本': 3123, '利润': 15 },
        { '日期': '1月6号', '成本': 7123, '利润': 20 }
      ]
    }
    this.chartSettings1 = {
      dimension: '成本',
      metrics: '利润'
    }
    // 地图
    this.chartData2 = {
      columns: ['位置', 'GDP'],
      rows: [
        { '位置': '吉林', 'GDP': 123 },
        { '位置': '北京', 'GDP': 1223 },
        { '位置': '上海', 'GDP': 2123 },
        { '位置': '上海', 'GDP': 2123 },
        { '位置': '新疆', 'GDP': 3123 }
      ]
    }
    this.chartSettings2 = {
      labelMap: {
        'GDP': '国内生产总值'
      },
      position: 'china', // 默认为'china',可设置的类型有'china'、'china-cities'、'china-contour'、'world'、'province/beijing'、'province/shanghai'等
      label: true, // 显示地图上的各个城市名称
      selectData: true, // 是否高亮显示数据对应位置
      selectedMode: 'single', // 地图选中模式 默认为 false, 可选值有'single', 'multiple'
      itemStyle: { // 地图区域的多边形 图形样式
        normal: {
          borderColor: 'green',
          areaColor: '#f1f1f1'
        }
      },
      zoom: 1.1 // 视角的缩放比例
    }
    this.chartEvents = {
      click: (v) => {
        this.cityName = v.name
      }
    }
    this.chartData3 = {
      columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
      rows: [
        { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
        { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
        { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
        { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
        { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
        { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
        { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
        { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
        { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
        { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
        { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
        { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
        { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
        { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
        { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
        { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
        { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
        { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
        { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
        { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
        { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
        { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
        { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
        { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
        { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
        { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
        { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
        { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
        { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
        { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
        { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
        { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
        { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
        { '日期': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
        { '日期': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
        { '日期': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
        { '日期': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
        { '日期': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
      ]
    }
    this.chartSettings3 = {
      showMA: true,
      showVol: true,
      labelMap: {
        MA5: 'ma5'
      },
      legendName: {
        '日K': 'day k'
      },
      showDataZoom: true
    }
    const conData = {
      'name': 'ConNB',
      'children': [
        {
          'name': '传统本',
          'children': [
            {
              'name': '小新310',
              'children': [
                {
                  'name': '小新310-15',
                  'value': 2
                }
              ]
            },
            {
              'name': '310',
              'children': [
                {
                  'name': '310-15',
                  'value': 1
                }
              ]
            },
            {
              'name': '510',
              'children': [
                {
                  'name': '510-15',
                  'value': 1
                }
              ]
            }
          ]
        }
      ]
    }
    this.chartData4 = {
      columns: ['name', 'value'],
      rows: [
        {
          name: 'ConNB',
          value: [conData]
        }
      ]
    }
    this.chartSettings4 = {
      seriesMap: {
        ConNB: {
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%',
          symbolSize: 23
        }
      }
    }
    return {
      cityName: ''
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
div
  width 100%
  height 100%
  background #fff
  padding-top 10px
  overflow hidden
.graph
  width 32%
  // height 400px
  float left
  margin-left 10px
.graph1
  width 32%
  height 400px
  float left
  margin-left 10px
.graph2
  width 32%
  height 400px
  float left
.graph3,
  width 100%
  height 800px
.graph4
  width 100%
  height 400px
.graph5
  width 1000px
  height 400px
</style>
