<template>
  <div class="fcst-wraps">
    <div class="content">
      <el-tabs :tab-position="'left'" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block1">
            <div class="block">
              <el-form :inline="true" :model="form2" class="demo-form-inline">
                <el-form-item label="预测版本">
                  <el-select v-model="form2.version" @change="getInitStack" size="mini"  placeholder="请选择">
                    <el-option
                      v-for="(item, index) in versions2"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div class="chartsbox">
                <div class="stack" ref="stack1"></div>
                <div class="stack" ref="stack"></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block1">
            <div class="fcst-wrap">
              <div class="block">
                <el-form :inline="true" :model="form1" class="demo-form-inline">
                  <el-form-item label="预测版本">
                    <el-select v-model="form1.version" @change="getvsVersion" size="mini"  placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versions1"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item :label="versionvs" style="margin-left:30px">
                  </el-form-item>
                </el-form>
                <h2>季度变化
                  <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid3">
                  <div class="drawBar" ref="drawBar2"></div>
                  <div class="drawBar" ref="drawBar3"></div>
                  <div class="drawBar1" ref="drawBar1"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[0]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid4">
                  <div class="drawBar" ref="drawBar5"></div>
                  <div class="drawBar" ref="drawBar6"></div>
                  <div class="drawBar1" ref="drawBar4"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[1]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid5">
                  <div class="drawBar" ref="drawBar8"></div>
                  <div class="drawBar" ref="drawBar9"></div>
                  <div class="drawBar1" ref="drawBar7"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[2]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid6">
                  <div class="drawBar" ref="drawBar11"></div>
                  <div class="drawBar" ref="drawBar12"></div>
                  <div class="drawBar1" ref="drawBar10"></div>
                </div>
              </div>
              <div class="block">
                <h2>{{monthName[3]}}变化
                  <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid7">
                  <div class="drawBar" ref="drawBar14"></div>
                  <div class="drawBar" ref="drawBar15"></div>
                  <div class="drawBar1" ref="drawBar13"></div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import formPublic from '@/components/public/formPublic'
