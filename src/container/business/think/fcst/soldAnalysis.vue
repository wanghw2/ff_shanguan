<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
              <el-form-item label="ND（T/R/GAB/KAB）" prop="nd" >
                <el-select v-model="form.nd" size="mini" filterable multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in nds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主行业" prop="mainindustry">
                <el-select v-model="form.mainindustry" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in mainindustrys"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Think 业务单元
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_业务单元'"
                :tableName='"TPR_MO_DailyReport_Overview"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_业务单元'"
                ref="gridthinkywcell">
              </v-table>
            </div>
            <div class="stackbar" ref="stackbar" style="width:100%;height:400px"></div>
            <div class="rosechart" ref="rosechart" style="width:100%;height:400px"></div>
            <div class="barChart" ref="barChart" style="width:100%;height:400px"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" class="demo-form-inline">
              <el-form-item label="ND（T/R/GAB/KAB）" prop="nd">
                <el-select v-model="form1.nd" size="mini" filterable multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in nd1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主行业" prop="mainindustry" >
                <el-select v-model="form1.mainindustry" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in mainindustry1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="通路" prop="pathway">
                <el-select v-model="form1.pathway" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in pathways"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品组" prop="productgroup">
                <el-select v-model="form1.productgroup" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productgroups"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="模式（行单/备货）" prop="module" label-width="135px">
                <el-select v-model="form1.module" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in modules"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(form1)">查询</el-button>
                <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Think 机型
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_机型'"
                :tableName='"TPR_MO_DailyReport_Family"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_机型'"
                ref="gridthinkmtm">
              </v-table>
            </div>
            <div class="barChart1" ref="barChart1" style="width:1100px;height:400px;margin: 10px auto"></div>
            <div class="barChart2" ref="barChart2" style="width:1100px;height:400px;margin: 10px auto"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form2" ref="form2" class="demo-form-inline">
              <el-form-item label="ND（T/R/GAB/KAB）" prop="nd" >
                <el-select v-model="form2.nd" size="mini" filterable multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in nd2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主行业" prop="mainindustry" >
                <el-select v-model="form2.mainindustry" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in mainindustry2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="机型falmily" prop="falmily">
                <el-select v-model="form2.falmily" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in falmilys"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="通路" prop="pathway">
                <el-select v-model="form2.pathway" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in pathway2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="代（N/N-1）" prop="place">
                <el-select v-model="form2.place" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in places"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品组" prop="productgroup">
                <el-select v-model="form2.productgroup" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productgroup2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="模式（行单/备货）" prop="module" >
                <el-select v-model="form2.module" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in module2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(form2)">查询</el-button>
                <el-button @click="resetForm('form2')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Think 部件(V值)
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Think_DF_Backlog'"
                :tableName='"Think_DF_Backlog"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_DF_Backlog'"
                ref="gridmart" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>Think 产品组(84/86/87)</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Think_产品组(84/86/87)'"
                :tableName='"Think_Think_产品组(84/86/87)"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Think_产品组(84/86/87)'"
                ref="gridmart" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>Think 通路(21/41)</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_通路(21/41)'"
                :fileName="'Think_通路(21/41)'"
                :tableName='"Think_通路(21/41)"'
                ref="gridtl"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="dbItem">
          <div class="block">
            <h2>Think 客户模式</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_客户模式'"
                :fileName="'Think_客户模式'"
                :tableName='"Think_客户模式"'
                ref="gridkh"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="dbItem">
          <div class="block">
            <h2>Think 服务</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_服务'"
                :fileName="'Think_服务'"
                :tableName='"Think_服务"'
                ref="gridserver"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[7]" class="dbItem">
          <div class="block">
            <h2>Think 选件</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_选件'"
                :fileName="'Think_选件'"
                :tableName='"Think_选件"'
                ref="gridOption"
                :source="'FF_IDSS_Data_Think'" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
// const $ = window.$
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: false,
      tabPosition: 'left',
      form: {
        nd: [],
        mainindustry: ''
      },
      form1: {
        nd: [],
        mainindustry: [],
        productgroup: [],
        module: [],
        pathway: []
      },
      form2: {
        nd: [],
        mainindustry: [],
        productgroup: [],
        module: [],
        pathway: [],
        place: [],
        falmily: []
      },
      nds: [],
      mainindustrys: [],
      nd1s: [],
      mainindustry1s: [],
      pathways: [],
      productgroups: [],
      modules: [],
      nd2s: [],
      mainindustry2s: [],
      pathway2s: [],
      productgroup2s: [],
      module2s: [],
      places: [],
      falmilys: [],
      menuArr: ['业务单元', '机型', '部件(V值)', '产品组(84/86/87)', '通路(21/41)', '客户模式', '服务', '选件']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.stackbar()
      this.rosechart()
      this.barChart()
      this.barChart1()
      this.barChart2()
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
    stackbar () {
      var option = {
        title: {
          text: 'xxx',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          left: '20%',
          right: '30%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'ND销量'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          },
          {
            name: '百度',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      let stackbar = echarts.init(this.$refs.stackbar)
      stackbar.setOption(option)
    },
    rosechart () {
      var option = {
        title: {
          text: '主行业来单',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        calculable: true,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          x: 'center',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            // label: {
            //   normal: {
            //     show: false
            //   },
            //   emphasis: {
            //     show: true
            //   }
            // },
            // lableLine: {
            //   normal: {
            //     show: false
            //   },
            //   emphasis: {
            //     show: true
            //   }
            // },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          }
        ]
      }
      let rosechart = echarts.init(this.$refs.rosechart)
      rosechart.setOption(option)
    },
    barChart () {
      var option = {
        title: {
          text: '对比去年同期CA和来单',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          left: '20%',
          right: '30%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            barGap: 0,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            barGap: 0,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            barGap: 0,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            barGap: 0,
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '百度',
            type: 'bar',
            barGap: 0,
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            barGap: 0,
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            barGap: 0,
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            barGap: 0,
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      let barChart = echarts.init(this.$refs.barChart)
      barChart.setOption(option)
    },
    barChart1 () {
      var option = {
        title: {
          text: 'Q来单数',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        legend: {
          data: ['family'],
          left: '20%',
          right: '30%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Q来单数'
          }
        ],
        series: [
          {
            name: 'family',
            type: 'bar',
            // barGap: 0,
            barWidth: '35px',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
      let barChart = echarts.init(this.$refs.barChart1)
      barChart.setOption(option)
    },
    barChart2 () {
      var option = {
        title: {
          text: 'Q来单数',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          left: '20%',
          right: '30%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Q来单数'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            barGap: 0,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            barGap: 0,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            barGap: 0,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            barGap: 0,
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '百度',
            type: 'bar',
            barGap: 0,
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            barGap: 0,
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            barGap: 0,
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            barGap: 0,
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      let barChart = echarts.init(this.$refs.barChart2)
      barChart.setOption(option)
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
  .el-form-item
    margin-bottom 0 !important
  .dbItem
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
        margin-bottom 10px
</style>
