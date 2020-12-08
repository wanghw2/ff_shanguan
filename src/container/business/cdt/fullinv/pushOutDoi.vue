<template>
<div class="fullinv">
  <div class="waterfalls">
    <el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-form-inline">
      <div class="line1">
        <el-form-item  label="SI起始日期" prop="siStartDate">
          <div class="block">
            <el-date-picker
              size="mini"
              v-model="form.siStartDate"
              type="date"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="客户细分1" prop="cusSegment1" >
          <el-select v-model="form.cusSegment1" @visible-change="getCusSegment1s" size="mini" multiple collapse-tags  filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in cusSegment1s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分4" prop="cusSegment4" >
          <el-select v-model="form.cusSegment4" @visible-change="getCusSegment4s" size="mini" multiple collapse-tags  filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in cusSegment4s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道编码" prop="bpCode" >
          <el-input v-model="form.bpCode" size="mini" placeholder="请输入" >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
      </div>
      <div class="line1">
        <el-form-item label="产品细分" prop="prosegment" >
          <el-select v-model="form.prosegment" @visible-change="getProsegments" size="mini"  filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in prosegments.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family1" prop="Family1">
          <el-select v-model="form.Family1" @visible-change="getFamily1s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in Family1s.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family2" prop="Family2">
          <el-select v-model="form.Family2" @visible-change="getFamily2s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in Family2s.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family3" prop="Family3">
          <el-select v-model="form.Family3" @visible-change="getFamily3s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in Family3s.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
        <el-form-item label="FCST Family" prop="fcstFamily">
          <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in fcstFamilys.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-select v-model="form.materialcode" @visible-change="getMaterialcodes" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in materialcodes.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料描述" prop="matDesc">
          <el-select v-model="form.matDesc" @visible-change="getmatDescs" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in matDescs.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="平滑周期">
          <el-select v-model="form.wAveCycle" size="mini"  placeholder="请选择">
            <el-option
              v-for="item in wAveCycles.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left:60px">
          <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
    </el-form>
  </div>
  <h2>库存分析
    <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
  </h2>
  <el-form :inline="true" :model="form1" class="demo-form-inline" style="margin-bottom:10px">
    <el-form-item label="库存类型">
      <el-select v-model="form1.invType" size="mini" @change="drawChart4"  placeholder="请选择">
        <el-option
          v-for="item in invTypes.children"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div class="grid">
    <div class="table" ref="table1"></div>
  </div>
  <div class="chartbox" ref="echars1"></div>
  <h2>全链库存</h2>
  <div class="chartbox" ref="echars3"></div>
  <h2>SellOut周均出货</h2>
  <div class="chartbox" ref="echars2"></div>
