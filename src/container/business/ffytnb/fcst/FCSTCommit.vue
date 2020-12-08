
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <div class="wood">
              <div class="wooditem">
                <ul>
                  <li>
                    <h4>Q1 Fcst</h4>
                    <i>+20</i>
                    <span>1221</span>
                  </li>
                  <li>
                    <h4>Q1 Commit</h4>
                    <i>-20</i>
                    <span>1154</span>
                  </li>
                  <li>
                    <h4>Q1 Gap</h4>
                    <i></i>
                    <span>-67</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4>4 CA</h4>
                    <i></i>
                    <span>233</span>
                  </li>
                </ul>
              </div>
              <div class="wooditem">
                <ul>
                  <li>
                    <h4>5 Fcst</h4>
                    <i>+20</i>
                    <span>320</span>
                  </li>
                  <li>
                    <h4>5 Commit</h4>
                    <i>-20</i>
                    <span>300</span>
                  </li>
                  <li>
                    <h4>Gap</h4>
                    <i></i>
                    <span>-20</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4>6 Fcst</h4>
                    <i>+20</i>
                    <span>400</span>
                  </li>
                  <li>
                    <h4>6 Commit</h4>
                    <i>-20</i>
                    <span>390</span>
                  </li>
                  <li>
                    <h4>Gap</h4>
                    <i></i>
                    <span>-10</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4>7 Fcst</h4>
                    <i>+20</i>
                    <span>300</span>
                  </li>
                  <li>
                    <h4>7 Commit</h4>
                    <i>-20</i>
                    <span>350</span>
                  </li>
                  <li>
                    <h4>Gap</h4>
                    <i></i>
                    <span>50</span>
                  </li>
                </ul>
              </div>
            </div>
            <h2>Fcst Commit Overview
              <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Fcst_Commit_Overview'"
                :tableName='""'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Fcst_Commit_Overview'"
                ref="gridoverview">
              </v-table>
            </div>
            <div class="barPie" ref="barPie"></div>
            <div class="stackPie" ref="stackPie"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <!-- 筛选条件 -->
            <el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-form-inline">
              <el-form-item label="Commit版本" prop="preversion" >
                <el-select v-model="form.preversion" size="mini"  multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in preversions"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="目标月份" prop="goalmonth">
                <el-select v-model="form.goalmonth" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in goalmonths"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="目标季度" prop="goalquarter">
                <el-select v-model="form.goalquarter" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in goalquarters"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品系列" prop="productseries">
                <el-select v-model="form.productseries" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productseriess"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="特征值" prop="eigenvalue">
                <el-select v-model="form.eigenvalue" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in eigenvalues"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="价位细分" prop="price">
                <el-select v-model="form.price" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in prices"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品细分" prop="productsegment">
                <el-select v-model="form.productsegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productsegments"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode">
                <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="选择维度" prop="dimension">
                <el-select v-model="form.dimension" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in dimensions"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="变化幅度" prop="dimension">
                <el-select v-model="form.changerang" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in changerangs"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="数值类型" prop="numbertype">
                <el-select v-model="form.numbertype" size="mini" filterable placeholder="请选择">
                  <el-option
                    v-for="(item, index) in numbertypes"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="区间" prop="betweenmin">
                <el-input v-model="form.betweenmin" size="mini" class="betweeninput" placeholder="请输入"></el-input>
              </el-form-item>
              <i class="shortline">-</i>
              <el-form-item label="" prop="betweenmax">
                <el-input v-model="form.betweenmax" class="betweeninput" size="mini" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Fcst Commit Detail
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Commit'"
                :tableName='"ConNB_Commit"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Commit'"
                ref="gridupcommit" >
              </v-table>
            </div>
            <div class="dynamic" ref="dynamicgraph"></div>
            <!-- <div class="drawBarLine" ref="drawBarLine1"></div> -->
            <div class="commitvary" ref="commitvary"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <h2>Commit 外 ATS</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_预测版本'"
                :tableName="'ConNB_FCST_Version'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_预测版本'"
                ref="gridfastversion">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="fcstItem">
          <div class="block">
            <h2>Commit 准确性</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_预测版本'"
                :tableName="'ConNB_FCST_Version'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_预测版本'"
                ref="gridfastversion">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage251'
