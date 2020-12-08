<template>
<div class="fastpara">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="regitem">
        <div class="block">
          <h2>CON提货计划
            <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid1">
            <div class="chartsbox">
              <div class="stack" ref="stack"></div>
              <div class="stack" ref="stack1"></div>
            </div>
            <div class="addgrid">
              <v-table
                :sheetsName="'CON_Demand_Plan'"
                :tableName='"CON_Demand_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_Demand_Plan'">
              </v-table>
            </div>
          </div>
          <h2>ConNB供需匹配
            <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid2">
            <div class="chartsbox">
              <div class="stack1" ref="stack2"></div>
            </div>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Demand_Plan_Tracking'"
                :tableName='"ConNB_Demand_Plan_Tracking"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Demand_Plan_Tracking'">
              </v-table>
            </div>
          </div>
          <h2>ConDT供需匹配
            <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid3">
            <div class="chartsbox">
              <div class="stack1" ref="stack3"></div>
            </div>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_Demand_Plan_Tracking'"
                :tableName='"ConDT_Demand_Plan_Tracking"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_Demand_Plan_Tracking'">
              </v-table>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="regitem">
        <div class="block">
           <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
             <el-form-item label="业务线" prop="business">
              <el-select v-model="form.business" @visible-change="getQueryCpu2" size="mini" filterable collapse-tags placeholder="请选择">
                <el-option
                  v-for="(item, index) in business"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="战区" prop="zhanqu">
              <el-input v-model="form.zhanqu" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="渠道名称" prop="bpName" >
              <el-input v-model="form.bpName" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="物料编码" prop="bpCode" >
              <el-input v-model="form.bpCode" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" size="mini" @click="submitForm()">查询</el-button>
              <el-button size="mini" @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
          <h2>ConNB供需分布
            <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid4">
            <div class="chartsbox1">
              <div class="stack3" ref="stack4"></div>
              <div class="stack3" ref="stack5"></div>
              <div class="stack2" ref="stack6"></div>
              <div class="stack2" ref="stack7"></div>
            </div>
          </div>
          <h2>ConDT供需分布
            <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
          </h2>
          <div class="addgrid addgrid5">
            <div class="chartsbox1">
              <div class="stack3" ref="stack8"></div>
              <div class="stack3" ref="stack9"></div>
              <div class="stack2" ref="stack10"></div>
              <div class="stack2" ref="stack11"></div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[2]" class="regitem">
        <div class="block">
          <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
            <el-form-item label="战区" prop="zhanqu">
              <el-input v-model="form.zhanqu" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="渠道名称" prop="bpName" >
              <el-input v-model="form.bpName" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="物料编码" prop="bpCode" >
              <el-input v-model="form.bpCode" size="mini" placeholder="请输入">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="库存周转">
              <el-col :span="11">
                <el-input v-model="form.Invturn1" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-col>
              <el-col class="line" :span="2">——</el-col>
              <el-col :span="11">
                <el-input v-model="form.Invturn1" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-col>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" size="mini" @click="submitForm()">查询</el-button>
              <el-button size="mini" @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
          <h2>下单指导</h2>
          <div class="addgrid">
            <v-table-query
              :sheetsName="'下单指导'"
              :tableName="'CON_Order_Guidence'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'下单指导'"
              ref="thinkCreditDate">
            </v-table-query>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import VTableQuery from '@/components/public/vtableQuery'
