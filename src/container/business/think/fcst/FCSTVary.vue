<template>
  <div class="fcst-wraps">
    <div class="content">
      <el-tabs :tab-position="'left'" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block1">
            <div class="fcst-wrap">
              <div class="block">
                <!-- <h2 class="title">2018/5/30 VS 2018/5/23</h2> -->
                <el-form :inline="true" :model="formvs" ref="formvs" class="demo-form-inline">
                  <el-form-item label="version1" prop="version1">
                    <el-select v-model="formvs.version1" size="mini" placeholder="请选择">
                      <el-option
                        v-for="(item, index) in version1s"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="version2" prop="version2">
                    <el-select v-model="formvs.version2" size="mini" placeholder="请选择">
                      <el-option
                        v-for="(item, index) in version2s"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item style="margin-left:30px">
                    <el-button type="primary" size="mini" @click="onSubmit(formvs)">查询</el-button>
                    <el-button @click="resetForm('formvs')" size="mini" >重置</el-button>
                  </el-form-item>
                  <form-public ref="formpublic"/>
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
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block1">
            <div class="fcst-wrap">
              <el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
                <el-form-item label="Site" prop="site">
                  <el-select v-model="form.site" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in sites"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Family" prop="family">
                  <el-select v-model="form.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in familys"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Think业务线" prop="thinkline">
                  <el-select v-model="form.thinkline" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in thinklines"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="产品类型" prop="productType">
                  <el-select v-model="form.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in productTypes"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="margin-left:30px">
                  <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                  <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                </el-form-item>
                <form-public ref="formpublic"/>
              </el-form>
              <div class="block">
                <h2>变化分析
                  <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid2">
                  <v-table
                    :sheetsName="'Think_变化分析'"
                    :tableName="'Think_Fcstchge_Analysis'"
                    :source="'FF_IDSS_Data_Think'"
                    :fileName="'Think_变化分析'"
                    ref="gridAnalysis">
                  </v-table>
                </div>
                <el-form :inline="true" :model="form1" ref="form1" size="mini" class="demo-form-inline form-inline">
                  <el-form-item label="预测版本">
                    <el-select v-model="form1.version" size="mini" multiple collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versions"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="变化分析" prop="varyanalysis">
                  <el-select v-model="form1.varyanalysis" size="mini" placeholder="请选择">
                    <el-option
                      v-for="(item, index) in varyanalysiss"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                  </el-form-item>
                  <el-form-item label="区间">
                    <el-col :span="8">
                      <el-input v-model="form1.betweenmin" size="mini" placeholder="请输入">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                      </el-input>
                    </el-col>
                    <el-col class="line" :span="2">——</el-col>
                    <el-col :span="8">
                      <el-input v-model="form1.betweenmax" size="mini" placeholder="请输入">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                      </el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit(form1)">查询</el-button>
                    <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
                  </el-form-item>
                </el-form>
                <div class="vary-box">
                  <div class="varytable">
                    <div class="table-box">
                      <el-table
                        :data="tableArr"
                        :header-row-style="headerRowStyle"
                        :row-style="tableRowStyle"
                        border
                        stripe
                        height="780"
                        style="width: 100%"
                        :default-sort = "{prop: 'M3 Rolling Gap', order: 'ascending'}" >
                        <el-table-column
                          prop="产品细分"
                          label="产品细分"
                          align="center"
                          sortable
                          width="75" >
                        </el-table-column>
                        <el-table-column
                          prop="Family"
                          label="Family"
                          align="center"
                          sortable>
                          <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.Family}}</el-button>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="M1 Gap"
                          :label= "'M1 Gap'"
                          align="center"
                          sortable
                          width="75">
                        </el-table-column>
                        <el-table-column
                          prop="M2 Gap"
                          :label= "'M2 Gap'"
                          align="center"
                          sortable
                          width="75">
                        </el-table-column>
                        <el-table-column
                          prop="M3 Gap"
                          :label= "'M3 Gap'"
                          align="center"
                          sortable
                          width="75">
                        </el-table-column>
                        <el-table-column
                          prop="M3 Rolling Gap"
                          label= "Rolling Gap"
                          align="center"
                          sortable
                          width="100">
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="varyanalysischart" ref="varyanalysischart"></div>
                  <div class="varyanalysischart" ref="varyanalysischart1"></div>
                </div>
              </div>
              <div class="block">
                <h2>预测版本全景图
                  <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid0">
                  <v-table
                    :sheetsName="'Think_预测版本全景图'"
                    :tableName="'Think_Fcstchge_Version'"
                    :source="'FF_IDSS_Data_Think'"
                    :fileName="'Think_预测版本全景图'"
                    ref="gridVersion">
                  </v-table>
                </div>
                <el-form :inline="true" :model="formInline" ref="formInline" size="mini" class="demo-form-inline form-inline">
                  <el-form-item label="财年" prop="year">
                    <el-select v-model="formInline.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="item in years"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="财季" prop="quarter">
                    <el-select v-model="formInline.quarter" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="item in quarters"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="财月" prop="month">
                    <el-select v-model="formInline.month" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="item in months"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    <el-button @click="resetForm('formInline')" size="mini" >重置</el-button>
                  </el-form-item>
                </el-form>
                <div class="drawBarLine" ref="drawBarLine2"></div>
              </div>
              <div class="block">
                <h2>滚动12个月需求趋势图表
                  <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
                </h2>
                <div class="addgrid addgrid1">
                  <v-table
                    :sheetsName="'Think_滚动12个月需求趋势图表'"
                    :tableName="'Think_Fcstchge_flow'"
                    :source="'FF_IDSS_Data_Think'"
                    :fileName="'Think_滚动12个月需求趋势图表'"
                    ref="gridflow">
                  </v-table>
                </div>
                <div class="drawBarLine" ref="drawBarLine1"></div>
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
import formPublic from '@/components/public/formPublic1'
import echarts from 'echarts'
export default {
  data () {
    return {
      quarter: 1,
      M1: 1,
      M2: 1,
      M3: 1,
      M4: 1,
      tableArr: [],
      menuArr: ['Overview', '预测变化'],
      monthName: [],
      pageSize: 18,
      toggle: true,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      toggle8: true,
      disabled: false,
      formvs: {
        version1: '20180606',
        version2: '20180608'
      },
      version1s: ['20180606', '20180608'],
      version2s: ['20180606', '20180608'],
      formInline: {
        year: [],
        month: [],
        quarter: []
      },
      quarters: [],
      years: [],
      months: [],
      form: {
        family: [],
        thinkline: [],
        productType: [], // 产品类型
        site: []
      },
      familys: [],
      thinklines: [],
      productTypes: [],
      sites: [],
      form1: {
        version: [],
        varyanalysis: [],
        betweenmin: '',
        betweenmax: ''
      },
      versions: ['20180202', '20180304'],
      varyanalysiss: ['Fcst upside', 'Fcst downside', '呆料风险', '两周连续upside', '两周连续downside']
    }
  },
  components: {
    VTable,
    formPublic
  },
  created () {
    this.getFcstChangesData()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
      this.drawBarLine1()
      this.drawBarLine2()
      this.varyanalysischart()
      this.varyanalysischart1()
    }, 300)
  },
  methods: {
    getFcstChangesData () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        method: 'get',
        params: {
          style: 1
        },
        done (data) {
          vm.monthName = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.$refs.formPublic.resetForm()
    },
    headerRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '35px'
      }
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px'
      }
    },
    handleClick (row) { // 根据选择的family不同，展示rollinggap图
      // this.defwaterFallFamily = row.Family
      // this.waterfallgraph()
    },
    drawBarQuarter () {
      if (this.quarter === 1) {
        let vm = this
        vm.$ajax({
          url: '/getFcstChanges',
          async: false,
          method: 'get',
          params: {
            style: 3,
            type: 'TTL'
          },
          done (data) {
            vm.quarter = 0
            let family = data.family
            let customer = data.customer
            let cv = data.cv
            for (let i = 0; i < customer.series.length; i++) {
              customer.series[i].barWidth = '35px'
            }
            for (let j = 0; j < cv.series.length; j++) {
              cv.series[j].barWidth = '35px'
            }
            var option1 = {
              title: {
                text: 'family',
                top: 0,
                left: '10%',
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
            drawBar3.setOption(option3)
          },
          fail (msg) {
            alert(msg)
          }
        })
      }
    },
    drawBarmonth1 () {
      if (this.M1 === 1) {
        let vm = this
        vm.$ajax({
          url: '/getFcstChanges',
          async: false,
          method: 'get',
          params: {
            style: 3,
            type: vm.monthName.month1
          },
          done (data) {
            vm.quarter = 0
            let family = data.family
            let customer = data.customer
            let cv = data.cv
            for (let i = 0; i < customer.series.length; i++) {
              customer.series[i].barWidth = '35px'
            }
            for (let j = 0; j < cv.series.length; j++) {
              cv.series[j].barWidth = '35px'
            }
            var option1 = {
              title: {
                text: 'family',
                top: 0,
                left: '10%',
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
            drawBar3.setOption(option3)
          },
          fail (msg) {
            alert(msg)
          }
        })
      }
    },
    drawBarmonth2 () {
      if (this.M2 === 1) {
        let vm = this
        vm.$ajax({
          url: '/getFcstChanges',
          async: false,
          method: 'get',
          params: {
            style: 3,
            type: vm.monthName.month2
          },
          done (data) {
            vm.quarter = 0
            let family = data.family
            let customer = data.customer
            let cv = data.cv
            for (let i = 0; i < customer.series.length; i++) {
              customer.series[i].barWidth = '35px'
            }
            for (let j = 0; j < cv.series.length; j++) {
              cv.series[j].barWidth = '35px'
            }
            var option1 = {
              title: {
                text: 'family',
                top: 0,
                left: '10%',
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
            drawBar3.setOption(option3)
          },
          fail (msg) {
            alert(msg)
          }
        })
      }
    },
    drawBarmonth3 () {
      if (this.M3 === 1) {
        let vm = this
        vm.$ajax({
          url: '/getFcstChanges',
          async: false,
          method: 'get',
          params: {
            style: 3,
            type: vm.monthName.month3
          },
          done (data) {
            vm.quarter = 0
            let family = data.family
            let customer = data.customer
            let cv = data.cv
            for (let i = 0; i < customer.series.length; i++) {
              customer.series[i].barWidth = '35px'
            }
            for (let j = 0; j < cv.series.length; j++) {
              cv.series[j].barWidth = '35px'
            }
            var option1 = {
              title: {
                text: 'family',
                top: 0,
                left: '10%',
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
            drawBar3.setOption(option3)
          },
          fail (msg) {
            alert(msg)
          }
        })
      }
    },
    drawBarmonth4 () {
      if (this.M4 === 1) {
        let vm = this
        vm.$ajax({
          url: '/getFcstChanges',
          async: false,
          method: 'get',
          params: {
            style: 3,
            type: vm.monthName.month4
          },
          done (data) {
            vm.quarter = 0
            let family = data.family
            let customer = data.customer
            let cv = data.cv
            for (let i = 0; i < customer.series.length; i++) {
              customer.series[i].barWidth = '35px'
            }
            for (let j = 0; j < cv.series.length; j++) {
              cv.series[j].barWidth = '35px'
            }
            var option1 = {
              title: {
                text: 'family',
                top: 0,
                left: '10%',
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
            let drawBar2 = echarts.init(vm.$refs.drawBar14)
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
            let drawBar3 = echarts.init(vm.$refs.drawBar15)
            drawBar3.setOption(option3)
          },
          fail (msg) {
            alert(msg)
          }
        })
      }
    },
    drawBarLine1 () {
      var yearCount = 8
      var categoryCount = 6
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var customData = []
      var legendData = ['Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = []
      legendData.unshift('trend')
      var encodeY = []
      for (var i = 0; i < yearCount; i++) {
        dataList.push([])
        encodeY.push(1 + i)
      }
      // dataList = [
      //   [299.81, 933.37, 4.24, 85.86, 497.88, 594.64, 300.12, 660.33, 904.56],
      //   [296.81, 864.72, 0, 122.97, 434.3, 621.95, 333.96, 659.2, 952.43],
      //   [209.83, 807.12, 0, 117.63, 358.33, 675.81, 271.1, 693.99, 871.22],
      //   [255.89, 878.9, 7.96, 215.83, 404.03, 666.54, 249.79, 762.27, 792.4],
      //   [340.73, 909.36, 0, 140.98, 398.27, 570.1, 196.84, 817.14, 891.92],
      //   [419.22, 1065.39, 107.13, 232.46, 345.67, 697.64, 390.74, 842.39, 996.2]]
      for (let i = 0; i < categoryCount; i++) {
        var val = Math.random() * 1000
        var customVal = [i]
        customData.push(customVal)
        // var data = dataList[0]
        for (var j = 0; j < dataList.length; j++) {
          var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          dataList[j].push(value)
          // var value = j === 0 ? echarts.number.round(val, 2) : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
          customVal.push(value)
        }
      }
      function renderItem (params, api) {
        var xValue = api.value(0)
        var currentSeriesIndices = api.currentSeriesIndices()
        var barLayout = api.barLayout({
          barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
        })
        var points = []
        for (var i = 0; i < currentSeriesIndices.length; i++) {
          var seriesIndex = currentSeriesIndices[i]
          if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)])
            point[0] += barLayout[i - 1].offsetCenter
            point[1] -= 20
            points.push(point)
          }
        }
        var style = api.style({
          stroke: api.visual('color'),
          fill: null
        })
        return {
          type: 'polyline',
          shape: {
            points: points
          },
          style: style
        }
      }
      var option = {
        title: {
          text: '预测版本变化滚动图表',
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
        legend: {
          data: legendData,
          right: '6%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          type: 'custom',
          name: 'trend',
          renderItem: renderItem,
          itemStyle: {
            normal: {
              borderWidth: 2
            }
          },
          encode: {
            x: 0,
            y: encodeY
          },
          data: customData,
          z: 100
        }].concat(echarts.util.map(dataList, function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine1)
      drawBarLine.setOption(option)
    },
    drawBarLine2 () {
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var legendData = ['Step Start', 'Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = [
        [289.55, 937.96, 843.28, 545.3, 248.23, 98.33],
        [224.32, 974.27, 776.84, 571.35, 240.85, 116.08],
        [148.52, 1018.55, 721.58, 502.15, 253, 35.57],
        [78.47, 956.85, 695.53, 414.25, 315.16, 105.36],
        [134.91, 1021.79, 696.95, 358.12, 327.18, 80.36],
        [139.11, 1067.04, 736.44, 436.93, 424.98, 151.84],
        [182.64, 1079.56, 833.6, 534.93, 506.1, 80.01],
        [247.28, 1026.75, 924.68, 586.65, 465.35, 137.05]
      ]
      var option = {
        // title: {
        //   text: '预测版本变化滚动图表',
        //   top: 0,
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
        legend: {
          data: legendData,
          right: '6%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: 'Step Start',
          type: 'line',
          step: 'middle',
          data: [12, 200, 300, 1000, 50, 500]
        }].concat(echarts.util.map(dataList, function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.drawBarLine2)
      drawBarLine.setOption(option)
    },
    varyanalysischart () {
      let varyanalysischart = echarts.init(this.$refs.varyanalysischart)
      // varyanalysischart.showLoading()
      var option = {
        title: {
          text: '阶梯瀑布图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar
            if (params[1].value !== '-') {
              tar = params[1]
            } else {
              tar = params[0]
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
          }
        },
        legend: {
          data: ['支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: {show: false},
          data: ['MTM1', 'MTM2', 'MTM3', 'MTM4', 'MTM5', 'MTM6', 'MTM7']
        },
        yAxis: {
          type: 'value'
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
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'bottom'
              }
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      }
      varyanalysischart.setOption(option)
    },
    varyanalysischart1 () {
      let varyanalysischart = echarts.init(this.$refs.varyanalysischart1)
      // varyanalysischart.showLoading()
      var option = {
        title: {
          text: '阶梯瀑布图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar
            if (params[1].value !== '-') {
              tar = params[1]
            } else {
              tar = params[0]
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
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
        legend: {
          data: ['支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: {show: false},
          data: ['MTM1', 'MTM2', 'MTM3', 'MTM4', 'MTM5', 'MTM6', 'MTM7']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'bottom'
              }
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      }
      varyanalysischart.setOption(option)
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid0')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
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
        this.drawBarQuarter()
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth1()
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth2()
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth3()
      }
      this.toggle6 = !this.toggle6
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.drawBarmonth4()
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
          margin-bottom 0px
        .addgrid
          min-height 10px
          width 100%
          overflow hidden
          margin 10px 0px
        .drawBarLine
          width 1200px
          height 400px
          margin 10px auto
        .vary-box
          width 1200px
          height auto
          padding 10px 0
          overflow hidden
          .varytable
            width 520px
            height 800px
            float left
            margin-left 20px
          .varyanalysischart
            width 560px
            height 400px
            float left
        .drawBar
          float left
          width 50%
          height 400px
          margin-bottom 20px
        .drawBar1
          float left
          width 100%
          height 400px
          margin-right 10px
</style>