</div>
</template>
<script>
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      dbName_tableName: '',
      queryMessage: '', // 查询失败结果显示
      columnsList1: [],
      params: {},
      token: '',
      userId: '',
      toggle: true,
      form: {
        wAveCycle: '16周',
        cusSegment: [], // 客户细分
        bpCode: '', // 渠道编码
        cusSegment1: [], // 客户细分
        cusSegment4: [], // 客户细分
        Family1: [], // Family1
        Family2: [], // Family2
        Family3: [], // Family3
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        materialcode: [], // 物料编码
        siStartDate: '',
        matDesc: []
      },
      versions: [],
      cusSegment1s: [],
      cusSegment4s: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      Family3s: {pn: [], value: []},
      matDescs: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: {pn: [], value: []},
      form1: {
        invType: '修正市场库存'
      },
      invTypes: [],
      wAveCycles: []
    }
  },
  components: {
  },
  created () {
    this.getinvwAve()
    this.getSiStartDate()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.drawChart1()
    }, 300)
  },
  methods: {
    getSiStartDate () {
      let date = new Date()
      if (date.getMonth() >= 6) {
        date = date.getFullYear() - 1 + '-10-01'
      } else {
        date = date.getFullYear() - 1 + '-04-01'
      }
      this.form.siStartDate = date
    },
    drawChart1 () {
      let vm = this
      let params = vm.valieForm()
      params['type'] = 'a'
      params['style'] = '1'
      params['businessLine'] = 'ConDT'
      params['tableName'] = 'ConDT_3S_Tracking_Week_Stock_WOI_Query'
      params['invType'] = vm.form1.invType
      vm.$ajax({
        url: '/getPushOutDOI',
        data: params,
        done (data) {
          var option = {
            title: {
              text: vm.queryMessage,
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
              top: '8%',
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
            color: ['#9CDCF0', '#f94e6e'],
            legend: {
              data: data.legend
            },
            yAxis: [
              {
                type: 'value',
                name: '库存',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '周',
                min: 0,
                max: 52,
                interval: 4,
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: data.series
          }
          let echars = echarts.init(vm.$refs.echars1)
          echars.setOption(option)
          vm.userId = data.userId
          vm.token = data.token
          vm.dbName_tableName = data.dbName_tableName
          vm.drawChart2()
          vm.drawChart3()
          vm.drawChart4()
          vm.getColumns1()
        },
        fail (msg) {
          vm.queryMessage = msg
          var option = {
            title: {
              text: vm.queryMessage,
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
            grid: {
              left: '5%',
              right: '6%',
              top: '8%',
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
              data: [],
              axisLabel: {
                interval: 0,
                rotate: 60,
                margin: 2
              }
            },
            color: ['#ff0000', '#409EFF', '#67C23A', '#FCCE10'],
            legend: {
              data: []
            },
            yAxis: [
              {
                type: 'value',
                name: '库存',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '周',
                min: 0,
                max: 52,
                interval: 4,
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: []
          }
          let echars = echarts.init(vm.$refs.echars1)
          echars.setOption(option)
          vm.userId = ''
          vm.token = ''
          vm.drawChart2()
          vm.drawChart3()
          vm.getColumns1()
        }
      })
    },
    drawChart4 () { // 第一个图切换库存类型的时候调用
      let vm = this
      let params = {}
      params['style'] = '1'
      params['businessLine'] = 'ConDT'
      params['invType'] = vm.form1.invType
      params['userId'] = vm.userId
      params['token'] = vm.token
      params['dbName_tableName'] = vm.dbName_tableName
      vm.$ajax({
        url: '/getPushOutDOI',
        data: params,
        done (data) {
          var option = {
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
              top: '8%',
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
            color: ['#9CDCF0', '#f94e6e'],
            legend: {
              data: data.legend
            },
            yAxis: [
              {
                type: 'value',
                name: '库存',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '周',
                min: 0,
                max: 52,
                interval: 4,
                axisLabel: {
                  formatter: '{value}'
                }
              }
            ],
            series: data.series
          }
          let echars = echarts.init(vm.$refs.echars1)
          echars.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawChart2 () {
      let vm = this
      let params = vm.valieForm()
      params['style'] = '2'
      params['businessLine'] = 'ConDT'
      params['userId'] = vm.userId
      params['token'] = vm.token
      params['dbName_tableName'] = vm.dbName_tableName
      vm.$ajax({
        url: '/getPushOutDOI',
        data: params,
        done (data) {
          var option = {
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
              top: '8%',
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
            color: ['#9BBB59', '#f94e6e'],
            legend: {
              data: data.legend
            },
            yAxis: {type: 'value'},
            series: data.series
          }
          let echars = echarts.init(vm.$refs.echars2)
          echars.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawChart3 () {
      let vm = this
      let params = vm.valieForm()
      params['style'] = '3'
      params['businessLine'] = 'ConDT'
      params['userId'] = vm.userId
      params['token'] = vm.token
      params['dbName_tableName'] = vm.dbName_tableName
      vm.$ajax({
        url: '/getPushOutDOI',
        data: params,
        done (data) {
          var option = {
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
              top: '8%',
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
            color: ['#f94e6e', '#9CDCF0', '#b6a2de', '#F79646', '#C6E579'],
            legend: {
              data: data.legend
            },
            yAxis: {type: 'value'},
            series: data.series
          }
          let echars = echarts.init(vm.$refs.echars3)
          echars.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getinvwAve () { // 获取库存类型平滑周期下拉条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '平滑周期_0001,库存类型_0001'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '平滑周期_0001') {
              vm.wAveCycles = data[i]
            }
            if (data[i].value === '库存类型_0001') {
              vm.invTypes = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    valieForm () {
      let params = {}
      if (this.form.siStartDate !== '') {
        params['siStartDate'] = this.form.siStartDate
      }
      if (this.form.wAveCycle !== '') {
        params['wAveCycle'] = this.form.wAveCycle
      }
      if (this.form.bpCode !== '') {
        params['bpCode'] = this.form.bpCode.replace(/ /g, ',').split(',')
      }
      if (this.form.cusSegment1.join() !== '') {
        params['cusSegment1'] = this.form.cusSegment1
      }
      if (this.form.cusSegment4.join() !== '') {
        params['cusSegment4'] = this.form.cusSegment4
      }
      if (this.form.prosegment !== '') {
        params['prosegment'] = this.form.prosegment
      }
      if (this.form.Family1.join() !== '') {
        params['Family1'] = this.form.Family1
      }
      if (this.form.Family2.join() !== '') {
        params['Family2'] = this.form.Family2
      }
      if (this.form.Family3.join() !== '') {
        params['Family3'] = this.form.Family3
      }
      if (this.form.fcstFamily.join() !== '') {
        params['fcstFamily'] = this.form.fcstFamily
      }
      if (this.form.materialcode.join() !== '') {
        params['materialcode'] = this.form.materialcode
      }
      if (this.form.matDesc.join() !== '') {
        params['matDesc'] = this.form.matDesc
      }
      return params
    },
    getCusSegment1s () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Knowledge'
      params['tableName'] = 'CON_Customer_Type_Hierarchy'
      params['checked'] = '1'
      params['obj0'] = '客户细分1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cusSegment1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getCusSegment4s () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Knowledge'
      params['tableName'] = 'CON_Customer_Type_Hierarchy'
      params['checked'] = '1'
      params['obj0'] = '客户细分4'
      if (this.form.prosegment !== '') {
        params['objk1'] = '客户细分1'
        params['objv1'] = this.form.cusSegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cusSegment4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getProsegments () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = '产品细分'
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.prosegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily1s () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'Family1'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.Family1s.value = data.value
          vm.Family1s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily2s () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'Family2'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.Family2s.value = data.value
          vm.Family2s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily3s () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'Family3'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'Family2'
        params['objv3'] = this.form.Family2
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.Family3s.value = data.value
          vm.Family3s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFcstFamilys () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'FCST Family'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'Family2'
        params['objv3'] = this.form.Family2
      }
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'Family3'
        params['objv4'] = this.form.Family3
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.fcstFamilys.value = data.value
          vm.fcstFamilys.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMaterialcodes () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'PN'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'Family2'
        params['objv3'] = this.form.Family2
      }
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'Family3'
        params['objv4'] = this.form.Family3
      }
      if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
        params['objk5'] = 'FCST Family'
        params['objv5'] = this.form.fcstFamily
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.materialcodes.value = data.value
          vm.materialcodes.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getmatDescs () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConDT_MTM_Family'
      params['obj0'] = 'Desc'
      if (this.form.materialcode.length !== 0) {
        params['objk2'] = 'PN'
        params['objv2'] = this.form.materialcode
      }
      if (this.form.materialcode.length === 0) {
        if (this.form.prosegment !== '') {
          params['objk1'] = '产品细分'
          params['objv1'] = this.form.prosegment
        }
        if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
          params['objk2'] = 'Family1'
          params['objv2'] = this.form.Family1
        }
        if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
          params['objk3'] = 'Family2'
          params['objv3'] = this.form.Family2
        }
        if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
          params['objk4'] = 'Family3'
          params['objv4'] = this.form.Family3
        }
        if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
          params['objk5'] = 'FCST Family'
          params['objv5'] = this.form.fcstFamily
        }
      }
      vm.$ajax({
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.matDescs.value = data.value
          vm.matDescs.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit (form) {
      this.drawChart1()
      this.queryMessage = ''
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.form.wAveCycle = '16周'
      this.form1.invType = '修正市场库存'
      this.form.siStartDate = ''
      this.drawChart1()
      this.queryMessage = ''
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
    getColumns1 () { // 获取表格的列名
      let vm = this
      return this.$ajax({
        url: '/queryTableColumns251',
        method: 'get',
        params: {
          tableName: 'ConDT_3S_Tracking_Week_Stock_WOI_Query',
          source: 'FF_IDSS_Data_CON'
        },
        done (data) {
          let arr = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].name !== 'ID') {
              arr.push(data[i])
            }
          }
          vm.columnsList1 = [].concat(arr).map((item) => {
            return {
              title: item.name,
              field: ('' + item.name).replace(/\s|\\|\/|\(|（|）|\)|<|>|-/g, '_'),
              width: '120px'
            }
          })
          vm.initTab1()
        }
      })
    },
    getDate1 () { // 获取当前时间
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var time = year + addZero(month) + addZero(day)
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      return time
    },
    initTab1 () { // 初始化表格
      let vm = this
      $(this.$refs.table1).html('')
      $(this.$refs.table1).kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        excel: {
          fileName: 'ConDT_库存周转' + '_' + vm.getDate1() + '.xlsx',
          allPages: true
        },
        excelExport (e) {
          e.workbook.sheets[0].name = 'ConDT_库存周转'
        },
        columns: vm.columnsList1,
        dataSource: {
          transport: {
            read (options) {
              let params = {}
              params['dbName'] = 'FF_IDSS_Data_CON'
              params['tableName'] = 'ConDT_3S_Tracking_Week_Stock_WOI_Query'
              params['orderBy'] = '自然周名称'
              params['checked'] = '1'
              params['token'] = vm.token
              params['userId'] = vm.userId
              params['dbName_tableName'] = vm.dbName_tableName
              params['pageNum'] = options.data.page
              params['pageSize'] = options.data.pageSize
              vm.$ajax({
                url: '/getFCSTDataByToken',
                data: params,
                done (data) {
                  options.success(data)
                },
                fail (msg) {
                  options.error(msg)
                }
              })
            }
          },
          serverPaging: true,
          schema: {
            data: function (response) {
              response.list = response.list.map(item => {
                let newItem = {}
                for (var key in item) {
                  newItem[key.replace(/\s/g, '_')] = item[key]
                }
                return newItem
              })
              return response.list
            },
            total: function (response) {
              return response.total
            }
          }
        },
        pageable: {
          buttonCount: 5,
          page: 1,
          pageSize: 18,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
        }
      })
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
  .el-form-item
    margin-bottom -5px !important
  .queryMessage
    color #ccc
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
  .chartbox
    width 100%
    height 400px
    margin 10px auto
</style>