// const $ = window.$
import echarts from 'echarts'
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      toggle: true,
      toggle1: true,
      disabled: false,
      menuArr: ['Commit Overview', 'Commit Detail', 'Commit 外ATS', 'Commit 准确性'],
      form: {
        preversion: ['2周'],
        productseries: [], // 产品系列
        productsegment: [], // 产品细分
        eigenvalue: [], // 特征值
        materialcode: '', // 物料编码
        price: [], // 价位细分
        goalquarter: '', // 目标季度
        dimension: '', // 选择维度
        goalmonth: '5月', // 月度目标
        changerang: '', // 变化幅度
        betweenmin: '', // 区间最小值
        betweenmax: '' // 区间最大值
      },
      preversions: ['2周', '3周', '4周', '5周'],
      productseriess: ['区域1', '区域2', '区域3'],
      productsegments: ['细分1', '细分2', '细分3', '细分4'],
      goalmonths: ['5月', '6月', '7月', '8月', '9月'],
      goalquarters: ['Q1', 'Q2', 'Q3'],
      eigenvalues: ['特dshfjnvjnvfjnv1', '特征值2', '特征值3', '特征值4'],
      prices: ['价位1', '价位2', '价位3', '价位4', '价位5'],
      dimensions: ['产品系列', '特征值', '价位细分', '产品细分', '物料编码'],
      numbertypes: ['数值', '百分比'],
      changerangs: []
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.barPie()
      this.stackPie()
      this.dynamicchart()
      // this.drawBarLine()
      this.doublebar()
      this.toggleList()
      this.toggleList1()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid')[1]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    barPie () {
      var builderJson = {
        'all': 180,
        'QFcst': {
          '120s-14IAP': 32,
          'XiaoXin Air 15IKBR': 28,
          'XiaoXin Chao7000-14AST': 29,
          'XiaoXin Chao7000-15': 31,
          '330C-15IKB': 35,
          'RESCUER Y7000': 160
        },
        'Fcst5': {
          '120s-14IAP': 10,
          'XiaoXin Air 15IKBR': 8,
          'XiaoXin Chao7000-14AST': 9,
          'XiaoXin Chao7000-15': 8,
          '330C-15IKB': 9,
          'RESCUER Y7000': 50
        },
        'Fcst6': {
          '120s-14IAP': 12,
          'XiaoXin Air 15IKBR': 15,
          'XiaoXin Chao7000-14AST': 12,
          'XiaoXin Chao7000-15': 14,
          '330C-15IKB': 16,
          'RESCUER Y7000': 110
        },
        'Fcst7': {
          '120s-14IAP': 14,
          'XiaoXin Air 15IKBR': 14,
          'XiaoXin Chao7000-14AST': 8,
          'XiaoXin Chao7000-15': 9,
          '330C-15IKB': 10,
          'RESCUER Y7000': 11
        }
      }
      var QGap = {
        '120s-14IAP': -3,
        'XiaoXin Air 15IKBR': -14,
        'XiaoXin Chao7000-14AST': -9,
        'XiaoXin Chao7000-15': -18,
        '330C-15IKB': -7,
        'RESCUER Y7000': -11
      }
      var Gap5 = {
        '120s-14IAP': -12,
        'XiaoXin Air 15IKBR': -3,
        'XiaoXin Chao7000-14AST': -2,
        'XiaoXin Chao7000-15': -7,
        '330C-15IKB': -3,
        'RESCUER Y7000': -19
      }
      var Gap6 = {
        '120s-14IAP': -1,
        'XiaoXin Air 15IKBR': -11,
        'XiaoXin Chao7000-14AST': -7,
        'XiaoXin Chao7000-15': -11,
        '330C-15IKB': -4,
        'RESCUER Y7000': -30
      }
      var Gap7 = {
        '120s-14IAP': -2,
        'XiaoXin Air 15IKBR': -13,
        'XiaoXin Chao7000-14AST': -2,
        'XiaoXin Chao7000-15': -7,
        '330C-15IKB': -3,
        'RESCUER Y7000': -19
      }
      var option = {
        tooltip: {},
        title: [{
          text: 'Q Fcst',
          subtext: '总计 ' + builderJson.all,
          x: '35%',
          textAlign: 'center'
        }, {
          text: '5 Fcst',
          x: '35%',
          y: '25%',
          textAlign: 'center'
        }, {
          text: '6 Fcst',
          x: '35%',
          y: '50%',
          textAlign: 'center'
        }, {
          text: '7 Fcst',
          x: '35%',
          y: '75%',
          textAlign: 'center'
        }, {
          text: 'Q Gap',
          x: '75%',
          textAlign: 'center'
        }, {
          text: '5 Gap',
          x: '75%',
          y: '25%',
          textAlign: 'center'
        }, {
          text: '6 Gap',
          x: '75%',
          y: '50%',
          textAlign: 'center'
        }, {
          text: '7 Gap',
          x: '75%',
          y: '75%',
          textAlign: 'center'
        }],
        grid: [{
          top: '5%',
          width: '50%',
          bottom: '75%',
          left: 10,
          containLabel: true
        }, {
          top: '28%',
          width: '50%',
          bottom: '50%',
          left: 10,
          containLabel: true
        }, {
          top: '54%',
          width: '50%',
          bottom: '25%',
          left: 10,
          containLabel: true
        }, {
          top: '78%',
          width: '50%',
          bottom: '0',
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.all,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 2,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 3,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.QFcst),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.Fcst5),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 2,
          type: 'category',
          data: Object.keys(builderJson.Fcst6),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 3,
          type: 'category',
          data: Object.keys(builderJson.Fcst7),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'QFcst',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.QFcst).map(function (key) {
            return builderJson.QFcst[key]
          })
        }, {
          type: 'bar',
          stack: 'QFcst',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.QFcst).map(function (key) {
            return builderJson.all - builderJson.QFcst[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst5',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.Fcst5).map(function (key) {
            return builderJson.Fcst5[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst5',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.Fcst5).map(function (key) {
            return builderJson.all - builderJson.Fcst5[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst6',
          xAxisIndex: 2,
          yAxisIndex: 2,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.Fcst6).map(function (key) {
            return builderJson.Fcst6[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst6',
          silent: true,
          xAxisIndex: 2,
          yAxisIndex: 2,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.Fcst6).map(function (key) {
            return builderJson.all - builderJson.Fcst6[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst7',
          xAxisIndex: 3,
          yAxisIndex: 3,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.Fcst7).map(function (key) {
            return builderJson.Fcst7[key]
          })
        }, {
          type: 'bar',
          stack: 'Fcst7',
          silent: true,
          xAxisIndex: 3,
          yAxisIndex: 3,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.Fcst7).map(function (key) {
            return builderJson.all - builderJson.Fcst7[key]
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '14%'],
          data: Object.keys(QGap).map(function (key) {
            return {
              name: key,
              value: QGap[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '38%'],
          data: Object.keys(Gap5).map(function (key) {
            return {
              name: key,
              value: Gap5[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '65%'],
          data: Object.keys(Gap6).map(function (key) {
            return {
              name: key,
              value: Gap6[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '88%'],
          data: Object.keys(Gap7).map(function (key) {
            return {
              name: key,
              value: Gap7[key]
            }
          })
        }]
      }
      let barPie = echarts.init(this.$refs.barPie)
      barPie.setOption(option)
    },
    stackPie () {
      var option = {
        angleAxis: {
        },
        radiusAxis: {
          type: 'category',
          data: ['5月', '6月', '7月', '8月'],
          z: 10
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: [2, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
        }, {
          type: 'bar',
          data: [2, 4, 6, 10],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
        }, {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
        }],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }
      let stackPie = echarts.init(this.$refs.stackPie)
      stackPie.setOption(option)
    },
    dynamicchart () {
      var option = {
        title: {
          text: '动态数据',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        color: ['gray', '#006699'],
        legend: {
          data: ['commit', '预测']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: true,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'commit',
            type: 'line',
            data: [13, 45, 67, 23, 99, 67, 34, 69, 64]
          },
          {
            name: '预测',
            type: 'bar',
            data: [63, 35, 37, 13, 59, 97, 14, 29, 94]
          }
        ]
      }
      let dynamicgraph = echarts.init(this.$refs.dynamicgraph)
      dynamicgraph.setOption(option)
    },
    doublebar () {
      var xData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var option = {
        title: {
          text: 'commit变化图',
          x: '0'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: true
          }
        },
        legend: {
          data: ['commit', '20180321 Fcst', '20180328 Fcst', '20180404 Fcst', '20180321 Gap', '20180328 Gap', '20180404 Gap'],
          x: 'center'
        },
        toolbox: {
          feature: {
            // dataZoom: {
            //   yAxisIndex: 'none'
            // },
            restore: {},
            dataView: {
              show: true
            },
            saveAsImage: {}
          }
        },
        axisPointer: {
          link: {xAxisIndex: 'all'}
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
          }
        ],
        grid: [{
          left: '8%',
          right: '8%',
          height: '35%'
        }, {
          left: '8%',
          right: '8%',
          top: '55%',
          height: '35%'
        }],
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {onZero: false},
            data: xData
          },
          {
            gridIndex: 1,
            type: 'category',
            boundaryGap: true,
            axisLine: {onZero: true},
            data: xData,
            position: 'top'
          }
        ],
        yAxis: [
          {
            name: 'Fcst',
            type: 'value'
          },
          {
            gridIndex: 1,
            name: 'Gap',
            type: 'value',
            inverse: false
          }
        ],
        series: [
          // {
          //   name: 'commit',
          //   type: 'line',
          //   symbolSize: 6,
          //   hoverAnimation: true,
          //   data: [132, 73, 64, 95, 62, 55]
          // },
          {
            name: '20180321 Fcst',
            type: 'bar',
            symbolSize: 6,
            barGap: 0,
            hoverAnimation: true,
            data: [32, 23, 24, 15, 12, 62]
          },
          {
            name: '20180328 Fcst',
            type: 'bar',
            symbolSize: 1,
            hoverAnimation: true,
            data: [12, 13, 84, 22, 14, 11]},
          {
            name: '20180404 Fcst',
            type: 'bar',
            barGap: 0,
            hoverAnimation: false,
            data: [11, 3, 32, 15, 32, 30]
          },
          {
            name: '20180321 Gap',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barGap: 0,
            hoverAnimation: false,
            data: [-41, -23, -31, -19, -12, -20]
          },
          {
            name: '20180328 Gap',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 1,
            hoverAnimation: false,
            data: [-11, -13, -21, -18, -32, -20]
          },
          {
            name: '20180404Gap',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 1,
            hoverAnimation: false,
            data: [-71, -33, -41, -38, -72, -70]
          }
        ]
      }
      let commitvary = echarts.init(this.$refs.commitvary)
      commitvary.setOption(option)
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
  .fcstItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      .shortline
        display inline-block
        width 10px
        height 40px
        line-height 40px
        margin-right 10px
        text-align center
      .el-form-item
        margin-bottom 0 !important
      .el-select, .el-input
        width 200px !important
      .betweeninput
        width 140px !important
      .wood
        width 100%
        height auto
        margin-top 10px
        overflow hidden
        .wooditem
          width 100%
          height auto 
          overflow hidden
          ul
            width 308px
            height 80px
            margin 0 20px 15px 0
            float left
            border-left 2px solid #71893F
            // border-right 0
            li
              width 102px
              height 80px
              float left
              text-align center
              border 2px solid #71893F
              border-left 0
              &:nth-child(1)
                background #9CDCF0
              &:nth-child(2)
                background #9BBB59
              &:nth-child(3)
                background #F79646
              h4
                width 100%
                height 30px
                line-height 30px
                font-size 13px
              i
                text-align right
                width 100%
                height 25px
                line-height 25px
                padding-right 5px
                display block
                font-style normal
                font-size 12px
              span
                width 100%
                height 25px
                line-height 25px
                color #fff
                display block
                font-weight bold
                font-size 13px
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
      .barPie
        width 100%
        height 1000px
      .stackPie
        width 100%
        height 500px
        margin 20px auto
      .dynamic
        width 1000px
        height 400px
        margin 10px auto
      .commitvary
        width 1000px
        height 500px
        margin 0 auto
</style>
