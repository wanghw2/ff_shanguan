<template>
  <div class="db-box">
    <div class="db-wrap">
      <el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-form-inline">
        <el-form-item label="时间纬度" prop="timedem" >
          <el-select v-model="form.timedem" size="mini"  filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in timedems"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分1" prop="cussegment1">
          <el-select v-model="form.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cussegment1s"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道编号" prop="qdcode">
          <el-select v-model="form.qdcode" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in qdcodes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品Family" prop="productfamily">
          <el-select v-model="form.productfamily" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in productfamilys"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间范围" prop="timerange">
          <el-select v-model="form.timerange" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in timeranges"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分4" prop="cussegment4">
          <el-select v-model="form.cussegment4" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cussegment1s"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道名称" prop="qdname">
          <el-select v-model="form.qdname" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in qdnames"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料描述" prop="martidesc">
          <el-select v-model="form.martidesc" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in martidescs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编号" prop="materialcode">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="产品组" prop="productgroup">
          <el-select v-model="form.productgroup" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in productgroups"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <div class="graph-box">
        <div class="goalChart" ref="goalChart"></div>
        <div class="caChart" ref="caChart"></div>
      </div>
      <div class="graph-box">
        <div class="cradChart" ref="cradChart"></div>
        <div class="stackChart" ref="stackChart"></div>
      </div>
      <div class="graph-box">
        <div class="pieChart" ref="pieChart"></div>
        <div class="invChart" ref="invChart"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle: true,
      form: {
        timedem: '',
        cussegment1: '',
        cussegment4: '',
        qdcode: '',
        productfamily: '',
        timerange: '',
        qdname: '',
        martidesc: '',
        materialcode: '',
        productgroup: ''
      },
      timedems: [],
      cussegment1s: [],
      cussegment4s: [],
      qdcodes: [],
      productfamilys: [],
      timeranges: [],
      qdnames: [],
      martidescs: [],
      productgroups: []
    }
  },
  components: {
    VTable
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.goalChart()
      this.caChart()
      this.cradChart()
      this.stackChart()
      this.pieChart()
      this.invChart()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    goalChart () {
      let goalChart = echarts.init(this.$refs.goalChart)
      var colors = ['#5793f3', '#d14a61', '#675bba']
      var option = {
        title: {
          text: '对比目标',
          left: 20,
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      goalChart.setOption(option)
    },
    caChart () {
      let caChart = echarts.init(this.$refs.caChart)
      var data = genData(10)
      var option = {
        title: {
          text: 'CA或Rev及占比',
          subtext: '纯属虚构',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
          selected: data.selected
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
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
      function genData (count) {
        var nameList = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危']
        var legendData = []
        var seriesData = []
        var selected = {}
        for (var i = 0; i < count; i++) {
          var name = Math.random() > 0.65 ? makeWord(4, 1) + '·' + makeWord(3, 0) : makeWord(2, 1)
          legendData.push(name)
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
          })
          selected[name] = i < 6
        }
        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected
        }
        function makeWord (max, min) {
          var nameLen = Math.ceil(Math.random() * max + min)
          var name = []
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)])
          }
          return name.join('')
        }
      }
      caChart.setOption(option)
    },
    cradChart () {
      let cradChart = echarts.init(this.$refs.cradChart)
      var option = {
        title: {
          text: 'CRAD满足率',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
      cradChart.setOption(option)
    },
    stackChart () {
      var option = {
        title: {
          // backgroundColor: '#333',
          text: '分客户细分',
          top: 0,
          left: '10%',
          // width: 150,
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
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直营', 'RkA', '线上渠道', '传统渠道'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['四月', '五月', '六月', '七月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直营',
            type: 'bar',
            barWidth: 35,
            stack: '广告',
            data: [108, 99, 116, 128]
          },
          {
            name: 'RkA',
            type: 'bar',
            stack: '广告',
            data: [112, 142, 157, 131]
          },
          {
            name: '线上渠道',
            type: 'bar',
            stack: '广告',
            data: [51, 30, 24, 27]
          },
          {
            name: '传统渠道',
            type: 'bar',
            stack: '广告',
            data: [36, 34, 41, 33]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stackChart)
      stackChart.setOption(option)
    },
    pieChart () {
      let pieChart = echarts.init(this.$refs.pieChart)
      var option = {
        title: {
          text: '在途情况',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
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
      pieChart.setOption(option)
    },
    invChart () {
      let invChart = echarts.init(this.$refs.invChart)
      var colors = ['#5793f3', '#d14a61', '#675bba']
      var option = {
        title: {
          text: '库存周转',
          left: 20,
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      invChart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .db-wrap
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
    .graph-box
      width 100%
      height 400px
      margin-top 10px
      .goalChart, .caChart,
      .cradChart, .stackChart,
      .pieChart, .invChart
        width 50%
        height 400px
        float left
</style>
