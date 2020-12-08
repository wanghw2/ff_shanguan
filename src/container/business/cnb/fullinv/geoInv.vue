<template>
<div class="fullinv">
  <h2>全国SO分布
    <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
  </h2>
  <div class="grid">
    <v-table-query
      :params='params'
      :url="'getPushOut'"
      :columnurl="'queryTableColumns251'"
      :sheetsName="'ConNB_全国SO分布'"
      :tableName='"ConNB_SellOut_Capacity_Territory_Detail_Province"'
      :source="'FF_IDSS_Data_CON'"
      :fileName="'ConNB_全国SO分布'"
      ref="gridSO">
    </v-table-query>
  </div>
  <div ref="mapchartchina" style="width:1200px;height: 500px;margin:10px auto;"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import VTableQuery from '@/components/public/vtableQuery'
// import formPublic from '@/components/public/formPublic'
// import axios from 'axios'
export default {
  data () {
    return {
      params: {},
      toggle: true
    }
  },
  components: {
    VTableQuery
    // formPublic
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.mapchartchina()
      this.toggleList()
    }, 300)
  },
  methods: {
    onSubmit (form) {
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('grid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    mapchartchina () {
      let myChart = echarts.init(this.$refs.mapchartchina)
      var nametitle = '中国人民大学2017年各省市计划录取人数'
      var mapName = 'china'
      var data = [
        {name: '北京', value: 177},
        {name: '天津', value: 42},
        {name: '河北', value: 102},
        {name: '山西', value: 81},
        {name: '内蒙古', value: 47},
        {name: '辽宁', value: 67},
        {name: '吉林', value: 82},
        {name: '黑龙江', value: 66},
        {name: '上海', value: 24},
        {name: '江苏', value: 92},
        {name: '浙江', value: 114},
        {name: '安徽', value: 109},
        {name: '福建', value: 116},
        {name: '江西', value: 91},
        {name: '山东', value: 119},
        {name: '河南', value: 137},
        {name: '湖北', value: 116},
        {name: '湖南', value: 114},
        {name: '重庆', value: 91},
        {name: '四川', value: 125},
        {name: '贵州', value: 62},
        {name: '云南', value: 83},
        {name: '西藏', value: 9},
        {name: '陕西', value: 80},
        {name: '甘肃', value: 56},
        {name: '青海', value: 10},
        {name: '宁夏', value: 18},
        {name: '新疆', value: 67},
        {name: '广东', value: 123},
        {name: '广西', value: 59},
        {name: '海南', value: 14}
      ]
      var geoCoordMap = {}
      var toolTipData = [
        {name: '北京', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]},
        {name: '天津', value: [{name: '文科', value: 22}, {name: '理科', value: 20}]},
        {name: '河北', value: [{name: '文科', value: 60}, {name: '理科', value: 42}]},
        {name: '山西', value: [{name: '文科', value: 40}, {name: '理科', value: 41}]},
        {name: '内蒙古', value: [{name: '文科', value: 23}, {name: '理科', value: 24}]},
        {name: '辽宁', value: [{name: '文科', value: 39}, {name: '理科', value: 28}]},
        {name: '吉林', value: [{name: '文科', value: 41}, {name: '理科', value: 41}]},
        {name: '黑龙江', value: [{name: '文科', value: 35}, {name: '理科', value: 31}]},
        {name: '上海', value: [{name: '文科', value: 12}, {name: '理科', value: 12}]},
        {name: '江苏', value: [{name: '文科', value: 47}, {name: '理科', value: 45}]},
        {name: '浙江', value: [{name: '文科', value: 57}, {name: '理科', value: 57}]},
        {name: '安徽', value: [{name: '文科', value: 57}, {name: '理科', value: 52}]},
        {name: '福建', value: [{name: '文科', value: 59}, {name: '理科', value: 57}]},
        {name: '江西', value: [{name: '文科', value: 49}, {name: '理科', value: 42}]},
        {name: '山东', value: [{name: '文科', value: 67}, {name: '理科', value: 52}]},
        {name: '河南', value: [{name: '文科', value: 69}, {name: '理科', value: 68}]},
        {name: '湖北', value: [{name: '文科', value: 60}, {name: '理科', value: 56}]},
        {name: '湖南', value: [{name: '文科', value: 62}, {name: '理科', value: 52}]},
        {name: '重庆', value: [{name: '文科', value: 47}, {name: '理科', value: 44}]},
        {name: '四川', value: [{name: '文科', value: 65}, {name: '理科', value: 60}]},
        {name: '贵州', value: [{name: '文科', value: 32}, {name: '理科', value: 30}]},
        {name: '云南', value: [{name: '文科', value: 42}, {name: '理科', value: 41}]},
        {name: '西藏', value: [{name: '文科', value: 5}, {name: '理科', value: 4}]},
        {name: '陕西', value: [{name: '文科', value: 38}, {name: '理科', value: 42}]},
        {name: '甘肃', value: [{name: '文科', value: 28}, {name: '理科', value: 28}]},
        {name: '青海', value: [{name: '文科', value: 5}, {name: '理科', value: 5}]},
        {name: '宁夏', value: [{name: '文科', value: 10}, {name: '理科', value: 8}]},
        {name: '新疆', value: [{name: '文科', value: 36}, {name: '理科', value: 31}]},
        {name: '广东', value: [{name: '文科', value: 63}, {name: '理科', value: 60}]},
        {name: '广西', value: [{name: '文科', value: 29}, {name: '理科', value: 30}]},
        {name: '海南', value: [{name: '文科', value: 8}, {name: '理科', value: 6}]}
      ]
      myChart.showLoading()
      var mapFeatures = echarts.getMap(mapName).geoJson.features
      myChart.hideLoading()
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp
      })
      var max = 480
      var min = 9
      var maxSize4Pin = 100
      var minSize4Pin = 20
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      var option = {
        title: {
          text: nametitle,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var toolTiphtml = ''
            if (typeof (params.value)[2] === 'undefined') {
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name === toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ':<br>'
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '<br>'
                  }
                }
              }
              return toolTiphtml
            } else {
              for (var m = 0; m < toolTipData.length; m++) {
                if (params.name === toolTipData[m].name) {
                  toolTiphtml += toolTipData[m].name + ':<br>'
                  for (var n = 0; n < toolTipData[m].value.length; n++) {
                    toolTiphtml += toolTipData[m].value[n].name + ':' + toolTipData[m].value[n].value + '<br>'
                  }
                }
              }
              return toolTiphtml
            }
          }
        },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#F79646', 'yellow'] // 黄橙
            color: ['lightskyblue', 'yellow', 'orangered']
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            emphasis: {
              areaColor: 'red'
            }
          }
        },
        series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: 'lightblue'
            }
          }
        },
        {
          type: 'map',
          map: mapName,
          geoIndex: 0,
          aspectScale: 0.75, // 长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          animation: false,
          data: data
        },
        {
          name: '点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin', // 气泡
          symbolSize: function (val) {
            var a = (maxSize4Pin - minSize4Pin) / (max - min)
            var b = minSize4Pin - a * min
            b = maxSize4Pin - a * max
            return a * val[2] + b
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 9
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#F62157' // 标志颜色
            }
          },
          zlevel: 6,
          data: convertData(data)
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value
          }).slice(0, 5)),
          symbolSize: function (val) {
            return val[2] / 10
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow',
              shadowBlur: 10,
              shadowColor: 'yellow'
            }
          },
          zlevel: 1
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fullinv
  width 100%
  height 100%
  padding 10px
  overflow hidden
  h2
    width 100%
    height 38px
    line-height 38px
    font-weight normal
    box-shadow: 0 2px 8px #ccc
    font-size 14px
    padding 0 20px
    margin 5px 0
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
  .grid
    width 100%
    height auto
    overflow hidden
    margin 10px auto
</style>