import echarts from 'echarts'
export default {
  data () {
    return {
      versionvs: '',
      version: '',
      versions1: [],
      versions2: [],
      menuArr: ['预测总量', '预测变化'],
      monthName: [],
      toggle3: false,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      monthYears: [],
      form1: {
        version: ''
      },
      form2: {
        version: ''
      }
    }
  },
  components: {
    VTable,
    formPublic
  },
  created () {
    this.getVersionOverview()
    this.getVersionStatck()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
    }, 300)
  },
  methods: {
    getInitStack () {
      this.initdrawStack()
      this.initdrawStack1()
    },
    initdrawStack () {
      let vm = this
      vm.$ajax({
        url: '/getFcstTotals',
        data: {
          'businessLine': 'ConDT',
          'style': '1',
          'version': vm.form2.version
        },
        done (data) {
          for (let i = 0; i < data.series.length; i++) {
            data.series[i].barMaxWidth = '35px'
          }
          var option = {
            title: {
              text: 'Family1',
              top: 0,
              left: 'left',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            grid: {
              left: '5%',
              right: '6%',
              top: '15%',
              containLabel: true
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
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            xAxis: {
              type: 'category',
              data: data.xAxis,
              axisLabel: {
                interval: 0,
                rotate: 60,
                margin: 2
              }
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: data.legend,
              left: '10%'
            },
            yAxis: {type: 'value'},
            series: data.series
          }
          let echars = echarts.init(vm.$refs.stack)
          echars.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    initdrawStack1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstTotals',
        data: {
          'businessLine': 'ConDT',
          'style': '2',
          'version': vm.form2.version
        },
        done (data) {
          for (let i = 0; i < data.series.length; i++) {
            data.series[i].barMaxWidth = '35px'
          }
          var option = {
            title: {
              text: 'Family3',
              top: 0,
              left: 'left',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            grid: {
              left: '5%',
              right: '6%',
              top: '15%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 50
              },
              {
                type: 'inside',
                start: 0,
                end: 50
              }
            ],
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
            xAxis: {
              type: 'category',
              data: data.xAxis,
              axisLabel: {
                interval: 0,
                rotate: 60,
                margin: 2
              }
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: data.legend,
              left: '10%'
            },
            yAxis: {type: 'value'},
            series: data.series
          }
          let echars = echarts.init(vm.$refs.stack1)
          echars.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getVersionStatck () { // 预测总量version
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Change_Family'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions2 = data
          vm.form2.version = data[0]
          vm.initdrawStack()
          vm.initdrawStack1()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getVersionOverview () { // 预测变化version
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Change_Family'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions1 = data
          vm.form1.version = data[0]
          vm.getvsVersion()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getvsVersion () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 4,
          version: vm.form1.version,
          type: 'TTL'
        },
        done (data) {
          vm.versionvs = data
          vm.getMonthName()
          vm.drawBarQuarter()
          vm.drawBarmonth1()
          vm.drawBarmonth2()
          vm.drawBarmonth3()
          vm.drawBarmonth4()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMonthName () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 1,
          version: vm.form1.version
        },
        done (data) {
          vm.monthName = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarQuarter () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: 'TTL'
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barMaxWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barMaxWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            family.series[i].barMaxWidth = '35px'
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'Family3',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: '5%',
              right: '8%',
              bottom: '13%',
              containLabel: true
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisLabel: {
                  interval: 0,
                  rotate: 30,
                  margin: 2
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar1)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar2)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar3)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[0]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barMaxWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barMaxWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            family.series[i].barMaxWidth = '35px'
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'Family3',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar4)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar5)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar6)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth2 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[1]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barMaxWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barMaxWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            family.series[i].barMaxWidth = '35px'
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'Family3',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar7)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar8)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar9)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth3 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[2]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barMaxWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barMaxWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            family.series[i].barMaxWidth = '35px'
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'Family3',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar10)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar11)
          drawBar2.setOption(option2, true)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar12)
          drawBar3.setOption(option3, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawBarmonth4 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 3,
          version: vm.form1.version,
          type: vm.monthName[3]
        },
        done (data) {
          let family = data.family
          let customer = data.customer
          let cv = data.cv
          for (let i = 0; i < customer.series.length; i++) {
            customer.series[i].barMaxWidth = '35px'
            if (customer.series[i].type === 'line') {
              customer.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < cv.series.length; i++) {
            cv.series[i].barMaxWidth = '35px'
            if (cv.series[i].type === 'line') {
              cv.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          for (let i = 0; i < family.series.length; i++) {
            family.series[i].barMaxWidth = '35px'
            if (family.series[i].type === 'line') {
              family.series[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          var option1 = {
            title: {
              text: 'Family3',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
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
            color: ['#F79646', '#f94e6e'],
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: family.legend
            },
            xAxis: [
              {
                type: 'category',
                data: family.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: family.series
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar13)
          drawBar1.setOption(option1)
          var option2 = {
            title: {
              text: '客户细分',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9CDCF0', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: customer.legend
            },
            xAxis: [
              {
                type: 'category',
                data: customer.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: customer.series
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar14, true)
          drawBar2.setOption(option2)
          var option3 = {
            color: ['#9BBB59', '#f94e6e'],
            title: {
              text: 'CV',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}%<br/>',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
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
            grid: {
              left: 50,
              right: 150
            },
            legend: {
              data: cv.legend
            },
            xAxis: [
              {
                type: 'category',
                data: cv.xAxis,
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '数值',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '占比',
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ],
            series: cv.series
          }
          let drawBar3 = echarts.init(vm.$refs.drawBar15, true)
          drawBar3.setOption(option3)
        },
        fail (msg) {
          alert(msg)
        }
      })
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
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle7 = !this.toggle7
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fcst-wraps
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom 0 !important
  .fcstItem
    width 100%
    height 100%
    .block1
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      .block
        width 100%
        height auto
        overflow hidden
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
        .title
          background #fff
          box-shadow 0 0 0 #fff
          font-weight 700
        .addgrid
          min-height 10px
          width 100%
          overflow hidden
          margin 10px 0px
        .drawBarLine
          width 95%
          height 400px
          margin 10px auto
        .vary-box
          width 100%
          height auto
          padding 10px 0
          overflow hidden
          .varytable
            width 45%
            height 800px
            float left
          .varyanalysischart
            width 50%
            height 400px
            float left
        .drawBar
          float left
          width 550px
          height 400px
          margin-bottom 20px
        .drawBar1
          float left
          width 1200px
          height 400px
          margin-right 10px
    .block
      width 100%
      height auto
      overflow hidden
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
      .chartsbox
        width 100%
        height auto
        overflow hidden
        .stack
          width 100%
          height 400px
          margin 20px 0px
      .tableWrap
        width 100%
        height auto
        overflow hidden
        padding 10px
        .tableitem
          width 49%
          height auto
          float left
          border-collapse collapse
          &:last-child
            float right
          tr,td,th
            border 1px solid #ccc
          th
            height 35px
            padding 0 8px
            background #eee
          td
            height 28px
</style>