import echarts from 'echarts'
export default {
  data () {
    return {
      form: {
        zhanqu: '',
        bpName: '',
        Invturn1: '',
        Invturn2: '',
        business: '',
        bpCode: ''
      },
      business: ['ConNB', 'ConDT', 'TTL'],
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      tabPosition: 'left',
      menuArr: ['供需匹配', '供需分布', '下单指导']
    }
  },
  components: {
    Upload,
    VTableQuery,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
      this.drawStack1()
      this.drawStack2()
      this.drawStack3()
      this.drawStack4()
      this.drawStack5()
      this.drawStack6()
      this.drawStack7()
      this.drawStack8()
      this.drawStack9()
      this.drawStack10()
      this.drawStack11()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
    }, 3000)
  },
  methods: {
    drawStack () {
      let histogramChart = echarts.init(this.$refs.stack)
      histogramChart.setOption({
        title: {
          text: 'ConNB提货计划',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          }
        ]
      })
    },
    drawStack1 () {
      let histogramChart = echarts.init(this.$refs.stack1)
      histogramChart.setOption({
        title: {
          text: 'ConDT提货计划',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609]
          }
        ]
      })
    },
    drawStack2 () {
      let bcBySeriesIndex = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C']
      var option = {
        title: {
          text: 'ConNB供需匹配',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var html = []
            var category = {}
            echarts.util.each(params, function (param) {
              var catName = param.seriesName
              var bc = bcBySeriesIndex[param.seriesIndex]
              if (!category[catName]) {
                category[catName] = {}
              }
              category[catName][bc] = param.value
            })
            console.log(category)
            echarts.util.each(category, function (cate, key) {
              html.push(
                '<tr>',
                '<td>', key, '</td>',
                '<td>', cate.A, '</td>',
                '<td>', cate.B, '</td>',
                '<td>', cate.C, '</td>',
                '</tr>'
              )
            })
            return '<table border=1><tbody>' + '<tr><td></td><td>A</td><td>B</td><td>C</td></tr>' + html.join('') + '</tbody></table>'
          }
        },
        legend: {
          data: ['W1', 'W2', 'W3', 'W4']
        },
        xAxis: [
          {
            type: 'category',
            data: ['PN1', 'PN2']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'A',
            data: [201, 321, 312]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'A',
            data: [120, 32, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'A',
            data: [220, 182, 11]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'A',
            data: [150, 232, 21]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: 'B',
            data: [320, 332, 301]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'B',
            data: [120, 132, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'B',
            data: [220, 182, 11]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'B',
            data: [150, 232, 201]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: 'C',
            data: [320, 32, 301]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'C',
            data: [120, 132, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'C',
            data: [220, 182, 191]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'C',
            data: [150, 232, 201]
          }
        ]
      }
      let drawBarLine = echarts.init(this.$refs.stack2)
      drawBarLine.setOption(option)
    },
    drawStack3 () {
      let bcBySeriesIndex = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C']
      var option = {
        title: {
          text: 'ConDT供需匹配',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var html = []
            var category = {}
            echarts.util.each(params, function (param) {
              var catName = param.seriesName
              var bc = bcBySeriesIndex[param.seriesIndex]
              if (!category[catName]) {
                category[catName] = {}
              }
              category[catName][bc] = param.value
            })
            console.log(category)
            echarts.util.each(category, function (cate, key) {
              html.push(
                '<tr>',
                '<td>', key, '</td>',
                '<td>', cate.A, '</td>',
                '<td>', cate.B, '</td>',
                '<td>', cate.C, '</td>',
                '</tr>'
              )
            })
            return '<table border=1><tbody>' + '<tr><td></td><td>A</td><td>B</td><td>C</td></tr>' + html.join('') + '</tbody></table>'
          }
        },
        legend: {
          data: ['W1', 'W2', 'W3', 'W4']
        },
        xAxis: [
          {
            type: 'category',
            data: ['PN1', 'PN2']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'A',
            data: [201, 321, 312]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'A',
            data: [120, 32, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'A',
            data: [220, 182, 11]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'A',
            data: [150, 232, 21]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: 'B',
            data: [320, 332, 301]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'B',
            data: [120, 132, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'B',
            data: [220, 182, 11]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'B',
            data: [150, 232, 201]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: 'C',
            data: [320, 32, 301]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'C',
            data: [120, 132, 101]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'C',
            data: [220, 182, 191]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'C',
            data: [150, 232, 201]
          }
        ]
      }
      let drawBarLine = echarts.init(this.$refs.stack3)
      drawBarLine.setOption(option)
    },
    drawStack4 () {
      let histogramChart = echarts.init(this.$refs.stack4)
      histogramChart.setOption({
        title: {
          text: 'CRAD分布',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
          left: 100,
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          left: 'left',
          data: ['W1', 'W2', 'W3', 'W4', 'W5']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: 'W1'},
              {value: 310, name: 'W2'},
              {value: 234, name: 'W3'},
              {value: 135, name: 'W4'},
              {value: 1548, name: 'W5'}
            ]
          }
        ]
      })
    },
    drawStack5 () {
      let histogramChart = echarts.init(this.$refs.stack5)
      histogramChart.setOption({
        title: {
          text: 'PSD分布',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
          left: 100,
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          left: 'left',
          data: ['W1', 'W2', 'W3', 'W4', 'W5']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: 'W1'},
              {value: 310, name: 'W2'},
              {value: 234, name: 'W3'},
              {value: 135, name: 'W4'},
              {value: 1548, name: 'W5'}
            ]
          }
        ]
      })
    },
    drawStack6 () {
      let histogramChart = echarts.init(this.$refs.stack6)
      histogramChart.setOption({
        title: {
          text: '物料CRAD分布',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3', 'PN4']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 300]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 400]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 500]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 600]
          }
        ]
      })
    },
    drawStack7 () {
      let histogramChart = echarts.init(this.$refs.stack7)
      histogramChart.setOption({
        title: {
          text: '物料PSD分布',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3', 'PN4']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 300]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 400]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 500]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 600]
          }
        ]
      })
    },
    drawStack8 () {
      let histogramChart = echarts.init(this.$refs.stack8)
      histogramChart.setOption({
        title: {
          text: 'CRAD分布',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
          left: 100,
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          left: 'left',
          data: ['W1', 'W2', 'W3', 'W4', 'W5']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: 'W1'},
              {value: 310, name: 'W2'},
              {value: 234, name: 'W3'},
              {value: 135, name: 'W4'},
              {value: 1548, name: 'W5'}
            ]
          }
        ]
      })
    },
    drawStack9 () {
      let histogramChart = echarts.init(this.$refs.stack9)
      histogramChart.setOption({
        title: {
          text: 'PSD分布',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
          left: 100,
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          left: 'left',
          data: ['W1', 'W2', 'W3', 'W4', 'W5']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: 'W1'},
              {value: 310, name: 'W2'},
              {value: 234, name: 'W3'},
              {value: 135, name: 'W4'},
              {value: 1548, name: 'W5'}
            ]
          }
        ]
      })
    },
    drawStack10 () {
      let histogramChart = echarts.init(this.$refs.stack10)
      histogramChart.setOption({
        title: {
          text: '物料CRAD分布',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3', 'PN4']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 300]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 400]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 500]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 600]
          }
        ]
      })
    },
    drawStack11 () {
      let histogramChart = echarts.init(this.$refs.stack11)
      histogramChart.setOption({
        title: {
          text: '物料PSD分布',
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
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        grid: {
          left: 100,
          containLabel: true
        },
        legend: {
          left: 'center',
          data: ['W1', 'W2', 'W3', 'W4']
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
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['PN1', 'PN2', 'PN3', 'PN4']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 300]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 400]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 500]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: 'a',
            data: [157, 104, 609, 600]
          }
        ]
      })
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
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fastpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 5px !important
  .regitem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
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
        background #ff9933
        font-size 12px
        box-sizing border-box
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
      .chartsbox, .chartsbox1
        margin-top 20px
        width 100%
        height auto
        overflow hidden
        .stack
          width 50%
          height 400px
          float left
          margin-bottom 20px
        .stack1
          width 100%
          height 400px
          float left
          margin-bottom 20px
        .stack2
          width 600PX
          height 400px
          float left
          margin-bottom 20px
        .stack3
          width 600PX
          height 200px
          float left
          margin-bottom 20px
</style>
